<?php

namespace App\Controller;

use App\Entity\CompteBancaire;
use App\Entity\Demande;
use App\Entity\Document;
use App\Entity\Session;
use App\Entity\Structure;
use App\Repository\DemandeRepository;
use App\Repository\DocumentRepository;
use App\Repository\PieceRepository;
use App\Repository\SessionRepository;
use App\Repository\StructureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

use function PHPUnit\Framework\isEmpty;

class StructureController extends AbstractController
{
    #[Route('/api/v1/sessions', name: 'app_session_current')]
    public function get_current_session(Request $request, SessionRepository $sessionRepository, SerializerInterface $serializer): JsonResponse
    {
        $statut = $request->query->get("statut", "current");
        switch ($statut) {
            case 'current':
                $session = $sessionRepository->findLast();
                break;
            case 'current_active':
                $session = $sessionRepository->findOneByActive(true);
                break;
            default:
                $session = $sessionRepository->findAll();
                break;
        }

        return new JsonResponse($serializer->serialize($session, 'json', ['groups' => 'session:detail']), Response::HTTP_OK, [], true);
    }

    #[Route('/api/v1/pieces', name: 'app_pieces_required')]
    public function get_pieces_required(Request $request, PieceRepository $pieceRepository, SerializerInterface $serializer): JsonResponse
    {
        $isong = $request->query->get("isong", 0);
        if ($isong) {
            $pieces = $pieceRepository->findBy(['isOng' => $isong], ['id' => 'ASC']);
        } else {
            $pieces = $pieceRepository->findAll();
        }

        return new JsonResponse($serializer->serialize($pieces, 'json', ['groups' => 'piece.list']), Response::HTTP_OK, [], true);
    }

    #[Route('/api/v1/structures/{id}', name: 'app_structure_details')]
    public function get_structure_details(Structure $structure, SerializerInterface $serializer): JsonResponse
    {
        try {
            if ($structure) {
                return new JsonResponse($serializer->serialize($structure, 'json', ['groups' => 'structure:detail']), Response::HTTP_OK, [], true);
            }
    
            return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);    
        } catch (\Throwable $th) {
            $jsonError = $serializer->serialize(['success'=> false, 'message' => $th->getMessage()], 'json');
            return new JsonResponse($jsonError, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
        }
    }

    #[Route('/api/v1/structures/{id}/demandes', name: 'app_structure_demandes')]
    public function get_structure_demandes(Structure $structure, SerializerInterface $serializer): JsonResponse
    {
        if ($structure) {

            return new JsonResponse($serializer->serialize($structure->getDemandes(), 'json', ['groups' => 'demande.list']), Response::HTTP_OK, [], true);
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/structures/{id}/comptes', name: 'app_structure_compte', methods:["GET"])]
    public function get_structure_compte_bancaire(Structure $structure, SerializerInterface $serializer): JsonResponse
    {
        if ($structure) {

            return new JsonResponse($serializer->serialize($structure->getCompteBancaire(), 'json', ['groups' => 'compte.details']), Response::HTTP_OK, [], true);
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/structures/{id}/comptes', name: 'app_structure_create_compte', methods: ["POST"])]
    public function create_update_structure_compte_bancaire(Structure $structure, DocumentRepository $documentRepository, Request $request, EntityManagerInterface $em, SerializerInterface $serializer): JsonResponse
    {
        if ($structure) {
            try {
                $data = json_decode($request->getContent(), true);
                $compteOld = $structure->getCompteBancaire();
                $document = $documentRepository->find(intval($data["copyRIB"]));
                if($compteOld){
                    $compte = $serializer->deserialize($request->getContent(), CompteBancaire::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $compteOld]);
                }else{
                    $compte = $serializer->deserialize($request->getContent(), CompteBancaire::class, 'json');
                }
                $compte->setCopyRIB($document);
                $structure->setCompteBancaire($compte);
                $em->persist($structure);
                $em->flush();
                return new JsonResponse($serializer->serialize(['success'=> true, "data" => $structure->getCompteBancaire()], 'json', ['groups' => 'compte.details']), Response::HTTP_CREATED, [], true);
            } catch (\Throwable $th) {
                $jsonError = $serializer->serialize(['success'=> false, 'message' => $th->getMessage()], 'json');
                return new JsonResponse($jsonError, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
            }
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/structures/{id}/comptes', name: 'app_structure_update_compte', methods: ["PUT"])]
    public function update_structure_compte_bancaire(Structure $structure, Request $request, EntityManagerInterface $em, SerializerInterface $serializer): JsonResponse
    {
        if ($structure) {
            try {
                $compteOld = $structure->getCompteBancaire();
                $compte = $serializer->deserialize($request->getContent(), CompteBancaire::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $compteOld]);
                $em->persist($compte);
                $em->flush();

                return new JsonResponse($serializer->serialize($structure->getCompteBancaire(), 'json', ['groups' => 'compte.details']), Response::HTTP_CREATED, [], true);
            } catch (\Throwable $th) {
                $jsonError = $serializer->serialize(['message' => $th->getMessage()], 'json');
                return new JsonResponse($jsonError, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
            }
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/structures/{id}/sessions/{session_id}/demandes', name: 'app_structure_demande_current')]
    public function get_structure_demande_current(int $id, int $session_id, SessionRepository $sessionRepository, StructureRepository $structureRepository, DemandeRepository $demandeRepository, SerializerInterface $serializer): JsonResponse
    {
        $session = $sessionRepository->find($session_id);
        $structure = $structureRepository->find($id);
        if ($structure and $session) {
            $demande = $demandeRepository->findOneBy(['session' => $session, 'structure' => $structure]);

            if (!$demande) {
                $demande = new Demande();

                $demande->setSession($session);
                $demande->setStructure($structure);
                $demande->setStatut(0);
                $demande->setDateDemande(new \DateTimeImmutable());
                $demandeRepository->save($demande, true);
            }
            return new JsonResponse($serializer->serialize($demande, 'json', ['groups' => 'demande.details']), Response::HTTP_OK, [], true);
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/structures/{id}', name: 'app_structure_updates', methods: ['PATCH'])]
    public function updateStructure(Request $request, LoggerInterface $logger, Structure $structure, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        if ($structure) {
            try {
                $updatedStructure = $serializer->deserialize($request->getContent(), Structure::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $structure]);
                $em->persist($updatedStructure);
                $em->flush();

                return new JsonResponse(["success" => true, "message" => "well done"], Response::HTTP_OK);
            } catch (\Throwable $th) {
                $logger->log(0, "Owono Philippe Bribde");
                $logger->log(0, $th->getMessage());
                $jsonError = $serializer->serialize(["success" => false, 'message' => $th->getMessage()], 'json');
                return new JsonResponse($jsonError, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
            }
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND);
    }

    #[Route('/api/v1/structures/{id}/documents', name: 'app_structure_document_create', methods: ["POST"])]
    public function upload_compte_file(Structure $structure, Request $request, LoggerInterface $logger, DocumentRepository $demandeRepository, EntityManagerInterface $em, SerializerInterface $serializer): JsonResponse
    {
        try {

            $originalName = $request->request->get('fileName');
            $fileUploaded = $request->files->get('file');
            $directory = sprintf('%s/%s%s', $this->getParameter('uploads_dir'), "rib_", $structure->getId());
            if (!is_dir($directory)) {
                if (!mkdir($directory)) {
                    throw new Exception("Unable to create a folder for your RIB");
                }
            }
            $compte = $structure->getCompteBancaire();
            if ($compte) {
                if (file_exists($compte->getCopyRIB()->getFileAbsolutePath()) and !str_starts_with($compte->getCopyRIB()->getFileName(), 'demande')) {
                    unlink($compte->getCopyRIB()->getFileAbsolutePath());
                }
            }

            if ($fileUploaded->move($directory, $originalName)) {
                if ($compte) {
                    $document = $compte->getCopyRIB();
                } else {
                    $document = new Document();
                }
                $document->setMimeType($fileUploaded->getClientMimeType());
                $document->setFileName("rib_" . $structure->getId() . "/" . $originalName);
                $em->persist($document);
                $em->flush();

                $jsonDocument = $serializer->serialize(["success" => true, "data" => $document], 'json', ['groups' => "compte.details"]);
                return new JsonResponse($jsonDocument, Response::HTTP_OK);
            }
            $jsonDocument = $serializer->serialize(["success" => false, "message" => "Error while uploading the file."], 'json');
            return new JsonResponse($jsonDocument, Response::HTTP_BAD_REQUEST);
        } catch (\Throwable $th) {
            $logger->log(0, "Owono Philippe Bribde");
            $logger->log(0, $th->getMessage());
            $jsonError = $serializer->serialize(['success' => false, 'message' => $th->getMessage()], 'json');
            return new JsonResponse($jsonError, Response::HTTP_BAD_REQUEST, [], true);
        }
    }
}

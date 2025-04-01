<?php

namespace App\Controller;

use App\Entity\Demande;
use App\Entity\DemandePiece;
use App\Entity\Document;
use App\Entity\Session;
use App\Entity\Structure;
use App\Repository\DemandePieceRepository;
use App\Repository\DemandeRepository;
use App\Repository\PieceRepository;
use App\Service\Base64FileExtractor;
use App\Service\Html2PdfService;
use Doctrine\DBAL\Connection;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query\ResultSetMapping;
use Exception;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

use function PHPUnit\Framework\isNull;

class DemandeController extends AbstractController
{
    #[Route('/api/v1/demandes', name: 'app_demandes_get', methods: ["GET"])]
    public function get_all_demandes(Request $request, DemandeRepository $demandeRepository, SerializerInterface $serializer): JsonResponse
    {
        $statut = $request->query->get("statut", "current");
        switch ($statut) {
            case 'rejected':
                $demandes = $demandeRepository->findBy(["statut" => 4]);
                break;
            case 'validated':
                $demandes = $demandeRepository->findBy(["statut" => 3]);
                break;
            default:
                $demandes = $demandeRepository->findAll();
                break;
        }

        return new JsonResponse($serializer->serialize($demandes, 'json', ['groups' => 'demande.list']), Response::HTTP_OK, [], true);
    }

    #[Route('/api/open/demandes', name: 'app_demandes_get_powerbi', methods: ["GET"])]
    public function get_all_demandes_forPowerBi(Request $request, DemandeRepository $demandeRepository, SerializerInterface $serializer): JsonResponse
    {

        $demandes = $demandeRepository->findAll();
        $data = array();
        foreach ($demandes as $key => $demande) {
            $data[] = array(
                "id" => $demande->getId(),
                "session" => $demande->getSession()->getAnneeScolaire(),
                "region" => $demande->getStructure()->getSubdivision()->getDivision()->getRegion()->getName(),
                "division" => $demande->getStructure()->getSubdivision()->getDivision()->getName(),
                "subdivision" => trim($demande->getStructure()->getSubdivision()->getName()),
                "ordre" => $demande->getStructure()->getOrdre()->getName(),
                "type" => $demande->getStructure()->getTypeStructure(),
                "forme" => $demande->getStructure()->getForme()->getName(),
                "seduc_senat" => isNull($demande->getStructure()->getHierarchie())? "" : $demande->getStructure()->getHierarchie()->getName(),
                "name" => $demande->getStructure()->getName(),
                "effectif_eleves" => $demande->getPtEffectifs(),
                "assurance_eleves" => $demande->getAssuranceElevePt(),
                "quote_part_fenasco" => $demande->getQuoteFenascoPt(),
                "cotisation_seduc" => $demande->getCotisationSeducPt(),
                "position_geographique" => $demande->getPositionGeoPt(),
                "aps_cnps" => $demande->getApsCnpsPt(),
                "reverse_retenu_fiscale" => $demande->getReverseRetenuFiscPt(),
                "pourcentage_examen" => $demande->getPercentExamenPt(),
                "personnels" => $demande->getPersonnelsPt(),
                "ration_permanent_vacataire" => $demande->getPermaVacatairePt(),
                "conformite" => $demande->getConformitePt(),
                "equipements" => $demande->getEquipementsPt(),
                "mesures_barieres" => $demande->getMesuresBarieresPt(),
                "clean_school" => $demande->getCleanSchoolPt(),
                "digitalisation" => $demande->getDigitalisationPt(),
                "score" => $demande->getScore(),
                "montant" => $demande->getMontant(),
                "statut" => $demande->getStatutText(),
                "user_created" => $demande->getUserCreated().'',
                "user_updated" => $demande->getUserUpdated().'',
                "user_marking" => $demande->getUserMarking().'',
                "date_updated" => $demande->getDateUpdated(),
            );
        }
        $jsonResponse = $serializer->serialize($data, 'json');

        return new JsonResponse($jsonResponse, Response::HTTP_OK, [], true);
    }

    #[Route('/api/v1/demandes/{id}', name: 'app_demande_details', methods: ["GET"])]
    public function get_demande_details(Demande $demande, SerializerInterface $serializer): JsonResponse
    {
        if ($demande) {
            return new JsonResponse($serializer->serialize($demande, 'json', ['groups' => 'demande.details']), Response::HTTP_OK, [], true);
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/demandes/{id}', name: 'app_demande_update', methods: ["PATCH"])]
    public function update_demande_details(Request $request, Demande $demande, SerializerInterface $serializer, LoggerInterface $logger, EntityManagerInterface $em): JsonResponse
    {
        if ($demande) {
            try {
                $structure = $demande->getStructure();
                $updatedDemande = $serializer->deserialize($request->getContent(), Demande::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $demande]);
                $updatedStructure = $serializer->deserialize($request->getContent(), Structure::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $structure]);
                $updatedDemande->setStatut(1);
                $em->persist($updatedDemande);
                $em->persist($updatedStructure);
                $em->flush();
                return new JsonResponse($serializer->serialize(["success" => true, "message" => "well done", "structure" => $updatedStructure->getId()], 'json'), Response::HTTP_OK);
            } catch (\Throwable $th) {
                $logger->log(0, "Owono Philippe Brice");
                $logger->log(0, $th->getMessage());
                $jsonError = $serializer->serialize(["success" => false, 'message' => $th->getMessage()], 'json');
                return new JsonResponse($jsonError, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
            }
        }
        $jsonError = $serializer->serialize(["success" => false, 'message' => "Demande not found"], 'json');
        return new JsonResponse($jsonError, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/demandes/{id}/pieces', name: 'app_demande_details_pieces')]
    public function get_demande_pieces(Demande $demande, SerializerInterface $serializer): JsonResponse
    {
        if ($demande) {
            return new JsonResponse($serializer->serialize($demande->getDemandePieces(), 'json', ['groups' => 'demande.details']), Response::HTTP_OK, [], true);
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/demandes/{id}/pieces/{pieceId}', name: 'app_demande_delete_pieces', methods: ["DELETE"])]
    public function delete_demande_piece(int $id, int $pieceId, DemandeRepository $demandeRepository, PieceRepository $pieceRepository, DemandePieceRepository $demandePieceRepository, SerializerInterface $serializer): JsonResponse
    {
        $demande = $demandeRepository->find($id);
        $piece = $pieceRepository->find($pieceId);

        $demandePiece = $demandePieceRepository->findOneBy(['demande' => $demande, 'piece' => $piece]);
        if ($demandePiece) {
            $filepath = $demandePiece->getFile()->getFileAbsolutePath();
            $demandePieceRepository->remove($demandePiece, true);
            if (file_exists($filepath) and !$piece->isIsPermanent()) {
                unlink($filepath);
            }
            return new JsonResponse(null, Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse(null, Response::HTTP_NOT_FOUND, [], true);
    }

    #[Route('/api/v1/demandes/{id}/pieces/{pieceId}', name: 'app_demande_create_pieces', methods: ["POST"])]
    public function create_demande_piece(int $id, int $pieceId, Request $request, LoggerInterface $logger, Base64FileExtractor $base64FileExtractor, DemandeRepository $demandeRepository, PieceRepository $pieceRepository, EntityManagerInterface $em, SerializerInterface $serializer): JsonResponse
    {
        $demande = $demandeRepository->find($id);
        $piece = $pieceRepository->find($pieceId);

        if ($demande and $piece) {
            try {

                $originalName = $request->request->get('fileName');
                $fileUploaded = $request->files->get('file');
                $directory = sprintf('%s/%s%s', $this->getParameter('uploads_dir'), "demande_", $id);
                if(!is_dir($directory)){
                    if(!mkdir($directory)){
                        throw new Exception("Unable to create a folder for your files");
                    }
                }

                $file = $directory.'/'.$originalName;
                if(file_exists($file)){
                    throw new Exception("This files already exist");
                }

                if ($fileUploaded->move($directory, $originalName)) {
                    $document = new Document();
                    $document->setFileName("demande_".$id."/".$originalName);
                    $document->setMimeType($fileUploaded->getClientMimeType());

                    $demandePiece = new DemandePiece();

                    $demandePiece->setDemande($demande);
                    $demandePiece->setPiece($piece);
                    $demandePiece->setFile($document);
                    $demandePiece->setStatut(0);

                    $em->persist($demandePiece);
                    $em->flush();

                    $jsonDocument = $serializer->serialize(["success" => true, "data" => $demandePiece], 'json', ['groups' => "demande.details"]);
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
        $jsonError = $serializer->serialize(['success' => false, 'message' => "Bad request"], 'json');
        return new JsonResponse($jsonError, Response::HTTP_NOT_FOUND);
    }

    #[Route('/sessions/{id}/statsderg', name: 'app_print_stats_der_global', methods: ['GET'])]
    public function generateFicheStatistiquePdf(Request $request, Connection $connection, EntityManagerInterface $em, Html2PdfService $html2PdfService, Session $session): Response
    {
        $kind = $request->query->get('kind', "snder");

        $query = ""; 
        $template = '';

        switch ($kind) {
            case 'sndersc':
                $template = 'pdf/situation_statistique_sscom.html.twig';
                $query = "SELECT `forme`, `ordreId`, `nbDem` FROM `statistics_demandes_recues` WHERE `sessionId` = ".$session->getId();
                break;
            case 'snderrepets':
                $template = 'pdf/situation_statistique_repets.html.twig';
                $query = "SELECT `forme`, `ordreId`, `totalScore`, `nbDem`, `totalAmount` FROM `statistics_demandes_marked_subvent` WHERE `sessionId` = ".$session->getId();
                break;
            case 'snderstsub':
                $template = 'pdf/situation_statistique_struct_sub.html.twig';
                $query = "SELECT `forme`, `ordreId`, `totalScore`, `nbDem`, `totalAmount` FROM `statistics_demandes_marked_subvent` WHERE `sessionId` = ".$session->getId();
                break;
            default:
                $template = 'pdf/situation_statistique.html.twig';
                $query = "SELECT `forme`, `ordreId`, `nbDem` FROM `statistics_demandes_recues` WHERE `sessionId` = ".$session->getId();
                break;
        }

        $stmt = $connection->executeQuery($query);
        $result= $stmt->fetchAllAssociative();

        $pdfContent = $html2PdfService->createPdfFromTemplate($template, [
            "session" => $session,
            "stats" => $result,
        ]);

        return new Response($pdfContent, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="situation_statistique_demandes_recus_'.$session->getName().'.pdf"'
        ]);
    }


    /* #[Route('/admin/demandes/fix', name: 'app_demande_fix_score', methods: ["GET"])]
    public function fix_demande_score(DemandeRepository $demandeRepository, EntityManagerInterface $em): JsonResponse
    {
        $demandes = $demandeRepository->findAll();

        foreach ($demandes as $key => $demande) {
            $demande->setPoints($demande->getScore());
            $em->persist($demande);
        }

        $em->flush();

        return new JsonResponse(null, Response::HTTP_OK, [], false);
    } */
}

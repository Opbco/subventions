<?php

namespace App\Controller;

use App\Repository\StructureRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use App\Service\MailerService;
use Exception;
use Sonata\UserBundle\Entity\UserManager;
use Sonata\UserBundle\Model\UserManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class SecurityController extends AbstractController
{
    #[Route(path: '/{_locale<%locales%>}/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    #[Route('/api/open/immatriculation', name: 'app_verif_immatriculation', methods: ['POST'])]
    public function verif_immatriculation(Request $request, StructureRepository $structureRepository, SerializerInterface $serializer): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        try {
            $structure = $structureRepository->findOneBy(["code" => $data["code_immatriculation"], "user" => null, "isActive" => true]);

            if($structure){
                $jsonDocument = $serializer->serialize(["success"=>true, "message" => "Immatriculation authentique"], 'json');
                return new JsonResponse($jsonDocument, Response::HTTP_OK);
            }

            throw new \Exception("Code d'Immatriculation non reconnu");
        } catch (Exception $ex) {
            $jsonDocument = $serializer->serialize(["success"=>false, "message" => $ex->getMessage()], 'json');
            return new JsonResponse($jsonDocument, Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/api/open/email', name: 'app_verif_email', methods: ['POST'])]
    public function verif_email(Request $request, SerializerInterface $serializer, UserRepository $userRepository): JsonResponse
    {

        $data = json_decode($request->getContent(), true);
        try {
            $user = $userRepository->findByEmail($data["email"]);
            if($user){
               throw new \Exception("Email already used");  
            }
            $jsonDocument = $serializer->serialize(["success"=>true, "message" => "Email free"], 'json');
            return new JsonResponse($jsonDocument, Response::HTTP_OK);
        } catch (Exception $ex) {
            $jsonDocument = $serializer->serialize(["success"=>false, "message" => $ex->getMessage()], 'json');
            return new JsonResponse($jsonDocument, Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/api/open/username', name: 'app_verif_username', methods: ['POST'])]
    public function verif_username(Request $request, SerializerInterface $serializer, UserRepository $userRepository): JsonResponse
    {

        $data = json_decode($request->getContent(), true);
        try {
            $user = $userRepository->findByUserName($data["username"]);
            if($user){
               throw new \Exception("Username already used");  
            }
            $jsonDocument = $serializer->serialize(["success"=>true, "message" => "Username free"], 'json');
            return new JsonResponse($jsonDocument, Response::HTTP_OK);
        } catch (Exception $ex) {
            $jsonDocument = $serializer->serialize(["success"=>false, "message" => $ex->getMessage()], 'json');
            return new JsonResponse($jsonDocument, Response::HTTP_BAD_REQUEST);
        }
    }
}

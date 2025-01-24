<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\StructureRepository;
use App\Security\UsersAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Serializer\SerializerInterface;

use function PHPUnit\Framework\isNull;

class RegistrationController extends AbstractController
{
    #[Route('/{_locale<%locales%>}/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserAuthenticatorInterface $userAuthenticator, UsersAuthenticator $authenticator, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email

            return $userAuthenticator->authenticateUser(
                $user,
                $authenticator,
                $request
            );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    #[Route('/api/register', name: 'app_api_register', methods: ['POST'])]
    public function api_register(Request $request, StructureRepository $structureRepository, UserPasswordHasherInterface $userPasswordHasher, SerializerInterface $serializer, EntityManagerInterface $entityManager): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);
            $structure = $structureRepository->findOneBy(["code" => $data["code_immatriculation"], "user" => null, "isActive" => true]);

            if($structure){
                $user = $serializer->deserialize($request->getContent(), User::class, 'json');

                $user->setPassword(
                    $userPasswordHasher->hashPassword(
                        $user,
                        $user->getPlainPassword()
                    )
                );

                $user->setEnabled(true);
                $entityManager->persist($user);

                $structure->setUser($user);
                $entityManager->persist($structure);
                
                $entityManager->flush();

                $jsonUser = $serializer->serialize($user, 'json', ['groups' => 'user:info']);

                return new JsonResponse($jsonUser, Response::HTTP_CREATED);
            }

            throw new \Exception("Code d'Immatriculation non reconnu ou la structure a deja un compte");

        } catch (\Throwable $th) {
            $jsonError = $serializer->serialize($th->getMessage(), 'json');
            return new JsonResponse($jsonError, Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/api/reset', name: 'app_api_reset', methods: ['POST'])]
    public function api_resetting(Request $request, StructureRepository $structureRepository, UserPasswordHasherInterface $userPasswordHasher, SerializerInterface $serializer, EntityManagerInterface $entityManager): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);
            $structure = $structureRepository->findOneBy(["code" => $data["code_immatriculation"], "isActive" => true]);

            if($structure){
                $user = $structure->getUser();

                if(is_null($user)){
                    throw new \Exception("Aucun compte associé à ce code d'immatriculation");
                }

                $user->setUsername($data["code_immatriculation"]);

                $user->setPlainPassword($data["plainPassword"]);

                $user->setPassword(
                    $userPasswordHasher->hashPassword(
                        $user,
                        $data["plainPassword"]
                    )
                );

                $entityManager->persist($user);
                $entityManager->flush();

                $jsonUser = $serializer->serialize($user, 'json', ['groups' => 'user:info']);

                return new JsonResponse($jsonUser, Response::HTTP_OK);
            }

            throw new \Exception("Code d'Immatriculation non reconnu");

        } catch (\Throwable $th) {
            $jsonError = $serializer->serialize($th->getMessage(), 'json');
            return new JsonResponse($jsonError, Response::HTTP_BAD_REQUEST);
        }
    }
}

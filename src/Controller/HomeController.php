<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Serializer\SerializerInterface;

class HomeController extends AbstractController
{

    #[Route('/', name: 'app_home')]
    public function index(Request $request): Response
    {
        return $this->render(
            'home/index.html.twig',
            ['page' => $request->query->all()]
        );
    }

    #[Route('/email')]
    public function sendEmail(MailerInterface $mailer, SerializerInterface $serializer): JsonResponse
    {
        try {
            $email = (new Email())
                ->from('hello@example.com')
                ->to('you@example.com')
                ->priority(Email::PRIORITY_HIGH)
                ->subject('Time for Symfony Mailer!')
                ->text('Sending emails is fun again!')
                ->html('<p>See Twig integration for better HTML integration!</p>');

            $mailer->send($email);

            $jsonMessage = $serializer->serialize(['success' => true, 'message' => "Mail sent successfuly"], 'json');
            return new JsonResponse($jsonMessage, Response::HTTP_OK, [], true);
        } catch (\Throwable $th) {
            $jsonMessage = $serializer->serialize(['success' => false, 'message' => $th->getMessage()], 'json');
            return new JsonResponse($jsonMessage, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
        }
    }
}

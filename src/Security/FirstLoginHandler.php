<?php

namespace App\Security;

use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;

class FirstLoginHandler implements AuthenticationSuccessHandlerInterface
{
    public function __construct(
        private RouterInterface $router
    ) {}

    public function onAuthenticationSuccess(Request $request, TokenInterface $token): RedirectResponse
    {
        $user = $token->getUser();
        
        if ($user->isMustChangePassword()) {
            return new RedirectResponse($this->router->generate('change_password_route'));
        }
        
        return new RedirectResponse($this->router->generate('sonata_admin_dashboard'));
    }
}
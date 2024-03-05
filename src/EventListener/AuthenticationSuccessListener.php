<?php

namespace App\EventListener;

use App\Repository\SessionRepository;
use App\Repository\StructureRepository;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Sonata\UserBundle\Model\UserInterface;
use Symfony\Component\Security\Core\Role\RoleHierarchyInterface;

class AuthenticationSuccessListener
{
    public function __construct(private RoleHierarchyInterface $roleHierarchy, private StructureRepository $structureRepository, private SessionRepository $sessionRepository)
    {
    }

    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

        $structure = $this->structureRepository->findOneBy(["user" => $user]);
        $session = $this->sessionRepository->findOneByActive(true);

        $data['data'] = array(
            'id' => $user->getId(),
            'username' => $user->getUserIdentifier(),
            'email' => $user->getEmail(),
            'session' => $session ? ["id" => $session->getId(), "dateOpen" => $session->getDateOpen(), "dateClosed" => $session->getDateClosed(), "anneeScolaire" => $session->getAnneeScolaire()] : null,
            'structure' => $structure ? ['id' => $structure->getId(), 'name' => $structure->getName(), 'quality' => $structure->getTypeStructure(), 'isTech' => $structure->isEstp()] : null,
            'role' => $this->roleHierarchy->getReachableRoleNames($user->getRealRoles()),
        );

        $event->setData($data);
    }
}

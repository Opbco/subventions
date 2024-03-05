<?php 

namespace App\Controller;

use App\Repository\SessionRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sonata\AdminBundle\Controller\CRUDController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SessionAdminController extends CRUDController
{
    public function calculateAction($id, SessionRepository $sessionRepository): RedirectResponse
    {
        $this->admin->checkAccess('delete');

        try {
            $object = $this->admin->getSubject();
            if (!$object) {
                throw new NotFoundHttpException(sprintf('unable to find the object with id: %s', $id));
            }
            
            $sessionRepository->calculateAmounts($id);

            $this->addFlash('sonata_flash_success', 'Calculations done successfully');
        } catch (\Exception $e) {
            $this->addFlash('sonata_flash_error', sprintf('Error while calculating the Amount due for every selected structures for session with id: %s : %s', $id, $e->__toString()));
        } finally {
            return new RedirectResponse(
                $this->admin->generateUrl('list', ['filter' => $this->admin->getFilterParameters()])
            );
        }
    }

    // ...
}
<?php 

namespace App\Controller;

use Sonata\AdminBundle\Admin\AdminInterface;
use Sonata\AdminBundle\Controller\CRUDController;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;

class DemandeAdminController extends CRUDController
{

    public function batchActionValidate(ProxyQueryInterface $query, AdminInterface $admin): RedirectResponse
    {
        $admin->checkAccess('edit');

        $modelManager = $admin->getModelManager();

        $selectedModels = $query->execute();

        // do the merge work here

        try {
            foreach ($selectedModels as $selectedModel) {
                $modelManager->update($selectedModel->setStatut(3));
            }

            $this->addFlash('sonata_flash_success', 'flash_batch_validate_success');
        } catch (\Exception $e) {
            $this->addFlash('sonata_flash_error', 'flash_batch_validate_error');
        } finally {
            return new RedirectResponse(
                $admin->generateUrl('list', [
                    'filter' => $admin->getFilterParameters()
                ])
            );
        }
    }

    // ...
}
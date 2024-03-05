<?php 

namespace App\Controller;

use App\Entity\Structure;
use App\Repository\FormStructureRepository;
use App\Repository\LangueRepository;
use App\Repository\OrderRepository;
use App\Repository\SubDivisionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sonata\AdminBundle\Admin\AdminInterface;
use Sonata\AdminBundle\Controller\CRUDController;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;

class StructureAdminController extends CRUDController
{
    const SERVER_PATH_TO_FILES_FOLDER = __DIR__ . '/../../public/uploads';

    public function batchActionImport(ProxyQueryInterface $query, EntityManagerInterface $em, LangueRepository $langueRepository, FormStructureRepository $formStructureRepository, OrderRepository $orderRepository, SubDivisionRepository $subDivisionRepository, AdminInterface $admin): RedirectResponse
    {
        $admin->checkAccess('edit');

        $file_path = self::SERVER_PATH_TO_FILES_FOLDER . '/structures.csv';

        try {

            if (($handle = fopen($file_path, 'r')) !== false) {
                while (($data = fgetcsv($handle, null, ";")) !== false) {
                    $entity = new Structure();
                    $entity->setSubdivision($subDivisionRepository->find($data[0]));
                    $entity->setCode($data[2]);
                    $entity->setName($data[1]);
                    $entity->setTypeStructure($data[3]);
                    $entity->setOrdre($orderRepository->find($data[4]));
                    $entity->setLangue($langueRepository->find($data[5]));
                    //$entity->setCycle($data[6]);
                    $entity->setForme($formStructureRepository->find($data[6]));
                    //$entity->setNomFondateur($data[8]);
                    //$entity->setContactFondateur($data[9]);
                    $entity->setContacts($data[7]);
                    $entity->setIsActive($data[9]==1);
                    $entity->setAdresse($data[8]);
                    $em->persist($entity);
                    $this->addFlash('sonata_flash_success', $entity->__toString(). ' imported successfuly');
                }
                fclose($handle);

                $this->addFlash('sonata_flash_success', 'All structures imported successfuly');
            }else{
                $this->addFlash('sonata_flash_error', 'Error while importing the structures (file structures.csv not found)');
            }

        } catch (\Exception $e) {
            $this->addFlash('sonata_flash_error', 'Error while importing the structures');
        } finally {
            $em->flush();
            return new RedirectResponse(
                $admin->generateUrl('list', [
                    'filter' => $admin->getFilterParameters()
                ])
            );
        }
    }

    // ...
}
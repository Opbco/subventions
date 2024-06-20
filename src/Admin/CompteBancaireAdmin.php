<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\CompteBancaire;
use App\Entity\Structure;
use App\Entity\User;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\AdminType;
use Sonata\AdminBundle\Route\RouteCollectionInterface;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

final class CompteBancaireAdmin extends AbstractAdmin
{

    public function toString(object $object): string
    {
        return $object instanceof CompteBancaire
            ? $object->__toString()
            : 'Compte Bancaire'; // shown in the breadcrumb on the create view
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('numero', null, ['label'=>"Numéro"])
            ->add('intitule', null, ['label'=>"Intitulé"])
            ->add('nameBanque', null, ['label'=>"Banque"])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
            ->add('user_created', null, [
                'label' => 'Créé Par',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => User::class,
                    'choice_label' =>
                    'username',
                ],
            ])
            ->add('user_updated', null, [
                'label' => 'Modifé Par',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => User::class,
                    'choice_label' => 'username',
                ],
            ])
            ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add('id')
            ->add('nameBanque', null, ['label'=>"Banque"])
            ->add('numero', null, ['label'=>"Numéro"])
            ->add('intitule', null, ['label'=>"Intitulé"])
            ->add('date_created', null, ['label'=>'Créé le'])
            ->add('user_created', null, ['label'=>'Créé Par'])
            ->add(ListMapper::NAME_ACTIONS, null, [
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => [],
                ],
            ]);
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form
            ->add('nameBanque', null, ['label'=>"Banque", 'required' => true])
            ->add('numero', null, ['label'=>"Numéro", 'editable' => true, 'required' => true])
            ->add('intitule', null, ['label'=>"Intitulé", 'required' => true])
            ->add('copyRIB', AdminType::class, [
                'delete' => true, 'label' => 'Photo du RIB'
            ])
            ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('id')
            ->add('nameBanque', null, ['label'=>"Banque"])
            ->add('numero', null, ['label'=>"Numéro"])
            ->add('intitule', null, ['label'=>"Intitulé"])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
            ->add('user_created.username', null, ['label' => 'Créé par'])
            ->add('user_updated.username', null, ['label' => 'Modifié par'])
            ;
    }

    protected function configureRoutes(RouteCollectionInterface $collection): void
    {

        if ($this->isChild()) {
            return;
        }

        // This is the route configuration as a parent
        $collection->clearExcept(['create', 'show', 'edit']);
    }
}

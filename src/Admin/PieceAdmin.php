<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Piece;
use App\Entity\User;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

final class PieceAdmin extends AbstractAdmin
{
    public function toString(object $object): string
    {
        return $object instanceof Piece
            ? $object->__toString()
            : 'Pièce constitutive'; // shown in the breadcrumb on the create view
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('name', null, ['label' => 'Nom de la pièce'])
            ->add('signataire', null, ['label' => 'Signataire'])
            ->add('isOng', null, ['label'=>'Concerne aussi les organisations'])
            ->add('compulsory', null, ['label'=>'Est Obligatoire?'])
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
            ]);
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add('id')
            ->add('name', null, ['label' => 'Nom de la pièce'])
            ->add('signataire', null, ['label' => 'Signataire'])
            ->add('isOng', null, ['label'=>'ONG', 'editable' => true])
            ->add('compulsory', null, ['label'=>'Obligatoire', 'editable' => true])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
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
            ->add('name', null, ['label' => 'Nom de la pièce', 'required'=> true])
            ->add('nameen', null, ['label' => 'Nom de la pièce', 'required'=> true])
            ->add('signataire', null, ['label' => 'Signataire', 'required'=> true])
            ->add('signataireen', null, ['label' => 'Signataire', 'required'=> true])
            ->add('compulsory', null, ['label'=>'Est Obligatoire?', 'required'=> true])
            ->add('isOng', null, ['label'=>'Concerne aussi les organisations'])
            ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('id')
            ->add('name', null, ['label' => 'Nom de la pièce', 'required'=> true])
            ->add('nameen', null, ['label' => 'Nom de la pièce', 'required'=> true])
            ->add('signataire', null, ['label' => 'Signataire', 'required'=> true])
            ->add('signataireen', null, ['label' => 'Signataire', 'required'=> true])
            ->add('compulsory', null, ['label'=>'Est Obligatoire?'])
            ->add('isOng', null, ['label'=>'Concerne aussi les organisations'])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
            ->add('user_created.username', null, ['label' => 'Créé par'])
            ->add('user_updated.username', null, ['label' => 'Modifié par'])
            ;
    }
}

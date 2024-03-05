<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Demande;
use App\Entity\DemandePiece;
use App\Entity\Piece;
use App\Entity\User;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\FieldDescription\FieldDescriptionInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\AdminType;
use Sonata\AdminBundle\Form\Type\ModelAutocompleteType;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Route\RouteCollectionInterface;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\ChoiceFilter;
use Sonata\DoctrineORMAdminBundle\Filter\ModelFilter;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

final class DemandePieceAdmin extends AbstractAdmin
{
    public function toString(object $object): string
    {
        return $object instanceof DemandePiece
            ? $object->__toString()
            : 'Pièce constitutive par Demande'; // shown in the breadcrumb on the create view
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('statut', ChoiceFilter::class, [
                'global_search' => true,
                'field_type' => ChoiceType::class,
                'field_options' => [
                    'choices' => DemandePiece::$statutCodes
                ], array('label' => 'Statut de la pièce')
            ])
            ->add('demande', ModelFilter::class, [
                'field_type' => ModelAutocompleteType::class,
                'label' => 'Demande',
                'field_options' => ['class' => Demande::class, 'property' => 'id'],
            ])
            ->add('piece', null, [
                'label' => 'Pièce',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Piece::class,
                    'choice_label' =>
                    'name',
                ],
            ])
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
            ->add('piece', null, ['label' => 'Pièce'])
            ->add('file', null, [
                'label' => 'Fichier',
                'template' => '@SonataAdmin/CRUD/list_file.html.twig',
            ])
            ->add('statut', FieldDescriptionInterface::TYPE_CHOICE, ['label' => 'Statut', 'choices' => DemandePiece::$codesStatut])
            ->add('date_created', null, ['label' => "Créée le"])
            ->add('user_created', null, ['label' => "Créée Par"])
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
            ->add('piece', TextareaType::class, [
                'label' => "Pièce",
                'disabled' => true,
            ])
            ->add('file', AdminType::class, ['label' => 'Fichier', "disabled" => true])
            ->add('statut', ChoiceType::class, array('choices' => DemandePiece::$statutCodes, 'label' => 'Statut', 'required' => true));
            
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('id')
            ->add('piece', null, ['label' => 'Pièce'])
            ->add('file', 'file', ['label' => 'Fichier', 'template' => '@SonataAdmin/CRUD/base_show_file.html.twig'])
            ->add('statut', null, ['label' => 'Statut'])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
            ->add('user_created.username', null, ['label' => 'Créé par'])
            ->add('user_updated.username', null, ['label' => 'Modifié par']);
            ;
    }

    protected function configureRoutes(RouteCollectionInterface $collection): void
    {
        if ($this->isChild()) {
            return;
        }

        // This is the route configuration as a parent
        $collection->clearExcept(['edit', 'show']);
    }
}

<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Piece;
use App\Entity\User;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\FieldDescription\FieldDescriptionInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\FieldDescription\FieldDescription;
use Sonata\DoctrineORMAdminBundle\Filter\BooleanFilter;
use Sonata\Form\Type\BooleanType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

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
            ->add('ordre', null, ['label' => 'Ordre'])
            ->add('isPermanent', BooleanFilter::class, ['label'=>'Est Permanent?'])
            ->add('isDestp', BooleanFilter::class, ['label'=>'DESTP seule'])
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
            ->add('name', FieldDescriptionInterface::TYPE_TEXTAREA, ['label' => 'Nom de la pièce'])
            ->add('signataire', null, ['label' => 'Signataire'])
            ->add('isOng', null, ['label'=>'ONG', 'editable' => true])
            ->add('compulsory', null, ['label'=>'Obligatoire', 'editable' => true])
            ->add('isPermanent', null, ['label'=>'Est Permanent?', 'editable' => true])
            ->add('isDestp', null, ['label'=>'DESTP seule?', 'editable' => true])
            ->add('ordre', null, ['label' => 'Ordre', 'editable' => true])
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
            ->with("Détails sur la pièce", ['class' => 'col-md-6'])
            ->add('name', TextareaType::class, ['label' => 'Nom de la pièce', 'required'=> true])
            ->add('signataire', null, ['label' => 'Signataire', 'required'=> true])
            ->end()
            ->with("File details", ['class' => 'col-md-6'])
            ->add('nameen', TextareaType::class, ['label' => 'Name of the document', 'required'=> true])
            ->add('signataireen', null, ['label' => 'the signatory', 'required'=> true])
            ->end()
            ->with("Paramètres", ['class' => 'col-md-12'])
            ->add('compulsory', null, ['label'=>'Cette pièce est Obligatoire?'])
            ->add('isOng', null, ['label'=>'Cette pièce concerne aussi les organisations'])
            ->add('isPermanent', null, ['label'=>'Cette pièce est permanent'])
            ->add('isDestp', null, ['label'=>'Cette pièce est uniquement pour DESTP'])
            ->add('ordre', null, ['label' => 'Ordre'])
            ->end();
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('id')
            ->add('name', FieldDescriptionInterface::TYPE_TEXTAREA, ['label' => 'Nom de la pièce'])
            ->add('signataire', null, ['label' => 'Signataire'])
            ->add('nameen', null, ['label' => 'Name of the document'])
            ->add('signataireen', null, ['label' => 'The signatory'])
            ->add('compulsory', null, ['label'=>'Cette pièce est Obligatoire?'])
            ->add('isOng', null, ['label'=>'Cette pièce concerne aussi les organisations'])
            ->add('isPermanent', FieldDescription::TYPE_BOOLEAN, ['label'=>'Cette pièce est permanent'])
            ->add('isDestp', FieldDescription::TYPE_BOOLEAN, ['label'=>'Cette pièce est uniquement pour DESTP'])
            ->add('ordre', null, ['label' => 'Ordre'])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
            ->add('user_created.username', null, ['label' => 'Créé par'])
            ->add('user_updated.username', null, ['label' => 'Modifié par'])
            ;
    }
}

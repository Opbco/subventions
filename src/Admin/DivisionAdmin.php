<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Division;
use App\Entity\Region;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

final class DivisionAdmin extends AbstractAdmin
{
    public function toString(object $object): string
    {
        return $object instanceof Division
            ? $object->__toString()
            : 'Département'; // shown in the breadcrumb on the create view
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('name', null, ['label'=>'Nom'])
            ->add('region', null, [
                'label' => 'Région',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Region::class,
                    'choice_label' => 'name',
                ],
            ])
            ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add('id')
            ->add('name', null, ['label'=>'Nom'])
            ->add('region', null, ['label'=>'Région'])
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
            ->add('name', null, ['label'=>'Nom', 'required' => true])
            ->add('region', null, ['label' => 'Région', 'required' => true])
            ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('id')
            ->add('name', null, ['label'=>'Nom'])
            ->add('region', null, ['label'=>'Région'])
            ;
    }
}

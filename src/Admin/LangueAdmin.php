<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Langue;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;

final class LangueAdmin extends AbstractAdmin
{
    public function toString(object $object): string
    {
        return $object instanceof Langue
            ? $object->__toString()
            : 'Sous-système'; // shown in the breadcrumb on the create view
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('code', null, ['label'=>'code'])
            ->add('label', null, ['label'=>'Nom'])
            ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add('id')
            ->add('code', null, ['label'=>'Code'])
            ->add('label', null, ['label'=>'Nom'])
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
            ->add('code', null, ['label'=>'Code'])
            ->add('label', null, ['label'=>'Nom'])
            ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('id')
            ->add('code', null, ['label'=>'Code'])
            ->add('label', null, ['label'=>'Nom'])
            ;
    }
}

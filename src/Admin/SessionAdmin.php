<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Session;
use App\Entity\User;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollectionInterface;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\DateTimeRangeFilter;
use Sonata\Form\Type\DateTimePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\PercentType;

final class SessionAdmin extends AbstractAdmin
{
    public function toString(object $object): string
    {
        return $object instanceof Session
            ? $object->__toString()
            : 'Session'; // shown in the breadcrumb on the create view
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('name', null, ['label'=>'Nom'])
            ->add('dateOpen', DateTimeRangeFilter::class, ['label'=>"Date d'ouverture"])
            ->add('dateClosed', DateTimeRangeFilter::class, ['label'=>'Date de fin'])
            ->add('anneeScolaire', null, ['label'=>'Année Budgétaire'])
            ->add('dotation', null, ['label'=>'Dotation budgétaire'])
            ->add('status', null, ['label'=>'Active'])
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
            ->add('dateOpen', null, ['label'=>"Date d'ouverture"])
            ->add('dateClosed', null, ['label'=>'Date de fin'])
            ->add('anneeScolaire', null, ['label'=>'Année Budgétaire'])
            ->add('status', null, ['label'=>'Active', 'editable' => true])
            ->add('date_updated', null, ['label'=>'Modifié le'])
            ->add(ListMapper::NAME_ACTIONS, null, [
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'calculate' => [],
                    'print_stat_der' => [
                        'template' => '@SonataAdmin/CRUD/list__action_print_stats_der_global.html.twig'
                    ],
                    'print_stat_der_sc' => [
                        'template' => '@SonataAdmin/CRUD/list__action_print_stats_der_sc.html.twig'
                    ],
                    'print_stat_der_scores' => [
                        'template' => '@SonataAdmin/CRUD/list__action_print_stats_der_scores.html.twig'
                    ],
                    'print_stat_der_subvent' => [
                        'template' => '@SonataAdmin/CRUD/list__action_print_stats_der_subvent.html.twig'
                    ]
                ],
            ]);
    }

    protected function configureRoutes(RouteCollectionInterface $collection): void
    {
        if ($this->isChild()) {
            return;
        }
        
        $collection->add('calculate', $this->getRouterIdParameter().'/calculate');
        // This is the route configuration as a parent
        $collection->clearExcept(['list', 'show', 'edit', 'export', 'create', 'calculate']);
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form
            ->add('name', null, ['label'=>'Nom', 'required' => true])
            ->add('dateOpen', DateTimePickerType::class, ['label'=>"Date d'ouverture", 'required' => true])
            ->add('dateClosed', DateTimePickerType::class, ['label'=>'Date de fin', 'required' => true])
            ->add('anneeScolaire', null, ['label'=>'Année Budgétaire', 'required' => true])
            ->add('dotation', null, ['label'=>'Dotation budgétaire', 'required' => false])
            ->add('percentSenat', PercentType::class, ['label'=>'Pourcentage SENAT', 'required' => false, 'scale' => 2])
            ->add('percentSeduc', PercentType::class, ['label'=>'Pourcentage SEDUC', 'required' => false, 'scale' => 2])
            ->add('percentEts', PercentType::class, ['label'=>'Pourcentage Etablissements', 'required' => false, 'scale' => 2])
            ->add('status', null, ['label'=>'Active'])
            ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('id')
            ->add('name', null, ['label'=>'Nom'])
            ->add('dateOpen', null, ['label'=>"Date d'ouverture"])
            ->add('dateClosed', null, ['label'=>'Date de fin'])
            ->add('anneeScolaire', null, ['label'=>'Année Budgétaire'])
            ->add('dotation', null, ['label'=>'Dotation budgétaire'])
            ->add('percentSenat', null, ['label'=>'Pourcentage SENAT'])
            ->add('percentSeduc', null, ['label'=>'Pourcentage SEDUC'])
            ->add('percentEts', null, ['label'=>'Pourcentage Etablissements'])
            ->add('status', null, ['label'=>'Active'])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
            ->add('user_created.username', null, ['label' => 'Créé par'])
            ->add('user_updated.username', null, ['label' => 'Modifié par']);
    }
}

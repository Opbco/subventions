<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Division;
use App\Entity\FormStructure;
use App\Entity\Langue;
use App\Entity\Order;
use App\Entity\Region;
use App\Entity\Structure;
use App\Entity\SubDivision;
use App\Entity\User;
use Knp\Menu\ItemInterface;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Admin\AdminInterface;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelAutocompleteType;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\ChoiceFilter;
use Sonata\DoctrineORMAdminBundle\Filter\ModelFilter;
use Sonata\DoctrineORMAdminBundle\Filter\StringListFilter;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

final class StructureAdmin extends AbstractAdmin
{

    private $ts;

    public function __construct($ts)
    {
        $this->ts = $ts;
    }

    public function toString(object $object): string
    {
        return $object instanceof Structure
            ? $object->__toString()
            : 'Structure'; // shown in the breadcrumb on the create view
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('name', null, ['label' => 'Nom'])
            ->add('code', null, ['label' => "Numéro d'immatriculation"])
            ->add('typeStructure', ChoiceFilter::class, [
                'global_search' => true,
                'field_type' => ChoiceType::class,
                'field_options' => [
                    'choices' => [
                        'Organisation' => 'Organisation',
                        'Etablissement' => 'Etablissement'
                    ]
                ], array('label' => 'Type Structure')
            ])
            ->add('cycle', ChoiceFilter::class, [
                'global_search' => true,
                'field_type' => ChoiceType::class,
                'field_options' => [
                    'choices' => [
                        '1er Cycle' => '1er Cycle', 
                        '2nd Cycle' => '2nd Cycle', 
                        '1er et 2nd Cycles' => '1er et 2nd Cycles'
                    ]
                ], array('label' => 'Cycle')
            ])
            ->add('nomFondateur', null, ['label' => 'Nom du fondateur'])
            ->add('zone', ChoiceFilter::class, [
                'global_search' => true,
                'field_type' => ChoiceType::class,
                'field_options' => [
                    'choices' => [
                        'Rurale' => 'Rural', 
                        'Urbaine' => 'Urbain'
                    ]
                ], array('label' => 'Zone')
            ])
            ->add('subdivision', null, [
                'label' => 'Commune',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => SubDivision::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('hierarchie', ModelFilter::class, [
                'label' => 'SEDUC|SENAT',
                'field_type' => ModelAutocompleteType::class,
                'field_options' => [
                    'property' => 'name',
                ],
                'callback' => static function ($queryBuilder, $alias, $property, $value): void {
                    $queryBuilder
                        ->andWhere($alias . '.typeStructure <> :typeValue')
                        ->setParameter('typeValue', 'Etablissement');
                    $queryBuilder->setValue($property, $value);
                },
            ])
            ->add('compteBancaire', ModelFilter::class, [
                'label' => 'Compte bancaire',
                'field_type' => ModelAutocompleteType::class,
                'field_options' => [
                    'property' => 'numero',
                ],
            ])
            ->add('subdivision.division', null, [
                'label' => 'Département',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Division::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('subdivision.division.region', null, [
                'label' => 'Région',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Region::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('forme', null, [
                'label' => 'Forme',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => FormStructure::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('ordre', null, [
                'label' => 'Ordre',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Order::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('langue', null, [
                'label' => 'Sous-système',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Langue::class,
                    'choice_label' =>
                    'label',
                ],
            ])
            ->add('isActive', null, ['label'=>'Active'])
            ->add('user', null, [
                'label' => 'Gestionnaire',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => User::class,
                    'choice_label' => 'username',
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
            ->add('code', null, ['label' => "Numéro d'immatriculation"])
            ->add('name', null, ['label' => "Nom"])
            ->add('typeStructure', null, ['label' => "Type"])
            ->add('ordre', null, ['label' => "Ordre"])
            ->add('forme', null, ['label' => "Forme"])
            ->add('langue', null, ['label' => "Sous-Système"])
            ->add('cycle', null, ['label' => "Cycle"])
            ->add('subdivision', null, ['label' => 'Commune'])
            ->add('user', null, ['label' => 'Compte utilisateur'])
            ->add('isActive', null, ['label'=>'Active', 'editable' => true])
            ->add(ListMapper::NAME_ACTIONS, null, [
                'actions' => [
                    'show' => [],
                    'edit' => [],
                ],
            ]);
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form->tab('Détails sur la structure')
            ->with('Identification', ['class' => 'col-md-6'])
            ->add('typeStructure', ChoiceType::class, array('choices' => [
                'Choisir' => '',
                'Organisation' => 'Organisation',
                'Etablissement' => 'Etablissement'
            ], 'label' => 'Type', 'required' => true))
            ->add('code', null, ['label' => "Numéro d'immatriculation", 'required' => false])
            ->add('name', null, ['label' => "Nom", 'required' => true])
            ->add('ordre', null, ['label' => "Ordre", 'required' => true])
            ->add('forme', null, ['label' => "Forme", 'required' => false])
            ->add('langue', null, ['label' => "Sous-système", 'required' => false])
            ->add('cycle', ChoiceType::class, array('choices' => [
                'Choisir' => '',
                '1er Cycle' => '1er Cycle',
                '2nd Cycle' => '2nd Cycle',
                '1er et 2nd Cycles' => '1er et 2nd Cycles'
            ], 'label' => 'Cycle', 'required' => false))
            ->add('contacts', null, ['label' => "contacts téléphoniques", 'required' => false])
            ->add('hierarchie', ModelAutocompleteType::class, [
                'label' => 'SEDUC|SENAT',
                'required' => false,
                'property' => 'name',
                'callback' => static function (AdminInterface $admin, string $property, $value): void {
                    $datagrid = $admin->getDatagrid();
                    $query = $datagrid->getQuery();
                    $query
                        ->andWhere($query->getRootAlias() . '.typeStructure <> :typeValue')
                        ->setParameter('typeValue', 'Etablissement');
                    $datagrid->setValue($property, null, $value);
                },
            ])
            ->add('isActive', null, ['label'=>'Active'])
            ->end()
            ->with('Localisation', ['class' => 'col-md-6'])
            ->add('subdivision', null, ['label' => "Commune", 'required' => true])
            ->add('adresse', TextareaType::class, ['label' => "Adresse", 'required' => false])
            ->add('latitude', null, ['label' => "Latitude", 'required' => false])
            ->add('longitude', null, ['label' => "Longitude", 'required' => false])
            ->add('zone', ChoiceType::class, array('choices' => [
                'Choisir' => '',
                'Urbaine' => 'Urbain',
                'Rurale' => 'Rural',
            ], 'label' => 'Zone', 'required' => false))
            ->end()
            ->with('Compte Bancaire', ['class' => 'col-md-6'])
            ->add('compteBancaire', ModelType::class, ['label' => "Compte bancaire courant", 'required' => false])
            ->end()
            ->with('Fondateur|Sécrétaire', ['class' => 'col-md-6'])
            ->add('nomFondateur', null, ['label' => "Nom", 'required' => false])
            ->add('contactFondateur', null, ['label' => "Contacts téléphoniques", 'required' => false])
            ->add('user', null, ['label' => 'Managé par', 'required' => false])
            ->end()
            ->end();
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->tab('Structure')
            ->with('Identification', ['class' => 'col-md-6'])
            ->add('id')
            ->add('typeStructure', null, array('label' => 'Type'))
            ->add('code', null, ['label' => "Numéro d'immatriculation"])
            ->add('name', null, ['label' => "Nom"])
            ->add('ordre', null, ['label' => "Ordre"])
            ->add('forme', null, ['label' => "Forme"])
            ->add('langue', null, ['label' => "Sous-système"])
            ->add('cycle', null, array('label' => 'Cycle'))
            ->add('contacts', null, ['label' => "contacts téléphoniques"])
            ->add('isActive', null, ['label'=>'Active'])
            ->end()
            ->with('Localisation', ['class' => 'col-md-6'])
            ->add('subdivision', null, ['label' => "Commune"])
            ->add('adresse', null, ['label' => "Adresse"])
            ->add('latitude', null, ['label' => "Latitude"])
            ->add('longitude', null, ['label' => "Longitude"])
            ->add('zone', null, array('label' => 'Zone'))
            ->end()
            ->with('Fondateur|Sécrétaire', ['class' => 'col-md-6'])
            ->add('nomFondateur', null, ['label' => "Nom"])
            ->add('contactFondateur', null, ['label' => "Contacts téléphoniques"])
            ->end()
            ->with('Compte bancaire', ['class' => 'col-md-6'])
            ->add('compteBancaire', null, ['label' => "Compte bancaire courant"])
            ->end()
            ->with('Hierarchie (SEDUC|SENAT)', ['class' => 'col-md-6'])
            ->add('hierarchie', null, ['label' => "SEDUC|SENAT"])
            ->end()
            ->with('Administration', ['class' => 'col-md-6'])
            ->add('user', null, ['label' => 'Managé par'])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
            ->add('user_created.username', null, ['label' => 'Créé par'])
            ->add('user_updated.username', null, ['label' => 'Modifié par'])
            ->end()
            ->end();
    }
     
    protected function configureExportFields(): array
    {
        return ['subdivision.division.region.name', 'subdivision.division.name', 'subdivision', 'typeStructure', 'forme', 'ordre', 'langue', 'cycle', 'code', 'name', 'contacts', 'isActive', 'adresse', 'latitude', 'longitude', 'zone', 'nomFondateur', 'contactFondateur', 'user_updated', 'hierarchie', 'user.email'];
    }

    protected function configureQuery(ProxyQueryInterface $query): ProxyQueryInterface
    {
        $user = $this->ts->getToken()->getUser();
        $role = $user->getRoles()[0];

        $query = parent::configureQuery($query);
        $rootAlias = current($query->getRootAliases());
        if ($role != "ROLE_SUPER_ADMIN" and $role != "ROLE_ADMIN_CELINFO") {
            switch ($role) {
                case 'ROLE_ADMIN_DESG':
                    $query
                        ->andWhere($rootAlias . '.forme in (1, 5) and '.$rootAlias . '.typeStructure = :typestruc')
                        ->setParameter('typestruc', 'Etablissement');
                    break;
                case 'ROLE_ADMIN_DEN':
                    $query
                        ->andWhere($rootAlias . '.forme in (3, 4)')
                        ->andWhere($rootAlias . '.typeStructure = :typestruc')
                        ->setParameter('typestruc', 'Etablissement');
                    break;
                default:
                    $query
                        ->andWhere($rootAlias . '.forme in (2, 6)')
                        ->andWhere($rootAlias . '.typeStructure = :typestruc')
                        ->orWhere($rootAlias . '.typeStructure <> :typestruc')
                        ->setParameter('typestruc', 'Etablissement');
                    break;
            }
        }

        return $query;
    }

    protected function configureBatchActions(array $actions): array
    {
        if (
            $this->hasRoute('edit') && $this->hasAccess('edit') &&
            $this->hasRoute('delete') && $this->hasAccess('delete')
          ) {
              $actions['import'] = [
                  'ask_confirmation' => true,
                  'label' => 'Importation par lots'
                ];
          }
      
          return $actions;
    }
}

<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Demande;
use App\Entity\Division;
use App\Entity\FormStructure;
use App\Entity\Langue;
use App\Entity\Order;
use App\Entity\Region;
use App\Entity\Structure;
use App\Entity\SubDivision;
use App\Entity\User;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Admin\AdminInterface;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Sonata\AdminBundle\FieldDescription\FieldDescriptionInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelAutocompleteType;
use Sonata\AdminBundle\Route\RouteCollectionInterface;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\ChoiceFilter;
use Sonata\DoctrineORMAdminBundle\Filter\DateTimeRangeFilter;
use Sonata\Form\Type\DateTimePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Sonata\Form\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PercentType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

final class DemandeValideeAdmin extends AbstractAdmin
{
    private $ts;

    protected $classnameLabel = 'Subventions - ';

    public function __construct($ts)
    {
        $this->ts = $ts;
    }

    public function toString(object $object): string
    {
        return $object instanceof Demande
            ? $object->__toString()
            : 'Demande'; // shown in the breadcrumb on the create view
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('dateDemande', DateTimeRangeFilter::class, ['label' => 'Date de la demande'])
            ->add('nombreEleve', null, ['label' => "Nombre d'élèves"])
            ->add('nombrePersonnelEnseignant', null, ['label' => "Nombre d'enseignants"])
            ->add('nombrePersonnelPermanent', null, ['label' => "Nombre d'enseignants permanents"])
            ->add('structure.typeStructure', ChoiceFilter::class, [
                'global_search' => true,
                'field_type' => ChoiceType::class,
                'field_options' => [
                    'choices' => [
                        'Organisation' => 'Organisation',
                        'Etablissement' => 'Etablissement'
                    ]
                ], array('label' => 'Type Structure')
            ])
            ->add('structure', null, [
                'label' => 'Structure',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Structure::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('structure.forme', null, [
                'label' => 'Forme',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => FormStructure::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('structure.ordre', null, [
                'label' => 'Ordre',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Order::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('structure.langue', null, [
                'label' => 'Sous-système',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Langue::class,
                    'choice_label' =>
                    'label',
                ],
            ])
            ->add('structure.subdivision', null, [
                'label' => 'Commune',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => SubDivision::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('structure.subdivision.division', null, [
                'label' => 'Département',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Division::class,
                    'choice_label' =>
                    'name',
                ],
            ])
            ->add('structure.subdivision.division.region', null, [
                'label' => 'Région',
                'field_type' => EntityType::class,
                'field_options' => [
                    'class' => Region::class,
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

    protected function generateBaseRouteName(bool $isChildAdmin = false): string
    {
        return 'demande_validee';
    }

    protected function generateBaseRoutePattern(bool $isChildAdmin = false): string
    {
        return 'demandeValidee';
    }

    protected function preUpdate(object $object): void
    {
        $user = $this->ts->getToken()->getUser();
        $object->setUserUpdated($user); 
    }

    protected function configureQuery(ProxyQueryInterface $query): ProxyQueryInterface
    {
        $user = $this->ts->getToken()->getUser();
        $role = $user->getRoles()[0];

        $query = parent::configureQuery($query);
        $rootAlias = current($query->getRootAliases());
        $query->andWhere($rootAlias. '.statut = 3');
        if ($role != "ROLE_SUPER_ADMIN" and $role != "ROLE_ADMIN_CELINFO") {
            switch ($role) {
                case 'ROLE_ADMIN_DESG':
                case 'ROLE_COMMISSION_DESG':
                    $query->andWhere($rootAlias . '.structure in (select s.id from App\Entity\Structure s where s.forme = 1 and s.typeStructure = :typestruc)')
                        ->setParameter('typestruc', 'Etablissement');
                    break;
                case 'ROLE_ADMIN_DEN':
                case 'ROLE_COMMISSION_DEN':
                    $query->andWhere($rootAlias . '.structure in (select s.id from App\Entity\Structure s where s.forme in (3, 4) and s.typeStructure = :typestruc)')
                        ->setParameter('typestruc', 'Etablissement');
                    break;
                default:
                    $query->andWhere($rootAlias . '.structure in (select s.id from App\Entity\Structure s where (s.forme not in (1, 3, 4) and s.typeStructure = :typestruc) or s.typeStructure <> :typestruc)')
                        ->setParameter('typestruc', 'Etablissement');
                    break;
            }
        }

        return $query;
    }

    protected function configureExportFields(): array
    {
        return ['structure.subdivision.division.region.name', 'structure.subdivision.division.name', 'structure.subdivision', 'structure.typeStructure', 'structure.forme', 'structure.ordre', 'structure.name', 'ptEffectifs', 'assuranceElevePt', 'QuoteFenascoPt', 'cotisationSeducPt', 'positionGeoPt', 'apsCnpsPt', 'reverseRetenuFiscPt', 'percentExamenPt', 'personnelsPt', 'permaVacatairePt', 'conformitePt', 'equipementsPt', 'mesuresBarieresPt', 'cleanSchoolPt', 'digitalisationPt', 'score', 'montant', 'structure.compteBancaire.nameBanque', 'structure.compteBancaire.numero', 'structure.compteBancaire.intitule', 'date_created', 'date_updated', 'user_created', 'user_updated'];
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add('dateDemande', null, ['label' => 'Date de la demande'])
            ->add('structure.typeStructure', null, ['label' => "Type de structure"])
            ->add('structure.forme', null, ['label' => "Type d'enseignement"])
            ->add('structure.ordre', null, ['label' => "Ordre"])
            ->add('structure.subdivision.division.region.name', null, ['label' => 'Région'])
            ->add('structure.subdivision.division.name', null, ['label' => 'Département'])
            ->add('structure.subdivision', null, ['label' => 'Arrondissement'])
            ->add('structure', null, ['label' => 'Structure'])
            ->add('points', null, ['label' => "Note"])
            ->add('montant', FieldDescriptionInterface::TYPE_CURRENCY, ['label' => 'Montant Montant (Frs CFA)', 'currency' => ''])
            ->add('user_updated', null, ['label' => 'Validée par'])
            ->add(ListMapper::NAME_ACTIONS, null, [
                'actions' => [
                    'show' => [],
                ],
            ]);
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form->tab('Détails sur la Demande')
            ->with('Identification', ['class' => 'col-md-12'])
            ->add('session', ModelAutocompleteType::class, [
                'label' => 'Session',
                'required' => true,
                'btn_add' => false,
                'disabled' => true,
                'property' => 'name',
                'callback' => static function (AdminInterface $admin, string $property, $value): void {
                    $datagrid = $admin->getDatagrid();
                    $query = $datagrid->getQuery();
                    $query
                        ->andWhere($query->getRootAlias() . '.dateOpen < CURRENT_DATE()')
                        ->andWhere($query->getRootAlias() . '.dateClosed > CURRENT_DATE()')
                        ->andWhere($query->getRootAlias() . '.status = :active')
                        ->setParameter('active', true);
                    $datagrid->setValue($property, null, $value);
                },
            ])
            ->add('dateDemande', DateTimePickerType::class, ['label' => 'Date de la demande', 'disabled' => true])
            ->add('structure', ModelAutocompleteType::class, [
                'label' => "Structure",
                'disabled' => true,
                'property' => 'name',
                'required' => true,
                'btn_add' => false,
            ])
            ->end()
            ->with("Contribution à la réalisation de l'éducation  (08pts)", ['class' => 'col-md-12'])
            ->add('nombreEleve', null, ['label' => "Nombre d'élèves (1pt)", "help"=>"ESG: minimun de 50 en zone rurale et 100 en zone urbaine. EN: minimum de 20"])
            ->add('quoteFenasco', null, ['label' => "Quotes-parts FENASCO pour l'année encours (1pt)"])
            ->add('assuranceEleve', null, ['label' => "Assurance des élèves pour l'année encours (1pt)"])
            ->add('cotisationSeduc', null, ['label' => "Quotes-parts SEDUC pour l'année encours (1pt)"])
            ->add('zone', null, ['label' => "Position géogrphique (2pts)", 'disabled' => true, "help"=>"NB: Zone rurale | zone d'éduation prioritaire: 2pts ; zone urbaine: 1pt"])
            ->add('apsCnps', null, ['label' => "Cotisations sociales des personnels permanents (1pt)"])
            ->add('reverseRetenuFisc', null, ['label' => "Reversement des retenues fiscales (1pt)"])
            ->end()
            ->with("Performances de l'établissement (3pts)", ['class' => 'col-md-12'])
            ->add('percentExamen', null, ['label' => "Pourcentage de réussite aux examens officiels", "help"=>"NB: - [30% - 50%[ (1pt) - [50% - 70%[ (2pts) - [70% - 100%[ (3pts)"])
            ->end()
            ->with("Ressources humaines (4pts)", ['class' => 'col-md-12'])
            ->add('personnel_autorise', null, ['label' => "Le personnel enseignant dispose d'une autorisation"])
            ->add('personnel_contract', null, ['label' => "Le personnel enseignant dispose d'un contrat de travail"])
            ->add('nombrePersonnelEnseignant', null, ['label' => "Nombre de personnel enseignant"])
            ->add('nombrePersonnelPermanent', null, ['label' => "Nombre de personnel enseignant permanent"])
            ->add('permaVacataire', PercentType::class, ['label' => "Ratio enseignants permanents / enseignants vacataires", 'disabled' => true, "help"=>"NB: - [0% - 40%[ (0pt) - [40% - 60%[ (1pt) - [60% - 100%[ (3pts)"])
            ->end()
            ->with("Infrastructures et équipements (08 | 10 pts)", ['class' => 'col-md-12'])
            ->add('nombreSalleSuffisant', null, ['label' => "La structure dispose de salle de classes suffisantes et adaptées (1pt)"])
            ->add('existAtelier', null, ['label' => "La structure dispose d'ateliers pratiques (1pt)"])
            ->add('laboSalleSpecialisee', ChoiceType::class, array('choices' => [
                'Pas du tout (0pt)' => 0,
                'Un peu (1pt)' => 1,
                'Assez (2pts)' => 2
            ], 'label' => 'La structure possède de salles spécialisées en quantité et qualité (2pts)', 'required' => true))
            ->add('materielDidactique', null, ['label' => "La structure possède le matériel didactique en quantité et qualité requises (1pt)"])
            ->add('equipements', ChoiceType::class, array('choices' => [
                'Aucun (0pt)' => 0,
                'Un peu (1pt)' => 1,
                'suffisant (2pts)' => 2,
                'Assez (3pts)' => 3
            ], 'label' => 'La structure possède des équipements en quantité et qualité (3pts)', 'required' => true))
            ->add('mesuresBarieres', null, ['label' => "La structure dispose d'un dispositif mis en place pour les mesures barrières (1pt)"])
            ->add('digitalisation', null, ['label' => "La structure est engagée dans la digitalisation des enseignaments (1pt)"])
            ->add('cleanSchool', null, ['label' => "La structure met en oeuvre le clean school (1pt)"])
            ->end()
            ->with("Avis et statut", ['class' => 'col-md-12'])
            ->add('avisDres', ChoiceType::class, array('choices' => [
                'Défavorable (-5pts)' => -5,
                'Non prononcé (0pt)' => 0,
                'Favorable (1pt)' => 1
            ], 'label' => 'Avis du DRES  (1pt)', 'required' => true))
            ->add('statut', ChoiceType::class, array('choices' => [
                'Brouillon' => 0,
                'Reçu' => 1,
                'Acceptée' => 2,
                'Validée' => 3,
                'Rejetée' => 4
            ], 'label' => 'Statut de la demande', 'required' => true))
            ->add('remark', TextareaType::class, ['label' => "Remarques", 'required' => false])
            ->end()
            ->end()
            ->tab('Pièces de la demande')
            ->with('Pièces', ['class' => 'col-md-12'])
            ->add('demandePieces', CollectionType::class, [
                'type_options' => [
                    'delete' => false,
                    'delete_options' => [
                        'type'         => CheckboxType::class,
                        'type_options' => [
                            'mapped'   => false,
                            'required' => false,
                        ]
                    ]
                ]
            ], [
                'edit' => 'inline',
                'inline' => 'table',
                'sortable' => 'position',
            ])
            ->end()
            ->end();
    }

    protected function configureRoutes(RouteCollectionInterface $collection): void
    {
        if ($this->isChild()) {
            return;
        }

        // This is the route configuration as a parent
        $collection->clearExcept(['list', 'show', 'export']);
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $subject = $this->getSubject();
        $type = $subject->getStructure()->getTypeStructure();
        $isEstp = $subject->getStructure()->isEstp();

        $show
            ->tab('Détails sur la Demande')
            ->with('Identification', ['class' => 'col-md-12'])
            ->add('id')
            ->add('session', null, [
                'label' => 'Session'
            ])
            ->add('dateDemande', null, ['label' => 'Date de la demande'])
            ->add('structure', null, [
                'label' => 'Structure'
            ])
            ->end();
        if($type == 'Etablissement'){  
            $show->with("Conditions d'éligibilité", ['class' => 'col-md-12'])
            ->add('isDemandeTimbre', null, ['label' => "Demande timbrée."])
            ->add('isAutorisationOuvreExtend', null, ['label' => "Autorisation légale de création, d'ouverture et/ou extension."])
            ->add('isCompteEmploi', null, ['label' => "Compte d'emploi de la subvention de l'année précédente."])
            ->add('isRenseignStatistiques', null, ['label' => "Renseignement de la fiche de collecte statistique émise par la Direction technique."])
            ->add('reverseRetenuFisc', null, ['label' => "Reversement des retenues fiscales"])
            ->add('apsCnps', null, ['label' => "Cotisations sociales des personnels permanents"])
            ->add('quoteFenasco', null, ['label' => "Quotes-parts FENASCO pour l'année en cours"])
            ->end()
            ->with("Contribution à la réalisation de l'éducation  (08pts)", ['class' => 'col-md-12'])
            ->add('nombreEleve', null, ['label' => "Nombre d'élèves (1pt)", "help"=>"ESG: minimun de 50 en zone rurale et 100 en zone urbaine. EN: minimum de 20"])
            ->add('assuranceEleve', null, ['label' => "Assurance des élèves pour l'année en cours (1pt)"])
            ->add('cotisationSeduc', null, ['label' => "Quotes-parts SEDUC pour l'année en cours (1pt)"])
            ->add('zone', FieldDescriptionInterface::TYPE_CHOICE, array('choices' => [
                'Choisir' => "",
                'Zone Urbaine (1pt)' => "Urbain",
                'Zone Rural / ZEP (2pts)' => "Rural",
            ], 'label' => "Position géographique (2pts)", "help"=>"NB: Zone rurale | zone d'éduation prioritaire: 2pts ; zone urbaine: 1pt"))
            ->end()
            ->with("Performances de l'établissement (3pts)", ['class' => 'col-md-12'])
            ->add('percentExamen', null, ['label' => "Pourcentage moyen de réussite aux examens officiels", "help"=>"NB: - [30% - 50%[ (1pt) - [50% - 70%[ (2pts) - [70% - 100%[ (3pts)"])
            ->end()
            ->with("Ressources humaines (4pts)", ['class' => 'col-md-12'])
            ->add('personnel_autorise', null, ['label' => "Personnel enseignant autorisé à enseigner (1pt)"])
            ->add('personnel_contract', null, ['label' => "Personnel enseignant avec un contrat de travail (1pt)"])
            ->add('nombrePersonnelEnseignant', null, ['label' => "Nombre de personnel enseignant"])
            ->add('nombrePersonnelPermanent', null, ['label' => "Nombre de personnel enseignant permanent"])
            ->add('permaVacataire', null, ['label' => "Ratio personnel enseignants permanents", 'disabled' => true, "help"=>"NB: - [0% - 40%[ (0pt) - [40% - 60%[ (1pt) - [60% - 100%[ (3pts)"])
            ->end();
            if($isEstp){
                $show->with("Infrastructures et équipements (08 pts)", ['class' => 'col-md-12'])
                ->add('nombreSalleSuffisant', null, ['label' => "Salles de classes adaptées et conformes (1pt)"])
                ->add('existAtelier', null, ['label' => "Existence d'ateliers pratiques (1pt)"])
                ->add('laboSalleSpecialisee', FieldDescriptionInterface::TYPE_CHOICE, array('choices' => [
                    'Pas du tout (0pt)' => 0,
                    'Un peu (1pt)' => 1,
                    'Assez (2pts)' => 2
                ], 'label' => 'Laboratoires et salles spécialisées en quantité et qualité (2pts)', 'required' => true))
                ->add('materielDidactique', null, ['label' => "Matériel didactique en quantité et qualité requises (1pt)"])
                ->add('equipements', FieldDescriptionInterface::TYPE_CHOICE, array('choices' => [
                    'Aucun (0pt)' => 0,
                    'Un peu (1pt)' => 1,
                    'suffisant (2pts)' => 2,
                    'Assez (3pts)' => 3
                ], 'label' => 'Equipements en quantité et qualité (3pts)', 'required' => true))
                ->add('mesuresBarieres', null, ['label' => "Dispositif mis en place pour les mesures barrières (1pt)"])
                ->end();
            }else{
                $show->with("Infrastructures et équipements (05 pts)", ['class' => 'col-md-12'])
                ->add('nombreSalleSuffisant', null, ['label' => "Existence des infrastucture adaptées et conformes à la règlementation en vigueur (1pt)"])
                ->add('materielDidactique', null, ['label' => "Matériel didactique en quantité et qualité requises (1pt)"])
                ->add('laboSalleSpecialisee', FieldDescriptionInterface::TYPE_CHOICE, array('choices' => [
                    'Pas du tout (0pt)' => 0,
                    'Un peu (1pt)' => 1,
                    'Assez (2pts)' => 2
                ], 'label' => 'Laboratoires et salles spécialisées en quantité et qualité (2pts)', 'required' => true))
                ->add('mesuresBarieres', null, ['label' => "Dispositif mis en place pour les mesures barrières (1pt)"])
                ->end();
            }
            $show->with("Autres (2pts)", ['class' => 'col-md-12'])
            ->add('digitalisation', null, ['label' => "Digitalisation (1pt)"])
            ->add('cleanSchool', null, ['label' => "Clean school / Green school (1pt)"])
            ->end();
        }else{
            $show->with("Conditions d'éligibilité", ['class' => 'col-md-12'])
            ->add('isDemandeTimbre', null, ['label' => "Demande timbrée."])
            ->add('isCompteEmploi', null, ['label' => "Compte d'emploi de la subvention de l'année précédente."])
            ->end();
        }
        $show->with("Statut et Remarques", ['class' => 'col-md-6'])
            ->add('statut', FieldDescriptionInterface::TYPE_CHOICE, array('choices' => [
                0 => 'Brouillon',
                1 => 'Reçu',
                2 => 'Acceptée',
                3 => 'Validée',
                4 => 'Rejetée'
            ], 'label' => 'Statut de la demande'))
            ->add('remark', null, ['label' => "Remarques"])
            ->end()
            ->with('Administration', ['class' => 'col-md-6'])
            ->add('date_created', null, ['label' => 'Créé le'])
            ->add('date_updated', null, ['label' => 'Modifié le'])
            ->add('user_created.username', null, ['label' => 'Créé par'])
            ->add('user_updated.username', null, ['label' => 'Modifié par'])
            ->end()
            ->end();
    }

}

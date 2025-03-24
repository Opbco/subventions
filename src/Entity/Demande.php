<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DemandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\Context;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

#[ORM\Entity(repositoryClass: DemandeRepository::class)]
#[ApiResource]
class Demande
{
    const STATUTS = ["Brouillon", "Reçu", "Notée", "Validée", "Rejetée"];

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["demande.details", "demande.list"])]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(["demande.details", "demande.list"])]
    private ?\DateTimeInterface $dateDemande = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?int $nombreEleve = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?int $nombrePersonnelEnseignant = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?int $nombrePersonnelPermanent = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $personnel_autorise = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $personnel_contract = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $assuranceEleve = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $nombreSalleSuffisant = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $existAtelier = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?int $laboSalleSpecialisee = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $materielDidactique = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?int $equipements = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $mesuresBarieres = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?float $percentExamen = null;

    #[ORM\Column(nullable: true, options:["default" => 0])]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $reverseRetenuFisc = null;

    #[ORM\Column(nullable: true, options:["default" => 0])]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $apsCnps = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $cotisationSeduc = null;

    #[ORM\Column(nullable: true, options:["default" => 0])]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $quoteFenasco = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(["structure.details", "structure.list"])]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    private ?\DateTimeInterface $date_created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    #[Groups(["demande.details"])]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    private ?\DateTimeInterface $date_updated = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["demande.details", "demande.list"])]
    private ?User $user_created = null;

    #[ORM\ManyToOne]
    private ?User $user_updated = null;

    #[ORM\ManyToOne(inversedBy: 'demandes', cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["demande.details"])]
    private ?Structure $structure = null;

    #[ORM\Column]
    #[Groups(["demande.details", "demande.list"])]
    private ?int $statut = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?string $remark = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?int $avisDres = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $digitalisation = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande.details", "demande.list"])]
    private ?bool $cleanSchool = null;

    #[ORM\ManyToOne(inversedBy: 'demandes')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["demande.list"])]
    private ?Session $session = null;

    #[ORM\OneToMany(mappedBy: 'demande', targetEntity: DemandePiece::class, orphanRemoval: true)]
    #[Groups(["demande.details"])]
    private Collection $demandePieces;

    #[ORM\Column(nullable: true, options: ["default" => 0])]
    private ?float $montant = null;

    #[ORM\Column(nullable: true)]
    private ?int $points = null;

    #[ORM\Column(nullable: true, options:["default" => 0])]
    private ?bool $isDemandeTimbre = null;

    #[ORM\Column(nullable: true, options:["default" => 0])]
    private ?bool $isAutorisationOuvreExtend = null;

    #[ORM\Column(nullable: true, options:["default" => 0])]
    private ?bool $isCompteEmploi = null;

    #[ORM\Column(nullable: true, options:["default" => 0])]
    private ?bool $isRenseignStatistiques = null;

    #[ORM\Column(length: 30, nullable: true)]
    private ?string $zone = null;

    #[ORM\ManyToOne(inversedBy: 'demandesMarked')]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $user_marking = null;

    #[ORM\Column(nullable: true, options:["default" => 0])]
    private ?bool $immatriculationImpot = null;

    public function __construct()
    {
        $this->demandePieces = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateDemande(): ?\DateTimeInterface
    {
        return $this->dateDemande;
    }

    public function setDateDemande(\DateTimeInterface $dateDemande): self
    {
        $this->dateDemande = $dateDemande;

        return $this;
    }

    public function getNombreEleve(): ?int
    {
        return $this->nombreEleve;
    }

    public function setNombreEleve(?int $nombreEleve): self
    {
        $this->nombreEleve = $nombreEleve;

        return $this;
    }

    public function getNombrePersonnelEnseignant(): ?int
    {
        return $this->nombrePersonnelEnseignant;
    }

    public function setNombrePersonnelEnseignant(?int $nombrePersonnelEnseignant): self
    {
        $this->nombrePersonnelEnseignant = $nombrePersonnelEnseignant;

        return $this;
    }

    public function getNombrePersonnelPermanent(): ?int
    {
        return $this->nombrePersonnelPermanent;
    }

    public function setNombrePersonnelPermanent(?int $nombrePersonnelPermanent): self
    {
        $this->nombrePersonnelPermanent = $nombrePersonnelPermanent;

        return $this;
    }

    public function isPersonnelAutorise(): ?bool
    {
        return $this->personnel_autorise;
    }

    public function getPersonnelAutorisePt(): ?int
    {
        return $this->personnel_autorise?1:0;
    }

    public function setPersonnelAutorise(?bool $personnel_autorise): self
    {
        $this->personnel_autorise = $personnel_autorise;

        return $this;
    }

    public function isPersonnelContract(): ?bool
    {
        return $this->personnel_contract;
    }

    public function getPersonnelContractPt(): ?int
    {
        return $this->personnel_contract?0:1;
    }

    public function getPersonnelsPt(): ?int
    {
        return $this->personnel_contract + $this->personnel_autorise;
    }

    public function setPersonnelContract(?bool $personnel_contract): self
    {
        $this->personnel_contract = $personnel_contract;

        return $this;
    }

    public function isAssuranceEleve(): ?bool
    {
        return $this->assuranceEleve;
    }

    public function getAssuranceElevePt(): ?int
    {
        return $this->assuranceEleve?1:0;
    }

    public function setAssuranceEleve(?bool $assuranceEleve): self
    {
        $this->assuranceEleve = $assuranceEleve;

        return $this;
    }

    public function isNombreSalleSuffisant(): ?bool
    {
        return $this->nombreSalleSuffisant;
    }

    public function getNombreSalleSuffisantPt(): ?int
    {
        return $this->nombreSalleSuffisant?1:0;
    }

    public function setNombreSalleSuffisant(?bool $nombreSalleSuffisant): self
    {
        $this->nombreSalleSuffisant = $nombreSalleSuffisant;

        return $this;
    }

    public function isExistAtelier(): ?bool
    {
        return $this->existAtelier;
    }

    public function getExistAtelierPt(): ?int
    {
        return $this->existAtelier?1:0;
    }

    public function setExistAtelier(?bool $existAtelier): self
    {
        $this->existAtelier = $existAtelier;

        return $this;
    }

    public function getLaboSalleSpecialisee(): ?int
    {
        return $this->laboSalleSpecialisee;
    }

    public function setLaboSalleSpecialisee(?int $laboSalleSpecialisee): self
    {
        $this->laboSalleSpecialisee = $laboSalleSpecialisee;

        return $this;
    }

    public function getMaterielDidactique(): ?bool
    {
        return $this->materielDidactique;
    }

    public function getMaterielDidactiquePt(): ?int
    {
        return $this->materielDidactique?1:0;
    }

    public function setMaterielDidactique(?bool $materielDidactique): self
    {
        $this->materielDidactique = $materielDidactique;

        return $this;
    }

    public function getEquipements(): ?int
    {
        return $this->equipements;
    }


    public function getConformitePt(): ?int
    {
        $isEstp = $this->getStructure()->isEstp();

        $labs = $isEstp ? (int) $this->laboSalleSpecialisee : ($this->laboSalleSpecialisee? 2: 0);
        $nbSalle = $isEstp ? (int) $this->nombreSalleSuffisant : ($this->nombreSalleSuffisant? 2: 0);

        return $labs + $nbSalle + $this->existAtelier;
    }

    public function getEquipementsPt(): ?int
    {
        return $this->equipements + $this->materielDidactique;
    }


    public function setEquipements(?int $equipements): self
    {
        $this->equipements = $equipements;

        return $this;
    }

    public function isMesuresBarieres(): ?bool
    {
        return $this->mesuresBarieres;
    }

    public function getMesuresBarieresPt(): ?int
    {
        return $this->mesuresBarieres?1:0;
    }

    public function setMesuresBarieres(?bool $mesuresBarieres): self
    {
        $this->mesuresBarieres = $mesuresBarieres;

        return $this;
    }

    public function getPercentExamenPt(): ?int
    {
        $pt = 0;
        if($this->structure->getTypeStructure() == 'Etablissement'){
            if($this->percentExamen < 30){
                $pt = 0;
            }elseif($this->percentExamen < 50){
                $pt = 2;
            }elseif($this->percentExamen < 70){
                $pt = 3;
            }else{
                $pt = 4;
            }
        }
        return $pt;
    }

    public function getPercentExamen(): ?float
    {
        return $this->percentExamen;
    }

    public function setPercentExamen(?float $percentExamen): self
    {
        $this->percentExamen = $percentExamen;

        return $this;
    }

    public function isReverseRetenuFisc(): ?bool
    {
        return $this->reverseRetenuFisc;
    }

    public function getReverseRetenuFiscPt(): ?int
    {
        return $this->reverseRetenuFisc ? 1 : 0;
    }

    public function setReverseRetenuFisc(?bool $reverseRetenuFisc): self
    {
        $this->reverseRetenuFisc = $reverseRetenuFisc;

        return $this;
    }

    public function isApsCnps(): ?bool
    {
        return $this->apsCnps;
    }

    public function getApsCnpsPt(): ?int
    {
        return $this->apsCnps ? 1 : 0;
    }

    public function setApsCnps(?bool $apsCnps): self
    {
        $this->apsCnps = $apsCnps;

        return $this;
    }

    public function isCotisationSeduc(): ?bool
    {
        return $this->cotisationSeduc;
    }

    public function getCotisationSeducPt(): ?int
    {
        return $this->cotisationSeduc?1:0;
    }

    public function setCotisationSeduc(?bool $cotisationSeduc): self
    {
        $this->cotisationSeduc = $cotisationSeduc;

        return $this;
    }

    public function isQuoteFenasco(): ?bool
    {
        return $this->quoteFenasco;
    }

    public function getQuoteFenascoPt(): ?int
    {
        return $this->quoteFenasco?1:0;
    }

    public function setQuoteFenasco(?bool $quoteFenasco): self
    {
        $this->quoteFenasco = $quoteFenasco;

        return $this;
    }

    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->date_created;
    }

    public function setDateCreated(\DateTimeInterface $date_created): self
    {
        $this->date_created = $date_created;

        return $this;
    }

    public function getDateUpdated(): ?\DateTimeInterface
    {
        return $this->date_updated;
    }

    public function setDateUpdated(?\DateTimeInterface $date_updated): self
    {
        $this->date_updated = $date_updated;

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->user_created;
    }

    public function setUserCreated(?User $user_created): self
    {
        $this->user_created = $user_created;

        return $this;
    }

    public function getPtEffectifs(): ?int
    {
        $pt = 0;

        if($this->structure->getTypeStructure() != 'Etablissement'){
            return 0;
        }

        switch ($this->structure->getForme()->getId()) {
            case 3:
            case 4:
                   $pt = $this->nombreEleve >= 20 ? 1 : 0;       
                break;
            default:
                   $pt = $this->structure->getZone()=='Rural' ? ($this->nombreEleve >= 50 ? 1 : 0) : ($this->nombreEleve >= 100 ? 1 : 0);
                # code...
                break;
        }

        return $pt;
    }

    public function getUserUpdated(): ?User
    {
        return $this->user_updated;
    }

    public function setUserUpdated(?User $user_updated): self
    {
        $this->user_updated = $user_updated;

        return $this;
    }

    public function getStructure(): ?Structure
    {
        return $this->structure;
    }

    public function setStructure(?Structure $structure): self
    {
        $this->structure = $structure;

        return $this;
    }

    public function __toString()
    {
        return "Demande No ". $this->id." de ". $this->structure;
    }

    public function getStatut(): ?int
    {
        return $this->statut;
    }

    public function getStatutText(): ?string
    {
        return self::STATUTS[$this->statut];
    }

    public function setStatut(int $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function getRemark(): ?string
    {
        return $this->remark;
    }

    public function setRemark(?string $remark): self
    {
        $this->remark = $remark;

        return $this;
    }

    public function getAvisDres(): ?int
    {
        return $this->avisDres;
    }

    public function setAvisDres(?int $avisDres): self
    {
        $this->avisDres = $avisDres;

        return $this;
    }

    public function isDigitalisation(): ?bool
    {
        return $this->digitalisation;
    }

    public function getDigitalisationPt(): ?int
    {
        return $this->digitalisation?1:0;
    }

    public function setDigitalisation(?bool $digitalisation): self
    {
        $this->digitalisation = $digitalisation;

        return $this;
    }

    public function isCleanSchool(): ?bool
    {
        return $this->cleanSchool;
    }

    public function getCleanSchoolPt(): ?int
    {
        return $this->cleanSchool?1:0;
    }

    public function setCleanSchool(?bool $cleanSchool): self
    {
        $this->cleanSchool = $cleanSchool;

        return $this;
    }

    public function getSession(): ?Session
    {
        return $this->session;
    }

    public function setSession(?Session $session): self
    {
        $this->session = $session;

        return $this;
    }

    public function getPositionGeoPt(): ?int
    {
        if($this->structure->getTypeStructure() != 'Etablissement'){
            return 0;
        }
        return is_null($this->getZone()) ? 0 : (($this->getZone() == "Urbain") ? 1 : ($this->getZone() == "Semi-Urbain" ? 2 : 3));
    }


    public function getScore(): ?int
    {
        return $this->structure->getTypeStructure() != 'Etablissement'? 0 : $this->getPtEffectifs() + $this->getQuoteFenascoPt() + $this->getAssuranceElevePt() + $this->getCotisationSeducPt() + $this->getPositionGeoPt() + $this->getApsCnpsPt() + $this->getReverseRetenuFiscPt() + $this->getPercentExamenPt() + $this->getPersonnelsPt() + $this->getPermaVacatairePt() + $this->getConformitePt() + $this->getEquipementsPt() + $this->mesuresBarieres + $this->cleanSchool + $this->getDigitalisationPt();
    }

    public function getPermaVacataire(): ?float
    {
        return $this->nombrePersonnelEnseignant ? $this->nombrePersonnelPermanent / $this->nombrePersonnelEnseignant : 0;
    }

    public function getPermaVacatairePt(): ?int
    {
        $pt = 0;
        if($this->structure->getTypeStructure() == 'Etablissement'){
            $ratio = $this->getPermaVacataire();
            if($ratio < 0.4){
                $pt = 0;
            }elseif($ratio < 0.6){
                $pt = 1;
            }else{
                $pt = 2;
            }
        }
        return $pt;
    }

    public function getZoneStructure(): ?string
    {
        return $this->structure->getZone();
    }

    /**
     * @return Collection<int, DemandePiece>
     */
    public function getDemandePieces(): Collection
    {
        return $this->demandePieces;
    }

    public function addDemandePiece(DemandePiece $demandePiece): self
    {
        if (!$this->demandePieces->contains($demandePiece)) {
            $this->demandePieces->add($demandePiece);
            $demandePiece->setDemande($this);
        }

        return $this;
    }

    public function removeDemandePiece(DemandePiece $demandePiece): self
    {
        if ($this->demandePieces->removeElement($demandePiece)) {
            // set the owning side to null (unless already changed)
            if ($demandePiece->getDemande() === $this) {
                $demandePiece->setDemande(null);
            }
        }

        return $this;
    }

    public function getMontant(): ?string
    {
        return number_format($this->montant, 2, ',', ' ');
    }

    public function setMontant(?float $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getPoints(): ?int
    {
        return $this->points;
    }

    public function setPoints(?int $points): self
    {
        $this->points = $points;

        return $this;
    }

    public function isIsDemandeTimbre(): ?bool
    {
        return $this->isDemandeTimbre;
    }

    public function setIsDemandeTimbre(bool $isDemandeTimbre): self
    {
        $this->isDemandeTimbre = $isDemandeTimbre;

        return $this;
    }

    public function isIsAutorisationOuvreExtend(): ?bool
    {
        return $this->isAutorisationOuvreExtend;
    }

    public function setIsAutorisationOuvreExtend(bool $isAutorisationOuvreExtend): self
    {
        $this->isAutorisationOuvreExtend = $isAutorisationOuvreExtend;

        return $this;
    }

    public function isIsCompteEmploi(): ?bool
    {
        return $this->isCompteEmploi;
    }

    public function setIsCompteEmploi(bool $isCompteEmploi): self
    {
        $this->isCompteEmploi = $isCompteEmploi;

        return $this;
    }

    public function isIsRenseignStatistiques(): ?bool
    {
        return $this->isRenseignStatistiques;
    }

    public function setIsRenseignStatistiques(bool $isRenseignStatistiques): self
    {
        $this->isRenseignStatistiques = $isRenseignStatistiques;

        return $this;
    }

    public function getZone(): ?string
    {
        return $this->zone;
    }

    public function setZone(?string $zone): self
    {
        $this->zone = $zone;

        return $this;
    }

    public function getUserMarking(): ?User
    {
        return $this->user_marking;
    }

    public function setUserMarking(?User $user_marking): self
    {
        $this->user_marking = $user_marking;

        return $this;
    }

    public function isImmatriculationImpot(): ?bool
    {
        return $this->immatriculationImpot;
    }

    public function setImmatriculationImpot(bool $immatriculationImpot): self
    {
        $this->immatriculationImpot = $immatriculationImpot;

        return $this;
    }
}

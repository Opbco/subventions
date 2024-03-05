<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\StructureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\DBAL\Types\Types;
use Symfony\Component\Serializer\Annotation\Context;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

#[ORM\Entity(repositoryClass: StructureRepository::class)]
#[ApiResource]
class Structure
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["structure:detail", "structure.list"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?string $name = null;

    #[ORM\Column(length: 100, nullable:true, unique:true)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?string $adresse = null;

    #[ORM\Column(length: 255)]
    #[Groups(["structure:detail", "structure.list", "demande.details"])]
    private ?string $contacts = null;

    #[ORM\ManyToOne(inversedBy: 'structures')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?Order $ordre = null;

    #[ORM\ManyToOne(inversedBy: 'structures')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(["structure:detail", "structure.list "])]
    private ?FormStructure $forme = null;

    #[ORM\ManyToOne(inversedBy: 'structures')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?SubDivision $subdivision = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(["structure:detail", "structure.list"])]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    private ?\DateTimeInterface $date_created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    #[Groups(["structure:detail"])]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    private ?\DateTimeInterface $date_updated = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?User $user_created = null;

    #[ORM\ManyToOne]
    private ?User $user_updated = null;

    #[ORM\ManyToOne(inversedBy: 'structures')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?Langue $langue = null;

    #[ORM\Column(length: 20)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?string $typeStructure = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["structure:detail", "structure.list", "demande.details"])]
    private ?float $latitude = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["structure:detail", "structure.list", "demande.details"])]
    private ?float $longitude = null;

    #[ORM\Column(length: 20, nullable: true)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?string $cycle = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["structure:detail", "structure.list", "demande.details"])]
    private ?string $nomFondateur = null;

    #[ORM\Column(length: 26, nullable: true)]
    #[Groups(["structure:detail", "structure.list", "demande.details"])]
    private ?string $contactFondateur = null;

    #[ORM\Column(length: 15, nullable: true)]
    #[Groups(["structure:detail", "structure.list"])]
    private ?string $zone = null;

    #[ORM\OneToMany(mappedBy: 'structure', targetEntity: Demande::class, orphanRemoval: true)]
    private Collection $demandes;

    #[ORM\ManyToOne(targetEntity: self::class)]
    #[Groups(["structure.list"])]
    private ?self $hierarchie = null;

    #[ORM\OneToOne(inversedBy: 'structure', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $user = null;

    #[ORM\Column(name:"is_active")]
    #[Groups(["structure:detail", "structure.list"])]
    private ?bool $isActive = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?CompteBancaire $compteBancaire = null;

    public function __construct()
    {
        $this->demandes = new ArrayCollection();
    }


    public function isEstp(): ?bool
    {
        $isEts = $this->getTypeStructure() == 'Etablissement';
        
        return $isEts and in_array($this->getForme()->getId(), array(2, 4, 5, 6), true);
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getContacts(): ?string
    {
        return $this->contacts;
    }

    public function setContacts(string $contacts): self
    {
        $this->contacts = $contacts;

        return $this;
    }

    public function getOrdre(): ?Order
    {
        return $this->ordre;
    }

    public function setOrdre(?Order $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getForme(): ?FormStructure
    {
        return $this->forme;
    }

    public function setForme(?FormStructure $forme): self
    {
        $this->forme = $forme;

        return $this;
    }

    public function getSubdivision(): ?SubDivision
    {
        return $this->subdivision;
    }

    public function setSubdivision(?SubDivision $subdivision): self
    {
        $this->subdivision = $subdivision;

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

    public function getUserUpdated(): ?User
    {
        return $this->user_updated;
    }

    public function setUserUpdated(?User $user_updated): self
    {
        $this->user_updated = $user_updated;

        return $this;
    }

    public function getLangue(): ?Langue
    {
        return $this->langue;
    }

    public function setLangue(?Langue $langue): self
    {
        $this->langue = $langue;

        return $this;
    }

    public function getTypeStructure(): ?string
    {
        return $this->typeStructure;
    }

    public function setTypeStructure(string $typeStructure): self
    {
        $this->typeStructure = $typeStructure;

        return $this;
    }

    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    public function setLatitude(?float $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    public function setLongitude(?float $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getCycle(): ?string
    {
        return $this->cycle;
    }

    public function setCycle(?string $cycle): self
    {
        $this->cycle = $cycle;

        return $this;
    }

    public function getNomFondateur(): ?string
    {
        return $this->nomFondateur;
    }

    public function setNomFondateur(?string $nomFondateur): self
    {
        $this->nomFondateur = $nomFondateur;

        return $this;
    }

    public function getContactFondateur(): ?string
    {
        return $this->contactFondateur;
    }

    public function setContactFondateur(?string $contactFondateur): self
    {
        $this->contactFondateur = $contactFondateur;

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

    /**
     * @return Collection<int, Demande>
     */
    public function getDemandes(): Collection
    {
        return $this->demandes;
    }

    public function addDemande(Demande $demande): self
    {
        if (!$this->demandes->contains($demande)) {
            $this->demandes->add($demande);
            $demande->setStructure($this);
        }

        return $this;
    }

    public function removeDemande(Demande $demande): self
    {
        if ($this->demandes->removeElement($demande)) {
            // set the owning side to null (unless already changed)
            if ($demande->getStructure() === $this) {
                $demande->setStructure(null);
            }
        }

        return $this;
    }

    public function getHierarchie(): ?self
    {
        return $this->hierarchie;
    }

    public function setHierarchie(?self $hierarchie): self
    {
        $this->hierarchie = $hierarchie;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function isIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getCompteBancaire(): ?CompteBancaire
    {
        return $this->compteBancaire;
    }

    public function setCompteBancaire(?CompteBancaire $compteBancaire): self
    {
        $this->compteBancaire = $compteBancaire;

        return $this;
    }
}

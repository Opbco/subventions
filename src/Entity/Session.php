<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\SessionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Context;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

#[ORM\Entity(repositoryClass: SessionRepository::class)]
#[ApiResource]
class Session
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["session:detail", "session.list", "demande.list"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["session:detail", "session.list", "demande.list"])]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'd-m-Y H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    #[Groups(["session:detail", "session.list", "demande.list"])]
    private ?\DateTimeInterface $dateOpen = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'd-m-Y H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    #[Groups(["session:detail", "session.list"], "demande.list")]
    private ?\DateTimeInterface $dateClosed = null;

    #[ORM\Column(length: 10)]
    #[Groups(["session:detail", "session.list", "demande.list"])]
    private ?string $anneeScolaire = null;

    #[ORM\Column]
    #[Groups(["session:detail", "session.list", "demande.list"])]
    private ?bool $status = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(["session:detail", "session.list"])]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    private ?\DateTimeInterface $date_created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    #[Groups(["session:detail", "session.list"])]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    private ?\DateTimeInterface $date_updated = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["session:detail", "session.list"])]
    private ?User $user_created = null;

    #[ORM\ManyToOne]
    private ?User $user_updated = null;

    #[ORM\OneToMany(mappedBy: 'session', targetEntity: Demande::class)]
    private Collection $demandes;

    #[ORM\Column(nullable: true, options: ['default'=>0])]
    private ?float $dotation = null;

    #[ORM\Column(nullable: true, options: ['default'=>0])]
    private ?float $percentSenat = null;

    #[ORM\Column(nullable: true, options: ['default'=>0])]
    private ?float $percentSeduc = null;

    #[ORM\Column(nullable: true, options: ['default'=>0])]
    private ?float $percentEts = null;

    public function __construct()
    {
        $this->demandes = new ArrayCollection();
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

    public function getDateOpen(): ?\DateTimeInterface
    {
        return $this->dateOpen;
    }

    public function setDateOpen(\DateTimeInterface $dateOpen): self
    {
        $this->dateOpen = $dateOpen;

        return $this;
    }

    public function getDateClosed(): ?\DateTimeInterface
    {
        return $this->dateClosed;
    }

    public function setDateClosed(\DateTimeInterface $dateClosed): self
    {
        $this->dateClosed = $dateClosed;

        return $this;
    }

    public function getAnneeScolaire(): ?string
    {
        return $this->anneeScolaire;
    }

    public function setAnneeScolaire(string $anneeScolaire): self
    {
        $this->anneeScolaire = $anneeScolaire;

        return $this;
    }

    public function isStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

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

    public function __toString()
    {
        return "session ". $this->anneeScolaire;
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
            $demande->setSession($this);
        }

        return $this;
    }

    public function removeDemande(Demande $demande): self
    {
        if ($this->demandes->removeElement($demande)) {
            // set the owning side to null (unless already changed)
            if ($demande->getSession() === $this) {
                $demande->setSession(null);
            }
        }

        return $this;
    }

    public function getDotation(): ?float
    {
        return $this->dotation;
    }

    public function setDotation(?float $dotation): self
    {
        $this->dotation = $dotation;

        return $this;
    }

    public function getPercentSenat(): ?float
    {
        return $this->percentSenat;
    }

    public function setPercentSenat(?float $percentSenat): self
    {
        $this->percentSenat = $percentSenat;

        return $this;
    }

    public function getPercentSeduc(): ?float
    {
        return $this->percentSeduc;
    }

    public function setPercentSeduc(?float $percentSeduc): self
    {
        $this->percentSeduc = $percentSeduc;

        return $this;
    }

    public function getPercentEts(): ?float
    {
        return $this->percentEts;
    }

    public function setPercentEts(?float $percentEts): self
    {
        $this->percentEts = $percentEts;

        return $this;
    }
}

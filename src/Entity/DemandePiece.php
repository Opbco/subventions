<?php

namespace App\Entity;

use App\Repository\DemandePieceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Context;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

#[ORM\Entity(repositoryClass: DemandePieceRepository::class)]
#[UniqueEntity(
    fields: ['demande', 'piece'],
    errorPath: 'demande',
    message: 'This demande alreary contains this file',
)]
class DemandePiece
{

    const STATUT = [0, 1, 2];

    const STATUT_DRAFT = self::STATUT[0];
    const STATUT_VALID = self::STATUT[1];
    const STATUT_REJECT = self::STATUT[2];
    
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'demandePieces')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Demande $demande = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['demande.details'])]
    private ?Piece $piece = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['demande.details'])]
    private ?Document $file = null;

    #[ORM\Column]
    #[Groups(['demande.details'])]
    private ?int $statut = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    private ?\DateTimeInterface $date_created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    #[Context(
        normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d H:i'],
        denormalizationContext: [DateTimeNormalizer::FORMAT_KEY => \DateTime::RFC3339],
    )]
    private ?\DateTimeInterface $date_updated = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user_created = null;

    #[ORM\ManyToOne]
    private ?User $user_updated = null;

    public static $statutCodes = array(
        "Brouillon" => self::STATUT_DRAFT,
        "Valide" => self::STATUT_VALID,
        "Rejetée" => self::STATUT_REJECT
    );

    public static $codesStatut = array(
        self::STATUT_DRAFT => "Brouillon",
        self::STATUT_VALID => "Valide",
        self::STATUT_REJECT => "Rejetée"
    );

    public function __toString()
    {
        return ' '. $this->piece;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDemande(): ?Demande
    {
        return $this->demande;
    }

    public function setDemande(?Demande $demande): self
    {
        $this->demande = $demande;

        return $this;
    }

    public function getPiece(): ?Piece
    {
        return $this->piece;
    }

    public function setPiece(?Piece $piece): self
    {
        $this->piece = $piece;

        return $this;
    }

    public function getFile(): ?Document
    {
        return $this->file;
    }

    public function setFile(Document $file): self
    {
        $this->file = $file;

        return $this;
    }

    public function getStatut(): ?int
    {
        return $this->statut;
    }

    public function setStatut(int $statut): self
    {
        $this->statut = $statut;

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
}

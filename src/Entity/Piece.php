<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PieceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Context;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

#[ORM\Entity(repositoryClass: PieceRepository::class)]
#[ApiResource]
class Piece
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['piece.list', 'demande.details'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['piece.list', 'demande.details'])]
    private ?string $name = null;

    #[ORM\Column(length: 100)]
    #[Groups(['piece.list', 'demande.details'])]
    private ?string $signataire = null;

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

    #[ORM\Column(options: ['default' => 0])]
    #[Groups(['piece.list', 'demande.details'])]
    private ?bool $isOng = null;

    #[ORM\Column(length: 255)]
    #[Groups(['piece.list', 'demande.details'])]
    private ?string $nameen = null;

    #[ORM\Column(length: 255)]
    #[Groups(['piece.list', 'demande.details'])]
    private ?string $signataireen = null;

    #[ORM\Column]
    #[Groups(['piece.list', 'demande.details'])]
    private ?bool $compulsory = null;

    #[ORM\Column(options:['default' => 0])]
    private ?bool $isPermanent = null;

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

    public function getSignataire(): ?string
    {
        return $this->signataire;
    }

    public function setSignataire(string $signataire): self
    {
        $this->signataire = $signataire;

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

    public function isIsOng(): ?bool
    {
        return $this->isOng;
    }

    public function setIsOng(bool $isOng): self
    {
        $this->isOng = $isOng;

        return $this;
    }

    public function getNameen(): ?string
    {
        return $this->nameen;
    }

    public function setNameen(string $nameen): self
    {
        $this->nameen = $nameen;

        return $this;
    }

    public function getSignataireen(): ?string
    {
        return $this->signataireen;
    }

    public function setSignataireen(string $signataireen): self
    {
        $this->signataireen = $signataireen;

        return $this;
    }

    public function isCompulsory(): ?bool
    {
        return $this->compulsory;
    }

    public function setCompulsory(bool $compulsory): self
    {
        $this->compulsory = $compulsory;

        return $this;
    }

    public function isIsPermanent(): ?bool
    {
        return $this->isPermanent;
    }

    public function setIsPermanent(bool $isPermanent): self
    {
        $this->isPermanent = $isPermanent;

        return $this;
    }
}

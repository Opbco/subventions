<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Sonata\UserBundle\Entity\BaseUser;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['username'], message: 'There is already an account with this username')]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email address')]
class User extends BaseUser
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['user.list'])]
    protected ?int $id = null;

    #[ORM\OneToOne(mappedBy: 'user', cascade: ['persist', 'remove'])]
    private ?Structure $structure = null;

    #[ORM\OneToMany(mappedBy: 'user_marking', targetEntity: Demande::class)]
    private Collection $demandesMarked;

    public function __construct()
    {
        $this->demandesMarked = new ArrayCollection();
    }

    public function getStructure(): ?Structure
    {
        return $this->structure;
    }

    public function setStructure(?Structure $structure): self
    {
        $this->structure = $structure;

        return $this;
         // unset the owning side of the relation if necessary
        if ($structure === null && $this->structure !== null) {
            $this->structure->setUser(null);
        }

        // set the owning side of the relation if necessary
        if ($structure !== null && $structure->getUser() !== $this) {
            $structure->setUser($this);
        }

        $this->structure = $structure;

        return $this;
    }

    /**
     * @return Collection<int, Demande>
     */
    public function getDemandesMarked(): Collection
    {
        return $this->demandesMarked;
    }

    public function addDemandesMarked(Demande $demandesMarked): self
    {
        if (!$this->demandesMarked->contains($demandesMarked)) {
            $this->demandesMarked->add($demandesMarked);
            $demandesMarked->setUserMarking($this);
        }

        return $this;
    }

    public function removeDemandesMarked(Demande $demandesMarked): self
    {
        if ($this->demandesMarked->removeElement($demandesMarked)) {
            // set the owning side to null (unless already changed)
            if ($demandesMarked->getUserMarking() === $this) {
                $demandesMarked->setUserMarking(null);
            }
        }

        return $this;
    }
}

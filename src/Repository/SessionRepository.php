<?php

namespace App\Repository;

use App\Entity\Session;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Session>
 *
 * @method Session|null find($id, $lockMode = null, $lockVersion = null)
 * @method Session|null findOneBy(array $criteria, array $orderBy = null)
 * @method Session[]    findAll()
 * @method Session[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Session::class);
    }

    public function save(Session $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Session $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Session[] Returns an array of Session objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

    /**
     * @return Session|null Return an Session object
     */
   public function findOneByActive($value): ?Session
   {
       return $this->createQueryBuilder('s')
           ->andWhere('s.dateOpen < CURRENT_DATE()')
           ->andWhere('s.dateClosed > CURRENT_DATE()')
           ->andWhere('s.status = :active')
           ->setParameter('active', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }

   public function findLast(): ?Session
   {
       return $this->createQueryBuilder('s')
           ->orderBy("s.dateOpen", "DESC")
           ->setMaxResults(1)
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }

   public function calculateAmounts($sessionId): void
   {
        $query = "CALL calculateAmounts(:p_SESSION_ID);";
        $rsm = new ResultSetMapping;
        $nativeQuery = $this->getEntityManager()->createNativeQuery($query, $rsm);
        $nativeQuery->setParameters(array('p_SESSION_ID' => $sessionId ));
        $result= $nativeQuery->getResult();
   }
}

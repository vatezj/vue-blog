<?php
namespace App\Models\Blog;

use Swoft\Db\Model;
use Swoft\Db\Bean\Annotation\Column;
use Swoft\Db\Bean\Annotation\Entity;
use Swoft\Db\Bean\Annotation\Id;
use Swoft\Db\Bean\Annotation\Required;
use Swoft\Db\Bean\Annotation\Table;
use Swoft\Db\Types;

/**
 * @Entity()
 * @Table(name="ips")
 * @uses      Ips
 */
class Ips extends Model
{
    /**
     * @var string $id 
     * @Id()
     * @Column(name="id", type="string", length=128)
     */
    private $id;

    /**
     * @var int $blocked 
     * @Column(name="blocked", type="tinyint", default=0)
     */
    private $blocked;

    /**
     * @var int $userId 
     * @Column(name="user_id", type="integer")
     */
    private $userId;

    /**
     * @param string $value
     * @return $this
     */
    public function setId(string $value)
    {
        $this->id = $value;

        return $this;
    }

    /**
     * @param int $value
     * @return $this
     */
    public function setBlocked(int $value): self
    {
        $this->blocked = $value;

        return $this;
    }

    /**
     * @param int $value
     * @return $this
     */
    public function setUserId(int $value): self
    {
        $this->userId = $value;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return int
     */
    public function getBlocked()
    {
        return $this->blocked;
    }

    /**
     * @return int
     */
    public function getUserId()
    {
        return $this->userId;
    }

}

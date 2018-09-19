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
 * @Table(name="notifications")
 * @uses      Notifications
 */
class Notifications extends Model
{
    /**
     * @var string $id 
     * @Id()
     * @Column(name="id", type="string", length=255)
     */
    private $id;

    /**
     * @var string $type 
     * @Column(name="type", type="string", length=255)
     * @Required()
     */
    private $type;

    /**
     * @var int $notifiableId 
     * @Column(name="notifiable_id", type="integer")
     * @Required()
     */
    private $notifiableId;

    /**
     * @var string $notifiableType 
     * @Column(name="notifiable_type", type="string", length=255)
     * @Required()
     */
    private $notifiableType;

    /**
     * @var string $data 
     * @Column(name="data", type="text", length=65535)
     * @Required()
     */
    private $data;

    /**
     * @var string $readAt 
     * @Column(name="read_at", type="timestamp")
     */
    private $readAt;

    /**
     * @var string $createdAt 
     * @Column(name="created_at", type="timestamp")
     */
    private $createdAt;

    /**
     * @var string $updatedAt 
     * @Column(name="updated_at", type="timestamp")
     */
    private $updatedAt;

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
     * @param string $value
     * @return $this
     */
    public function setType(string $value): self
    {
        $this->type = $value;

        return $this;
    }

    /**
     * @param int $value
     * @return $this
     */
    public function setNotifiableId(int $value): self
    {
        $this->notifiableId = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setNotifiableType(string $value): self
    {
        $this->notifiableType = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setData(string $value): self
    {
        $this->data = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setReadAt(string $value): self
    {
        $this->readAt = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setCreatedAt(string $value): self
    {
        $this->createdAt = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setUpdatedAt(string $value): self
    {
        $this->updatedAt = $value;

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
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @return int
     */
    public function getNotifiableId()
    {
        return $this->notifiableId;
    }

    /**
     * @return string
     */
    public function getNotifiableType()
    {
        return $this->notifiableType;
    }

    /**
     * @return string
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * @return string
     */
    public function getReadAt()
    {
        return $this->readAt;
    }

    /**
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

}

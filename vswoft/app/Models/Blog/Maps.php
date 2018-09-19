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
 * @Table(name="maps")
 * @uses      Maps
 */
class Maps extends Model
{
    /**
     * @var int $id 
     * @Id()
     * @Column(name="id", type="integer")
     */
    private $id;

    /**
     * @var string $key 
     * @Column(name="key", type="string", length=255)
     * @Required()
     */
    private $key;

    /**
     * @var string $tag 
     * @Column(name="tag", type="string", length=255)
     * @Required()
     */
    private $tag;

    /**
     * @var string $value 
     * @Column(name="value", type="text", length=65535)
     */
    private $value;

    /**
     * @var string $meta 
     * @Column(name="meta", type="text", length=65535)
     */
    private $meta;

    /**
     * @param int $value
     * @return $this
     */
    public function setId(int $value)
    {
        $this->id = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setKey(string $value): self
    {
        $this->key = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setTag(string $value): self
    {
        $this->tag = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setValue(string $value): self
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setMeta(string $value): self
    {
        $this->meta = $value;

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
    public function getKey()
    {
        return $this->key;
    }

    /**
     * @return string
     */
    public function getTag()
    {
        return $this->tag;
    }

    /**
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @return string
     */
    public function getMeta()
    {
        return $this->meta;
    }

}

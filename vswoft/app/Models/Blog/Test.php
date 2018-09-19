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
 * @Table(name="test")
 * @uses      Test
 */
class Test extends Model
{
    /**
     * @var int $id id
     * @Id()
     * @Column(name="id", type="integer")
     */
    private $id;

    /**
     * @var string $name 名字
     * @Column(name="name", type="string", length=225)
     * @Required()
     */
    private $name;

    /**
     * id
     * @param int $value
     * @return $this
     */
    public function setId(int $value)
    {
        $this->id = $value;

        return $this;
    }

    /**
     * 名字
     * @param string $value
     * @return $this
     */
    public function setName(string $value): self
    {
        $this->name = $value;

        return $this;
    }

    /**
     * id
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * 名字
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

}

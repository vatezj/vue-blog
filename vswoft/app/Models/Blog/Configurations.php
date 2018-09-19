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
 * @Table(name="configurations")
 * @uses      Configurations
 */
class Configurations extends Model
{
    /**
     * @var int $id 
     * @Id()
     * @Column(name="id", type="integer")
     */
    private $id;

    /**
     * @var int $configurableId 
     * @Column(name="configurable_id", type="integer")
     * @Required()
     */
    private $configurableId;

    /**
     * @var string $configurableType 
     * @Column(name="configurable_type", type="string", length=255)
     * @Required()
     */
    private $configurableType;

    /**
     * @var string $config 
     * @Column(name="config", type="string", length=255)
     */
    private $config;

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
     * @param int $value
     * @return $this
     */
    public function setConfigurableId(int $value): self
    {
        $this->configurableId = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setConfigurableType(string $value): self
    {
        $this->configurableType = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setConfig(string $value): self
    {
        $this->config = $value;

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
    public function getConfigurableId()
    {
        return $this->configurableId;
    }

    /**
     * @return string
     */
    public function getConfigurableType()
    {
        return $this->configurableType;
    }

    /**
     * @return string
     */
    public function getConfig()
    {
        return $this->config;
    }

}

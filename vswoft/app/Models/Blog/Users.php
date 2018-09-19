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
 * @Table(name="users")
 * @uses      Users
 */
class Users extends Model
{
    /**
     * @var int $id 
     * @Id()
     * @Column(name="id", type="integer")
     */
    private $id;

    /**
     * @var string $name 
     * @Column(name="name", type="string", length=255)
     * @Required()
     */
    private $name;

    /**
     * @var string $email 
     * @Column(name="email", type="string", length=255)
     * @Required()
     */
    private $email;

    /**
     * @var string $password 
     * @Column(name="password", type="string", length=255)
     * @Required()
     */
    private $password;

    /**
     * @var string $registerFrom 
     * @Column(name="register_from", type="string", length=255, default="web_form")
     */
    private $registerFrom;

    /**
     * @var int $githubId 
     * @Column(name="github_id", type="integer")
     */
    private $githubId;

    /**
     * @var string $githubName 
     * @Column(name="github_name", type="string", length=255)
     */
    private $githubName;

    /**
     * @var string $website 
     * @Column(name="website", type="string", length=255)
     */
    private $website;

    /**
     * @var string $realName 
     * @Column(name="real_name", type="string", length=255)
     */
    private $realName;

    /**
     * @var string $description 
     * @Column(name="description", type="string", length=255)
     */
    private $description;

    /**
     * @var string $meta 
     * @Column(name="meta", type="text", length=65535)
     */
    private $meta;

    /**
     * @var string $avatar 
     * @Column(name="avatar", type="string", length=255)
     */
    private $avatar;

    /**
     * @var string $profileImage 
     * @Column(name="profile_image", type="string", length=255)
     */
    private $profileImage;

    /**
     * @var string $rememberToken 
     * @Column(name="remember_token", type="string", length=100)
     */
    private $rememberToken;

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
    public function setName(string $value): self
    {
        $this->name = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setEmail(string $value): self
    {
        $this->email = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setPassword(string $value): self
    {
        $this->password = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setRegisterFrom(string $value): self
    {
        $this->registerFrom = $value;

        return $this;
    }

    /**
     * @param int $value
     * @return $this
     */
    public function setGithubId(int $value): self
    {
        $this->githubId = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setGithubName(string $value): self
    {
        $this->githubName = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setWebsite(string $value): self
    {
        $this->website = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setRealName(string $value): self
    {
        $this->realName = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setDescription(string $value): self
    {
        $this->description = $value;

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
     * @param string $value
     * @return $this
     */
    public function setAvatar(string $value): self
    {
        $this->avatar = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setProfileImage(string $value): self
    {
        $this->profileImage = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setRememberToken(string $value): self
    {
        $this->rememberToken = $value;

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
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @return mixed
     */
    public function getRegisterFrom()
    {
        return $this->registerFrom;
    }

    /**
     * @return int
     */
    public function getGithubId()
    {
        return $this->githubId;
    }

    /**
     * @return string
     */
    public function getGithubName()
    {
        return $this->githubName;
    }

    /**
     * @return string
     */
    public function getWebsite()
    {
        return $this->website;
    }

    /**
     * @return string
     */
    public function getRealName()
    {
        return $this->realName;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return string
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * @return string
     */
    public function getAvatar()
    {
        return $this->avatar;
    }

    /**
     * @return string
     */
    public function getProfileImage()
    {
        return $this->profileImage;
    }

    /**
     * @return string
     */
    public function getRememberToken()
    {
        return $this->rememberToken;
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

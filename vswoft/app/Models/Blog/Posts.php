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
 * @Table(name="posts")
 * @uses      Posts
 */
class Posts extends Model
{
    /**
     * @var int $id 
     * @Id()
     * @Column(name="id", type="bigint")
     */
    private $id;

    /**
     * @var int $userId 
     * @Column(name="user_id", type="bigint")
     * @Required()
     */
    private $userId;

    /**
     * @var int $categoryId 
     * @Column(name="category_id", type="bigint")
     * @Required()
     */
    private $categoryId;

    /**
     * @var string $title 
     * @Column(name="title", type="string", length=255)
     * @Required()
     */
    private $title;

    /**
     * @var string $description 
     * @Column(name="description", type="string", length=255)
     * @Required()
     */
    private $description;

    /**
     * @var string $slug 
     * @Column(name="slug", type="string", length=255)
     * @Required()
     */
    private $slug;

    /**
     * @var string $content 
     * @Column(name="content", type="text", length=4294967295)
     * @Required()
     */
    private $content;

    /**
     * @var string $htmlContent 
     * @Column(name="html_content", type="text", length=4294967295)
     * @Required()
     */
    private $htmlContent;

    /**
     * @var int $status 
     * @Column(name="status", type="tinyint", default=0)
     */
    private $status;

    /**
     * @var int $viewCount 
     * @Column(name="view_count", type="integer", default=0)
     */
    private $viewCount;

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
     * @var string $publishedAt 
     * @Column(name="published_at", type="timestamp")
     */
    private $publishedAt;

    /**
     * @var string $deletedAt 
     * @Column(name="deleted_at", type="timestamp")
     */
    private $deletedAt;

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
    public function setUserId(int $value): self
    {
        $this->userId = $value;

        return $this;
    }

    /**
     * @param int $value
     * @return $this
     */
    public function setCategoryId(int $value): self
    {
        $this->categoryId = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setTitle(string $value): self
    {
        $this->title = $value;

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
    public function setSlug(string $value): self
    {
        $this->slug = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setContent(string $value): self
    {
        $this->content = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setHtmlContent(string $value): self
    {
        $this->htmlContent = $value;

        return $this;
    }

    /**
     * @param int $value
     * @return $this
     */
    public function setStatus(int $value): self
    {
        $this->status = $value;

        return $this;
    }

    /**
     * @param int $value
     * @return $this
     */
    public function setViewCount(int $value): self
    {
        $this->viewCount = $value;

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
     * @param string $value
     * @return $this
     */
    public function setPublishedAt(string $value): self
    {
        $this->publishedAt = $value;

        return $this;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setDeletedAt(string $value): self
    {
        $this->deletedAt = $value;

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
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * @return int
     */
    public function getCategoryId()
    {
        return $this->categoryId;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
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
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @return string
     */
    public function getHtmlContent()
    {
        return $this->htmlContent;
    }

    /**
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @return int
     */
    public function getViewCount()
    {
        return $this->viewCount;
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

    /**
     * @return string
     */
    public function getPublishedAt()
    {
        return $this->publishedAt;
    }

    /**
     * @return string
     */
    public function getDeletedAt()
    {
        return $this->deletedAt;
    }

}

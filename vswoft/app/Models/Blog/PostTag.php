<?php
namespace App\Models\Blog;

use Swoft\Db\EntityManager;
use Swoft\Db\Model;
use Swoft\Db\Bean\Annotation\Column;
use Swoft\Db\Bean\Annotation\Entity;
use Swoft\Db\Bean\Annotation\Id;
use Swoft\Db\Bean\Annotation\Required;
use Swoft\Db\Bean\Annotation\Table;
use Swoft\Db\Query;
use Swoft\Db\QueryBuilder;
use Swoft\Db\Types;

/**
 * @Entity()
 * @Table(name="post_tag")
 * @uses      PostTag
 */
class PostTag extends Model
{
    /**
     * @var int $postId 
     * @Id()
     * @Column(name="post_id", type="bigint")
     */
    private $postId;

    /**
     * @var int $tagId 
     * @Id()
     * @Column(name="tag_id", type="bigint")
     */
    private $tagId;

    /**
     * @param int $value
     * @return $this
     */
    public function setPostId(int $value)
    {
        $this->postId = $value;

        return $this;
    }

    /**
     * @param int $value
     * @return $this
     */
    public function setTagId(int $value)
    {
        $this->tagId = $value;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getPostId()
    {
        return $this->postId;
    }

    /**
     * @return mixed
     */
    public function getTagId()
    {
        return $this->tagId;
    }

    public function getPostsListsByTagId($tag_id,$page,$num)
    {
        $result = Query::table(PostTag::class,'t')
            ->innerJoin(Posts::class, 'p.id=t.post_id','p')
            ->where('t.tag_id', $tag_id)
            ->andWhere('p.status',1)
            ->orderBy('p.id', QueryBuilder::ORDER_BY_DESC)
            ->limit($num,$page*$num)
            ->get(['p.title'=> 'title','p.published_at'=>'published_at'])
            ->getResult();
        echo "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
        var_dump($result);
        return $result;

    }

}

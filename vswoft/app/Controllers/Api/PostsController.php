<?php
/**
 * User: vate
 * Date: 2018/9/20
 * Time: 11:13
 */

namespace App\Controllers\Api;

use App\Models\Blog\Posts;
use App\Models\Blog\PostTag;
use Swoft\Db\Query;
use Swoft\Db\QueryBuilder;
use Swoft\Http\Message\Server\Request;
use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;
/**
 * 博客文章有关api
 *
 * @Controller(prefix="/api/posts")
 */
class PostsController
{
    /**
     * Notes: 根据标签id获取文章 标题 发布时间
     * User: vate
     * Date: 2018/9/20
     * Time: 11:15
     * @RequestMapping(route="/api/posts/tag/{tag_id}", method={RequestMethod::GET})
     * @return array
     */
    public function getPostsListsByTagId(Request $request, int $tag_id):array
    {
        $num = 10;
        $posts = new PostTag();
        $page = $request->query('page', 0);
        $res = $posts->getPostsListsByTagId($tag_id,$page,$num);
        $result = $res;
        return compact('tag_id','page','result','num');
    }

    /**
     * Notes: 获取文章列表
     * User: vate
     * Date: 2018/9/20
     * Time: 11:15
     * @RequestMapping(route="/api/posts/home", method={RequestMethod::GET})
     * @return array
     */
    public function home(Request $request):array
    {
        $num = 10;
        $posts = new Posts();
        $page = $request->query('page', 0);
        $res = $posts->getPostsLists($page,$num);
        $result = $res;
        return compact('page','result','num');
    }

    /**
     * Notes: vate
     * User: Administrator
     * Date: 2018/9/20
     * Time: 15:41
     * @RequestMapping(route="/api/posts/detail/{name}", method={RequestMethod::GET})
     * @return array
     */
    public function detail(Request $request , string $name):array
    {
        $posts = new Posts();
        $res = $posts->getPost(['title'=>$name]);
        $result = $res;
        return compact('result');
    }
}
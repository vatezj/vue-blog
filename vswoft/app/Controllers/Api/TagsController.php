<?php
/**
 * User: vate
 * Date: 2018/9/20
 * Time: 10:53
 */

namespace App\Controllers\Api;

use App\Models\Blog\Tags;
use Swoft\Http\Message\Server\Request;
use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;

/**
 * 博客标签有关api
 *
 * @Controller(prefix="/api/tags")
 */
class TagsController
{
    /**
     * 博客标签列表接口
     * 地址:/api/tags/.
     *
     * @RequestMapping(route="/api/tags", method={RequestMethod::GET})
     */
    public function list()
    {
        $tags = Tags::findAll([],['orderby'=>['id'=>'desc']])->getResult();
        $code = 000;
        $msg = "查找成功";
        if(!$tags)
        {
            $code = 001;
            $msg = "查找失败";
        }
        return compact('code','msg','tags');
    }
}
<?php
/**
 * This file is part of Swoft.
 *
 * @link https://swoft.org
 * @document https://doc.swoft.org
 * @contact group@swoft.org
 * @license https://github.com/swoft-cloud/swoft/blob/master/LICENSE
 */

namespace App\Controllers\Admin;

use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;
use Swoft\View\Bean\Annotation\View;
use Swoft\Http\Message\Server\Response;

/**
 * Class Admin/IndexController
 * @Controller(prefix="/admin/index")
 */
class IndexController
{
    /**
     * @RequestMapping("/admin")
     * @View(template="admin/index")
     * @return array
     */
    public function index(): array
    {
        $name = 'vate';
        return compact('name');
    }
}

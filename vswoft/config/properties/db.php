<?php

/*
 * This file is part of Swoft.
 * (c) Swoft <group@swoft.org>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [
    'master' => [
        'name'        => 'master',
        'uri'         => [
            '47.93.20.8:3306/blog?user=root&password=hyxqq383877&charset=utf8',
            '47.93.20.8:3306/blog?user=root&password=hyxqq383877&charset=utf8',
        ],
        'minActive'   => 8,
        'maxActive'   => 8,
        'maxWait'     => 8,
        'timeout'     => 8,
        'maxIdleTime' => 60,
        'maxWaitTime' => 3,
    ],

    'slave' => [
        'name'        => 'slave',
        'uri'         => [
            '47.93.20.8:3306/blog?user=root&password=hyxqq383877&charset=utf8',
            '47.93.20.8:3306/blog?user=root&password=hyxqq383877&charset=utf8',
        ],
        'minActive'   => 8,
        'maxActive'   => 8,
        'maxWait'     => 8,
        'timeout'     => 8,
        'maxIdleTime' => 60,
        'maxWaitTime' => 3,
    ],
];
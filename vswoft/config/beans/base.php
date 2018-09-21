<?php

/*
 * This file is part of Swoft.
 * (c) Swoft <group@swoft.org>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [
    'serverDispatcher' => [
        'middlewares' => [
            \Swoft\View\Middleware\ViewMiddleware::class,
            \Swoft\Devtool\Middleware\DevToolMiddleware::class,
            \Swoft\Session\Middleware\SessionMiddleware::class,
            \App\Middlewares\CorsMiddleware::class
        ]
    ],
    'httpRouter' => [
        'ignoreLastSlash' => false,
        'tmpCacheNumber' => 1000,
        'matchAll' => '',
    ],
    'requestParser' => [
        'parsers' => [

        ],
    ],
    'sessionManager' => [
        'class' => \Swoft\Session\SessionManager::class,
        'config' => [
            'driver' => 'redis',
            'name' => 'SWOFT_SESSION_ID',
            'lifetime' => 1800,
            'expire_on_close' => false,
            'encrypt' => false,
            'storage' => '@runtime/sessions',
        ],
    ],
    'view' => [
        'viewsPath' => '@resources/views/',
    ],
    'cache' => [
        'driver' => 'redis',
    ],
    'demoRedis' => [
        'class' => \Swoft\Redis\Redis::class,
        'poolName' => 'demoRedis'
    ]
];

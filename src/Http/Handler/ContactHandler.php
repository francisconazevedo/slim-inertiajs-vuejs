<?php
declare(strict_types=1);

namespace SlimInertia\Http\Handler;

use Cherif\InertiaPsr15\Middleware\InertiaMiddleware;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class ContactHandler implements RequestHandlerInterface
{

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $inertia = $request->getAttribute(InertiaMiddleware::INERTIA_ATTRIBUTE);

        $contacts = [
            ['id' => 1, 'type' => 'email', 'value' => 'contact@dev.com.br'],
            ['id' => 2, 'type' => 'phone', 'value' => '(12) 3456-7890']
        ];

        return $inertia->render('Contact', [
            'contacts' => $contacts
        ]);
    }
}
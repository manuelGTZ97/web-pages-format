<?php
    require "./init.php";

    $params = [
        'example' => "Hi there!",
    ];
    $template = $twig->load('index.twig');
    echo $template->render($params);
?>
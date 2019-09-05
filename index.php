<?php
    require "./init.php";

    $params = [
        'example' => "Edit index.php!",
    ];
    $template = $twig->load('index.twig');
    echo $template->render($params);
?>
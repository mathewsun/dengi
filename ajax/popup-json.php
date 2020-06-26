<?php
if (!empty($_GET['filename'])) {
    echo json_encode(array(
        'popup' => true,
        'text' => file_get_contents($_GET['filename'])
    ));
}
<?php
/**
 * This script has been written to offer REST API functionality for the website.
 */

/**
 * Fetch the options for the dropdown for the RMA Request form products.
 * Action: GET
 * Type: rma-product-items
 */
if(isset($_GET['type']) &&  $_GET['type'] == 'rma-product-items') {
    header('Content-Type: text/plain');
    $db = new mysqli('127.0.0.1', 'orcicorpuser', '0rC1P*sS!#', 'orcicorp');

    $options = array();
    if($results = $db->query('SELECT * FROM rma_request_products ORDER BY product_part_name ASC')) {
        while($product = $results->fetch_object()) {
            $options[] = $product;
        }
    }

    $db->close();
    echo json_encode($options);
    exit;
}

header('Location: /');
exit;
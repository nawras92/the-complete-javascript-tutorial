<?php
// JSON encoding (PHP object/array to JSON string)
$data = array(
    "name" => "Ali",
    "age" => 30,
    "city" => "Amman"
);

$json_string = json_encode($data);
echo $json_string;

// JSON decoding (JSON string to PHP object/array)
$json_data = '{"name": "Ola", "age": 35, "city": "Hebron"}';


$parsed_data = json_decode($json_data);
print_r($parsed_data);


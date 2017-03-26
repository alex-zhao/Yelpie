<?php

include_once 'simple_html_dom.php';

$id = $_GET["id"];

$html = file_get_html('https://www.yelp.com/biz/' . $id);

$array = [];

for ($i = 0; $i < 3; $i++) {
  $array[$i] = mb_convert_encoding($html->find('p[lang=en]', $i), 'UTF-8', 'UTF-8');
}

$json = json_encode($array);
echo $json;

/*for ($i = 0; $i < 5; $i++) {
  echo $array[$i] . "<br>";
}*/

 ?>

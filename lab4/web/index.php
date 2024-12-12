<?php

echo "Hello !!!";

$name = "Mid Jhuu";
$age = 19;

$arr = array("name",19);
$assoc_arr = ["name"=>"Pongsaphak", "age"=>19];

echo $arr[0];
echo $assoc_arr["age"];
echo $arr;
echo "<br>";
var_dump($assoc_arr);

echo "Hello $name";
echo 'Hello $name';

$object = (object)$assoc_arr;
echo $object->name;

function plus($a,$b)
{
    return $a + $b;
}

$add_name = function($name){
    echo "Hello $name";
};

$car = (object)["color" => "red", "name" => $add_name];
//echo $car->name("test");

?>

<?php
phpinfo()
?>


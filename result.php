<?php

$price = $_POST['price'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$date = $_POST['date'];
$sex = $_POST['sex'];

echo "Date: " . $date;

echo "<br/><br/><br/><br/>";


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Test data
	$price = 100;
	$name = "test user GET request";
	$phone = "11111111";
	$email = "test@test.ts";
	$date = "08.08.1980";
	$sex = 1;
	
}

$strtotimedate = strtotime($date);

echo "strtotime date: " . strtotime($date), "\n";

echo "<br/><br/><br/><br/>";

if($sex == '1'){
  $sexcheck="Мужчина";
}
else{
  $sexcheck="Женщина";
}

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://vuamoclick2money.amocrm.ru/private/api/auth.php?USER_LOGIN=vu@click2.money&USER_HASH=4ad6c209b3c8ce6227560fdeafbc7581dfcaa7d7",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_HTTPHEADER => array(
	"USER_LOGIN: vu@click2.money",
    "USER_HASH: 4ad6c209b3c8ce6227560fdeafbc7581dfcaa7d7",
    "Cookie: user_lang=ru;session_id=$ses_id_cook"
  ),
));


curl_setopt($curl, CURLOPT_HEADER, 1);
$response = curl_exec($curl);

curl_close($curl);
echo $response;

echo "<br/><br/><br/><br/>";

preg_match_all('/^Set-Cookie:\s*([^;]*)/mi', $response, $matches);
$cookies = array();
foreach($matches[1] as $item) {
    parse_str($item, $cookie);
    $cookies = array_merge($cookies, $cookie);
}

var_dump($cookies);

echo "<br/><br/><br/><br/>";


$ses_id_cook = $cookies['session_id'];


var_dump($ses_id_cook);

echo "<br/><br/><br/><br/>";

echo $ses_id_cook;

$post_fields_add_contact ="[{\"name\": \"" . $name . "\", \r\n  \"custom_fields_values\": \r\n  [{\r\n        
  \"field_name\": \"Телефон\",\r\n        \"field_code\": \"PHONE\",\r\n        \"field_type\": \"multitext\",
  \r\n        \"field_id\": 160001,\r\n        \"values\": \r\n        [{\r\n            \"value\": \"" . $phone . "\" 
  \r\n        }]\r\n    },\r\n    {\r\n        \"field_name\": \"Email\",\r\n        \"field_code\": \"EMAIL\",\r\n 
  \"field_type\": \"multitext\",\r\n        \"field_id\": 160003,\r\n        \"values\":\r\n        [{\r\n   
  \"value\": \"" . $email . "\"\r\n        }]\r\n    },\r\n    {\r\n        \"field_id\":315687,\r\n 
  \"values\": [\r\n            {\r\n                \"value\": " . $strtotimedate . "\r\n           
  }\r\n        ]\r\n    },\r\n    {\r\n        \"field_id\":315685,\r\n        \"values\": [\r\n           
  {\r\n                \"value\": " . $price . "\r\n            }\r\n        ]\r\n    },\r\n    {\r\n       
  \"field_id\":315689,\r\n        \"values\": [\r\n            {\r\n                \"value\": \"" . $sexcheck . "\"\r\n     
  }\r\n        ]\r\n    }]\r\n\r\n}]";

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://vuamoclick2money.amocrm.ru/api/v4/contacts",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS =>$post_fields_add_contact,
    CURLOPT_HTTPHEADER => array(
        "Content-Type: application/json",
        "Cookie: user_lang=ru; session_id=$ses_id_cook"
    ),
));
$response = curl_exec($curl);

curl_close($curl);
echo $response;

echo "<br/><br/><br/><br/>";

echo $post_fields_add_contact;
?>

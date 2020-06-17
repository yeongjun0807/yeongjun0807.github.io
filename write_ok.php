<?php
if(isset($_POST['g-recaptcha-response'])){
          $captcha=$_POST['g-recaptcha-response'];
        }
        if(!$captcha){
          echo '<h2리캡차를 확인하세요</h2>';
          exit;
        }
        $secretKey = "6LeyuKUZAAAAADsbKtnn5cACbmKbYI3UAONy6p42";
        $ip = $_SERVER['REMOTE_ADDR'];
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);
        if(intval($responseKeys["success"]) !== 1) {
          echo '<h2>너 스패머지? 나가라</h2>';
        } else {
          echo '<h2>고맙습니다.</h2>';
        }
?>

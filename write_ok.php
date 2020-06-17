<?php
$captcha = $_POST['g-recaptcha'];
$secretKey = '6LeyuKUZAAAAADsbKtnn5cACbmKbYI3UAONy6p42'; // 위에서 발급 받은 "비밀 키"를 넣어줍니다.
$ip = $_SERVER['REMOTE_ADDR']; // 옵션값으로 안 넣어도 됩니다.

$data = array(
  'secret' => $secretKey,
  'response' => $captcha,
  'remoteip' => $ip  // ip를 안 넣을거면 여기서도 빼줘야죠
);

$url = "https://www.google.com/recaptcha/api/siteverify";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
$response = curl_exec($ch);
curl_close($ch);

$responseKeys = json_decode($response, true);

if ($responseKeys["success"]) {
  alert('y')
  // 스팸 검사가 통과 했을 때의 처리
} else {
  alert('n')
  // 스팸 검사가 실패 했을 때의 처리
}

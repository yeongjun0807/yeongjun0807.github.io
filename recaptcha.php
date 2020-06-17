<!-- <script src="https://www.google.com/recaptcha/api.js"></script>

 <script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>

<button class="g-recaptcha" 
        data-sitekey="6LeyuKUZAAAAAGJAX_a5H1XA-jFbqc0-wzhqmP7G" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>

<div class="g-recaptcha" data-sitekey="6LeyuKUZAAAAAGJAX_a5H1XA-jFbqc0-wzhqmP7G"></div>
-->
<!--<script src="https://www.google.com/recaptcha/api.js?render=6LeyuKUZAAAAAGJAX_a5H1XA-jFbqc0-wzhqmP7G"></script>

<form>
  <div>이름 : <input type="text" name="name"></div>
  <div>비밀번호 : <input type="password" name="password"></div>
  <div>제목 : <input type="subject" name="subject"></div>
  <div><input type="submit" value="등록"></div>
  <input type="hidden" id="g-recaptcha" name="g-recaptcha">
</form>

<script type="text/javascript">
grecaptcha.ready(function() {
  grecaptcha.execute('6LeyuKUZAAAAAGJAX_a5H1XA-jFbqc0-wzhqmP7G', {action: 'homepage'}).then(function(token) {
    // 토큰을 받아다가 g-recaptcha 에다가 값을 넣어줍니다.
    document.getElementById('g-recaptcha').value = token;
  });
});
</script>-->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<div class="g-recaptcha" data-sitekey="6LeyuKUZAAAAAGJAX_a5H1XA-jFbqc0-wzhqmP7G"></div>
<script type="text/javascript"> function checkrecaptachSubmit() { if (grecaptcha.getResponse() == ""){ alert("Please check the reCaptcha"); return false;} else { return true;}} </script>
<?php
if(isset($_POST['g-recaptcha-response'])){
          $captcha=$_POST['g-recaptcha-response'];
        }
        if(!$captcha){
          echo '<h2리캡차를 확인하세요</h2>';
          exit;
        }
        $secretKey = "시크릿키";
        $ip = $_SERVER['REMOTE_ADDR'];
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);
        if(intval($responseKeys["success"]) !== 1) {
          echo '<h2>너 스패머지? 나가라</h2>';
        } else {
          echo '<h2>고맙습니다.</h2>';
        }
?>

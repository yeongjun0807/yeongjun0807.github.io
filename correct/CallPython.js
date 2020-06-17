var Button = document.getElementById('Button');
var text = null;

Button.addEventListener('click', function(){
    $.ajax({
        url: "crawling.py",
        context: document.body,
        data:{
          data1: text 
            }
         });
    }).done(function() {
        alert('finished python script');
        alert(text);
    });
});

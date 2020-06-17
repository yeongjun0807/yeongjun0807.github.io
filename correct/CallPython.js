var Button = document.getElementById('Button');
var text = NULL;

Button.addEventListener('click', function(){
    $.ajax({
        url: "crawling.py",
        context: document.body
        data: text
    }).done(function() {
        alert('finished python script');
        alert(data)
    });
});

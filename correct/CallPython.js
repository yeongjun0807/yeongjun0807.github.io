var Button = document.getElementById('Button');

Button.addEventListener('click', function(){
    $.ajax({
        url: "crawling.py",
        context: document.body
    }).done(function() {
        alert('finished python script');
        var data = JSON.parse(data);
        alert(data);
    });
});

/*const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["crawling.py"]);
*/

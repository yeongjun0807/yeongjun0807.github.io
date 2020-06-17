/*var Button = document.getElementById('Button');
var {PythonShell} = require('python-shell');
Button.addEventListener('click', function(){
    arrs = openSomehowPythonInterpreter("~/crawling.py", "correct()");
})*/
$.ajax({
  type: "POST",
  url: "~/crawling.py",
  data: { param: text}
}).done(function( o ) {
   alert('fd')
    // do something
});

var Button = document.getElementById('Button');

Button.addEventListener('click', function(){
    /*var {PythonShell} = require('python-shell');
    var options = {
      mode: 'text',
      encoding: 'utf8',
      pythonOptions: ['-u'],
      scriptPath: '',
      args: [],
      pythonPath: ''
    };
    
    var test = new PythonShell('crawling.py.py', options);
    test.on('message',function(message){
      console.log(message);
    })*/
    arrs = openSomehowPythonInterpreter("~/crawling.py", "correct()");
})

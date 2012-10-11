var x = 1;

function pause(n)
{
  today=new Date();
  today2=today;
  while((today2-today)<=n)
  {
    today2=new Date()
  }
}

function debug(msg)
{
    var log = document.getElementById('debuglog');

    if (!log)
    {
        log = document.createElement('div');
        log.id = 'debuglog';
        log.innerHTML = '<h1>Debug Log</h1>';
        document.body.appendChild(log);
    }

    var pre = document.createElement('pre');
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    var pr = document.getElementById('diamonds');
    var pr2 = document.getElementById('diamonds3');
    if (pr)
    {
        pr.id = 'diamonds2';
        pr2.id = 'diamonds4';

    }
    log.innerHTML = "<h1>Debug Log</h1>";
    log.appendChild(pre);
    x++;
}

function debug2()
{
    var pr = document.getElementById('diamonds2');
    if (pr)
    {
        pr.id = 'diamonds';
        
    }
}

function debug3()
{
    var pr = document.getElementById('diamonds2');
    var pr2 = document.getElementById('diamonds4');
    if (pr)
    {
        pr.id = 'diamonds';
        pr2.id = 'diamonds3';

    }
    else
    {
        var pr = document.getElementById('diamonds');
        var pr2 = document.getElementById('diamonds3');
        pr.id = 'diamonds2';
        pr2.id = 'diamonds4';
    }
}

setInterval(debug3, 2000);

function save2()
{
    var txt1 = document.getElementById('text1').value;
    var txt2 = document.getElementById('text2').value;

    if (window.localStorage)
    {
        localStorage.text1 = txt1;
        localStorage.text2 = txt2;
    }
}

function load2()
{
    var txt1 = document.getElementById('text1');
    var txt2 = document.getElementById('text2');

    if (window.localStorage && localStorage.text1)
    {
        txt1.value = localStorage.text1;
        txt2.value = localStorage.text2;
    }
}

function Cas(a)
{
    return function(b){ return a+b;}
}

var ms = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var graph;
var g;

var b1 = new Obj(5,5,30,'red');//;b1.x = 5; b1.y = 5; b1.size = 30; b1.color = 'red';
var b2 = new Obj();b2.x = 40; b2.y = 40; b2.size = 30; b2.color = 'red';
var b3 = new Obj();b3.x = 75; b3.y = 75; b3.size = 30; b3.color = 'red';
var b4 = new Obj();b4.x = 5; b4.y = 75; b4.size = 30; b4.color = 'red';
var b5 = new Obj();b5.x = 75; b5.y = 5; b5.size = 30; b5.color = 'red';

var bb1 = new Obj();bb1.x = 5; bb1.y = 40; bb1.size = 30; bb1.color = 'blue';
var bb2 = new Obj();bb2.x = 40; bb2.y = 5; bb2.size = 30; bb2.color = 'blue';
var bb3 = new Obj();bb3.x = 75; bb3.y = 40; bb3.size = 30; bb3.color = 'blue';
var bb4 = new Obj();bb4.x = 40; bb4.y = 75; bb4.size = 30; bb4.color = 'blue';

var objs = [];
var color1 = 'green';
var color2 = 'black';
var o = true;
var o2 = false;
var centerX = 255;
var centerY = 155;
var stepSize = 0.001;
var maxSize = 1.02;
var minSize = 0.99;
var objs2 = [];
var size = 10;
var step = 2;
var tx=50;
var ty = 50;
for(yyy = 0; yyy<ty; yyy++)
{
    for(xxx = 0; xxx<tx; xxx++)
    {
        if ((xxx%2 == 0 && yyy%2 == 0) || (xxx%2 != 0 && yyy%2 != 0))
                {
                    objs.push(new Obj(step + (size + step) * xxx , step + (size + step) * yyy ,size,color1))
                }
        if ((xxx%2 != 0 && yyy%2 == 0) || (xxx%2 == 0 && yyy%2 != 0))
                {
                    objs2.push(new Obj(step + (size + step) * xxx , step + (size + step) * yyy ,size,color2))
                }

    }
}

//var objs = [b1,b2,b3,b4,b5,bb1,bb2,bb3,bb4];
var s = new Src();s.scale = 1;
var s2 = new Src();s2.scale = 1;



var graph2;
var g2;

var test = 20;

var myG = new Graphic();

function init()
{
    graph = document.getElementById('graph');
    g = graph.getContext("2d");
    myG.width = graph.width;
    myG.height = graph.height;

    graph2 = document.getElementById('myscreen');
    g2 = graph2.getContext("2d");

    s.width = graph2.width ;s.height = graph2.height;
    s2.width = graph2.width ;s2.height = graph2.height;

	graph2.addEventListener ("mousedown", md, false);
	graph2.addEventListener ("mousemove", mm, false);
	
    if (graph2.addEventListener) {
        // IE9+, Opera, Chrome/Safari (можно onmousehweel = ...)
        graph2.addEventListener ("mousewheel", onMouseWheel, false);
        // Firefox (нельзя onDOMMouseScroll = ..., только addEventListener)
        graph2.addEventListener ("DOMMouseScroll", onMouseWheel, false);
    } else { // IE<9
        graph2.attachEvent ("onmousewheel", onMouseWheel);
    }

}




function myTick()
{
    g2.beginPath();
    //g2.clearRect(0,0,500,300);
    //g2.fillStyle = 'black';
    g2.fillStyle = 'rgba(255,255,255,.5)';
      //         g.fillRect(0,0,w,h);
    g2.fillRect(0,0,500,300)

    for (var i = 0; i < objs.length; i++)
    {
        //g2.strokeStyle = objs[i].color.toString();
        g2.fillStyle = objs[i].color;
        g2.lineWidth = 1;

        var xx = objs[i].x * s.scale;
        var yy = objs[i].y * s.scale;
        //g2.fillRect(xx +.5 + s.x, yy +.5 + s.y, xx +.5 + objs[i].size* s.scale + s.x, yy +.5 + objs[i].size* s.scale + s.y);
        g2.fillRect(xx +.5 + s.x, yy +.5 + s.y, objs[i].size * s.scale, objs[i].size * s.scale);

    }

    for (var i = 0; i < objs2.length; i++)
    {
        //g2.strokeStyle = objs[i].color.toString();
        g2.fillStyle = objs2[i].color;
        g2.lineWidth = 1;
        var xx = objs2[i].x * s2.scale;
        var yy = objs2[i].y * s2.scale;
        //g2.fillRect(xx +.5 + s.x, yy +.5 + s.y, xx +.5 + objs[i].size* s.scale + s.x, yy +.5 + objs[i].size* s.scale + s.y);
        g2.fillRect(xx +.5 + s2.x, yy +.5 + s2.y, objs2[i].size * s2.scale, objs2[i].size * s2.scale);

    }

    g2.closePath();
    g2.stroke();

            var x1 = centerX - s.x;
        	var y1 = centerY - s.y;
        	x1 /= s.scale;
        	y1 /= s.scale;

            var x2 = centerX - s2.x;
            var y2 = centerY - s2.y;
            x2 /= s2.scale;
            y2 /= s2.scale;

    if (o)
    {
        if (s.scale < maxSize)
        {
            s.scale += stepSize;
        }
        else
        {
            o = false;
        }
    }
    else
    {
        if (s.scale > minSize)
                {
                    s.scale -= stepSize;
                }
                else
                {
                    o = true;
                }
    }

    if (o2)
        {
            if (s2.scale < maxSize)
            {
                s2.scale += stepSize;
            }
            else
            {
                o2 = false;
            }
        }
        else
        {
            if (s2.scale > minSize)
                    {
                        s2.scale -= stepSize;
                    }
                    else
                    {
                        o2 = true;
                    }
        }



    	//s.scale += e.wheelDelta/10000.0;
    	x1 *= s.scale;
    	y1 *= s.scale;

        x2 *= s2.scale;
        y2 *= s2.scale;

    	s.x = centerX - x1;
    	s.y = centerY - y1;

        s2.x = centerX - x2;
        s2.y = centerY - y2;








}


function clickk()
{
   //alert('wer');
   //var bd = document.getElementById('body');
   // bd.i.innerHTML("234324234<br/>");

for (var i = 0; i < ms.length-1; i++)
{
    ms[i] = ms[i+1];
}
    ms[ms.length-1] = Math.floor(Math.random()*test);
    g.beginPath();

    g.clearRect(0,0,100,100);

    var max = 0;
    for (i = 0; i < ms.length; i++)
    {
        if (ms[i] > max) max = ms[i];
    }

for (i = 0; i < ms.length; i++)
{
    g.moveTo(i+.5,30);
    g.strokeStyle = 'black';
    g.lineWidth = 1;
    g.lineTo(i+.5,30 - (ms[i]/max*myG.height));

}

    g.closePath();
    g.stroke();
}

function testing()
{
    test += 10;
}

function testing2()
{
    test -= 10;
}

function testing3()
{
    s.scale += 0.1;
}

function md(e)
{
    //s.mouseX = event.clientX;
    //s.mouseY = event.clientY;
	
	s.mouseX = e.offsetX;
	s.mouseY = e.offsetY;
    s2.mouseX = e.offsetX;
    s2.mouseY = e.offsetY;

    s.curX = s.x;
    s.curY = s.y;
    s2.curX = s2.x;
    s2.curY = s2.y;
    s.ismouse = true;
	//alert(e.offsetY);
}

function mu()
{
    s.ismouse = false;
    s.curX = s.x;
    s.curY = s.y;
    s2.curX = s2.x;
    s2.curY = s2.y;
}

function mm(e)
{
    if (s.ismouse)
    {
        s.x = s.curX + e.offsetX - s.mouseX;
        s.y = s.curY + e.offsetY - s.mouseY;
        s2.x = s2.curX + e.offsetX - s.mouseX;
        s2.y = s2.curY + e.offsetY - s.mouseY;
    }

    //centerX = e.offsetX;
    //centerY = e.offsetY;

}



function onMouseWheel(e) {
    e = e || event;

    if (!e.wheelDelta) {
        //e.wheelDelta = -40*e.detail; // для Firefox
    }
    
	var x1 = e.offsetX - s.x;
	var y1 = e.offsetY - s.y;
	x1 /= s.scale;
	y1 /= s.scale;
	s.scale += e.wheelDelta/10000.0;
	x1 *= s.scale;
	y1 *= s.scale;
		
	s.x = e.offsetX - x1;
	s.y = e.offsetY - y1;
    
}


/*setTimeout(click, 2000);*/
//setInterval(clickk, 30);
setInterval(myTick, 30);
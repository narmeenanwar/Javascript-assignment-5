var counting = 0;
var count = document.getElementById('count')

function increase(){
    counting++;
    count.innerHTML = counting;
}

function decrease(){
    counting--;
    count.innerHTML = counting;
}

var body = document.body

function nightMode(){
    body = body.style.cssText = "background-color: black; color: white"
}

function lightMode(){
    body = body.style.cssText = "background-color: white; color: black"
}

function chaseBoard(){
    var box = document.getElementById('box')
    
    for(var i = 0; i < 20; i++){

        if(i % 2 === 0){
        box.innerHTML += "<div id='boxes'></div>"

            
        }else{
        box.innerHTML += "<div id='white'></div>"
        }
    }
}
chaseBoard()
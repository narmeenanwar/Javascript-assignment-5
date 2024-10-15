function deleteData(e){
   var row = e.parentNode.style.display = 'none'
}

function changedImage(img, event){
    var img = img
    if(event.type === 'mouseover') {img.src = 'https://thumbs.dreamstime.com/b/open-wood-door-blank-window-4579606.jpg'}
    else{img.src = 'https://png.pngtree.com/png-clipart/20230820/original/pngtree-closed-wooden-door-icon-in-cartoon-style-on-a-white-background-picture-image_8085065.png'}
}


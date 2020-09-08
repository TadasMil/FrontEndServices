function handleColorChange (id) {
    var bns = document.querySelectorAll(".who-are-you");

    bns.forEach(btn => {
        if(btn.id == id){
            if(btn.classList.contains('who-are-you-color')){              
                btn.classList.remove('who-are-you-color')
            } else {
                btn.classList.add('who-are-you-color')
            }
        }
    })
}



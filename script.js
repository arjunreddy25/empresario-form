const fields = document.getElementsByClassName('fields')
const btns = document.getElementsByTagName('button')

var page = 1;

function disable(a, b){
    for (let i = a; i < b; i++) {
        fields[i].style.display = "none"    
    }
}

function enable(a, b) { 
    for (let i = a; i < b; i++) {
        fields[i].style.display = "block"    
    }
}

btns[1].addEventListener('click', ()=>{
    if (page == 1) {
        page = 2;
        disable(0, 4)
        enable(5, 8)
        disable(9, 12)
        btns[0].disabled = false
    }
    else if (page == 2) {
        page = 3;
        disable(0, 4)
        disable(5, 8)
        enable(9, 12)
        btns[1].style.display = "none"
        btns[2].style.display = "block"
    }
})

btns[0].addEventListener('click', ()=>{
    if (page == 2) {
        page = 1;
        enable(0, 4)
        disable(5, 8)
        disable(9, 12)
        btns[0].disabled = true
    }
    else if (page == 3) {
        page = 2;
        disable(0, 4)
        enable(5, 8)
        disable(9, 12)
        btns[1].style.display = "block"
        btns[2].style.display = "none"
    }
    else if (page == 1) {
        
    }
})

disable(5, 13)
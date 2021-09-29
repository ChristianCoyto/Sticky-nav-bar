var header = document.getElementById('Header')

window.addEventListener("scroll", () =>{
    var scroll = window.scrollY;
    if(scrollY>0){
        header.style.backgroundColor = '#404145';

    }
    else{
        header.style.backgroundColor = 'transparent';
    }

})
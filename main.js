var header = document.getElementById('Header')

window.addEventListener("scroll", () =>{
    var scroll = window.scrollY;
    if(scrollY>0){
        header.style.backgroundColor = 'rgba(64, 65, 57, 82%)';

    }
    else{
        header.style.backgroundColor = 'transparent';
    }

})
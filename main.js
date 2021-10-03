var header = document.getElementById('Header')

/* window.addEventListener("scroll", () =>{
    if(window.scrollY > 0){
        header.style.backgroundColor = 'rgba(64, 65, 57, 82%)';

    }else{
        header.style.backgroundColor = 'transparent';
    }
}) */

window.addEventListener("scroll", () => {
    header.classList.toggle('scroll', (window.scrollY > 0));
})
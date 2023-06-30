// navbar mobile
const toggle = document.querySelectorAll('#toggle-menu');
const navMenu = document.querySelector('.nav-menu');

toggle.forEach(e => {
    e.addEventListener('click', function(){
        navMenu.classList.toggle('navbar-active');
    })
})

// navbar dekstop
window.onscroll = function(){
    let scrollSaatIni = window.pageYOffset;
    console.log(scrollSaatIni);
    if(scrollSaatIni > 0){
        let style = `background: white; box-shadow: 0 3px 5px rgba(0,0,0,0.2);`;

        document.querySelector(".navbar-section").style = style;
    }else{
        let style = `background: transparent;`;
        document.querySelector(".navbar-section").style = style;
    }
    
}
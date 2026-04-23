const sex = window.document.getElementsByName('radsex');
const image = window.document.querySelector('img#img');
const nome = window.document.querySelector('#name');

let site = window.document.querySelector('#site');
let bloco = window.document.querySelector('#semibloco');
let area = window.document.querySelector('#areanome');
let areaftperfil = window.document.querySelector('#areaftperfil');

const cadastro = window.document.querySelector('#cadastro');

cadastro.addEventListener('click', () =>{
    
    if(nome.value == 0){
        window.alert('Coloque um Name válido')
    }else{
        
        site.style.zIndex ='4';
        site.style.position ='relative';      
        semibloco.style.display ='none';
        semibloco.style.transition = ' opacity 0.01s';     
        area.innerHTML = `${nome.value}`;     
    }


    if(sex[0].checked){
        image.src = '../midia/low.jpg';
    }else if (sex[1].checked){
        image.src = '../midia/mm.avif';
    }else{
        image.src = '../midia/imgrobo.png'
    }

})



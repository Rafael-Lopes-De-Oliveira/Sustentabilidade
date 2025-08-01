const sex = window.document.getElementsByName('radsex');
const image = window.document.querySelector('img#img');
const nome = window.document.querySelector('#name');

let site = window.document.querySelector('#site');
let bloco = window.document.querySelector('#bloco');
let area = window.document.querySelector('#areanome');
let areaftperfil = window.document.querySelector('#areaftperfil');

const cadastro = window.document.querySelector('#cadastro');

cadastro.addEventListener('click', () =>{
    if(nome.value == 0){
        window.alert('Coloque um Name válido')
    }else{
        site.style.display = 'block';
        bloco.style.display = 'none';
        bloco.style.transition = ' opacity 0.2s';
        
        area.innerHTML = `${nome.value}`;
        area.style.background = 'white';
        
        
        
        if(sex[0].checked){
            image.src = 'perfil.png'
        }else if(sex[1].checked){
            image.src = 'mm.avif';
            areaftperfil.style.background = '#5bc287'
        }else if(sex[2].checked){
            image.src = 'low.jpg'
        }
    }

})



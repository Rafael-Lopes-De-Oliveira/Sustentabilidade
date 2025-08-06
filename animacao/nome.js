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
        document.body.style.zIndex = '3'
        semibloco.style.zIndex ='1';
        semibloco.style.transition = ' opacity 0.2s';
        // site.style.display = 'block';
        // bloco.style.display = 'none';
        
        area.innerHTML = `${nome.value}`;

       
        
        
        
        if(sex[0].checked){
            image.src = 'midia/perfil.png'
        }else if(sex[1].checked){
            image.src = 'midia/mm.avif';
        }else if(sex[2].checked){
            image.src = 'midia/low.jpg'
        }
    }

})



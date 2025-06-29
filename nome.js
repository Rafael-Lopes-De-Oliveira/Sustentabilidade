function cadastro(){

    let site = window.document.querySelector('#site')
    let bloco = window.document.querySelector('#bloco')
    const nome = window.document.querySelector('#name')
    let area = window.document.querySelector('#areanome')
    const sex = window.document.getElementsByName('radsex')
    const image = window.document.querySelector('img#img')
    let nada = window.document.querySelector('#nada')


    if( nome.value.length == 0){
        window.alert('NOME INEXISTENTE!!')
    }else{
        site.style.display = 'block'
        bloco.style.display = 'none';
        bloco.style.transition = ' opacity 0.2s';
    
        area.innerHTML = `${nome.value}`
        area.style.background = 'white'
    }

    if(sex[0].checked){
        image.src = 'perfil.png'
    }else if(sex[1].checked){
        image.src = 'mm.avif';
        nada.style.background = '#5bc287'
    }else if(sex[2].checked){
         image.src = 'wolf1.jpg'
    }
}


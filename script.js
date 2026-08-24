function escrevendoLetra(){
    function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra();

function menuMobol(){

    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('.navegacao-primaria');

    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('.fa-x');
        navMenu.classList.toggle('ativado');
    });
}

function sobreMim(){
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducacao = document.querySelectorAll('.education_content div');
    const liEducacao = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    divEducacao[0].classList.add('ativo');
    liEducacao[0].classList.add('ativo');

    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((li)=>{
            li.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index){
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducacao.forEach((li)=>{
            li.classList.remove('ativo');
        });
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }

    liExperiencia.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index);
        });
    });

    liEducacao.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index);
        });
    });
}

sobreMim();
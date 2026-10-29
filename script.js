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
        ativaMenu.classList.toggle('fa-bars');
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

    navMenu.querySelectorAll('a').forEach((link)=>{
    link.addEventListener('click', ()=>{
        navMenu.classList.remove('ativado');
        ativaMenu.classList.add('fa-bars');
        ativaMenu.classList.remove('fa-x');
        });
    });
}

menuMobol();

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

function filtroProjetos(){
    const botoes = document.querySelectorAll('.projects_models ul li');
    const projetos = document.querySelectorAll('.projects_armazenamento ul li');
    const galeria = document.querySelector('.projects_armazenamento');

    function filtrar(categoria){
        projetos.forEach((projeto)=>{
            projeto.classList.remove('ativo');
        });

        void galeria.offsetWidth;

        projetos.forEach((projeto)=>{
            if (categoria === 'all' || projeto.dataset.category === categoria){
                projeto.classList.add('ativo');
            }
        });
    }

    botoes.forEach((botao)=>{
        botao.addEventListener('click', ()=>{
            if (botao.classList.contains('ativo')) return;
            botoes.forEach((b)=> b.classList.remove('ativo'));
            botao.classList.add('ativo');
            filtrar(botao.dataset.filter);
        });
    });

    filtrar('all');
}

filtroProjetos();

function tooltipProjetos(){
    const tooltip = document.querySelector('#tooltip-projeto');
    const galeria = document.querySelector('.projects_armazenamento');
    const deslocamento = 16;

    galeria.addEventListener('mouseover', (e)=>{
        const projeto = e.target.closest('li[data-descricao]');
        if (!projeto) return;
        tooltip.textContent = projeto.dataset.descricao;
        tooltip.classList.add('visivel');
    });

    galeria.addEventListener('mousemove', (e)=>{
        let x = e.clientX + deslocamento;
        let y = e.clientY + deslocamento;

        const largura = tooltip.offsetWidth;
        const altura = tooltip.offsetHeight;

        if (x + largura > window.innerWidth){
            x = e.clientX - largura - deslocamento;
        }
        if (y + altura > window.innerHeight){
            y = e.clientY - altura - deslocamento;
        }

        tooltip.style.transform = `translate(${x}px, ${y}px)`;
    });

    galeria.addEventListener('mouseout', (e)=>{
        const projeto = e.target.closest('li[data-descricao]');
        if (!projeto) return;
        if (projeto.contains(e.relatedTarget)) return;
        tooltip.classList.remove('visivel');
    });
}

tooltipProjetos();
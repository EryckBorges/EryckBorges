const dica = document.querySelector('#dica');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const imagem = document.querySelector('#img-fundo');
const btnAgain = document.querySelector('#btnAgain');
const paimon = document.querySelector('#img-paimon');
const vida1 = document.querySelector('#vida1');
const vida2 = document.querySelector('#vida2');
const vida3 = document.querySelector('#vida3');
const pont = document.querySelector('#input-pont');
const dicaBonus = document.querySelector('#bonus');
const btnBonus = document.querySelector('#btnDica');

//Array com os dados dos personagens

const personagens = [
    {
        nome: "diluc",
        imagem: "./image/dilucBack.mp4",
        dica: "Este personagem de Genshin Impact comanda as chamas e é dono da Taverna Dawn Winery. Quem é?",
        desc: "",
        bonus:"Este herdeiro da Casa Ragnvindr é tanto o mestre das chamas quanto o proprietário da Taverna Dawn Winery.",
    },
    {
        nome: "hutao",
        imagem: "./image/hutaoBack.mp4",
        dica: "Quem em Liyue adora assustar os outros, tem um amuleto especial e comanda um Urso de Papel Flamejante? Descubra o nome dessa piromaníaca divertida!",
        desc: "",
        bonus: "Em Liyue, ela é a diretora alegre do Funeral Parlor, fascinada por histórias assustadoras e com um espírito animado.",
    },
    {
        nome: "zhongli",
        imagem: "./image/zhongliBack.mp4",
        dica: "Em Liyue, quem é conhecido como o guardião das rochas, mestre da petrificação, e que carrega consigo a essência de uma serpente?",
        desc: "",
        bonus: "Em Liyue, este arconte da terra é conhecido por sua serenidade, mestria nas rochas e compromisso com contratos.",
    },
    {
        nome: "xiao",
        imagem: "./image/xiaoBack.mp4",
        dica: "Este vigilante solitário de Liyue, com uma paixão pelos céus e um passado misterioso, empunha a Lâmina Alada para proteger a justiça. Quem é este guardião das sombras em Genshin Impact?",
        desc: "",
        bonus: "Vagando pelos céus de Liyue, este guardião solitário possui uma ligação única com os yakshas e uma busca incessante por aniquilar os demônios.",
    },
    {
        nome: "kazuha",
        imagem: "./image/kazuhaBack.mp4",
        dica: "Vagando pelos ventos de Mondstadt, este viajante anemo é um amante da poesia e da natureza. Seus versos dançam no ar enquanto ele manipula a energia do vento. Quem é esse poeta errante em Genshin Impact?",
        desc: "",
        bonus: "Este viajante anemo de Mondstadt é conhecido por sua paixão pela poesia e pela brisa suave que o envolve.",
    },
    {
        nome: "scaramouche",
        imagem: "./image/scaraBack.mp4",
        dica: "Este membro da Fatui em Inazuma é conhecido por seu comportamento extravagante e atitude provocadora. Com sua máscara eletrovisionária, ele mantém suas verdadeiras intenções ocultas. Quem é esse agente ardiloso em Genshin Impact?",
        desc: "",
        bonus:"Seu nome começa com Sca...",
    },
    {
        nome: "raiden",
        imagem: "./image/raidenBack.mp4",
        dica: "Em Inazuma, a comandante supremo governa com autoridade, equilibrando seu papel divino e humano. Ela é a portadora da visão Eletro e anseia por alcançar a eternidade. Quem é essa governante de Inazuma em Genshin Impact?",
        desc: "",
        bonus: "Seu nome começa com Ra...",
    },
    {
        nome: "barbara",
        imagem: "./image/barbaraBack.mp4",
        dica: "Esta encantadora barda de Mondstadt é conhecida por sua paixão pela música e medicina. Seu nome começa com a letra 'B' e ela é frequentemente associada a um elemento que tem propriedades refrescantes. Quem é essa personagem?",
        desc: "",
        bonus:"Esta doce cantora de Mondstadt é a Irmã Deaconess da Igreja de Favonius, conhecida por suas habilidades de cura e alegres apresentações musicais.",
    },
    {
        nome: "amber",
        imagem: "https://images6.alphacoders.com/128/1283847.jpg",
        dica: "Esta intrépida arqueira é a defensora de Mondstadt, conhecida por sua habilidade com arco e flecha. Ela tem um espírito livre, sempre pronta para ajudar em qualquer situação. Seu nome começa com a letra 'A'. Quem é essa atiradora destemida?",
        desc: "",
        bonus: "Esta arqueira de Outrora-Knights em Mondstadt é conhecida por sua atitude otimista, habilidades pirotécnicas e paixão por aventuras.",
    },
    {
        nome: "albedo",
        imagem: "https://s2-techtudo.glbimg.com/xY3o6KBQ8UZsMFrabc1s-GuHSSA=/0x0:1919x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/B/b/Hsts0eSXAjTYrfOJBTTA/albedo-genshin-impact-techtudo.png",
        dica: "Este alquimista talentoso e estudioso de Mondstadt é conhecido por sua habilidade em manipular o poder do elemento Geo. Sua paixão pela alquimia e suas vestimentas brancas são características marcantes. Quem é este personagem que explora o poder dos elementos em Teyvat?",
        desc: "",
        bonus: " Como o Capitão da Ordem dos Alquimistas em Mondstadt, este mestre da alquimia busca desvendar os segredos do mundo. ",
    },
    {
        nome: "qiqi",
        imagem: "./image/qiqiBack.mp4",
        dica: "Esta jovem e adorável zumbi de Liyue é uma usuária de Cryo, especializada em cura. Seu nome começa com a letra 'Q' e ela é frequentemente acompanhada por um pequeno amigo. Quem é essa personagem que traz um toque gelado ao grupo?",
        desc: "",
        bonus: "Esta adorável e zumbi fofa de Liyue é conhecida como a Assistente da Florista.",
    },
    {
        nome: "jean",
        imagem: "./image/jeanBack.mp4",
        dica: "Esta Cavalheira de Favonius é uma líder dedicada de Mondstadt, habilidosa no uso da espada e usuária do elemento Anemo. Ela é conhecida por sua compaixão e liderança exemplar. Quem é essa personagem que protege Mondstadt com graciosidade e poder?",
        desc: "",
        bonus: " Como a Grande Mestra dos Cavaleiros de Favonius, esta líder diligente de Mondstadt é conhecida por sua generosidade, habilidades anemo e dedicação em proteger a cidade.",
    },
    {
        nome: "klee",
        imagem: "./image/kleeBack.mp4",
        dica: "Esta pequena piromaniaca é uma explosiva usuária de Pyro, conhecida por sua paixão por explosões e bombas. Seu nome começa com a letra 'K' e ela é uma verdadeira amante da diversão. Quem é essa adorável e ardente arremessadora de bombas em Teyvat?",
        desc: "",
        bonus: "Esta pequena e explosiva cavaleira de Mondstadt é uma alquimista mirim com uma paixão por bombas.",
    },
];

//exibe o user 

document.querySelector('#imgUser').src = localStorage.getItem('imgUser');
document.querySelector('#name').innerHTML = localStorage.getItem('nomeUser');
document.querySelector('#imgUser').style.background = localStorage.getItem('colorUser');


//Configura isso na parte de edição de usuário

document.querySelector('#imgPerfil img').src = localStorage.getItem('imgUser');
document.querySelector('#nickName').value = localStorage.getItem('nomeUser');
document.querySelector('#imgPerfil img').style.background = localStorage.getItem('colorUser');

if(document.querySelector('#name').innerHTML == '') {
    document.querySelector('#imgUser').src = './image/viajante.png';
    document.querySelector('#name').innerHTML = 'Aether';
    document.querySelector('#imgUser').style.background =  '#000';
    document.querySelector('#imgPerfil img').src = './image/viajante.png';
    document.querySelector('#nickName').value = 'Aether';
    document.querySelector('#imgPerfil img').style.background = '#000';
}

//É uma função para verificar se esse avatar ja foi comprado

const dilucVerifica = () => {
    if(localStorage.getItem('dilucAvatar') == 'comprado') {
        document.querySelector('#diluc').classList.remove('disabled');
        document.querySelector('#diluc').removeAttribute('disabled');
        let imgSelect = document.querySelector('#diluc img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('dilucAvatar') !== 'comprado') {
        document.querySelector('#diluc').classList.add('disabled');
        document.querySelector('#diluc').setAttribute('disabled', 'true');
    }
}

dilucVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const albedoVerifica = () => {
    if(localStorage.getItem('albedoAvatar') == 'comprado') {
        document.querySelector('#albedo').classList.remove('disabled');
        document.querySelector('#albedo').removeAttribute('disabled');
        let imgSelect = document.querySelector('#albedo img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('albedoAvatar') !== 'comprado') {
        document.querySelector('#albedo').classList.add('disabled');
        document.querySelector('#albedo').setAttribute('disabled', 'true');
    }
}

albedoVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const ventiVerifica = () => {
    if(localStorage.getItem('ventiAvatar') == 'comprado') {
        document.querySelector('#venti').classList.remove('disabled');
        document.querySelector('#venti').removeAttribute('disabled');
        let imgSelect = document.querySelector('#venti img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('ventiAvatar') !== 'comprado') {
        document.querySelector('#venti').classList.add('disabled');
        document.querySelector('#venti').setAttribute('disabled', 'true');
    }
}

ventiVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const eulaVerifica = () => {
    if(localStorage.getItem('eulaAvatar') == 'comprado') {
        document.querySelector('#eula').classList.remove('disabled');
        document.querySelector('#eula').removeAttribute('disabled');
        let imgSelect = document.querySelector('#eula img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('eulaAvatar') !== 'comprado') {
        document.querySelector('#eula').classList.add('disabled');
        document.querySelector('#eula').setAttribute('disabled', 'true');
    }
}

eulaVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const kleeVerifica = () => {
    if(localStorage.getItem('kleeAvatar') == 'comprado') {
        document.querySelector('#klee').classList.remove('disabled');
        document.querySelector('#klee').removeAttribute('disabled');
        let imgSelect = document.querySelector('#klee img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('kleeAvatar') !== 'comprado') {
        document.querySelector('#klee').classList.add('disabled');
        document.querySelector('#klee').setAttribute('disabled', 'true');
    }
}

kleeVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const jeanVerifica = () => {
    if(localStorage.getItem('jeanAvatar') == 'comprado') {
        document.querySelector('#jean').classList.remove('disabled');
        document.querySelector('#jean').removeAttribute('disabled');
        let imgSelect = document.querySelector('#jean img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('jeanAvatar') !== 'comprado') {
        document.querySelector('#jean').classList.add('disabled');
        document.querySelector('#jean').setAttribute('disabled', 'true');
    }
}

jeanVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const monaVerifica = () => {
    if(localStorage.getItem('monaAvatar') == 'comprado') {
        document.querySelector('#mona').classList.remove('disabled');
        document.querySelector('#mona').removeAttribute('disabled');
        let imgSelect = document.querySelector('#mona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('monaAvatar') !== 'comprado') {
        document.querySelector('#mona').classList.add('disabled');
        document.querySelector('#mona').setAttribute('disabled', 'true');
    }
}

monaVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const barbaraVerifica = () => {
    if(localStorage.getItem('barbaraAvatar') == 'comprado') {
        document.querySelector('#barbara').classList.remove('disabled');
        document.querySelector('#barbara').removeAttribute('disabled');
        let imgSelect = document.querySelector('#barbara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('barbaraAvatar') !== 'comprado') {
        document.querySelector('#barbara').classList.add('disabled');
        document.querySelector('#barbara').setAttribute('disabled', 'true');
    }
}

barbaraVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const amberVerifica = () => {
    if(localStorage.getItem('amberAvatar') == 'comprado') {
        document.querySelector('#amber').classList.remove('disabled');
        document.querySelector('#amber').removeAttribute('disabled');
        let imgSelect = document.querySelector('#amber img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('amberAvatar') !== 'comprado') {
        document.querySelector('#amber').classList.add('disabled');
        document.querySelector('#amber').setAttribute('disabled', 'true');
    }
}

amberVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const dionaVerifica = () => {
    if(localStorage.getItem('dionaAvatar') == 'comprado') {
        document.querySelector('#diona').classList.remove('disabled');
        document.querySelector('#diona').removeAttribute('disabled');
        let imgSelect = document.querySelector('#diona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('dionaAvatar') !== 'comprado') {
        document.querySelector('#diona').classList.add('disabled');
        document.querySelector('#diona').setAttribute('disabled', 'true');
    }
}

dionaVerifica();

//É uma função para verificar se esse avatar ja foi comprado

const razorVerifica = () => {
    if(localStorage.getItem('razorAvatar') == 'comprado') {
        document.querySelector('#razor').classList.remove('disabled');
        document.querySelector('#razor').removeAttribute('disabled');
        let imgSelect = document.querySelector('#razor img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    }else if(localStorage.getItem('razorAvatar') !== 'comprado') {
        document.querySelector('#razor').classList.add('disabled');
        document.querySelector('#razor').setAttribute('disabled', 'true');
    }
}

razorVerifica();

const bennettVerifica = () => {
    if(localStorage.getItem('bennettAvatar') == 'comprado') {
        document.querySelector('#bennett').classList.remove('disabled');
        document.querySelector('#bennett').removeAttribute('disabled');
        let imgSelect = document.querySelector('#bennett img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('bennettAvatar') !== 'comprado') {
        document.querySelector('#bennett').classList.add('disabled');
        document.querySelector('#bennett').setAttribute('disabled', 'true');
    }
}

bennettVerifica();

const fishVerifica = () => {
    if(localStorage.getItem('fishAvatar') == 'comprado') {
        document.querySelector('#fish').classList.remove('disabled');
        document.querySelector('#fish').removeAttribute('disabled');
        let imgSelect = document.querySelector('#fish img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('fishAvatar') !== 'comprado') {
        document.querySelector('#fish').classList.add('disabled');
        document.querySelector('#fish').setAttribute('disabled', 'true');
    }
}

fishVerifica();

const kayeaVerifica = () => {
    if(localStorage.getItem('kayeaAvatar') == 'comprado') {
        document.querySelector('#kayea').classList.remove('disabled');
        document.querySelector('#kayea').removeAttribute('disabled');
        let imgSelect = document.querySelector('#kayea img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('kayeaAvatar') !== 'comprado') {
        document.querySelector('#kayea').classList.add('disabled');
        document.querySelector('#kayea').setAttribute('disabled', 'true');
    }
}

kayeaVerifica();

const lisaVerifica = () => {
    if(localStorage.getItem('lisaAvatar') == 'comprado') {
        document.querySelector('#lisa').classList.remove('disabled');
        document.querySelector('#lisa').removeAttribute('disabled');
        let imgSelect = document.querySelector('#lisa img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('lisaAvatar') !== 'comprado') {
        document.querySelector('#lisa').classList.add('disabled');
        document.querySelector('#lisa').setAttribute('disabled', 'true');
    }
}

lisaVerifica();

const noelleVerifica = () => {
    if(localStorage.getItem('noelleAvatar') == 'comprado') {
        document.querySelector('#noelle').classList.remove('disabled');
        document.querySelector('#noelle').removeAttribute('disabled');
        let imgSelect = document.querySelector('#noelle img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('noelleAvatar') !== 'comprado') {
        document.querySelector('#noelle').classList.add('disabled');
        document.querySelector('#noelle').setAttribute('disabled', 'true');
    }
}

noelleVerifica();

const rosariaVerifica = () => {
    if(localStorage.getItem('rosariaAvatar') == 'comprado') {
        document.querySelector('#rosaria').classList.remove('disabled');
        document.querySelector('#rosaria').removeAttribute('disabled');
        let imgSelect = document.querySelector('#rosaria img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('rosariaAvatar') !== 'comprado') {
        document.querySelector('#rosaria').classList.add('disabled');
        document.querySelector('#rosaria').setAttribute('disabled', 'true');
    }
}

rosariaVerifica();

const sucroseVerifica = () => {
    if(localStorage.getItem('sucroseAvatar') == 'comprado') {
        document.querySelector('#sucrose').classList.remove('disabled');
        document.querySelector('#sucrose').removeAttribute('disabled');
        let imgSelect = document.querySelector('#sucrose img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
    } else if(localStorage.getItem('sucroseAvatar') !== 'comprado') {
        document.querySelector('#sucrose').classList.add('disabled');
        document.querySelector('#sucrose').setAttribute('disabled', 'true');
    }
}

sucroseVerifica();

//Sortei as Dicas

const sorteia = () => {
    const persExcolhido = Math.floor(Math.random() * personagens.length);
    const excolhido = localStorage.setItem('Personagem', persExcolhido)
    const caracter = localStorage.setItem('Nome', personagens[`${persExcolhido}`].nome);
    const bonus = localStorage.setItem('Bonus', personagens[`${persExcolhido}`].bonus);
    dica.innerHTML = personagens[`${persExcolhido}`].dica;
}

sorteia();

let vidas = 3;

const Vidas = () => {
    if(vidas === 0){
        const efeito = "./music/gamerOver.mp3";
        audio.src = efeito;
        audio.play(); 
        vida1.style.display = "none";
        dica.innerHTML = "Suas chances acabaram";
        input.style.display = "none";
        btn.style.display = "none";
        btnAgain.style.display = "block";
        clearTimeout(opendica);
    }else if(vidas === 3){
        const efeito = "./music/percaVida.mp3";
        audio.src = efeito;
        audio.play(); 
        vida3.setAttribute('class', 'overCora');
        setTimeout(() => {
            vida3.style.display = "none";
            vidas--
        }, 1500);
    }
    else if(vidas === 2){
        const efeito = "./music/percaVida.mp3";
        audio.src = efeito;
        audio.play(); 
        vida2.setAttribute('class', 'overCora');
        setTimeout(() => {
            vida2.style.display = "none";
            vidas--
        }, 1500);
    }
    else if(vidas === 1){
        const efeito = "./music/percaVida.mp3";
        audio.src = efeito;
        audio.play(); 
        vida1.setAttribute('class', 'overCora');
        setTimeout(() => {
            vida1.style.display = "none";
            vidas--
        }, 1500);
    }
} 

btnAgain.addEventListener('click', () => {
    window.location.reload();
});

let pontos = parseInt(localStorage.getItem('Money')) || 0;

//Verificação de Money

if(localStorage.getItem('Money') == null) {
    pont.placeholder = `R$ 0,00`;
}else {
    pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
}

const audio = new Audio();
        
btn.addEventListener('click', () => {
    const persDigitado = input.value;
    const personagemDig = persDigitado.toLowerCase();
    const person = localStorage.getItem('Nome');
    const perexcolhido = localStorage.getItem('Personagem');

    if(personagemDig.trim() == person){
        imagem.src = personagens[`${perexcolhido}`].imagem;
        pontos+= 100;
        let money = localStorage.setItem('Money', pontos);  
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        const efeito = "./music/moedas.mp3";
        audio.src = efeito;
        audio.play(); 
        dica.innerHTML = `Parabéns você acertou o Personagem que paimon estava pensando era ${personagens[`${perexcolhido}`].nome}`;
        input.style.display = "none";
        btn.style.display = "none";
        btnBonus.style.display = "none";
        personagens.splice(perexcolhido, 1);
        setTimeout(() => {
            sorteia();
            input.value = " ";
            input.style.display = "block";
            btn.style.display = "block";
        }, 5000);
    }else if(personagemDig.trim() == 'bom dia' || personagemDig.trim() == 'bomdia' || personagemDig.trim() == 'Bom Dia' || personagemDig.trim() == 'BomDia') {
        dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Bom Dia ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[`${localStorage.getItem('Personagem')}`].dica;
            input.value = " ";
        }, 4000);
    }else if(personagemDig.trim() == 'boa tarde' || personagemDig.trim() == 'boatarde' || personagemDig.trim() == 'Boa Tarde' || personagemDig.trim() == 'BoaTarde') {
        dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Tarde ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[`${localStorage.getItem('Personagem')}`].dica;
            input.value = " ";
        }, 4000);
    }else if(personagemDig.trim() == 'boa noite' || personagemDig.trim() == 'boanoite' || personagemDig.trim() == 'Boa Noite' || personagemDig.trim() == 'BoaNoite') {
        dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Noite ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
        setTimeout(() => {
            dica.innerHTML = personagens[`${localStorage.getItem('Personagem')}`].dica;
            input.value = " ";
        }, 4000);
    }else{ 
        pontos = Math.max(0, pontos - 50);
        localStorage.setItem('Money', pontos);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dica.innerHTML = `O Personagem que Paimon pensou é outro`;
        btn.setAttribute('disabled', '');
        Vidas();
        let opendica = setTimeout(() => {
            btn.removeAttribute('disabled');
            dica.innerHTML = personagens[`${perexcolhido}`].dica;
        }, 2200);
    }
});

document.addEventListener('keydown', (event) => {
    if(event.code === 'Enter') {
        const persDigitado = input.value;
        const personagemDig = persDigitado.toLowerCase();
        const person = localStorage.getItem('Nome');
        const perexcolhido = localStorage.getItem('Personagem');
    
        if(personagemDig.trim() == person){
            imagem.src = personagens[`${perexcolhido}`].imagem;
            pontos+= 100;
            let money = localStorage.setItem('Money', pontos);  
            pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
            const efeito = "./music/moedas.mp3";
            audio.src = efeito;
            audio.play(); 
            dica.innerHTML = `Parabéns você acertou o Personagem que paimon estava pensando era ${personagens[`${perexcolhido}`].nome}`;
            input.style.display = "none";
            btn.style.display = "none";
            btnBonus.style.display = "none";
            personagens.splice(perexcolhido, 1);
            setTimeout(() => {
                sorteia();
                input.value = " ";
                input.style.display = "block";
                btn.style.display = "block";
            }, 5000);
        }else if(personagemDig.trim() == 'bom dia' || personagemDig.trim() == 'bomdia' || personagemDig.trim() == 'Bom Dia' || personagemDig.trim() == 'BomDia') {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Bom Dia ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
            setTimeout(() => {
                dica.innerHTML = personagens[`${localStorage.getItem('Personagem')}`].dica;
                input.value = " ";
            }, 4000);
        }else if(personagemDig.trim() == 'boa tarde' || personagemDig.trim() == 'boatarde' || personagemDig.trim() == 'Boa Tarde' || personagemDig.trim() == 'BoaTarde') {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Tarde ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
            setTimeout(() => {
                dica.innerHTML = personagens[`${localStorage.getItem('Personagem')}`].dica;
                input.value = " ";
            }, 4000);
        }else if(personagemDig.trim() == 'boa noite' || personagemDig.trim() == 'boanoite' || personagemDig.trim() == 'Boa Noite' || personagemDig.trim() == 'BoaNoite') {
            dica.innerHTML = `<b style="color:yellow; margin-right:5px;">🟆</b>Boa Noite ${localStorage.getItem('nomeUser')}<b style="color:yellow; margin-left:5px;">🟆</b>`;
            setTimeout(() => {
                dica.innerHTML = personagens[`${localStorage.getItem('Personagem')}`].dica;
                input.value = " ";
            }, 4000);
        }else{ 
            pontos = Math.max(0, pontos - 50);
            localStorage.setItem('Money', pontos);
            pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
            dica.innerHTML = `O Personagem que Paimon pensou é outro`;
            btn.setAttribute('disabled', '');
            Vidas();
            let opendica = setTimeout(() => {
                btn.removeAttribute('disabled');
                dica.innerHTML = personagens[`${perexcolhido}`].dica;
            }, 2200);
        }
    }
   
});

const comprar = document.querySelector('#comprar');
const compras = document.querySelector('#compras');
const fechar = document.querySelector('#close');

compras.addEventListener('click', () => {
    if(comprar.style.display === "none") {
        const efeito = "./music/loja.mp3";
        audio.src = efeito;
        audio.play(); 
        comprar.style.display = "block";
    }else {
        comprar.style.display = "none";
    }
});

fechar.addEventListener('click', () => {
    comprar.style.display = "none";
});

const btnrest = document.querySelector('#btnrest');
const btnrest2 = document.querySelector('#btnrest2');
const btnrest3 = document.querySelector('#btnrest3');

btnrest.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 100 && vidas < 3) {
        vidas++;
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 100);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        if(vidas === 0){
            vida1.style.display = "block";
        }else if(vidas === 3){
            vida3.style.display = "block";
        }
        else if(vidas === 2){
            vida2.style.display = "block";
        }
        else if(vidas === 1){
            vida1.style.display = "block";
        }
    }else if(vidas >= 3) {
        btnrest.style.fontSize = "8pt";
        btnrest.innerHTML = "Vida Completa";
        btnrest.style.background = "#dd1440";
        btnrest.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest.innerHTML = "Comprar";
                btnrest.style.background = "black";
                btnrest.style.transition = "0.4s linear";
            }, 3000);
    }else if(vidas < 3 && localStorage.getItem('Money') < 100) {
        btnrest.style.fontSize = "8pt";
        btnrest.innerHTML = "Mora Insuficiente";
        btnrest.style.background = "#dd1440";
        btnrest.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest.innerHTML = "Comprar";
                btnrest.style.background = "black";
                btnrest.style.transition = "0.4s linear";
            }, 3000);
    }
});

btnrest3.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 300 && vidas < 3) {
        vidas = 3;
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        localStorage.setItem('Money', pontos-= 300);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        vida1.style.display = "block";
        vida2.style.display = "block";
        vida3.style.display = "block";
    }else if(vidas >= 3) {
        btnrest3.style.fontSize = "8pt";
        btnrest3.innerHTML = "Vida Completa";
        btnrest3.style.background = "#dd1440";
        btnrest3.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest3.innerHTML = "Comprar";
                btnrest3.style.background = "black";
                btnrest3.style.transition = "0.4s linear";
            }, 3000);
    }else if(vidas < 3 && localStorage.getItem('Money') < 200) {
        btnrest3.style.fontSize = "8pt";
        btnrest3.innerHTML = "Mora Insuficiente";
        btnrest3.style.background = "#dd1440";
        btnrest3.style.transition = "0.4s linear";
            setTimeout(() => {
                btnrest3.innerHTML = "Comprar";
                btnrest3.style.background = "black";
                btnrest3.style.transition = "0.4s linear";
            }, 3000);
    }
});

//Variavel de dicas

let dicas = 0;

//Compra de Dicas

dicaBonus.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 200 && dicas == 0) {
        dicas++;
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 200);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        btnBonus.style.display = "block";
        dicaBonus.innerHTML = "Esgotado";
        dicaBonus.style.background = "#dd1440";
        dicaBonus.style.transition = "0.4s linear";
    }else if(dicas > 0) {
        dicaBonus.innerHTML = "Esgotado";
        dicaBonus.style.background = "#dd1440";
        dicaBonus.style.transition = "0.4s linear";
    }else if(dicas == 0 && localStorage.getItem('Money') < 200) {
        dicaBonus.style.fontSize = "8pt";
        dicaBonus.innerHTML = "Mora Insuficiente";
        dicaBonus.style.background = "#dd1440";
        dicaBonus.style.transition = "0.4s linear";
            setTimeout(() => {
                dicaBonus.innerHTML = "Comprar";
                dicaBonus.style.background = "black";
                dicaBonus.style.transition = "0.4s linear";
            }, 3000);
    }
});

btnBonus.addEventListener('click', () => {
    dica.innerHTML = localStorage.getItem('Bonus');
    btnBonus.style.display = "none";
    dicaBonus.innerHTML = "Comprar";
    dicaBonus.style.background = "black";
    dicaBonus.style.transition = "0.4s linear";
    setTimeout(() => {
        dicas = 0;
        dica.innerHTML = personagens[`${localStorage.getItem('Personagem')}`].dica;
    }, 10000);
});

//Compra do Avatar do Diluc

const dilucAvatar = document.querySelector('#dilucAvatar');
const selectDiluc = document.querySelector('#diluc');

//Função da Compra do Avatar do Diluc

dilucAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('dilucAvatar') !== 'comprado') {
        localStorage.setItem('dilucAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dilucAvatar.innerHTML = "Esgotado";
        dilucAvatar.style.background = "#dd1440";
        dilucAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('dilucAvatar') == 'comprado') {
        dilucAvatar.innerHTML = "Esgotado";
        dilucAvatar.style.background = "#dd1440";
        dilucAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('dilucAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        dilucAvatar.style.fontSize = "8pt";
        dilucAvatar.innerHTML = "Mora Insuficiente";
        dilucAvatar.style.background = "#dd1440";
        dilucAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                dilucAvatar.innerHTML = "Comprar";
                dilucAvatar.style.background = "black";
                dilucAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const ventiAvatar = document.querySelector('#ventiAvatar');
const selectVenti = document.querySelector('#venti');

//Função da Compra do Avatar do Albedo

ventiAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('ventiAvatar') !== 'comprado') {
        localStorage.setItem('ventiAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        ventiAvatar.innerHTML = "Esgotado";
        ventiAvatar.style.background = "#dd1440";
        ventiAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('ventiAvatar') == 'comprado') {
        ventiAvatar.innerHTML = "Esgotado";
       ventiAvatar.style.background = "#dd1440";
        ventiAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('ventiAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        ventiAvatar.style.fontSize = "8pt";
        ventiAvatar.innerHTML = "Mora Insuficiente";
        ventiAvatar.style.background = "#dd1440";
        ventiAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                ventiAvatar.innerHTML = "Comprar";
                ventiAvatar.style.background = "black";
                ventiAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const albedoAvatar = document.querySelector('#albedoAvatar');
const selectAlbedo = document.querySelector('#albedo');

//Função da Compra do Avatar do Albedo

albedoAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('albedoAvatar') !== 'comprado') {
        localStorage.setItem('albedoAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        albedoAvatar.innerHTML = "Esgotado";
        albedoAvatar.style.background = "#dd1440";
        albedoAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('albedoAvatar') == 'comprado') {
        albedoAvatar.innerHTML = "Esgotado";
        albedoAvatar.style.background = "#dd1440";
        albedoAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('albedoAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        albedoAvatar.style.fontSize = "8pt";
        albedoAvatar.innerHTML = "Mora Insuficiente";
        albedoAvatar.style.background = "#dd1440";
        albedoAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                albedoAvatar.innerHTML = "Comprar";
                albedoAvatar.style.background = "black";
                albedoAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const eulaAvatar = document.querySelector('#eulaAvatar');
const selectEula = document.querySelector('#eula');

//Função da Compra do Avatar do Eula

eulaAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('eulaAvatar') !== 'comprado') {
        localStorage.setItem('eulaAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        eulaAvatar.innerHTML = "Esgotado";
        eulaAvatar.style.background = "#dd1440";
        eulaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('eulaAvatar') == 'comprado') {
        eulaAvatar.innerHTML = "Esgotado";
        eulaAvatar.style.background = "#dd1440";
        eulaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('eulaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
       eulaAvatar.style.fontSize = "8pt";
        eulaAvatar.innerHTML = "Mora Insuficiente";
        eulaAvatar.style.background = "#dd1440";
        eulaAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                eulaAvatar.innerHTML = "Comprar";
                eulaAvatar.style.background = "black";
                eulaAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const kleeAvatar = document.querySelector('#kleeAvatar');
const selectKlee = document.querySelector('#klee');

//Função da Compra do Avatar da Klee

kleeAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('kleeAvatar') !== 'comprado') {
        localStorage.setItem('kleeAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kleeAvatar.innerHTML = "Esgotado";
        kleeAvatar.style.background = "#dd1440";
        kleeAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('kleeAvatar') == 'comprado') {
        kleeAvatar.innerHTML = "Esgotado";
        kleeAvatar.style.background = "#dd1440";
        kleeAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('kleeAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
       kleeAvatar.style.fontSize = "8pt";
        kleeAvatar.innerHTML = "Mora Insuficiente";
        kleeAvatar.style.background = "#dd1440";
        kleeAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                kleeAvatar.innerHTML = "Comprar";
                kleeAvatar.style.background = "black";
                kleeAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const jeanAvatar = document.querySelector('#jeanAvatar');
const selectJean = document.querySelector('#jean');

//Função da Compra do Avatar da Jean

jeanAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('jeanAvatar') !== 'comprado') {
        localStorage.setItem('jeanAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        jeanAvatar.innerHTML = "Esgotado";
        jeanAvatar.style.background = "#dd1440";
        jeanAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('jeanAvatar') == 'comprado') {
        jeanAvatar.innerHTML = "Esgotado";
        jeanAvatar.style.background = "#dd1440";
        jeanAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('jeanAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
       jeanAvatar.style.fontSize = "8pt";
        jeanAvatar.innerHTML = "Mora Insuficiente";
        jeanAvatar.style.background = "#dd1440";
        jeanAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                jeanAvatar.innerHTML = "Comprar";
                jeanAvatar.style.background = "black";
                jeanAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});


const monaAvatar = document.querySelector('#monaAvatar');
const selectMona = document.querySelector('#mona');

//Função da Compra do Avatar da Mona

monaAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('monaAvatar') !== 'comprado') {
        localStorage.setItem('monaAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        monaAvatar.innerHTML = "Esgotado";
        monaAvatar.style.background = "#dd1440";
        monaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('monaAvatar') == 'comprado') {
        monaAvatar.innerHTML = "Esgotado";
        monaAvatar.style.background = "#dd1440";
        monaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('monaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
       monaAvatar.style.fontSize = "8pt";
        monaAvatar.innerHTML = "Mora Insuficiente";
        monaAvatar.style.background = "#dd1440";
        monaAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                monaAvatar.innerHTML = "Comprar";
                monaAvatar.style.background = "black";
                monaAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const barbaraAvatar = document.querySelector('#barbaraAvatar');
const selectBarbara = document.querySelector('#barbara');

//Função da Compra do Avatar da Jean

barbaraAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('barbaraAvatar') !== 'comprado') {
        localStorage.setItem('barbaraAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        barbaraAvatar.innerHTML = "Esgotado";
        barbaraAvatar.style.background = "#dd1440";
       barbaraAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('barbaraAvatar') == 'comprado') {
        barbaraAvatar.innerHTML = "Esgotado";
        barbaraAvatar.style.background = "#dd1440";
        barbaraAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('barbaraAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
       barbaraAvatar.style.fontSize = "8pt";
        barbaraAvatar.innerHTML = "Mora Insuficiente";
        barbaraAvatar.style.background = "#dd1440";
        barbaraAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                barbaraAvatar.innerHTML = "Comprar";
                barbaraAvatar.style.background = "black";
                barbaraAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const amberAvatar = document.querySelector('#amberAvatar');
const selectAmber = document.querySelector('#amber');

//Função da Compra do Avatar da Jean

amberAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('amberAvatar') !== 'comprado') {
        localStorage.setItem('amberAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        amberAvatar.innerHTML = "Esgotado";
        amberAvatar.style.background = "#dd1440";
       amberAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('amberAvatar') == 'comprado') {
        amberAvatar.innerHTML = "Esgotado";
        amberAvatar.style.background = "#dd1440";
        amberAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('amberAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
       amberAvatar.style.fontSize = "8pt";
        amberAvatar.innerHTML = "Mora Insuficiente";
        amberAvatar.style.background = "#dd1440";
        amberAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                amberAvatar.innerHTML = "Comprar";
                amberAvatar.style.background = "black";
                amberAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const dionaAvatar = document.querySelector('#dionaAvatar');
const selectDiona = document.querySelector('#diona');

//Função da Compra do Avatar da Jean

dionaAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('dionaAvatar') !== 'comprado') {
        localStorage.setItem('dionaAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        dionaAvatar.innerHTML = "Esgotado";
        dionaAvatar.style.background = "#dd1440";
       dionaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('dionaAvatar') == 'comprado') {
        dionaAvatar.innerHTML = "Esgotado";
        dionaAvatar.style.background = "#dd1440";
        dionaAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('dionaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
       dionaAvatar.style.fontSize = "8pt";
        dionaAvatar.innerHTML = "Mora Insuficiente";
        dionaAvatar.style.background = "#dd1440";
        dionaAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
               dionaAvatar.innerHTML = "Comprar";
                dionaAvatar.style.background = "black";
                dionaAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const razorAvatar = document.querySelector('#razorAvatar');
const selectRazor = document.querySelector('#razor');

//Função da Compra do Avatar da Jean

razorAvatar.addEventListener('click', () => {
    if(localStorage.getItem('Money') >= 800 && localStorage.getItem('razorAvatar') !== 'comprado') {
        localStorage.setItem('razorAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos-= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        razorAvatar.innerHTML = "Esgotado";
        razorAvatar.style.background = "#dd1440";
       razorAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('razorAvatar') == 'comprado') {
        razorAvatar.innerHTML = "Esgotado";
        razorAvatar.style.background = "#dd1440";
        razorAvatar.style.transition = "0.4s linear";
    }else if(localStorage.getItem('razorAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
       razorAvatar.style.fontSize = "8pt";
        razorAvatar.innerHTML = "Mora Insuficiente";
        razorAvatar.style.background = "#dd1440";
        razorAvatar.style.transition = "0.4s linear";
            setTimeout(() => {
                razorAvatar.innerHTML = "Comprar";
                razorAvatar.style.background = "black";
                razorAvatar.style.transition = "0.4s linear";
            }, 3000);
    }
});

const noelleAvatar = document.querySelector('#noelleAvatar');
const selectNoelle = document.querySelector('#noelle');

// Função da Compra do Avatar da Noelle

noelleAvatar.addEventListener('click', () => {
    if (localStorage.getItem('Money') >= 800 && localStorage.getItem('noelleAvatar') !== 'comprado') {
        localStorage.setItem('noelleAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        noelleAvatar.innerHTML = "Esgotado";
        noelleAvatar.style.background = "#dd1440";
        noelleAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('noelleAvatar') == 'comprado') {
        noelleAvatar.innerHTML = "Esgotado";
        noelleAvatar.style.background = "#dd1440";
        noelleAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('noelleAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        noelleAvatar.style.fontSize = "8pt";
        noelleAvatar.innerHTML = "Mora Insuficiente";
        noelleAvatar.style.background = "#dd1440";
        noelleAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            noelleAvatar.innerHTML = "Comprar";
            noelleAvatar.style.background = "black";
            noelleAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
});

const lisaAvatar = document.querySelector('#lisaAvatar');
const selectLisa = document.querySelector('#lisa');

// Função da Compra do Avatar da Lisa

lisaAvatar.addEventListener('click', () => {
    if (localStorage.getItem('Money') >= 800 && localStorage.getItem('lisaAvatar') !== 'comprado') {
        localStorage.setItem('lisaAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        lisaAvatar.innerHTML = "Esgotado";
        lisaAvatar.style.background = "#dd1440";
        lisaAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('lisaAvatar') == 'comprado') {
        lisaAvatar.innerHTML = "Esgotado";
        lisaAvatar.style.background = "#dd1440";
        lisaAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('lisaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        lisaAvatar.style.fontSize = "8pt";
        lisaAvatar.innerHTML = "Mora Insuficiente";
        lisaAvatar.style.background = "#dd1440";
        lisaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            lisaAvatar.innerHTML = "Comprar";
            lisaAvatar.style.background = "black";
            lisaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
});

const bennettAvatar = document.querySelector('#bennettAvatar');
const selectBennett = document.querySelector('#bennett');

// Função da Compra do Avatar do Bennett

bennettAvatar.addEventListener('click', () => {
    if (localStorage.getItem('Money') >= 800 && localStorage.getItem('bennettAvatar') !== 'comprado') {
        localStorage.setItem('bennettAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        bennettAvatar.innerHTML = "Esgotado";
        bennettAvatar.style.background = "#dd1440";
        bennettAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('bennettAvatar') == 'comprado') {
        bennettAvatar.innerHTML = "Esgotado";
        bennettAvatar.style.background = "#dd1440";
        bennettAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('bennettAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        bennettAvatar.style.fontSize = "8pt";
        bennettAvatar.innerHTML = "Mora Insuficiente";
        bennettAvatar.style.background = "#dd1440";
        bennettAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            bennettAvatar.innerHTML = "Comprar";
            bennettAvatar.style.background = "black";
            bennettAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
});

const kayeaAvatar = document.querySelector('#kayeaAvatar');
const selectKayea = document.querySelector('#kayea');

// Função da Compra do Avatar da Kayea

kayeaAvatar.addEventListener('click', () => {
    if (localStorage.getItem('Money') >= 800 && localStorage.getItem('kayeaAvatar') !== 'comprado') {
        localStorage.setItem('kayeaAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        kayeaAvatar.innerHTML = "Esgotado";
        kayeaAvatar.style.background = "#dd1440";
        kayeaAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('kayeaAvatar') == 'comprado') {
        kayeaAvatar.innerHTML = "Esgotado";
        kayeaAvatar.style.background = "#dd1440";
        kayeaAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('kayeaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        kayeaAvatar.style.fontSize = "8pt";
        kayeaAvatar.innerHTML = "Mora Insuficiente";
        kayeaAvatar.style.background = "#dd1440";
        kayeaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            kayeaAvatar.innerHTML = "Comprar";
            kayeaAvatar.style.background = "black";
            kayeaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
});

const fishAvatar = document.querySelector('#fishAvatar');
const selectFish = document.querySelector('#fish');

// Função da Compra do Avatar do Fish

fishAvatar.addEventListener('click', () => {
    if (localStorage.getItem('Money') >= 800 && localStorage.getItem('fishAvatar') !== 'comprado') {
        localStorage.setItem('fishAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        fishAvatar.innerHTML = "Esgotado";
        fishAvatar.style.background = "#dd1440";
        fishAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('fishAvatar') == 'comprado') {
        fishAvatar.innerHTML = "Esgotado";
        fishAvatar.style.background = "#dd1440";
        fishAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('fishAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        fishAvatar.style.fontSize = "8pt";
        fishAvatar.innerHTML = "Mora Insuficiente";
        fishAvatar.style.background = "#dd1440";
        fishAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            fishAvatar.innerHTML = "Comprar";
            fishAvatar.style.background = "black";
            fishAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
});

const rosariaAvatar = document.querySelector('#rosariaAvatar');
const selectRosaria = document.querySelector('#rosaria');

// Função da Compra do Avatar da Rosaria

rosariaAvatar.addEventListener('click', () => {
    if (localStorage.getItem('Money') >= 800 && localStorage.getItem('rosariaAvatar') !== 'comprado') {
        localStorage.setItem('rosariaAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        rosariaAvatar.innerHTML = "Esgotado";
        rosariaAvatar.style.background = "#dd1440";
        rosariaAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('rosariaAvatar') == 'comprado') {
        rosariaAvatar.innerHTML = "Esgotado";
        rosariaAvatar.style.background = "#dd1440";
        rosariaAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('rosariaAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        rosariaAvatar.style.fontSize = "8pt";
        rosariaAvatar.innerHTML = "Mora Insuficiente";
        rosariaAvatar.style.background = "#dd1440";
        rosariaAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            rosariaAvatar.innerHTML = "Comprar";
            rosariaAvatar.style.background = "black";
            rosariaAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
});

const sucroseAvatar = document.querySelector('#sucroseAvatar');
const selectSucrose = document.querySelector('#sucrose');

// Função da Compra do Avatar da Sucrose

sucroseAvatar.addEventListener('click', () => {
    if (localStorage.getItem('Money') >= 800 && localStorage.getItem('sucroseAvatar') !== 'comprado') {
        localStorage.setItem('sucroseAvatar', 'comprado');
        const efeito = "./music/compra.mp3";
        audio.src = efeito;
        audio.play(); 
        pontos = Math.max(0, pontos);
        localStorage.setItem('Money', pontos -= 800);
        pont.placeholder = `R$ ${localStorage.getItem('Money')},00`;
        sucroseAvatar.innerHTML = "Esgotado";
        sucroseAvatar.style.background = "#dd1440";
        sucroseAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('sucroseAvatar') == 'comprado') {
        sucroseAvatar.innerHTML = "Esgotado";
        sucroseAvatar.style.background = "#dd1440";
        sucroseAvatar.style.transition = "0.4s linear";
    } else if (localStorage.getItem('sucroseAvatar') !== 'comprado' && localStorage.getItem('Money') < 800) {
        sucroseAvatar.style.fontSize = "8pt";
        sucroseAvatar.innerHTML = "Mora Insuficiente";
        sucroseAvatar.style.background = "#dd1440";
        sucroseAvatar.style.transition = "0.4s linear";
        setTimeout(() => {
            sucroseAvatar.innerHTML = "Comprar";
            sucroseAvatar.style.background = "black";
            sucroseAvatar.style.transition = "0.4s linear";
        }, 3000);
    }
});


//Seleciona os objetos 

const btnClosePerfil = document.querySelector('#closePerfil');
const perfil = document.querySelector('#contUser');
const user = document.querySelector('#user');
const cancelar = document.querySelector('#cancelar');
const salvar = document.querySelector('#salvar');
const viajante = document.querySelector('#viajante');
const lumine = document.querySelector('#lumine');
const diluc = document.querySelector('#diluc');
const venti = document.querySelector('#venti');
const albedo = document.querySelector('#albedo');
const eula = document.querySelector('#eula');
const jean = document.querySelector('#jean');
const klee = document.querySelector('#klee');
const mona = document.querySelector('#mona');
const barbara = document.querySelector('#barbara');
const amber = document.querySelector('#amber');
const diona = document.querySelector('#diona');
const razor = document.querySelector('#razor');
const bennett = document.querySelector('#bennett');
const fish = document.querySelector('#fish');
const kayea = document.querySelector('#kayea');
const lisa = document.querySelector('#lisa');
const noelle = document.querySelector('#noelle');
const sucrose = document.querySelector('#sucrose');
const rosaria = document.querySelector('#rosaria');

lumine.addEventListener('click', () => {
    let imgSelect = document.querySelector('#lumine img').src;
    document.querySelector('#imgPerfil img').src = imgSelect;
});

viajante.addEventListener('click', () => {
    let imgSelect = document.querySelector('#viajante img').src;
    document.querySelector('#imgPerfil img').src = imgSelect;
    const efeito = "./music/aether.ogg";
    audio.src = efeito;
    audio.play();  
});

diluc.addEventListener('click', () => {
    if(localStorage.getItem('dilucAvatar') !== 'comprado') {
        selectDiluc.classList.add('disabled');
        selectDiluc.setAttribute('disabled', 'true');
        diluc.style.background = '#dd1440';
        diluc.style.transition = '0.5s linear';
        setTimeout(() => {
            diluc.style.background = "url('/icon/Background5.png')";
            diluc.style.backgroundPosition = 'center';
            diluc.style.backgroundRepeat = 'no-repeat';
            diluc.style.backgroundSize = 'cover';
            diluc.style.backgroundAttachment = 'fixed';
            diluc.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#diluc img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
        const efeito = "./music/diluc.ogg";
        audio.src = efeito;
        audio.play();     
    }
});

venti.addEventListener('click', () => {
    if(localStorage.getItem('ventiAvatar') !== 'comprado') {
        selectVenti.classList.add('disabled');
        selectVenti.setAttribute('disabled', 'true');
        venti.style.background = '#dd1440';
        venti.style.transition = '0.5s linear';
        setTimeout(() => {
            venti.style.background = "url('/icon/Background5.png')";
            venti.style.backgroundPosition = 'center';
            venti.style.backgroundRepeat = 'no-repeat';
            venti.style.backgroundSize = 'cover';
            venti.style.backgroundAttachment = 'fixed';
            venti.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#venti img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
        const efeito = "./music/venti.ogg";
        audio.src = efeito;
        audio.play();   
    }
});

albedo.addEventListener('click', () => {
    if(localStorage.getItem('albedoAvatar') !== 'comprado') {
        selectAlbedo.classList.add('disabled');
        selectAlbedo.setAttribute('disabled', 'true');
        albedo.style.background = '#dd1440';
        albedo.style.transition = '0.5s linear';
        setTimeout(() => {
            albedo.style.background = "url('/icon/Background5.png')";
            albedo.style.backgroundPosition = 'center';
            albedo.style.backgroundRepeat = 'no-repeat';
            albedo.style.backgroundSize = 'cover';
            albedo.style.backgroundAttachment = 'fixed';
            albedo.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#albedo img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/albedo.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

eula.addEventListener('click', () => {
    if(localStorage.getItem('eulaAvatar') !== 'comprado') {
        selectEula.classList.add('disabled');
        selectEula.setAttribute('disabled', 'true');
        eula.style.background = '#dd1440';
        eula.style.transition = '0.5s linear';
        setTimeout(() => {
            eula.style.background = "url('/icon/Background5.png')";
            eula.style.backgroundPosition = 'center';
            eula.style.backgroundRepeat = 'no-repeat';
            eula.style.backgroundSize = 'cover';
            eula.style.backgroundAttachment = 'fixed';
            eula.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#eula img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/eula.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

klee.addEventListener('click', () => {
    if(localStorage.getItem('kleeAvatar') !== 'comprado') {
        selectKlee.classList.add('disabled');
        selectKlee.setAttribute('disabled', 'true');
       klee.style.background = '#dd1440';
        klee.style.transition = '0.5s linear';
        setTimeout(() => {
            klee.style.background = "url('/icon/Background5.png')";
            klee.style.backgroundPosition = 'center';
            klee.style.backgroundRepeat = 'no-repeat';
            klee.style.backgroundSize = 'cover';
            klee.style.backgroundAttachment = 'fixed';
            klee.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#klee img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/klee.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

jean.addEventListener('click', () => {
    if(localStorage.getItem('jeanAvatar') !== 'comprado') {
        selectJean.classList.add('disabled');
        selectJean.setAttribute('disabled', 'true');
        jean.style.background = '#dd1440';
        jean.style.transition = '0.5s linear';
        setTimeout(() => {
            jean.style.background = "url('/icon/Background5.png')";
            jean.style.backgroundPosition = 'center';
            jean.style.backgroundRepeat = 'no-repeat';
            jean.style.backgroundSize = 'cover';
            jean.style.backgroundAttachment = 'fixed';
            jean.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#jean img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/jean.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

mona.addEventListener('click', () => {
    if(localStorage.getItem('monaAvatar') !== 'comprado') {
        selectMona.classList.add('disabled');
        selectMona.setAttribute('disabled', 'true');
        mona.style.background = '#dd1440';
        mona.style.transition = '0.5s linear';
        setTimeout(() => {
            mona.style.background = "url('/icon/Background5.png')";
            mona.style.backgroundPosition = 'center';
            mona.style.backgroundRepeat = 'no-repeat';
            mona.style.backgroundSize = 'cover';
            mona.style.backgroundAttachment = 'fixed';
            mona.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#mona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/mona.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

barbara.addEventListener('click', () => {
    if(localStorage.getItem('barbaraAvatar') !== 'comprado') {
        selectBarbara.classList.add('disabled');
        selectBarbara.setAttribute('disabled', 'true');
        barbara.style.background = '#dd1440';
        barbara.style.transition = '0.5s linear';
        setTimeout(() => {
            barbara.style.background = "url('/icon/Background4.png')";
            barbara.style.backgroundPosition = 'center';
            barbara.style.backgroundRepeat = 'no-repeat';
            barbara.style.backgroundSize = 'cover';
            barbara.style.backgroundAttachment = 'fixed';
            barbara.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#barbara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/barbara.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

amber.addEventListener('click', () => {
    if(localStorage.getItem('amberAvatar') !== 'comprado') {
        selectAmber.classList.add('disabled');
        selectAmber.setAttribute('disabled', 'true');
        amber.style.background = '#dd1440';
        amber.style.transition = '0.5s linear';
        setTimeout(() => {
            amber.style.background = "url('/icon/Background4.png')";
            amber.style.backgroundPosition = 'center';
            amber.style.backgroundRepeat = 'no-repeat';
            amber.style.backgroundSize = 'cover';
            amber.style.backgroundAttachment = 'fixed';
            amber.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#amber img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/amber.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

diona.addEventListener('click', () => {
    if(localStorage.getItem('dionaAvatar') !== 'comprado') {
        selectDiona.classList.add('disabled');
        selectDiona.setAttribute('disabled', 'true');
        diona.style.background = '#dd1440';
        diona.style.transition = '0.5s linear';
        setTimeout(() => {
            diona.style.background = "url('/icon/Background4.png')";
            diona.style.backgroundPosition = 'center';
            diona.style.backgroundRepeat = 'no-repeat';
            diona.style.backgroundSize = 'cover';
            diona.style.backgroundAttachment = 'fixed';
            diona.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#diona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/diona.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

razor.addEventListener('click', () => {
    if(localStorage.getItem('razorAvatar') !== 'comprado') {
        selectRazor.classList.add('disabled');
        selectRazor.setAttribute('disabled', 'true');
        razor.style.background = '#dd1440';
        razor.style.transition = '0.5s linear';
        setTimeout(() => {
            razor.style.background = "url('/icon/Background4.png')";
            razor.style.backgroundPosition = 'center';
            razor.style.backgroundRepeat = 'no-repeat';
            razor.style.backgroundSize = 'cover';
            razor.style.backgroundAttachment = 'fixed';
            razor.style.transition = '0.5s linear';
        }, 2000);
    }else {
        let imgSelect = document.querySelector('#razor img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/razor.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

fish.addEventListener('click', () => {
    if(localStorage.getItem('fishAvatar') !== 'comprado') {
        selectFish.classList.add('disabled');
        selectFish.setAttribute('disabled', 'true');
        fish.style.background = '#dd1440';
        fish.style.transition = '0.5s linear';
        setTimeout(() => {
            fish.style.background = "url('/icon/Background4.png')";
            fish.style.backgroundPosition = 'center';
            fish.style.backgroundRepeat = 'no-repeat';
            fish.style.backgroundSize = 'cover';
            fish.style.backgroundAttachment = 'fixed';
            fish.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#fish img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/fish.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

lisa.addEventListener('click', () => {
    if(localStorage.getItem('lisaAvatar') !== 'comprado') {
        selectLisa.classList.add('disabled');
        selectLisa.setAttribute('disabled', 'true');
        lisa.style.background = '#dd1440';
        lisa.style.transition = '0.5s linear';
        setTimeout(() => {
            lisa.style.background = "url('/icon/Background4.png')";
            lisa.style.backgroundPosition = 'center';
            lisa.style.backgroundRepeat = 'no-repeat';
            lisa.style.backgroundSize = 'cover';
            lisa.style.backgroundAttachment = 'fixed';
            lisa.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#lisa img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/lisa.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

sucrose.addEventListener('click', () => {
    if(localStorage.getItem('sucroseAvatar') !== 'comprado') {
        selectSucrose.classList.add('disabled');
        selectSucrose.setAttribute('disabled', 'true');
        sucrose.style.background = '#dd1440';
        sucrose.style.transition = '0.5s linear';
        setTimeout(() => {
            sucrose.style.background = "url('/icon/Background4.png')";
            sucrose.style.backgroundPosition = 'center';
            sucrose.style.backgroundRepeat = 'no-repeat';
            sucrose.style.backgroundSize = 'cover';
            sucrose.style.backgroundAttachment = 'fixed';
            sucrose.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#sucrose img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/sucrose.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

rosaria.addEventListener('click', () => {
    if(localStorage.getItem('rosariaAvatar') !== 'comprado') {
        selectRosaria.classList.add('disabled');
        selectRosaria.setAttribute('disabled', 'true');
        rosaria.style.background = '#dd1440';
        rosaria.style.transition = '0.5s linear';
        setTimeout(() => {
            rosaria.style.background = "url('/icon/Background4.png')";
            rosaria.style.backgroundPosition = 'center';
            rosaria.style.backgroundRepeat = 'no-repeat';
            rosaria.style.backgroundSize = 'cover';
            rosaria.style.backgroundAttachment = 'fixed';
            rosaria.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#rosaria img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/rosaria.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

noelle.addEventListener('click', () => {
    if(localStorage.getItem('noelleAvatar') !== 'comprado') {
        selectNoelle.classList.add('disabled');
        selectNoelle.setAttribute('disabled', 'true');
        noelle.style.background = '#dd1440';
        noelle.style.transition = '0.5s linear';
        setTimeout(() => {
            noelle.style.background = "url('/icon/Background4.png')";
            noelle.style.backgroundPosition = 'center';
            noelle.style.backgroundRepeat = 'no-repeat';
            noelle.style.backgroundSize = 'cover';
            noelle.style.backgroundAttachment = 'fixed';
            noelle.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#noelle img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/noelle.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

kayea.addEventListener('click', () => {
    if(localStorage.getItem('kayeaAvatar') !== 'comprado') {
        selectKayea.classList.add('disabled');
        selectKayea.setAttribute('disabled', 'true');
        kayea.style.background = '#dd1440';
        kayea.style.transition = '0.5s linear';
        setTimeout(() => {
            kayea.style.background = "url('/icon/Background4.png')";
            kayea.style.backgroundPosition = 'center';
            kayea.style.backgroundRepeat = 'no-repeat';
            kayea.style.backgroundSize = 'cover';
            kayea.style.backgroundAttachment = 'fixed';
            kayea.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kayea img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/kayea.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

bennett.addEventListener('click', () => {
    if(localStorage.getItem('bennettAvatar') !== 'comprado') {
        selectBennett.classList.add('disabled');
        selectBennett.setAttribute('disabled', 'true');
        bennett.style.background = '#dd1440';
        bennett.style.transition = '0.5s linear';
        setTimeout(() => {
            bennett.style.background = "url('/icon/Background4.png')";
            bennett.style.backgroundPosition = 'center';
            bennett.style.backgroundRepeat = 'no-repeat';
            bennett.style.backgroundSize = 'cover';
            bennett.style.backgroundAttachment = 'fixed';
            bennett.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#bennett img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/bennett.ogg";
        audio.src = efeito;
        audio.play();  
    }
});

user.addEventListener('click', () => {
    dilucVerifica();
    ventiVerifica();
    albedoVerifica();
    jeanVerifica();
    eulaVerifica();
    kleeVerifica();
    monaVerifica();
    barbaraVerifica();
    dionaVerifica();
    amberVerifica();
    razorVerifica();
    bennettVerifica(); 
    fishVerifica();   
    kayeaVerifica();   
    lisaVerifica();    
    noelleVerifica();  
    sucroseVerifica(); 
    rosariaVerifica(); 
    perfil.style.display = "block";
});

btnClosePerfil.addEventListener('click', () => {
    perfil.style.display = "none";
});

cancelar.addEventListener('click', () => {
    perfil.style.display = "none";
});

salvar.addEventListener('click', () => {
    localStorage.setItem('imgUser', document.querySelector('#imgPerfil img').src);
    localStorage.setItem('nomeUser',  document.querySelector('#nickName').value);
    localStorage.setItem('colorUser', document.querySelector('#color').value);
    document.querySelector('#imgUser').src = localStorage.getItem('imgUser');
    document.querySelector('#name').innerHTML = localStorage.getItem('nomeUser');
    document.querySelector('#imgUser').style.background = localStorage.getItem('colorUser');
    document.querySelector('#imgPerfil img').src = localStorage.getItem('imgUser');
    document.querySelector('#nickName').value = localStorage.getItem('nomeUser');
    document.querySelector('#imgPerfil img').style.background = localStorage.getItem('colorUser');
    perfil.style.display = "none";
});

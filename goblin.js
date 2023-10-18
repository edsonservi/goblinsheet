var namesGoblins = ["Aiaiai", "Ban", "Bash", "Bibi", "Bing", "Boom", "Bum", "Coff", "Crash", "Cricri", "Cringe", "Glub", "Nhack", "Ovo", "Pirti", "Plaft", "Plin", "Ranço", "Riso", "Slash", "Snif", "Sopa", "Spray", "Sussa", "Tik", "Tim", "Tok", "Ugh", "Vrum", "Yhaa", "Zzzz", "Ajjish", "Asak"];
var ocupation = ["Mercenário", "Caçador", "Gatuno", "Líder", "Incendiário", "Bruxo"];
var description = ["Covarde", "Atrapalhado", "Tapado", "Fracote", "Medíocre", "Supimpa"];
var caracter = ["Bomba-relógio", "Minicabeça", "Apêndice extra", "Poros fedidos", "Verdura", "Cinzento", "Cabeção", "Orelha extra", "Pintas", "Minion", "Fosforescente", "Amaldiçoado", "Linguão", "Nariz extra", "Listras", "Galináceo", "Colorido", "Tom bélico", "Olho gigante", "Olhos extras", "Pompom", "Peixoso", "Amarelo", "Flutulência", "Pés gigantes", "Braço extra", "Chifre", "Felino", "Azul", "Mão gigante", "Cabeça extra", "Cicatrizes", "Aracnídeo", "Vermelho"];
var icone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 50px; width: 50;">
                                    <path d="m256 415-142.9-46.7 10.2-49.7S-3.386 356.1 26 71.4l123.6 148.9L256 200.1l106.4 20.2L486 71.4c29.4 284.7-97.3 247.2-97.3 247.2l10.2 49.7zm0-98.4-35.8 1.8-19.7 35.5-27-33.3-20.8 1.1c3.5 38.6 41.2 54.8 94.3 60.9l12.4-24.8 25.4 21.9c42.5-7.8 71.4-24.4 74.5-58l-22.1-1.1-36.3 31.4-12.7-33.8zm183.4-103.4c10.4 67.8-36.1 71.9-36.1 71.9l2.7 12.2s74.2 3.2 61.8-162.1l-85.1 107.9zm-310.1 29.9L44.24 135.2C31.75 300.5 106 297.3 106 297.3l2.7-12.2s-46.46-4.1-36.09-71.9zm146 42.1 31.4.5 12.1-13.1 15.3 13.2 31.3.4c-9.2-43.1-73.9-69-90.1-1zm-128.7 1 31.3-.4 15.3-13.2 12.1 13.1 31.4-.5c-16.2-68-80.9-42.1-90.1 1z">
                                    </path>
                                    </g>
                                    </svg>`;

function sortNumber(n){
    return Math.floor((Math.random() * n) + 1);
}

function goblinName(){
    return namesGoblins[sortNumber(namesGoblins.length) - 1];
}

function calcStats(ocupacao, descricao, caracter){
    let combate = 2;
    let habilidade = 2;
    let vitalidade = 2;
    let nocao = 2;
    let equip = []
    let hNv1;
    let hNv2;
    let hNv3;

    if (ocupacao == 'Mercenário'){
        combate += 1;
        equip.push(["Espada", 1]);
        equip.push(["Escudo", 1]);
        equip.push(["Machadinhas", 2]);
        equip.push(["Machadão", 1]);
        hNv1 = "Mestre de Armas: Você sempre rola +1 dado em todos os ataques que fizer lutando com sua arma favorita.";
        hNv2 = "Ataque Giratório: Sempre que você causar dano a um inimigo com uma arma corporal, pode fazer mais um ataque contra outro inimigo que estiver ao seu alcance."; 
        hNv3 = "Ataque Brutal: Uma vez por dia, você pode declarar um Ataque Brutal. Faça um ataque corporal normalmente com o dobro de dados.";
    }
    if (ocupacao == 'Caçador'){
        combate += 1;
        equip.push(["Adagas", 3]);
        equip.push(["Arco de Caça", 1]);
        equip.push(["Pistola", 1]);
        equip.push(["Chapéu", 1]);
        hNv1 = "Inimigo: Escolha uma espécie de criatura quando começar o jogo. Você sempre rola +1 dado em todos os ataques contra essa espécie de criatura.";
        hNv2 = "Rastrear: Você sabe seguir pegadas e identificar a criatura das pegadas.";
        hNv3 = "Tiro Certeiro: Uma vez por dia, você pode declarar um Tiro Certeiro. Faça um ataque à distância normalmente com o dobro de dados.";
    }
    if (ocupacao == 'Incendiário'){
        vitalidade += 1;
        equip.push(["Barril de Pólvora", 1]);
        equip.push(["Bacamarte", 1]);
        equip.push(["Pistola", 1]);
        equip.push(["Galinha Explosiva", 1]);
        equip.push(["Chapéu", 1]);
        hNv1 = "Resistência: Você sempre recebe 1 ferimento a menos de ataques de fogo ou tiro de armas de fogo.";
        hNv2 = "Delírio: Você pode se livrar de todos os ferimentos se você explodir ou queimar completamente uma casa ou algo maior que isso.";
        hNv3 = "Imunidade: Você é imune a fogo.";
    }
    if (ocupacao == 'Gatuno'){
        habilidade += 1;
        equip.push(["Adagas", 3]);
        equip.push(["Rapieira", 1]);
        equip.push(["Broquel", 1]);
        equip.push(["Pistola", 1]);
        equip.push(["Chapéu", 1]);
        hNv1 = "Roubar: Conseguindo 1 hit em um teste de Habilidade, você pode roubar um objeto do bolso de qualquer pessoa sem que ela perceba.";
        hNv2 = "Ataque Furtivo: Você sempre rola 2 dados a mais se fizer um ataque contra um alvo que não sabe onde você está."; 
        hNv3 = "Esconder: Uma vez por dia, você pode se esconder sem precisar fazer um teste. Você estará completamente escondido até se mexer ou emitir som.";
    }
    if (ocupacao == 'Líder'){
        vitalidade += 1;
        equip.push(["Espada", 1]);
        equip.push(["Medalhas de Guerra", 1]);
        equip.push(["Lança", 1]);
        equip.push(["Elmo", 1]);
        equip.push(["Espadona", 1]);
        hNv1 = "Grito de Guerra: Uma vez por dia, você pode dar este grito. Faça um teste de Noção e, se conseguir 1 hit, todos os seus aliados ficarão com Combate +1 até o final da batalha.";
        hNv2 = "Humilhação: Uma vez por dia, você pode gritar e xingar um aliado seu que eliminará todos os ferimentos dele.";
        hNv3 = "Ataque Brutal: Uma vez por dia, você pode declarar um Ataque Brutal. Faça um ataque corporal normalmente com o dobro de dados.";
    }
    if (ocupacao == 'Bruxo'){
        nocao += 1;
        equip.push(["Cajado", 1]);
        equip.push(["Varinha", 1]);
        equip.push(["Cachecol", 1]);
        equip.push(["Chapéu", 1]);
        equip.push(["Vassoura", 1]);
        hNv1 = "Magias: Você pode conjurar magias da sua lista (escolha 3 magias). Para conjurar uma magia, faça um teste de Noção e consulte o efeito da magia";
        hNv2 = "Condutor Mágico: Se você conjurar a magia por uma varinha, cajado ou outro Condutor Mágico, você rola 1 dado a mais.";
        hNv3 = "Implacável: Uma vez por dia, você pode conjurar uma magia sem rolar os dados, apenas escolhendo o resultado"; 
    }
    
    if (descricao == 'Covarde'){combate -= 1;}
    if (descricao == 'Atrapalhado'){habilidade -= 1;}
    if (descricao == 'Tapado'){nocao -= 1;}
    if (descricao == 'Fracote'){vitalidade -= 1;}
    if (descricao == 'Supimpa'){
        let h = sortNumber(4);
        if(h == 1){combate += 1;}
        if(h == 2){habilidade += 1;}
        if(h == 3){vitalidade += 1;}
        if(h == 4){nocao += 1;}
    }
    
    return [combate, habilidade, vitalidade, nocao, equip, hNv1, hNv2, hNv3];
}

function strokes(n){
    let content = '';
    for (let i = 0; i < n; i++){
        content += `<input class="form-check-input border-success" type="checkbox" value="">`;
    }
    return content;
}

function equips(col){
    let content = '';
    for (let i = 0; i < col.length; i++){
        content += `<div class="row">
                        <div class="col-8 border-bottom border-1 border-success">${col[i][0]}</div>
                        <div class="col border-bottom border-1 border-success">
                        ${strokes(col[i][1])}
                        </div>
                    </div>`
    }
    return content;
}

function descriteGoblin(ctrl){
    let content = "";
    if(ctrl == "Amaldiçoado"){ content="Você acha que é um humano que foi amaldiçoado e precisa quebrar a maldição. Mas, na verdade, você é só um goblin perdido.";}
    if(ctrl == "Amarelo"){ content="Sua pele é amarela.";}
    if(ctrl == "Apêndice extra"){ content="Você tem dois apêndices. Você tem o dobro de chance de ter apendicite.";}
    if(ctrl == "Aracnídeo"){ content="Você consegue escalar superfícies lisas e pode defecar cordas de seda.";}
    if(ctrl == "Azul"){ content="Sua pele é azul.";}
    if(ctrl == "Bomba-relógio"){ content="Você pode explodir a qualquer momento. Sempre que alguém fala algo relacionado com fogo ou explosão role um dado. Se cair “1”, você explode.";}
    if(ctrl == "Braço extra"){ content="Você tem um braço extra que sai do meio das suas costas. ";}
    if(ctrl == "Cabeça extra"){ content="Você tem duas cabeças. O que não quer dizer muita coisa, já que duas cabeças de goblin não pensam melhor que uma.";}
    if(ctrl == "Cabeção"){ content="Você tem um cabeção que contém um cérebro gigante. Você pode saber de qualquer coisa e conhecimento obscuro, mas não pode usar elmos ou bonés.";}
    if(ctrl == "Chifre"){ content="Você tem um grande e imponente chifre de unicórnio saindo da sua testa.";}
    if(ctrl == "Cicatrizes"){ content="Você tem cicatrizes por todo o corpo.";}
    if(ctrl == "Cinzento"){ content="Sua pele é cinza e enrugada. Você pode ter barba branca comprida se quiser.";}
    if(ctrl == "Colorido"){ content="Sua pele tem vários tons e cores. Toda manhã, as cores mudam de lugar.";}
    if(ctrl == "Felino"){ content="Você acha que é um gato e vive se lambendo, miando e ronronando.";}
    if(ctrl == "Flutulência"){ content="Você vive se peidando, mas se quiser pode usar isso para dar saltos de até 6 metros de altura ou correr até o dobro da velocidade.";}
    if(ctrl == "Fosforescente"){ content="Sua pele é de um tom verde fosforescente. Você brilha no escuro. ";}
    if(ctrl == "Galináceo"){ content="Você acha que é uma galinha e vive cacarejando e ciscando.";}
    if(ctrl == "Linguão"){ content="Você possui uma língua gigante. Você não tem muito controle sobre ela, então ela vive fora da sua boca babando e impedindo que você fale direito.";}
    if(ctrl == "Listras"){ content="Você possui listras azuis por todo o corpo.";}
    if(ctrl == "Mão gigante"){ content="Uma das suas mãos tem o dobro do tamanho de uma mão de goblin comum.";}
    if(ctrl == "Minicabeça"){ content="Você possui uma cabeça muito pequena. Seus olhos parecem que vão saltar do rosto (talvez vão!) e você não pode usar elmos.";}
    if(ctrl == "Minion"){ content="Você gosta de usar camiseta amarela e odeia qualquer um que use vermelho. Acredita em qualquer mentira.";}
    if(ctrl == "Nariz extra"){ content="Você possui um nariz extra no cotovelo. ";}
    if(ctrl == "Olho gigante"){ content="Um dos seus olhos é gigante e raramente pisca.";}
    if(ctrl == "Olhos extras"){ content="Você possui 1d6 olhos a mais na cabeça (em vários lugares diferentes).";}
    if(ctrl == "Orelha extra"){ content="Você possui uma orelha extra embaixo do sovaco.";}
    if(ctrl == "Peixoso"){ content="Você acha que é um peixe e precisa estar sempre molhado.";}
    if(ctrl == "Pés gigantes"){ content="Seus pés são gigantes. Você não pode usar nenhum tipo de calçado.";}
    if(ctrl == "Pintas"){ content="Você possui pintas cor de rosa espalhadas por todo o corpo. Algumas têm formato de coração.";}
    if(ctrl == "Pompom"){ content="Você possui um pequeno rabo com um pompom na ponta, como de um poodle bem tosado.";}
    if(ctrl == "Poros fedidos"){ content="Você exala um odor extremamente desagradável e ninguém consegue ficar perto de você por muito tempo sem ficar nauseado.";}
    if(ctrl == "Tom bélico"){ content="Sempre que você conversa com alguém, este se sentirá ofendido sem razão.";}
    if(ctrl == "Verdura"){ content="Você acha que é uma planta e insiste em fazer fotossíntese.";}
    if(ctrl == "Vermelho"){ content="Sua pele é vermelha.";}
    return content;
}

function createSheetGoblin(){
    let ocp = ocupation[sortNumber(ocupation.length) - 1];
    let desc = description[sortNumber(description.length) - 1];
    let caract = caracter[sortNumber(caracter.length) - 1];
    let stats = calcStats(ocp, desc, caract);
    
    return `<div class="container p-3 my-2 bg-success bg-opacity-10" style="width: 500px;">
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col border border-success border-3 rounded rounded-5">
                            <h4 class="display-6 text-success text-center">${icone} ${goblinName()} ${icone}</h4>
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col text-center">Nv: 1</div>
                        <div class="col-3 text-center">Ocupação: ${ocp}</div>
                        <div class="col-3 text-center">Descritor: ${desc}</div>
                        <div class="col-4 text-center">Característica: ${caract}</div>
                    </div>
                </div>
            </div>
            <div class="row border-top border-2 border-success">
                <div class="col-5">
                    <div class="text-center py-1">Estatísticas</div>
                    <div class="row">
                        <div class="col border-bottom border-1 border-success">Combate</div>
                        <div class="col-3 border-bottom border-1 border-success">${stats[0]}</div>
                        <div class="col-1"></div>
                    </div>
                    <div class="row">
                        <div class="col border-bottom border-1 border-success">Habilidade</div>
                        <div class="col-3 border-bottom border-1 border-success">${stats[1]}</div>
                        <div class="col-1"></div>
                    </div>
                    <div class="row">
                        <div class="col border-bottom border-1 border-success">Noção</div>
                        <div class="col-3 border-bottom border-1 border-success">${stats[3]}</div>
                        <div class="col-1"></div>
                    </div>
                    <div class="row">
                        <div class="col border-bottom border-1 border-success">Vitalidade</div>
                        <div class="col-3 border-bottom border-1 border-success">${stats[2]}</div>
                        <div class="col-1"></div>
                    </div>
                    <div class="row">
                        <div class="col-5 border-bottom border-1 border-success">Ferimentos</div>
                        <div class="col-6 border-bottom border-1 border-success text-end">${strokes(stats[2])}</div>
                        <div class="col-1"></div>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center py-1">Equipamentos</div>
                    ${equips(stats[4])}
                </div>
            </div>
            <div class="row py-2">
                <div class="col border border-1 border-success">Nv 1 -> ${stats[5]}</div>
            </div>
            <div class="row py-2">
                <div class="col border border-1 border-success">Nv 2 -> ${stats[6]}</div>
            </div>
            <div class="row py-2">
                <div class="col border border-1 border-success">Nv 3 -> ${stats[7]}</div>
            </div>
            <div class="row py-2">
                <div class="col border border-1 border-success">${caract}: ${descriteGoblin(caract)}</div>
            </div>
        </div>`;
}

var target = document.getElementById('target');
target.innerHTML += createSheetGoblin();

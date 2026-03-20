// Lista de vídeos do YouTube (IDs extraídos das URLs)
const channels = [
    { id: '8YI51oCgnA8', name: 'Introdução' },
    { id: '2UNKi1g5KqQ', name: 'Onde comprar o Corel Draw mais barato' },
    { id: 'cpQGeSSCam8', name: 'Como configurar uma página no Corel Draw' },
    { id: 'ICu0G5aqCO8', name: 'O que é CMYK e o que é RGB? Qual a diferença?' },
    { id: '_ndCXzzDbNQ', name: 'O que é DPI? O que é resolução?' },
    { id: 's5XJoZlTbvM', name: 'O que é um vetor como funciona uma imagem vetorial no coreldraw' },
    { id: 'qjrX2YKNGJI', name: 'Como usar o CorelDraw? - Conhecendo a interface' },
    { id: 'v6g2rhP1GFw', name: 'Como salvar um arquivo no Corel Draw' },
    { id: 'd8hFCK3otpY', name: 'Como salvar arquivos no CorelDraw JPG, PNG e PDF' },
    { id: 'NWLqRzMADfQ', name: 'Como exportar vários arquivos de uma vez no CorelDraw - JPG, PNG e PDF' },
    { id: '0Rdv9NLo6FA', name: 'Como fazer um desenho pixelizado no Corel Draw - Super Mário 8bits' },
    { id: 'nelYhYHiADU', name: 'Como mover, deformar ou inclinar objetos no Corel Draw' }, 
    { id: 'j3q-HJkdFQ0', name: 'Como fazer um desenho no Corel Draw usando apenas retângulos' },
    { id: 'n6smi71OvvA', name: 'Como arredondar cantos no CorelDraw?' },
    { id: 'vBV1PpCg9ug', name: 'Como fazer desenhos no Corel Draw com a ferramenta de curvas' },
    { id: 'TNvLD_0i71M', name: 'Como usar contornos no CorelDraw' },
    { id: 'lz4k71oqlg0', name: 'Como desenhar usando a mídia artística no corel draw' },
    { id: 'ysIxSJnEPtc', name: 'Como fazer uma camiseta no CorelDraw (TUTORIAL)' },
    { id: 'VqrVuo8lIJw', name: 'Como editar textos no Corel Draw' },
    { id: '9sHZyIBH0jc', name: 'Como colocar texto em circulo no Corel Draw' },
    { id: 'EKRScigHYhs', name: 'Criando logo simples de joalheria no Coreldraw - Speed Art' },
    { id: 'y6FPDoBY2IA', name: 'Como usar o degradê no Corel Draw - Efeito Gradiente' },
    { id: 'osdIcLApM88', name: 'Como usar transparência no CorelDraw' },
    { id: 'cWUNm-QwQBM', name: 'Como usar sombra projetada no Coreldraw' },
    { id: 'UivwxhyAUVQ', name: 'Como usar a ferramenta de contorno no CorelDraw' },
    { id: 'tzK4guc5npg', name: 'Como usar a ferramenta de mistura do Corel Draw' },
    { id: 'wyIL2JfvTqs', name: 'Como usar a Ferramenta de Distorção no Corel Draw' },
    { id: 'UEYUcMogTDQ', name: 'Como usar ferramenta envelope no CorelDraw' },
    { id: 'ZvNIHwzcuB0', name: 'Como usar ferramenta de extrusão no CorelDraw' },
    { id: '4_HkX_l8XW4', name: 'Como usar ferramenta Bloquear Sombra no Corel Draw' },
    { id: '7XxWEEoAb8Y', name: 'Como usar a ferramenta Dimensão Paralela no Corel Draw' },
    { id: 'bCTZALNaJIg', name: 'Como usar ferramenta Conector no Coreldraw' },
    { id: 'MNSpJsWaAoY', name: 'Principais Atalhos para o Corel Draw' },
    { id: 'XVWhhLhKn4M', name: 'Como Aparar ou Soldar elementos no Corel Draw' },
    { id: 'ocJFhfprBn4', name: 'Como usar régua e linhas guias no Corel Draw' },
    { id: 'OiWzV5Hsr3o', name: 'Como refazer um logotipo no corel draw' },
    { id: 'OeLQ9BZjEWE', name: 'Como usar Rastrear Bitmap no Corel Draw' },
    { id: 'Dxl3pSsWTQY', name: 'Como substituir cor no Corel Draw' },
    { id: 'NL2qaUNNLH8', name: 'Como converter cores CMYK, RGB, TONS DE CINZA no Corel Draw' },
    { id: 'L1SyCkxBr-k', name: 'Como tratar fotos no Corel Draw' },
    { id: 'E-B1O0MSKkI', name: 'Efeitos 3D no Corel Draw' },
    { id: 'd4o2QZnLo4Q', name: 'Como ganhar dinheiro com o Corel Draw' },
    { id: 'egsqaWwYacY', name: 'O que é um logotipo, como criar um bom logotipo' },
    { id: 'lw4FW0z0yuM', name: 'Tipos de logotipo - isotipo, isologo, imagotipo' },
    { id: 'dJgcZRzKuIw', name: 'O Segredo pra criar bons logotipos' },
    { id: 'oc0O_saHIlk', name: 'Como fazer um logotipo no Corel Draw' },
    { id: 'erbokUs7fqE', name: 'Como criar um logotipo no Corel Draw - (passo a passo)' },
    { id: 'PljyYlTQptg', name: 'Como criar um logotipo no Corel Draw - (AULA COMPLETA)' },
    { id: 'ELXRIvLTKto', name: 'Como criar um logotipo no Corel Draw' },
    { id: '1UJPMZQL9-g', name: 'Como criar um logotipo no Corel draw (Passo a passo)' },
    { id: 'PAi1hmVAgP8', name: 'Como criar um manual de Identidade Visual - Manual de marca ou logotipo' },
    { id: 'CcaPbN7exCk', name: 'Como Fazer um Cartão de Visitas no Corel Draw' },
    { id: 'axP9I23OBrE', name: 'Como criar um Cartão de Visitas no Corel Draw' },
    { id: 'xkgpMcxVZU8', name: 'Como fazer um poster impresso em partes no Corel DRAW' },
    { id: 'nRhf6ZOyx5A', name: 'Como encontrar objetos invisíveis no Corel' },
    { id: 'tAQe79Zv-hs', name: 'O Corel não instala no meu computador! Como resolver?' },
    { id: '4m_iEgoS7A0', name: 'Corel deixa a foto em baixa qualidade? Entenda o DPI no corel!' },
    { id: 'dE14Gh2zVuM', name: 'Como fazer um logo com grid no Corel Draw' },
    { id: 'jB8ASmck1As', name: 'Como fazer cartão com verniz localizado no Corel Draw' },
    { id: 'CnvLqQiUiCk', name: 'Como fazer um mini cartão de visitas no Corel' },
    { id: 'd-slu_yzsFE', name: 'Como montar um cartão de visitas duplo no Corel Draw' },
    { id: 'LXw1ldFq39g', name: 'Como remover a página do corel remover borda e a sombra da página' },
    { id: 'MM4s_yedzwA', name: 'Como localizar e substituir cores no Corel Draw' },
    { id: '4LloRkXtDlg', name: 'Como arredondar cantos de qualquer objeto no CorelDraw?' },
    { id: 'bZ1i6T8f-nQ', name: 'Como usar a impressão mesclada no corel - Criar números sequenciais automaticamente' },
    { id: '92GVLa9KzSI', name: 'Usar a impressão mesclada no corel - Números sequênciais automaticamente para notas, talões e rifas' },
    { id: '-GCdqCeD658', name: 'Como usar a impressão mesclada no Corel pra colocar nomes em certificados automaticamente' },
    { id: '92GVLa9KzSI', name: 'Usar a impressão mesclada no corel - Números sequênciais automaticamente para notas, talões e rifas' },
    { id: '-GCdqCeD658', name: 'Como usar a impressão mesclada no Corel pra colocar nomes em certificados automaticamente' },
    { id: 'iyE6wYQA9e0', name: 'Como fazer um desenho simples no Corel Draw de modo fácil' },
    { id: 'rPXVp3SJ-vQ', name: 'Como fazer um desenho simples no Corel Draw de modo fácil - Parte 2' },
    { id: 'eTV1_1tmrYI', name: 'Como fazer um desenho com pintura gradiente no Corel Draw de modo fácil - PARTE 3' },
    { id: 'Ol1AYfUrep0', name: 'Como fazer um desenho com efeito 3D no Corel Draw de modo fácil - PARTE 4' },
    { id: 'RKuiSQwjalo', name: 'Como ganhar dinheiro com seus desenhos feitos no Corel Draw de modo fácil' },
    { id: 'QGnisk072IQ', name: 'Como imprimir várias etiquetas numeradas em sequência em uma mesma página do Corel Draw' },
    { id: 'rQP2xfZCjP0', name: 'Como deixar o Corel com tema escuro igual o illustrator de modo fácil' },
    { id: 'TUFGa_2Yjhk', name: 'Como mudar a distância de deslocamento das setas do teclado no Corel de modo fácil' },
    { id: '_pjH1CNUt-g', name: 'Como usar uma mesa digitalizadora no Corel de modo fácil - Wacom One' },
    { id: 'AcZmSHIJgzw', name: 'Como configurar pressão de mesa digitalizadora no Corel de modo fácil - wacon one' },
    { id: 'b_m9I4I2lL4', name: 'Como usar as ferramentas de alinhamento e distribuição no Corel de modo fácil' },
    { id: 'Q_aI0D5Gqro', name: 'Como fazer um desenho e pintar no Corel Draw de modo fácil' },
    { id: 'By9n6mjdV3w', name: 'Como usar a ferramenta de transformar para criar cópias perfeitas no Corel' },
    { id: '8Mk2K9FC35c', name: 'Como fazer um desenho e colorir no Corel Draw de modo fácil usando a mídia artística' },
    { id: 'XYLni79Z7v0', name: 'Crie 100 POSTAGENS para INSTAGRAM em Minutos com Corel Draw e ChatGPT' },
    { id: 'EIbbAETFQpE', name: 'Como redesenhar fontes no Corel de modo fácil e rápido' },
    { id: 'ztvY3S6RA5Q', name: 'Como descobrir a fonte de um logotipo usando a ferramenta WhatTheFont de modo fácil' },
    { id: '6u2g9kYPTVg', name: 'Como desenhar símbolos usando formas simples no Corel Draw de modo fácil' },
    { id: 'pnKdg77B_8E', name: 'Redesenhar um logotipo no Corel Draw de modo fácil' },
    { id: 'nRKbjWdgXe0', name: 'Como redesenhar letras e fontes no Corel Draw de modo fácil' },
    { id: '3JRtdFbanRo', name: 'Pra que serve o painel de objetos do Corel Draw como usar de modo fácil' },
    { id: 'Xsb8LfbmAEs', name: 'Como fazer thumbnail - capa para youtube - no Corel de um modo fácil' },
    { id: 'Ij5b9T7_nu8', name: 'Como criar um Jornal estilo Classificados no Corel Draw e ganhar dinheiro de modo fácil' },
    { id: 'cqW1hBvtXNc', name: 'Como ajustar objetos ao caminho no Corel Draw de modo fácil' },
    { id: 'lrnTsf42oSw', name: 'Como usar a paleta de cores do Corel Draw do jeito certo' },
    { id: 'RhUshi9ihPA', name: 'Como copiar o degrade de uma imagem no Corel Draw de modo fácil' },
    { id: '2gZm5kiV-vE', name: 'Como usar cores com código no Corel de modo fácil' },
    { id: 'y8NPzyRb85w', name: 'Como usar o preenchimento gradiente de modo profissional no Corel Draw' },
    { id: 'pUuE9eJzSyw', name: 'Como criar estampas com padrão de imagem no Corel Draw' },
    { id: 'YKUuGHzST1g', name: 'Como criar padrão de estampa com vetor no Corel Draw' },
    { id: 'COkOfTh846c', name: 'Como importar arquivos de Illustrator e EPS para o Corel Draw' },
    { id: '9DVEREDtzRk', name: 'Como fazer um livro de desenhos para colorir no Corel Draw e ganhar dinheiro' },
    { id: 'tDEM9jkQgYE', name: 'Como fazer um livro de história infantil no Corel e ganhar dinheiro' },
    { id: 'Ta_sFXYWpaE', name: 'Como fazer desenho pixelizados no Corel ganhar dinheiro com pixel art' },
    { id: 'v5zXQXKpwt8', name: 'Como ganhar dinheiro fazendo molduras personalizadas para o Canva no Corel Draw' },
    { id: 'I1EC-F5Q70g', name: 'Como Recortar uma imagem no Corel Draw' },
    { id: 'tUIBPHfxQic', name: 'Como usar a máscara de bitmap do Corel para remover o fundo de uma imagem' },
    { id: 'hnSaStr07sQ', name: 'Como remover o fundo de uma foto usando uma gambiarra no Corel Draw' },
    { id: 'bVMWdWdKmmU', name: 'Como mudar a cor de fundo da página no Corel de modo fácil' },
    { id: '_iKd8i9Y_Mo', name: 'Ferramenta sumiu da barra no Corel! Como arrumar?' },
    { id: 'saKJKuQOoMQ', name: 'Pack de gradientes grátis pra usar no Corel. Gradientes de ouro, prata e cobre!' },
    { id: 'lYxoqhEiwB4', name: 'Como fazer efeito de imagem saindo de objeto no Corel Draw' },
    { id: 'jNUUhIAONSM', name: 'Como separar partes de um objeto único no Corel Draw de modo fácil' },
    { id: 'XMj3erKOZVE', name: 'Como vetorizar esboço de logotipo no Corel de modo fácil' },
    { id: 'kQFgcVupePw', name: 'Como mudar as cores de uma camiseta no Corel estilo Mockup de camiseta personalizado' },
    { id: 'Ml864OGgleI', name: 'Como desenhar uma flor para recorte no Corel de modo fácil' },
    { id: 'RoxiZkG1jW8', name: 'Como girar elementos no corel de modo fácil e rápido' },
    { id: 'FWHSCP7dpvQ', name: 'Como Criar Canecas Personalizadas com Corel' }6
 ];

// Estado atual
let currentChannel = 0;
let currentVolume = 100;
let isMuted = false;
let isPlaying = true;

// Elementos DOM
const iframe = document.getElementById('youtubePlayer');
const channelNumberDisplay = document.getElementById('channelNumber');
const channelListContainer = document.getElementById('channelListContainer');

// Botões de controle
const channelUpBtn = document.getElementById('channelUp');
const channelDownBtn = document.getElementById('channelDown');
const volumeUpBtn = document.getElementById('volumeUp');
const volumeDownBtn = document.getElementById('volumeDown');
const playPauseBtn = document.getElementById('playPause');
const stopBtn = document.getElementById('stop');
const muteBtn = document.getElementById('mute');

// Variável para player do YouTube API
let player;

// Carregar API do YouTube
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Callback quando a API do YouTube está pronta
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        videoId: channels[currentChannel].id,
        playerVars: {
            'playsinline': 1,
            'enablejsapi': 1,
            'controls': 1,
            'modestbranding': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Quando o player está pronto
function onPlayerReady(event) {
    updateChannelDisplay();
    createChannelList();
    player.setVolume(currentVolume);
}

// Quando o estado do player muda
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
    } else if (event.data === YT.PlayerState.PAUSED) {
        isPlaying = false;
    }
}

// Atualizar display do canal
function updateChannelDisplay() {
    const channelNum = (currentChannel + 1).toString().padStart(2, '0');
    channelNumberDisplay.textContent = channelNum;
    
    // Atualizar lista de canais
    updateChannelListActive();
}

// Criar lista de canais
function createChannelList() {
    channelListContainer.innerHTML = '';
    
    channels.forEach((channel, index) => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';
        if (index === currentChannel) {
            channelItem.classList.add('active');
        }
        
        const channelNum = document.createElement('span');
        channelNum.className = 'channel-num';
        channelNum.textContent = `Aula ${(index + 1).toString().padStart(2, '0')}`;
        
        const channelName = document.createElement('span');
        channelName.textContent = channel.name;
        
        channelItem.appendChild(channelNum);
        channelItem.appendChild(channelName);
        
        channelItem.addEventListener('click', () => {
            changeChannel(index);
        });
        
        channelListContainer.appendChild(channelItem);
    });
}

// Atualizar item ativo na lista de canais
function updateChannelListActive() {
    const items = document.querySelectorAll('.channel-item');
    items.forEach((item, index) => {
        if (index === currentChannel) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Mudar canal
function changeChannel(newChannel) {
    if (newChannel >= 0 && newChannel < channels.length) {
        currentChannel = newChannel;
        if (player && player.loadVideoById) {
            player.loadVideoById(channels[currentChannel].id);
        }
        updateChannelDisplay();
        
        // Efeito visual de mudança de canal
        addChannelChangeEffect();
    }
}

// Efeito visual de mudança de canal
function addChannelChangeEffect() {
    const screenGlass = document.querySelector('.screen-glass');
    screenGlass.style.opacity = '0.3';
    setTimeout(() => {
        screenGlass.style.opacity = '1';
    }, 200);
}

// Canal anterior
function channelUp() {
    const newChannel = currentChannel - 1;
    if (newChannel < 0) {
        changeChannel(channels.length - 1);
    } else {
        changeChannel(newChannel);
    }
}

// Próximo canal
function channelDown() {
    const newChannel = currentChannel + 1;
    if (newChannel >= channels.length) {
        changeChannel(0);
    } else {
        changeChannel(newChannel);
    }
}

// Aumentar volume
function volumeUp() {
    if (currentVolume < 100) {
        currentVolume = Math.min(100, currentVolume + 10);
        if (player && player.setVolume) {
            player.setVolume(currentVolume);
            if (isMuted) {
                player.unMute();
                isMuted = false;
                updateMuteButton();
            }
        }
        showVolumeNotification(currentVolume);
    }
}

// Diminuir volume
function volumeDown() {
    if (currentVolume > 0) {
        currentVolume = Math.max(0, currentVolume - 10);
        if (player && player.setVolume) {
            player.setVolume(currentVolume);
        }
        showVolumeNotification(currentVolume);
    }
}

// Toggle Play/Pause
function togglePlayPause() {
    if (player && player.getPlayerState) {
        const state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            isPlaying = false;
        } else {
            player.playVideo();
            isPlaying = true;
        }
    }
}

// Parar vídeo
function stopVideo() {
    if (player && player.stopVideo) {
        player.stopVideo();
        isPlaying = false;
    }
}

// Toggle Mute
function toggleMute() {
    if (player) {
        if (isMuted) {
            player.unMute();
            isMuted = false;
        } else {
            player.mute();
            isMuted = true;
        }
        updateMuteButton();
    }
}

// Atualizar botão de mute
function updateMuteButton() {
    if (isMuted) {
        muteBtn.innerHTML = '🔇';
    } else {
        muteBtn.innerHTML = '🔊';
    }
}

// Mostrar notificação de volume
function showVolumeNotification(volume) {
    // Remove notificação existente
    const existingNotification = document.querySelector('.volume-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = 'volume-notification';
    notification.textContent = `Volume: ${volume}%`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: #00ff00;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 12px;
        z-index: 1000;
        animation: fadeInOut 2s ease-in-out;
        border: 2px solid #00ff00;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Event Listeners
channelUpBtn.addEventListener('click', channelUp);
channelDownBtn.addEventListener('click', channelDown);
volumeUpBtn.addEventListener('click', volumeUp);
volumeDownBtn.addEventListener('click', volumeDown);
playPauseBtn.addEventListener('click', togglePlayPause);
stopBtn.addEventListener('click', stopVideo);
muteBtn.addEventListener('click', toggleMute);

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            e.preventDefault();
            channelUp();
            break;
        case 'ArrowDown':
            e.preventDefault();
            channelDown();
            break;
        case 'ArrowRight':
            e.preventDefault();
            volumeUp();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            volumeDown();
            break;
        case ' ':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'm':
        case 'M':
            e.preventDefault();
            toggleMute();
            break;
        case 's':
        case 'S':
            e.preventDefault();
            stopVideo();
            break;
    }
});

// Adicionar CSS para animação de notificação
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        20% {
            opacity: 1;
            transform: translateY(0);
        }
        80% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Inicializar quando a página carregar
window.addEventListener('load', () => {
    loadYouTubeAPI();
});

// Tornar a função disponível globalmente para a API do YouTube
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|tudo|bem)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + 'Bem-vindo à SPACE!🚀\nComo podemos ajudar a impulsionar o seu negócio hoje? \nEscolha uma opção digitando o número correspondente:\n\n1️⃣ Artes e Design – Criamos artes para banners, outdoors, posts para redes sociais e muito mais.\n2️⃣ Produção de Vídeos – Edição e criação de vídeos profissionais para promover sua marca de maneira impactante\n3️⃣ Tráfego Pago – Anúncios no Google, Facebook e Instagram para aumentar seu alcance e atrair mais clientes.\n4️⃣ Marketing Digital – Estratégias para melhorar a presença digital e o crescimento da sua marca.\n5️⃣ Identidade Visual – Desenvolvemos logotipos, paletas de cores e toda a identidade visual da sua marca.\n6️⃣ Outros Serviços – Precisa de algo diferente? Fale conosco e encontraremos a melhor solução para você!\n👉 Digite o número da opção desejada.'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '1️⃣ Artes e Design\n👉 Digite a letra do serviço que você deseja em Artes e Design:\nA) Banners – Criação de banners para online e offline.\nB) Outdoors – Design personalizado para outdoors.\nC) Posts para Redes Sociais – Posts criativos para aumentar o engajamento nas redes.');

       

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '2️⃣ Vídeos\n👉 Escolha uma opção digitando a letra correspondente Vídeos:\n\nD) Vídeos Institucionais – Apresente sua empresa de forma profissional.\nE) Vídeos para Redes Sociais – Vídeos curtos e criativos para engajamento nas redes.\nF) Animações e Motion Graphics – Criação de animações para destacar sua mensagem.\nG) Vídeos Publicitários – Produção de vídeos para campanhas publicitárias.');

        
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '3️⃣ Tráfego Pago\n👉 Escolha uma opção digitando a letra correspondente Tráfego Pago:\n\nH) Anúncios no Google – Anúncios pagos para aumentar sua visibilidade no Google.\nI) Anúncios no Facebook e Instagram – Campanhas pagas para atingir seu público-alvo nas redes sociais.');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '4️⃣ Marketing Digital\n👉 Escolha uma opção digitando a letra correspondente Marketing Digital:\n\nJ) Gestão de Redes Sociais – Planejamento e execução de conteúdo para suas redes.\nK) Google Meu Negócio – Otimize seu perfil no Google para atrair mais clientes e melhorar a visibilidade.\nL) Enviar Proposta – Gostaria de receber uma proposta personalizada? Digite a letra L para que possamos enviar um PDF com nossas opções de serviços e preços.');


        


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '5️⃣ Identidade Visual\n👉 Escolha uma opção digitando a letra correspondente Identidade Visual:\n\nM) Criação de Logotipo – Desenvolvimento de logotipo único para sua marca.\nN) Cartões de Visita e Papelaria – Design de materiais de apoio para sua empresa.');


    }




    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '6️⃣ Outros Serviços\n👉 Escolha uma opção digitando a letra correspondente Outros Serviços:\nO) Explique o serviço que você deseja – Se tem algo específico em mente, nos diga para encontrarmos a melhor solução para você!');
      
        
    }




    if (msg.body !== null && msg.body === '10' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '1️⃣shannon\n👉 Digite a letra do serviço que você deseja em Artes e Design:\nA) Banners – Criação de banners para online e offline.\nB) Outdoors – Design personalizado para outdoors.\nC) Posts para Redes Sociais – Posts criativos para aumentar o engajamento nas redes.');

    }




    
    




    







});

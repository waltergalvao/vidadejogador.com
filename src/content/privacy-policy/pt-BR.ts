import type { PrivacyPolicy } from "./types";

export const privacyPolicy: PrivacyPolicy = {
  title: "Política de Privacidade",
  updatedLabel: "Última atualização",
  intro: [
    "Esta política explica quais dados o jogo Vida de Jogador, para iOS e Android, usa, por que usa e quais são os seus direitos. Ela segue a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018) e também atende ao Regulamento Geral sobre a Proteção de Dados da União Europeia (GDPR) e às leis de privacidade da Califórnia (CCPA).",
    "Em resumo: Vida de Jogador é um jogo para um jogador só, que funciona sem internet. Você não cria conta, e o jogo não pede seu nome, e-mail ou telefone. Suas carreiras ficam guardadas no seu aparelho. Os poucos dados que saem dele servem para entender como o jogo é usado e para processar compras, e estão descritos abaixo.",
  ],
  sections: [
    {
      heading: "Quem somos",
      paragraphs: [
        "Vida de Jogador é desenvolvido e publicado pela PC Pocket Games, que é a controladora dos dados pessoais tratados pelo jogo, nos termos da LGPD e do GDPR.",
        "Para qualquer assunto sobre privacidade, inclusive os pedidos previstos na LGPD, fale com a gente pelo e-mail {email}.",
      ],
    },
    {
      heading: "O que não coletamos",
      paragraphs: ["O jogo não tem conta nem login, e não coleta:"],
      bullets: [
        "seu nome, e-mail, telefone, endereço ou data de nascimento;",
        "o nome e a aparência do jogador que você cria (eles ficam só no seu aparelho);",
        "sua localização precisa (GPS);",
        "seus contatos, fotos, câmera, microfone ou arquivos (o jogo não pede acesso a nada disso);",
        "dados do seu cartão ou de outros meios de pagamento.",
      ],
    },
    {
      heading: "Dados guardados no seu aparelho",
      paragraphs: [
        "Tudo o que você faz no jogo fica salvo no armazenamento do próprio aparelho, na área reservada ao aplicativo: suas carreiras (o nome e o visual do seu jogador, os clubes, as partidas, as escolhas e a evolução) e as suas configurações (som, vibração, idioma e notificações).",
        "Esses dados não são enviados para nós nem para ninguém. Não existe salvamento na nuvem hoje; se um dia oferecermos, isso vai estar descrito nesta política antes.",
        "O jogo também lê, no próprio aparelho, algumas informações de que precisa para funcionar, como o idioma do sistema (para mostrar o jogo na sua língua). Essa leitura acontece só no aparelho.",
      ],
    },
    {
      heading: "Notificações",
      paragraphs: [
        "As notificações vêm desligadas. Se você ligá-las nas Configurações do jogo, o sistema do seu aparelho vai pedir sua permissão.",
        "As notificações do jogo são locais: são agendadas e mostradas pelo próprio aparelho, sem passar por um servidor nosso. Você pode desligá-las a qualquer momento nas Configurações do jogo ou do aparelho.",
      ],
    },
    {
      heading: "Dados de uso (análise)",
      paragraphs: [
        "Para entender como o jogo é jogado e melhorá-lo (por exemplo, onde os jogadores travam, quais partes são mais jogadas, se o jogo apresenta erros), podemos usar o PostHog, um serviço de análise de uso. Quando ele está ativo, o jogo envia ao PostHog:",
      ],
      bullets: [
        "um identificador aleatório criado no aparelho, que não está ligado ao seu nome nem a nenhuma conta;",
        "eventos de uso do jogo, como abrir o jogo, começar uma carreira, concluir uma partida ou uma etapa da carreira;",
        "informações técnicas do aparelho e do aplicativo, como modelo, sistema operacional e versão, versão do jogo, idioma e fuso horário;",
        "o endereço IP da conexão, que o PostHog pode usar para estimar a localização aproximada (país ou cidade).",
      ],
      after: [
        "Usamos esses dados de forma agregada, para tomar decisões sobre o jogo. Não os usamos para identificar você, não os vendemos e não os usamos para publicidade.",
      ],
    },
    {
      heading: "Compras dentro do jogo",
      paragraphs: [
        "O jogo pode oferecer compras opcionais. Elas são feitas pela App Store (Apple) ou pelo Google Play, que processam o pagamento com os dados da sua conta na loja. Nós nunca vemos os dados do seu cartão ou do seu meio de pagamento.",
        "Para confirmar e liberar as compras, usamos o RevenueCat. Ele recebe da loja e guarda as informações da compra: um identificador anônimo do aplicativo, o produto comprado, a data, o preço e a moeda, o identificador da transação e o país da loja. Usamos essas informações para entregar o que você comprou, restaurar compras e cumprir obrigações fiscais e contábeis.",
      ],
    },
    {
      heading: "Anúncios",
      paragraphs: [
        "O jogo não é feito para ter anúncios que interrompem o jogo. Se o jogo mostrar anúncios, eles serão anúncios com recompensa, que você escolhe assistir em troca de um benefício no jogo, fornecidos pelo Google AdMob.",
        "Nesse caso, o Google AdMob pode coletar o identificador de publicidade do aparelho (o IDFA no iOS ou o ID de publicidade no Android), o endereço IP e informações técnicas do aparelho, para mostrar anúncios, medir seus resultados e evitar fraudes. No iOS, o identificador de publicidade só é usado se você permitir no aviso de rastreamento do sistema. Onde a lei exigir, pediremos seu consentimento antes de mostrar anúncios personalizados.",
        "Você pode limitar o uso do identificador de publicidade a qualquer momento: no iOS, em Ajustes > Privacidade e Segurança > Rastreamento; no Android, nas configurações de anúncios do Google, onde também é possível apagá-lo ou redefini-lo.",
      ],
    },
    {
      heading: "Serviços de terceiros",
      paragraphs: [
        "Estes são os serviços que podem tratar dados quando você usa o jogo. Cada um tem a sua própria política de privacidade:",
      ],
      bullets: [
        "PostHog (análise de uso): https://posthog.com/privacy",
        "RevenueCat (gestão de compras): https://www.revenuecat.com/privacy",
        "Apple App Store (download, pagamentos e compras no iOS): https://www.apple.com/br/legal/privacy/",
        "Google Play (download, pagamentos e compras no Android): https://policies.google.com/privacy",
        "Google AdMob (anúncios com recompensa, se o jogo mostrar anúncios): https://policies.google.com/technologies/ads",
      ],
      after: [
        "Não vendemos seus dados pessoais e só os compartilhamos com esses serviços, para as finalidades descritas aqui, ou quando a lei ou uma autoridade exigir.",
      ],
    },
    {
      heading: "Bases legais",
      paragraphs: ["Tratamos dados pessoais com base nas seguintes hipóteses da LGPD (e nas bases equivalentes do GDPR):"],
      bullets: [
        "execução de contrato: para fornecer o jogo e entregar e restaurar as compras que você faz;",
        "legítimo interesse: para entender o uso do jogo, corrigir erros e melhorá-lo, sempre com dados que não identificam você diretamente;",
        "consentimento: para notificações e, se o jogo mostrar anúncios, para anúncios personalizados onde a lei exigir;",
        "cumprimento de obrigação legal: para guardar registros de compras exigidos pela legislação fiscal.",
      ],
      after: ["Quando o tratamento depende do seu consentimento, você pode retirá-lo a qualquer momento."],
    },
    {
      heading: "Por quanto tempo guardamos os dados",
      paragraphs: [
        "Os dados do seu aparelho ficam lá até você desinstalar o aplicativo.",
        "Os dados de uso ficam guardados só pelo tempo necessário para analisar e melhorar o jogo e depois são apagados. Os registros de compras ficam guardados pelo tempo exigido pela lei e pelas lojas.",
      ],
    },
    {
      heading: "Transferência internacional de dados",
      paragraphs: [
        "Os serviços de terceiros listados acima podem armazenar e tratar dados em servidores fora do Brasil, como nos Estados Unidos e na União Europeia. Nesses casos, a transferência acontece com as garantias previstas na LGPD e no GDPR, como as cláusulas contratuais padrão adotadas por esses fornecedores.",
      ],
    },
    {
      heading: "Crianças e adolescentes",
      paragraphs: [
        "Vida de Jogador é um jogo para o público geral e não é direcionado a crianças com menos de 13 anos. Não coletamos intencionalmente dados pessoais de crianças.",
        "Se você é pai, mãe ou responsável e acredita que uma criança nos forneceu dados pessoais, escreva para {email} e vamos apagá-los. Compras dentro do jogo podem ser bloqueadas pelos controles parentais da App Store e do Google Play.",
      ],
    },
    {
      heading: "Seus direitos",
      paragraphs: ["De acordo com a LGPD, e conforme o caso com o GDPR e a CCPA, você tem direito a:"],
      bullets: [
        "confirmar se tratamos seus dados e acessá-los;",
        "corrigir dados incompletos, inexatos ou desatualizados;",
        "pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desacordo com a lei;",
        "pedir a portabilidade dos seus dados;",
        "pedir a eliminação dos dados tratados com base no seu consentimento e retirar o consentimento;",
        "saber com quem compartilhamos seus dados;",
        "se opor a um tratamento feito com base no legítimo interesse;",
        "não sofrer discriminação por exercer esses direitos.",
      ],
      after: [
        "Para exercer qualquer um deles, escreva para {email}. Como o jogo não tem conta e não sabemos quem você é, talvez a gente peça algumas informações para encontrar os dados ligados ao seu aparelho, como o modelo do aparelho, a data aproximada em que você instalou o jogo ou, no caso de compras, o número do pedido que aparece no recibo da loja. Respondemos dentro dos prazos da lei.",
        "Você também pode apresentar uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD) ou, se estiver na União Europeia, à autoridade de proteção de dados do seu país.",
      ],
    },
    {
      heading: "Como apagar seus dados",
      paragraphs: [
        "Para apagar tudo o que o jogo guardou no aparelho, desinstale o aplicativo: as carreiras e as configurações são removidas junto com ele e não podem ser recuperadas.",
        "Para pedir a eliminação dos dados de uso e dos registros de compras que estão com os serviços de terceiros, escreva para {email}. Os registros que a lei nos obriga a guardar serão mantidos só pelo prazo exigido.",
      ],
    },
    {
      heading: "Segurança",
      paragraphs: [
        "Coletamos o mínimo de dados possível. Os dados do jogo ficam na área do aparelho reservada ao aplicativo, protegida pelo sistema operacional, e os dados enviados aos serviços de terceiros trafegam por conexões criptografadas. Nenhum sistema é totalmente seguro, mas adotamos medidas razoáveis para proteger os dados e, se acontecer um incidente que possa trazer risco a você, vamos agir e comunicar conforme a lei exige.",
      ],
    },
    {
      heading: "Alterações nesta política",
      paragraphs: [
        "Podemos atualizar esta política quando o jogo mudar, por exemplo se começarmos a usar um novo serviço ou a tratar novos dados. A data da última atualização fica no topo desta página. Se a mudança for importante, avisaremos também dentro do jogo ou na página dele na loja.",
      ],
    },
    {
      heading: "Contato",
      paragraphs: [
        "Dúvidas, pedidos ou reclamações sobre privacidade: {email}.",
      ],
    },
  ],
};

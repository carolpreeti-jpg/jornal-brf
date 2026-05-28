/**
 * Dados da edição atual do Jornal BRF Previdência.
 * Para criar uma nova edição, edite os valores abaixo.
 */
export const edition = {
  // ─── Identificação ────────────────────────────────────────────────────────
  numero: 45,
  mes: 'Maio',
  ano: 2026,

  // ─── Menu Índice (cards visuais logo após o header) ───────────────────────
  menuIndexTitulo: 'Matérias desta Edição',
  menuIndex: [
    {
      id: 'editorial',
      n: '01',
      tag: 'Editorial',
      titulo: 'Resumo da edição',
      subtitulo: 'Mensagem do Comitê Editorial',
      imagem: '/edicao.jpg',
      imagemFit: 'cover',
      imagemPosition: 'center center',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
      placeholderLabel: 'Editorial',
    },
    {
      id: 'compromisso',
      n: '02',
      tag: 'Programa',
      titulo: 'BRF Prev Compromisso com Você',
      subtitulo: 'Visitas presenciais às unidades',
      imagem: '/acao-curitiba.png',
      imagemFit: 'cover',
      imagemPosition: 'center 35%',
      imagemFlipX: true,
      gradient: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)',
      placeholderLabel: 'Compromisso',
    },
    {
      id: 'fale-presidente',
      n: '03',
      tag: 'Canal',
      titulo: 'Fale com o\nPresidente',
      subtitulo: 'Novo canal de relacionamento',
      imagem: '/mauricio-manduca.jpg',
      imagemPosition: 'center top',
      imagemFit: 'cover',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
      placeholderLabel: 'Fale c/ Presidente',
    },
    {
      id: 'historias',
      n: '04',
      tag: 'Inspiração',
      titulo: 'Histórias que\ninspiram',
      subtitulo: 'Dra. Ivone Delazari',
      imagem: '/ivone-card.jpg',
      imagemPosition: 'center top',
      imagemFit: 'cover',
      imagemScale: 1.8,
      imagemTranslateY: '-39%',
      gradient: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
      placeholderLabel: 'Histórias',
    },
    {
      id: 'relatorio',
      n: '05',
      tag: 'Transparência',
      titulo: 'Relatório\nAnual 2025',
      subtitulo: 'Resultados que conectam',
      imagem: '/rai.png',
      imagemPosition: 'center 45%',
      imagemFit: 'cover',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #2563EB 100%)',
      placeholderLabel: 'Relatório Anual',
    },
    {
      id: 'webinar',
      n: '06',
      tag: 'Educação',
      titulo: 'Webinar IR 2026',
      subtitulo: 'Declaração na prática',
      imagem: '/jessica-webinar.jpg',
      imagemFit: 'cover',
      imagemPosition: 'center center',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
      placeholderLabel: 'Webinar IR',
    },
    {
      id: 'encontros',
      n: '07',
      tag: 'Resultados',
      titulo: 'Encontros de Resultados',
      subtitulo: '33ª edição trimestral',
      imagem: '/encontro-resultados.png',
      imagemFit: 'cover',
      imagemPosition: 'center center',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #0D9488 100%)',
      placeholderLabel: 'Encontros',
    },
    {
      id: 'compromisso-unidades',
      n: '08',
      tag: 'Marco',
      titulo: 'R$ 5 bilhões em patrimônio',
      subtitulo: 'Uma marca histórica',
      imagem: '/bilhoes.jpg',
      imagemFit: 'cover',
      imagemPosition: 'center center',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #1E3A8A 100%)',
      placeholderLabel: 'Patrimônio',
    },
    {
      id: 'rentabilidade',
      n: '09',
      tag: 'Resultados',
      titulo: 'Desempenho dos Planos',
      subtitulo: 'Cenário e rentabilidade 2025',
      imagem: '/desempenho.jpg',
      imagemFit: 'cover',
      imagemPosition: 'center center',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #2563EB 100%)',
      placeholderLabel: 'Rentabilidade',
    },
    {
      id: 'aportes',
      n: '10',
      tag: 'Aporte',
      titulo: 'Aportes extras e contribuições',
      subtitulo: 'Aumente sua reserva',
      imagem: '/aportes.png',
      imagemFit: 'cover',
      imagemPosition: 'center center',
      gradient: 'linear-gradient(135deg, #F97316 0%, #FCD34D 100%)',
      placeholderLabel: 'Aportes',
    },
    {
      id: 'brfprev-em-foco',
      n: '11',
      tag: 'Canal',
      titulo: 'BRF Prev em Foco',
      subtitulo: 'Vídeo mensal de novidades',
      imagem: '/webinar.jpg',
      imagemFit: 'cover',
      imagemPosition: 'center center',
      gradient: 'linear-gradient(135deg, #DC2626 0%, #7C3AED 100%)',
      placeholderLabel: 'BRF Prev em Foco',
    },
    {
      id: 'app-brf-prev',
      n: '12',
      tag: 'Digital',
      titulo: 'App BRF Prev',
      subtitulo: 'Sua previdência na palma da mão',
      imagem: '/app-brf-pre.png',
      imagemFit: 'contain',
      imagemPosition: 'center top',
      imagemScale: 1.55,
      imagemTranslateY: '-13%',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #1E3A8A 100%)',
      placeholderLabel: 'App BRF Prev',
    },
  ],

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badge: 'Nova Edição · Maio 2026',
    titulo: 'Jornal',
    subtitulo: 'BRF Previdência',
    lead: 'Em 2026, seguimos fortalecendo um compromisso essencial: estar cada vez mais próximos de você. Alcançamos R$ 5 bilhões em patrimônio e ampliamos nossa presença nas unidades com o programa BRF Prev Compromisso com Você.',
    destaques: [
      { titulo: 'BRF Prev atinge R$ 5 bilhões\nem patrimônio histórico', href: '#compromisso-unidades', label: 'Ver matéria' },
      { titulo: 'Relatório Anual 2025: transparência e resultados', href: '#relatorio', label: 'Ver matéria' },
      { titulo: 'App BRF Prev: sua previdência na palma da mão', href: '#app-brf-prev', label: 'Ver matéria' },
    ],
    numMaterias: 11,
    tempoLeitura: 20,
    rentCard: {
      label: 'Patrimônio total',
      valor: 'R$ 5 bi',
      plano: 'BRF Previdência',
      periodo: 'marco histórico 2026',
      tags: ['Solidez', 'Transparência'],
    },
    miniCard: {
      edicao: 'EDIÇÃO 45 · MAI 2026',
      chamada: 'R$ 5 bilhões:\nnossa marca histórica.',
    },
  },

  // ─── Sumário ──────────────────────────────────────────────────────────────
  sumario: [
    { n: '01', tag: 'Editorial',     titulo: 'Editorial — Resumo da Edição',                  href: '#editorial',       variante: '' },
    { n: '02', tag: 'Programa',      titulo: 'BRF Prev Compromisso com Você',                 href: '#compromisso',     variante: 'alt2' },
    { n: '03', tag: 'Canal',         titulo: 'Fale com o Presidente',                          href: '#fale-presidente', variante: 'alt3' },
    { n: '04', tag: 'Inspiração',    titulo: 'Histórias que inspiram — Dra. Ivone Delazari',  href: '#historias',       variante: 'alt' },
    { n: '05', tag: 'Transparência', titulo: 'Relatório Anual 2025',                           href: '#relatorio',       variante: 'alt2' },
    { n: '06', tag: 'Educação',      titulo: 'Webinar IR 2026',                                href: '#webinar',         variante: 'alt3' },
    { n: '07', tag: 'Resultados',    titulo: 'Encontros de Resultados — 33ª edição',           href: '#encontros',       variante: '' },
    { n: '08', tag: 'Marco',      titulo: 'R$ 5 bilhões em patrimônio',                   href: '#compromisso-unidades', variante: 'alt2' },
    { n: '09', tag: 'Resultados', titulo: 'Desempenho dos planos',                        href: '#rentabilidade',        variante: 'alt3' },
    { n: '10', tag: 'Aporte',     titulo: 'Aportes extras e contribuições suplementares', href: '#aportes',              variante: '' },
    { n: '11', tag: 'Canal',      titulo: 'BRF Prev em Foco',                             href: '#brfprev-em-foco',      variante: 'alt' },
    { n: '12', tag: 'Digital',    titulo: 'App BRF Prev',                                 href: '#app-brf-prev',         variante: 'alt2' },
  ],

  // ─── Editorial ────────────────────────────────────────────────────────────
  editorial: {
    titulo: 'Em 2026, seguimos fortalecendo um compromisso que é essencial para a BRF Previdência: estar cada vez mais próximos de você. E é esse propósito que marca o início do nosso ano.',
    paragrafos: [
      'Nesta edição, você acompanhará como estamos ampliando essa conexão na prática, seja por meio da presença nas unidades, com o programa BRF Prev Compromisso com Você, seja pela criação de novos canais que ampliam e fortalecem a escuta e o diálogo com nossos participantes.',
      'Além de oferecer soluções, queremos estar presentes, acessíveis e atentos às suas necessidades em cada etapa da sua jornada previdenciária.  Seguimos reforçando a transparência, um de nossos pilares mais importantes. Por isso, destacamos, nesta edição, o Relatório Anual 2025, um material completo que reúne os principais resultados e iniciativas da entidade, além dos Encontros de Resultados, que permitem acompanhar de perto a evolução dos planos.',
      'Também preparamos conteúdos voltados ao apoio das suas decisões financeiras no dia a dia, como o webinar sobre Imposto de Renda e orientações sobre como potencializar sua reserva previdenciária por meio de aportes extras e contribuições suplementares, além de um tutorial que mostra como é fácil acompanhar a BRF Prev pelo App.',
      'Celebramos um marco importante em nossa trajetória. Alcançamos R$ 5 bilhões em patrimônio, resultado que reflete a confiança dos nossos participantes e reafirma nosso compromisso com uma gestão sólida, responsável e sustentável.',
      'Ampliamos nossos canais de comunicação, criando, em abril, o BRF Prev em Foco. Um vídeo mensal disponibilizado em nossas redes com atualizações importantes sobre as novidades da entidade.',
      'Para encerrar esta edição, compartilhamos uma história que nos inspira e enche de orgulho, apresentando a trajetória da Dra. Ivone Delazari, marcada por dedicação, legado e uma conexão contínua com a BRF Previdência.',
      'Seguimos juntos, construindo um futuro com mais segurança, proximidade e informação.',
      'Boa leitura!',
    ],
    citacao: 'Além de oferecer soluções, queremos estar presentes, acessíveis e atentos às suas necessidades em cada etapa da sua jornada previdenciária.',
    citacaoAutor: '— Comitê Editorial · BRF Previdência',
  },

  // ─── Diretor ──────────────────────────────────────────────────────────────
  diretor: {
    nome: 'Maurício Manduca',
    cargo: 'Diretor-Presidente · BRF Previdência',
    iniciais: 'MM',
    titulo: 'Atingir a marca de R$ 5 bilhões em patrimônio representa muito mais do que um número.',
    paragrafos: [
      'É a materialização da confiança dos nossos participantes e do compromisso diário de toda a equipe com uma gestão responsável, transparente e orientada ao longo prazo.',
      'Seguiremos trabalhando para fortalecer ainda mais a segurança e a sustentabilidade dos nossos planos, sempre com foco na geração de valor para cada participante.',
    ],
    cnpb: 'CNPB 2019.0098-46',
  },

  // ─── BRF Prev Compromisso com Você ────────────────────────────────────────
  compromisso: {
    titulo: 'Programa BRF Prev Compromisso com Você fortalece proximidade com participantes nas unidades da BRF',
    intro: 'Com o objetivo de fortalecer ainda mais o relacionamento com os participantes e ampliar a proximidade por meio de atendimentos presenciais, criamos o programa BRF Prev Compromisso com Você.  A iniciativa prevê visitas presenciais às unidades da BRF em diversas regiões do Brasil ao longo do ano, promovendo atendimento mais próximo, acessível e personalizado aos participantes.',
    acoesRealizadas: {
      label: 'Ações realizadas',
      local: 'Curitiba · Itajaí · Campinas',
      periodo: 'mar/abr – mai 2026',
      descricao: 'A primeira ação do programa aconteceu na unidade de Curitiba, entre os dias 30 de março e 2 de abril.  Também estivemos presentes em Itajaí, de 11 e 15 de maio, e em Campinas, nos dias 18 e 19 de maio.\n\nDurante os eventos de atendimento presencial, os participantes puderam esclarecer dúvidas, conhecer melhor os planos administrados pela entidade, receber orientações sobre educação previdenciária e obter apoio em diferentes demandas relacionadas aos serviços da BRF Prev.\n\nOs resultados das ações reforçam a relevância da iniciativa e o forte interesse dos participantes pelo atendimento presencial. As principais metas foram atingidas e superadas. No total, foram mais de 200 atendimentos, 125 adesões aos planos previdenciários e 40 aportes e contribuições suplementares. Durante os encontros, os participantes são convidados a responder e avaliar o atendimento, que alcançou a meta de 90 pontos, refletindo a percepção positiva sobre a experiência proporcionada.',
      resultados: [
        { valor: '+200', label: 'atendimentos' },
        { valor: '125',  label: 'adesões aos planos previdenciários' },
        { valor: '40',   label: 'aportes e contribuições suplementares' },
        { valor: '90',   label: 'pontos na avaliação de atendimento (meta atingida)' },
      ],
    },
    resultadosContexto: 'Os resultados demonstram não apenas o alcance da ação, mas principalmente a força do contato direto e da escuta ativa na construção de uma relação mais próxima com nossos participantes. Quando estamos presentes, orientando e apoiando de forma personalizada, geramos mais clareza e segurança na tomada de decisão.',
    citacao: 'O Programa BRF Prev – Compromisso com Você foi desenvolvido com esse propósito: aproximar a BRF Prev das pessoas com consistência, qualidade e um atendimento que realmente faça sentido para cada participante, fortalecendo o vínculo e gerando resultados sustentáveis para o plano',
    citacaoAutor: 'Rose Zanutto, Coordenadora de Comunicação\ne Facilities da BRF Previdência',
    proximaVisita: 'Lucas do Rio Verde, MT — 25 a 29 de maio',
    calendario: [
      {
        mes: 'Maio', unidade: 'Lucas do Rio Verde', estado: 'MT',
        datas: '25–29 mai', status: 'proxima',
        gradient: 'linear-gradient(135deg, #EE686D 0%, #C53B6C 100%)',
      },
      {
        mes: 'Junho', unidade: 'Videira', estado: 'SC',
        datas: 'A definir', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #7D94FC 0%, #1B46B2 100%)',
      },
      {
        mes: 'Julho', unidade: 'Chapecó', estado: 'SC',
        datas: 'A definir', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)',
      },
      {
        mes: 'Julho', unidade: 'Concórdia', estado: 'SC',
        datas: 'A definir', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
      },
      {
        mes: 'Agosto', unidade: 'Itajaí', estado: 'SC',
        datas: 'A definir', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #0D9488 0%, #1B46B2 100%)',
      },
      {
        mes: 'Setembro', unidade: 'Marau', estado: 'RS',
        datas: '14–18 set', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #1B46B2 0%, #EE686D 100%)',
      },
      {
        mes: 'Outubro', unidade: 'Uberlândia', estado: 'MG',
        datas: 'A definir', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #7D94FC 0%, #0D2A6E 100%)',
      },
      {
        mes: 'Outubro', unidade: 'Toledo', estado: 'PR',
        datas: 'A definir', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #0D2A6E 0%, #2563EB 100%)',
      },
      {
        mes: 'Novembro', unidade: 'São Paulo', estado: 'SP',
        datas: 'A definir', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #EE686D 0%, #1B46B2 100%)',
      },
      {
        mes: 'Novembro', unidade: 'Rio Verde', estado: 'GO',
        datas: 'A definir', status: 'confirmar',
        gradient: 'linear-gradient(135deg, #0D9488 0%, #1E3A8A 100%)',
      },
    ],
  },

  // ─── Fale com o Presidente ────────────────────────────────────────────────
  falePresidente: {
    titulo: 'Fale com o Presidente: um novo canal de escuta e proximidade com os participantes',
    descricao: 'A BRF Prev lançou, em maio, um novo canal de relacionamento com os participantes. O "Fale com o Presidente" é uma iniciativa criada para fortalecer e ampliar ainda mais os espaços de escuta dentro da BRF Prev.',
    paragrafos: [
      'O novo canal foi desenvolvido como um complemento aos meios tradicionais de atendimento, oferecendo uma alternativa adicional para participantes que desejam aprofundar suas solicitações após utilizarem os canais convencionais.',
      'O "Fale com o Presidente" reforça o compromisso da BRF Prev com a proximidade, a transparência e a escuta ativa, contribuindo para uma experiência de atendimento ainda mais completa e acolhedora.',
      'É importante destacar que o canal não substitui os canais tradicionais de atendimento e não possui caráter de ouvidoria. Sua proposta é atuar como um segundo nível de atendimento, proporcionando mais proximidade na tratativa das demandas apresentadas pelos participantes.',
    ],
    cta: 'Quando precisar utilizar o canal, basta escrever um e-mail diretamente para:',
    ctaComplemento: 'O acesso também está disponível em nosso site.',
    email: 'presidente.brfprevidencia@mbrf.com',
    urlCanal: 'https://brfprevidencia.com.br/2026/05/11/fale-com-o-presidente/',
    citacao: 'Criar este canal é, antes de tudo, um ato de respeito ao nosso participante. O Fale com o Presidente não é uma formalidade: é um compromisso pessoal meu de ouvir, entender e agir. Cada mensagem será tratada com a atenção que você merece.',
    citacaoAutor: 'Mauricio Manduca\nDiretor Presidente - BRF Prev',
  },

  // ─── Histórias que Inspiram ───────────────────────────────────────────────
  historias: {
    eyebrow: 'Histórias que inspiram',
    subtitulo: 'Dra. Ivone Delazari é exemplo de dedicação à vida e à qualidade dos alimentos',
    intro: 'A nossa homenageada no evento comemorativo ao Dia do Aposentado, organizado pela Abrapp, em janeiro, foi a Dra. Ivone Delazari, aposentada do Plano FAF há mais de 20 anos. Sua história é daquelas que enchem de orgulho, não apenas pela carreira sólida construída ao longo de décadas, mas pelo propósito que segue guiando seus passos até hoje. Aos 84 anos, Dra. Ivone segue ativa, curiosa e profundamente comprometida com aquilo que sempre acreditou: a saúde pública e a segurança dos alimentos. Aposentada há mais de 20 anos, sua trajetória é um exemplo vivo de que o vínculo com o trabalho, com o conhecimento e com as pessoas pode atravessar gerações.',
    blocos: [
      {
        titulo: 'Uma carreira construída com propósito',
        texto: 'Durante sua atuação na Sadia/BRF S.A., a Dra. Ivone construiu uma carreira admirável na área de Segurança e Qualidade de Alimentos, com reconhecimento dentro e fora do Brasil. Sua dedicação a levou a diferentes países, sempre com o olhar atento à melhoria contínua e à proteção do consumidor. Além de títulos e conquistas, o que marcou sua trajetória foi a forma como escolheu viver essa jornada, sempre próxima das pessoas.\n\nAlém desse gesto de humildade e disposição para aprender, a troca constante com os colegas da indústria foi essencial para o desenvolvimento de metodologias eficazes e para a construção de uma visão completa sobre os processos de qualidade e segurança dos alimentos.',
        citacao: 'Eu fazia questão de visitar todas as unidades e estar com os trabalhadores. Eles diziam que aprendiam comigo, mas, na realidade, eu que aprendia com eles.',
      },
      {
        titulo: 'Aposentadoria não significa parar',
        texto: 'Para a Dra. Ivone, a aposentadoria nunca foi sinônimo de pausa, mas de reinvenção. Hoje, ela atua como consultora, elaborando dossiês completos sobre higiene e segurança dos alimentos para diferentes tipos de produtos e indústrias. E faz questão de destacar: "Pra mim, isso é uma diversão". Além disso, novos planos já estão em construção e carregam um forte propósito social como a dedicação à pequena indústria.',
        citacao: '"A pequena indústria faz comida para o povo. Por isso, quero produzir conteúdo gratuito para que tenham acesso às normas de segurança dos alimentos. Se necessário, quero contribuir pessoalmente. Ajudar pequenos empreendedores vai fazer eu me sentir honrada". A ideia de compartilhar conhecimento de forma acessível, seja por meio de um blog ou podcast, reforça um traço marcante de sua trajetória, marcada pelo compromisso com o coletivo.',
      },
      {
        titulo: 'Uma relação que continua: BRF Previdência',
        texto: 'Mesmo após mais de duas décadas de aposentadoria, Dra. Ivone mantém uma relação ativa com a BRF Previdência, um vínculo que reforça o sentimento de pertencimento construído ao longo dos anos. Participante da ASBEF (Associação dos Beneficiários da BRF Previdência), ela acompanha as novidades do plano, participa de grupos e segue conectada com a comunidade.\n\nPara ela, a BRF Previdência representa muito mais do que segurança financeira.',
        citacao: 'O plano de previdência tem me proporcionado um grande conforto, porque me sinto amparada. É algo que traz muita tranquilidade para a minha vida, já que não preciso me preocupar com essa parte financeira, a BRF Previdência cuida disso para mim. Com isso, consigo realizar tudo o que venho construindo até agora',
        complemento: 'Esse engajamento mostra que a previdência vai além do planejamento financeiro, representando continuidade, conexão e reconhecimento de histórias que fazem parte da construção da nossa trajetória coletiva.',
      },
    ],
    fechamento: 'A história da Dra. Ivone Delazari é, acima de tudo, um convite à reflexão sobre propósito, sobre legado e sobre a importância de seguir em movimento, independentemente da fase da vida. Seu exemplo nos lembra que conhecimento compartilhado transforma realidades, e que o verdadeiro reconhecimento está em impactar positivamente a vida das pessoas. Para a BRF Previdência, é uma honra contar com histórias como a dela, que inspiram, conectam e reforçam o orgulho de fazer parte dessa jornada.',
    legendaFoto: 'Na foto: Rose Zanutto, Coordenadora de Comunicação e Facilites; Vitoria Rosa, Assistente de Captação; Tatiani Leite, Analista de Comunicação; Ivone Delazari, Assistida do Plano FAF.',
  },

  // ─── Relatório Anual 2025 ─────────────────────────────────────────────────
  relatorio: {
    titulo: 'Relatório Anual 2025 conecta resultados da BRF Prev com os participantes',
    tema: 'resultados que conectam',
    descricao: 'A BRF Previdência apresenta o Relatório Anual 2025, um material que vai além dos números e itens exigidos pela legislação, reforçando o compromisso da Entidade com a transparência, as melhores práticas de governança e proximidade com seus participantes.\n\nCom o tema "resultados que conectam", o documento reúne os principais destaques da gestão no último ano, evidenciando a evolução contínua da experiência do participante, os avanços em eficiência operacional e a consistência dos resultados dos planos.',
    destaques: [
      { ic: '💻', texto: 'Lançamento de novos canais digitais como o site, portal de autoatendimento e aplicativo. Em 2025, a BRF Prev renovou a identidade visual e desenvolveu campanhas voltadas ao incentivo de aportes adicionais.' },
      { ic: '⚙️', texto: 'Internamente, houve revisão de processos e a migração do sistema de gestão, com foco em simplificar o acesso às informações e fortalecer a jornada do participante.' },
      { ic: '📈', texto: 'No campo dos investimentos, os Planos II, III e FAF superaram suas metas de rentabilidade no ano, mantendo desempenho consistente também no horizonte de longo prazo.' },
      { ic: '💰', texto: 'A gestão eficiente de recursos resultou, ainda, na redução de custos com investimentos e no controle das despesas administrativas, reforçando a responsabilidade na administração dos recursos.' },
      { ic: '⭐', texto: 'A experiência do participante também evoluiu de forma significativa, com melhorias nos canais digitais e redução expressiva no tempo médio de atendimento. O índice de satisfação alcançou 83%, alinhado às melhores práticas do segmento.' },
    ],
    celulas: [
      {
        titulo: 'Inovação & Comunicação',
        texto: 'Ao longo de 2025, a Entidade promoveu importantes iniciativas, como o lançamento de novos canais digitais como o site, portal de autoatendimento e aplicativo. Em 2025, a BRF Prev renovou a identidade visual e desenvolveu campanhas voltadas ao incentivo de aportes adicionais. Internamente, houve revisão de processos e a migração do sistema de gestão, com foco em simplificar o acesso às informações e fortalecer a jornada do participante.',
      },
      {
        titulo: 'Investimentos & Gestão',
        texto: 'No campo dos investimentos, os Planos II, III e FAF superaram suas metas de rentabilidade no ano, mantendo desempenho consistente também no horizonte de longo prazo. A gestão eficiente de recursos resultou, ainda, na redução de custos com investimentos e no controle das despesas administrativas, reforçando a responsabilidade na administração dos recursos.',
      },
      {
        titulo: 'Experiência do Participante',
        texto: 'A experiência do participante também evoluiu de forma significativa, com melhorias nos canais digitais e redução expressiva no tempo médio de atendimento, refletindo maior agilidade e qualidade no suporte. Como resultado, o índice de satisfação alcançou 83%, alinhado às melhores práticas do segmento.',
      },
    ],
    citacao: 'O Relatório Anual 2025 consolida nossas entregas e reafirma o compromisso com uma gestão responsável, transparente e orientada para resultados sustentáveis. Ele traduz como as decisões de gestão impactam diretamente a vida dos participantes. Em 2025, reforçamos nosso compromisso com uma governança sólida, resultados consistentes e, principalmente, com a evolução contínua da experiência de quem confia na BRF Previdência para planejar o seu futuro.',
    citacaoAutor: 'Vivian Fonseca, Diretora de Administração e Seguridade',
    url: 'https://relatorioanual2025.brfprevidencia.com.br/',
    urlLabel: 'relatorioanual2025.brfprevidencia.com.br',
    ctaInfo: 'Para uma melhor experiência, recomendamos acessar a versão interativa do RAI pelo computador, sempre que possível.',
  },

  // ─── Webinar IR 2026 ──────────────────────────────────────────────────────
  webinar: {
    titulo: 'Webinar BRF Prev orienta participantes sobre a Declaração de IR 2026 na prática',
    descricao: 'Com o início do período de entrega da Declaração do Imposto\nde Renda 2026, a BRF Prev promoveu um webinar especial com o objetivo de apoiar seus participantes no correto preenchimento das informações, especialmente no que se refere à previdência complementar.',
    paragrafos: [
      'O encontro foi conduzido pela Diretora de Administração e Seguridade, Vivian Fonseca, e contou com a participação da contadora Jessica Maia, fundadora da Domus Contábil, responsável por apresentar, de forma prática e didática,\no passo a passo da declaração.',
      'Durante o webinar, foram abordados os principais pontos de atenção para o contribuinte, com destaque para as atualizações das regras do IR 2026, possibilidades de deduções e orientações específicas sobre como declarar corretamente as contribuições e benefícios relacionados à previdência.',
      'A iniciativa reforça a importância do planejamento financeiro e do correto cumprimento das obrigações fiscais, contribuindo para evitar inconsistências na declaração, reduzir a carga tributária quando aplicável e garantir maior tranquilidade junto à Receita Federal.',
    ],
    condutores: [
      'Vivian Fonseca, Diretora de Administração e Seguridade',
      'Jessica Maia, fundadora da Domus Contábil',
    ],
    temas: [
      'Principais regras e atualizações do Imposto de Renda 2026',
      'Deduções permitidas e oportunidades de economia tributária',
      'Regras de isenção, incluindo casos de moléstia grave',
      'Tratamento de rendimentos recebidos acumuladamente (RRA)',
      'Nova faixa de isenção',
      'Orientações práticas sobre a previdência complementar',
    ],
    destaque: 'Um dos principais pontos de atenção para quem faz a declaração completa do IR é a possibilidade de dedução das contribuições realizadas para planos de aposentadoria até o limite de 12% dos rendimentos tributáveis, conforme previsto na legislação vigente. Esse benefício fiscal é um dos principais incentivos para o planejamento de longo prazo dos participantes.',
    subtitulo2: 'Benefício fiscal possibilita dedução de até 12%',
    paragrafos2: [
      'Um dos principais pontos de atenção para quem faz a declaração completa do IR é a possibilidade de dedução das contribuições realizadas para planos de aposentadoria até o limite de 12% dos rendimentos tributáveis, conforme previsto na legislação vigente. Esse benefício fiscal é um dos principais incentivos para o planejamento de longo prazo dos participantes.',
      'O webinar foi realizado ao vivo no dia 24 de abril e contou com espaço para esclarecimento de dúvidas, proporcionando uma abordagem prática e alinhada às necessidades dos participantes.',
      'Com essas apresentações, a BRF Prev reforça seu compromisso em oferecer conteúdos educativos e orientações qualificadas, contribuindo para que seus participantes tomem decisões mais informadas sobre sua vida financeira e previdenciária.',
    ],
    paragrafos2Youtube: 'Para quem não pôde acompanhar ao vivo ou deseja revisar o conteúdo, a gravação está disponível no canal da BRF Prev no YouTube.',
    data: '24 de abril',
    urlYoutube: 'https://youtu.be/Y2ij6POWl7U?si=YDG-jFccU6kvLNyb',
    urlLabel: 'Assistir gravação no YouTube',
  },

  // ─── Encontros de Resultados ──────────────────────────────────────────────
  encontros: {
    titulo: 'Encontro Trimestral de Resultados disponível no Youtube',
    intro: 'Entre os dias 27 e 29 de abril, a BRF Prev realizou a 33ª edição do Encontro Trimestral de Resultados. Os eventos, em formato online, foram transmitidos pela plataforma Teams e as gravações já estão disponíveis no canal do YouTube, organizadas por plano.',
    descricao: 'Foram três dias de conversa aberta para apresentar os resultados dos planos, comentar o cenário econômico atual, compartilhar as perspectivas para 2026 e esclarecer dúvidas dos participantes.  Uma oportunidade para acompanhar de perto a situação dos planos.',
    gravacoes: [
      { plano: 'Plano FAF', img: '/plano-faf.png', videoId: 'VWyshOJb7dA' },
      { plano: 'Plano III', img: '/plano-3.png',   videoId: 'axahpDtmHZA' },
      { plano: 'Plano II',  img: '/plano-2.png',   videoId: 'uY6Xgyu_oLs' },
    ],
    proximasDatas: [
      '27 de julho: Planos II e Família',
      '28 de julho: Planos III e Família',
      '29 de julho: Plano FAF e Família',
    ],
    proximoEncontro: {
      edicao: '34ª edição',
      descricao: 'Já reserve na agenda: a próxima edição do Conexão BRF Prev acontece em julho, trazendo as atualizações mais recentes da gestão dos planos.',
      datas: [
        { plano: 'Planos II e Família',  data: '27 de julho' },
        { plano: 'Planos III e Família', data: '28 de julho' },
        { plano: 'Plano FAF e Família',  data: '29 de julho' },
      ],
      avisoPosDatas: 'Fique de olho em nossas comunicações para conferir os horários e acessar os links.',
    },
  },

  // ─── Compromisso com Você — Unidades BRF (seção 2) ─────────────────────────
  compromissoUnidades: {
    titulo: 'BRF Prev atinge R$ 5 bilhões em patrimônio e reforça solidez na gestão previdenciária',
    paragrafos: [
      'A BRF Prev atingiu uma marca histórica em 2026, alcançando R$ 5 bilhões de patrimônio. O resultado reflete a confiança depositada pelos participantes, que, em diferentes fases da vida, contam com a Entidade para apoiar o planejamento de longo prazo e a construção de um futuro mais seguro.',
      'Esse volume expressivo de recursos evidencia o crescimento da entidade e, também, a consistência de sua gestão ao longo do tempo, pautada pela responsabilidade, transparência e foco no participante.',
    ],
    fotoUrl: '/business-women.jpg',
    paragrafoFoto: '[Texto do parágrafo ao lado da foto — edite em edition.js]',
    tituloExtra: 'Um número difícil de imaginar',
    paragrafosExtra: [
      '[Texto do parágrafo extra — edite em edition.js]',
    ],
    paragrafosAposCards: [
      'Esses exemplos demonstram a dimensão do patrimônio administrado e a relevância dessa conquista da BRF Prev para seus participantes. Um patrimônio robusto permite maior poder de negociação com gestores e instituições financeiras e diluição de seu custo administrativo, contribuindo para a busca de melhores condições e resultados para os participantes.',
      'Para o Diretor-Presidente, Mauricio Manduca, este marco é reflexo de um trabalho coletivo e contínuo da BRF Previdência.',
    ],
    resultados: [
      { valor: '+200', label: 'atendimentos realizados' },
      { valor: '125',  label: 'adesões aos planos previdenciários' },
      { valor: '40',   label: 'aportes e contribuições suplementares' },
      { valor: '90',   label: 'pontos na avaliação de atendimento' },
    ],
    citacao: 'Atingir a marca de R$ 5 bilhões em patrimônio representa muito mais do que um número. É a materialização da confiança dos nossos participantes e do compromisso diário de toda a equipe com uma gestão responsável, transparente e orientada ao longo prazo. Seguiremos trabalhando para fortalecer ainda mais a segurança e a sustentabilidade dos nossos planos, sempre com foco na geração de valor para cada participante.',
    citacaoAutor: 'Mauricio Manduca, Diretor-Presidente da BRF Previdência',
    proximaVisita: 'Lucas do Rio Verde, MT — 25 a 29 de maio',
  },

  // ─── R$ 5 Bilhões em Patrimônio ───────────────────────────────────────────
  patrimonio: {
    titulo: 'BRF Prev atinge R$ 5 bilhões em patrimônio e reforça solidez na gestão previdenciária',
    descricao: 'A BRF Prev atingiu uma marca histórica em 2026, alcançando R$ 5 bilhões de patrimônio. O resultado reflete a confiança depositada pelos participantes, que, em diferentes fases da vida, contam com a Entidade para apoiar o planejamento de longo prazo e a construção de um futuro mais seguro.\n\nEsse volume expressivo de recursos evidencia o crescimento da entidade e, também, a consistência de sua gestão ao longo do tempo, pautada pela responsabilidade, transparência e foco no participante.',
    oQueEPatrimonio: {
      titulo: 'O que é o patrimônio de uma Entidade Fechada de Previdência Complementar?',
      texto: 'O patrimônio de uma Entidade corresponde ao conjunto de recursos acumulados nos planos de benefícios. Esses valores são destinados exclusivamente ao cumprimento dos compromissos assumidos com os participantes e seus beneficiários. De forma estruturada, o patrimônio é composto por contribuições das patrocinadoras e dos participantes, além dos resultados obtidos nos investimentos com a aplicação desses recursos no mercado financeiro. O patrimônio do plano forma a reserva financeira que, no futuro, será convertida em benefício aos participantes.',
    },
    analogiasIntro: 'Para termos uma ideia do que representam R$ 5 bilhões, algumas comparações ajudam a ilustrar a magnitude desse valor monetário:',
    analogias: [
      { ic: '📅', texto: 'Se você poupasse R$ 5 mil por dia, sem qualquer rendimento, seriam necessários aproximadamente 2.740 anos para atingir esse valor.' },
      { ic: '🎰', texto: 'Esse montante equivale a cerca de 7,9 prêmios da Mega da Virada de 2024.' },
      { ic: '🌍', texto: 'Em distância, seria como dar aproximadamente 125 mil voltas ao redor da Terra.' },
      { ic: '⏱',  texto: 'Se somasse R$ 1 por segundo, seriam necessários cerca de 158 anos para alcançar essa quantidade.' },
    ],
    analogiasContexto: 'Esses exemplos demonstram a dimensão do patrimônio administrado e a relevância dessa conquista da BRF Prev para seus participantes. Um patrimônio robusto permite maior poder de negociação com gestores e instituições financeiras e diluição de seu custo administrativo, contribuindo para a busca de melhores condições e resultados para os participantes.',
    citacao: 'Atingir a marca de R$ 5 bilhões em patrimônio representa muito mais do que um número. É a materialização da confiança dos nossos participantes e do compromisso diário de toda a equipe com uma gestão responsável, transparente e orientada ao longo prazo. Seguiremos trabalhando para fortalecer ainda mais a segurança e a sustentabilidade dos nossos planos, sempre com foco na geração de valor para cada participante.',
    citacaoAutor: 'Mauricio Manduca, Diretor-Presidente',
    valor: 'R$ 5 bilhões',
    fechamento: 'O marco também evidencia o alinhamento da BRF Prev com seu propósito de gerar valor consistente ao longo do tempo, apoiando seus participantes na construção de uma aposentadoria mais tranquila. A conquista reforça o posicionamento da BRF Prev como uma entidade sólida, preparada para o futuro e comprometida com a excelência na gestão previdenciária.',
  },

  // ─── Aportes Extras e Contribuições Suplementares ─────────────────────────
  aportes: {
    titulo: 'Aumente sua reserva para o futuro com aportes extras e contribuições suplementares',
    descricao: 'Planejar o futuro financeiro é uma decisão que pode trazer mais tranquilidade e segurança ao longo da vida. Além das contribuições regulares ao plano, existem alternativas que permitem ampliar sua reserva previdenciária de forma flexível e alinhada ao seu momento financeiro: os aportes extras e as contribuições suplementares.',
    descricaoExtra: 'Essas modalidades são oportunidades para fortalecer seu patrimônio de longo prazo, potencializar sua preparação para a aposentadoria, além do benefício fiscal.',
    modalidades: [
      {
        titulo: 'O que são contribuições suplementares?',
        planos: 'Planos II e III',
        descricao: 'Os participantes ativos dos Planos II e III – ou seja, aqueles que trabalham atualmente no grupo BRF, podem realizar contribuições suplementares, que são contribuições facultativas feitas além da alíquota máxima da contribuição básica do plano.\n\nNesse caso, o participante escolhe um percentual (não inferior a 1%) aplicado sobre o seu Salário de Participação ou opta por um valor livre, independente do salário e sem valor mínimo.',
        introLista: 'Entre os principais diferenciais dessa modalidade estão:',
        beneficios: [
          'Flexibilidade para definir a periodicidade das contribuições.',
          'Possibilidade de suspender as contribuições a qualquer momento.',
          'Liberdade para contribuir conforme seu planejamento financeiro.',
        ],
        obs: 'É importante destacar que não há contrapartida da empresa nessa modalidade. Ainda assim, as contribuições suplementares representam uma estratégia eficiente para ampliar o saldo acumulado ao longo do tempo.',
      },
      {
        titulo: 'O que são aportes extras?',
        planos: 'Planos II, III e Família',
        descricao: 'Enquanto as contribuições suplementares correspondem a um percentual ou valor definido, com a periodicidade que você escolher e desconto direto na folha de pagamento, os aportes extras são contribuições pontuais, feitas de forma esporádica, com valor livre e pagamento via PIX ou boleto.\n\nPodem realizar aportes extras:\n– Participantes ativos e autopatrocinados dos Planos II e III\n– Participantes do Plano Família',
        introLista: 'Nessa modalidade, o participante define livremente:',
        beneficios: [
          'O valor da contribuição.',
          'A periodicidade dos aportes.',
        ],
        obs: 'Os aportes são facultativos e podem ser realizados sempre que fizer sentido para o planejamento financeiro pessoal. Essa flexibilidade permite aproveitar oportunidades para investir valores adicionais no futuro.',
      },
    ],
    oportunidades: [
      'Recebimento de bônus.',
      'Pagamento do 13º salário.',
      'Recursos extras disponíveis para investimento.',
    ],
    beneficioFiscal: 'Os valores aportados são dedutíveis do Imposto de Renda no limite de até 12% da renda bruta anual para participantes que utilizam o modelo completo da declaração.',
    beneficioFiscalExtra: 'Essa é uma excelente oportunidade para os participantes fazerem aportes no Plano FAF, complementando os 12% de contribuição previdenciária anual.',
    canais: [
      { ic: '📱', texto: 'WhatsApp: (11) 96325-9487' },
      { ic: '📞', texto: 'Central de Atendimento: 0800 702 4422' },
    ],
  },

  // ─── BRF Prev em Foco ─────────────────────────────────────────────────────
  brfPrevEmFoco: {
    titulo: 'BRF Prev em Foco: informação rápida, prática e perto de você',
    chamada: 'Acompanhar as novidades da sua previdência ficou ainda mais fácil!',
    paragrafos: [
      'Lançamos em abril o BRF Prev em Foco, um vídeo mensal com atualizações importantes sobre os planos, campanhas, resultados, eventos, conteúdos educativos e outras novidades da entidade.',
      'O objetivo é trazer informação de forma mais leve, rápida e acessível, permitindo que os participantes acompanhem os principais temas da BRF Prev em poucos minutos, diretamente pelas redes sociais e pelo canal oficial no YouTube.',
      'A iniciativa é mais uma forma de fortalecer a proximidade com os participantes e ampliar os canais de comunicação, facilitando o acesso às informações sobre a sua previdência complementar no dia a dia.',
      'Os vídeos são publicados mensalmente nas redes sociais e no canal da BRF Previdência no YouTube.',
    ],
    cta: 'Assista aos vídeos no canal da BRF Prev no YouTube e acompanhe também pelas redes sociais oficiais.',
    urlYoutube: 'https://youtube.com/shorts/hlVL-sgKl6c?si=Dt0WIBk-8mZ2lwUQ',
    urlYoutubeLabel: 'Assistir no YouTube',
  },

  // ─── App BRF Prev ─────────────────────────────────────────────────────────
  appBRFPrev: {
    titulo: 'App BRF Prev: sua previdência na palma da mão',
    descricao: 'Acompanhar sua previdência é simples e prático com o aplicativo da BRF Prev.\n\nPelo app, você pode acessar rapidamente informações importantes do seu plano, acompanhar resultados e realizar algumas ações sem precisar sair de casa.',
    funcionalidadesIntro: 'Confira algumas funcionalidades disponíveis:',
    funcionalidades: [
      'Consultar saldo e rentabilidade do plano',
      'Realizar contribuições extras',
      'Acessar informe de rendimentos e contribuições',
      'Acompanhar informações da sua previdência de forma prática e segura',
    ],
    plataformas: 'O aplicativo está disponível para Android e iOS.',
    primeiroAcesso: {
      titulo: 'Primeiro acesso',
      descricao: 'Com a senha criada inicialmente no Autoatendimento do site, basta abrir o app BRF Prev, fazer seu login e acessar todas as funcionalidades disponíveis.',
    },
    esqueceuSenha: {
      titulo: 'Esqueceu sua senha?',
      descricao: 'Clique em "Esqueci minha senha" e selecione o e-mail em que deseja receber o PIN de autorização.\n\nDepois, insira o código enviado no aplicativo para criar uma nova senha.\n\nImportante! a nova senha criada será a mesma utilizada no Autoatendimento do site.',
    },
    cta: 'Baixe o aplicativo BRF Prev e tenha sua previdência sempre à mão.',
  },

  // ─── Rentabilidade / Desempenho dos Planos ────────────────────────────────
  rentabilidade: {
    periodo: 'jan/26 – abr/26',
    meses: ['Jan/26', 'Fev/26', 'Mar/26', 'Abr/26'],
    tituloCenario: 'Desempenho dos Planos e cenário econômico: como foi o período',
    cenarioIntro: 'Os primeiros quatro meses de 2026 foram marcados por um cenário econômico desafiador no Brasil e no exterior, refletindo diretamente no desempenho dos investimentos dos planos da BRF Prev.',
    cenarioBoxes: [
      {
        icone: '🌍',
        titulo: 'Cenário internacional',
        paragrafos: [
          'No cenário internacional, a escalada dos conflitos no sudoeste da Ásia ganhou força após ataques coordenados dos Estados Unidos e de Israel contra o Irã. Como consequência, houve uma forte alta no preço do petróleo, entre 40% e 50% sobre o preço médio de 2025, além de restrições de passagem no Estreito de Ormuz, uma das principais rotas do comércio global de petróleo. Esse cenário também elevou significativamente os custos do seguro naval e trouxe impactos para a logística mundial.',
          'Os reflexos já começaram a ser percebidos no aumento de preços e até na escassez de combustíveis em algumas regiões do mundo. Diante desse contexto, os principais Bancos Centrais passaram a sinalizar possíveis elevações nas taxas de juros e medidas de apoio para reduzir os impactos nos derivados de petróleo. Esses movimentos aumentam ainda mais a pressão sobre as contas públicas globais, que já vinham fragilizadas desde os efeitos econômicos da pandemia no início da década.',
        ],
      },
      {
        icone: '/bandeira-brasil.svg',
        titulo: 'Brasil',
        paragrafos: [
          'No Brasil, os índices de inflação apresentaram aceleração nos primeiros meses do ano. O IPCA, principal indicador de inflação do país, registrou 0,33% em janeiro, 0,70% em fevereiro, 0,88% em março e 0,67% em abril. Ao mesmo tempo, o Banco Central reduziu a taxa SELIC em suas duas primeiras reuniões do ano, indicando um movimento de ajuste na política monetária. A decisão ocorreu em um cenário de inflação ainda pressionada, com alta tanto nos índices gerais quanto em seus núcleos, o que aumentou as discussões do mercado sobre os próximos passos da economia e os impactos para os investimentos.',
        ],
      },
    ],
    tituloDesempenho: 'Desempenho dos investimentos da BRF Prev',
    desempenhoParagrafos: [
      'Os planos da BRF Prev apresentaram desempenho pouco abaixo das metas nos últimos meses, refletindo os impactos do cenário econômico e dos conflitos no sudoeste da Ásia sobre os mercados globais.',
      'As aplicações em títulos públicos atrelados à inflação tiveram comportamento compatível com o momento econômico e contribuíram para dar maior estabilidade à carteira diante do aumento da volatilidade.',
      'Já os investimentos em ações da BRF foram impactados por uma combinação de fatores externos e setoriais. Entre eles, estiveram as expectativas de aumento nos preços dos insumos agrícolas em razão da possível ocorrência do fenômeno El Niño, o estabelecimento de cotas para exportações destinadas à China, as restrições na oferta de gado no mercado americano e as dificuldades logísticas relacionadas à navegação no Estreito de Ormuz.',
      'Também influenciaram esse cenário a valorização do real frente ao dólar, moeda que representa mais de dois terços da receita da companhia, e, mais recentemente, as barreiras sanitárias impostas pelo mercado europeu, em um contexto de maior protecionismo comercial.',
    ],
    desempenhoDestaque: {
      icone: '📈',
      titulo: 'Perspectivas mais positivas',
      texto: 'Por outro lado, alguns fatores mais recentes contribuem para perspectivas mais positivas. A safra de soja colhida no fim do verão doméstico ajudou a reduzir os preços da commodity, enquanto a safra de milho do meio do ano tem expectativa de volume recorde. Além disso, há expectativa de flexibilização de algumas barreiras comerciais como forma de conter os impactos inflacionários relacionados ao petróleo. Somam-se a isso as oportunidades de captura de sinergias ainda relevantes com a fusão entre Marfrig e BRF.',
    },
    linhas: [
      { nome: 'II (Classe BD)',         meses: ['0,59', '1,11',  '1,46',  '0,47'],  acum: '3,68',  p12m: '9,35',   p24m: '19,74', p36m: '31,30', tipo: 'plano' },
      { nome: 'II (Classe CD)',         meses: ['0,61', '1,35',  '0,66',  '0,70'],  acum: '3,36',  p12m: '11,11',  p24m: '20,22', p36m: '35,31', tipo: 'plano' },
      { nome: 'III',                    meses: ['0,67', '1,26',  '0,78',  '0,80'],  acum: '3,55',  p12m: '11,20',  p24m: '20,82', p36m: '35,56', tipo: 'plano' },
      { nome: 'Meta (IPCA + 5,00%a.a)',  meses: ['0,74', '1,05',  '1,31',  '1,06'],  acum: '4,23',  p12m: '9,61',   p24m: '21,25', p36m: '31,69', tipo: 'meta'  },
      { nome: 'FAF',                    meses: ['0,64', '1,17',  '1,14',  '0,41'],  acum: '3,41',  p12m: '9,70',   p24m: '21,40', p36m: '37,61', tipo: 'plano' },
      { nome: 'Meta (INPC + 5,00%a.a)', meses: ['0,80', '0,91',  '1,34',  '1,20'],  acum: '4,32',  p12m: '9,32',   p24m: '20,81', p36m: '30,75', tipo: 'meta'  },
      { nome: 'FAMÍLIA',                meses: ['0,84', '1,06',  '1,13',  '0,60'],  acum: '3,68',  p12m: '12,62',  p24m: '26,04', p36m: '41,29', tipo: 'plano' },
      { nome: 'Meta (103% do CDI)',      meses: ['1,20', '1,03',  '1,25',  '1,12'],  acum: '4,68',  p12m: '15,29',  p24m: '29,54', p36m: '47,21', tipo: 'meta'  },
    ],
    indices: [
      { nome: 'IMA -B 5 +',  meses: ['0,84',  '2,24',  '-0,78', '2,20'],  acum: '4,55',  p12m: '12,50',  p24m: '14,08', p36m: '21,87' },
      { nome: 'CDI',         meses: ['1,16',  '1,00',   '1,21', '1,09'],  acum: '4,54',  p12m: '14,84',  p24m: '28,00', p36m: '43,78' },
      { nome: 'IBOVESPA',    meses: ['12,56', '4,09',  '-0,70','-0,08'],  acum: '16,26', p12m: '38,67',  p24m: '48,73', p36m: '79,33' },
      { nome: 'DÓLAR',       meses: ['-4,95','-1,54',   '1,36','-4,42'],  acum: '-9,34', p12m: '-11,87', p24m: '-3,54', p36m: '-0,25' },
    ],
    rodape: 'Fonte: BRF Previdência e Quantum · (em %)',
  },

  // ─── Programa Renda Certa ─────────────────────────────────────────────────
  rendaCerta: {
    titulo: 'Programa Renda Certa traz mais previsibilidade para sua aposentadoria',
    descricao: 'A BRF Prev oferece o Programa Renda Certa, uma plataforma digital gratuita voltada ao aprendizado em finanças pessoais e previdência complementar. Disponível no portal da BRF Prev, o programa reúne conteúdos educativos, trilhas de aprendizagem, jogos interativos e materiais multimídia que ajudam os participantes a desenvolver hábitos financeiros mais conscientes.',
    objetivo: 'O objetivo do Renda Certa é tornar o aprendizado mais acessível e prático, independentemente do nível de conhecimento de cada pessoa, contribuindo para a transformação financeira dos participantes por meio de conteúdos educativos, ferramentas interativas e experiências de aprendizagem contínua.',
    recursos: [
      { ic: '📋', titulo: 'Teste de perfil financeiro', texto: 'Um questionário para identificar se você é do tipo conservador, moderado ou arrojado.' },
      { ic: '🎯', titulo: 'Trilhas de conhecimento', texto: 'Conteúdos organizados de forma prática para toda a família: educação financeira infantil, planejamento financeiro para jovens, finanças para casais, finanças para cuidadores e imposto de renda.' },
      { ic: '🎮', titulo: 'Games e quizzes', texto: 'Jogos e questionários interativos permitem testar seus conhecimentos de forma leve e dinâmica, reforçando conceitos importantes sobre orçamento, investimentos e planejamento financeiro.' },
      { ic: '▶',  titulo: 'Conteúdos multimídia', texto: 'Vídeos e notícias voltados ao desenvolvimento financeiro e previdenciário.' },
      { ic: '⭐', titulo: 'Sistema de pontuação e recompensas', texto: 'Conforme o participante acessa conteúdos e realiza atividades, acumula pontos que podem ser trocados por recompensas na loja virtual do programa.' },
    ],
    url: 'https://educacao.brfprevidencia.com.br/',
    urlLabel: 'educacao.brfprevidencia.com.br',
  },

  // ─── Redes Sociais ────────────────────────────────────────────────────────
  redes: {
    titulo: 'Continue com a gente em <em>2026!</em>',
    lead: 'A conversa não para na última página do jornal. Siga, marque e compartilhe — toda semana tem conteúdo novo sobre educação financeira e bastidores da BRF Prev.',
    plataformas: [
      { classe: 'ig', ic: 'IG', nome: 'Instagram', seguidores: '44,7 mil', handle: '@brfprevidencia',   href: 'https://instagram.com/brfprevidencia' },
      { classe: 'li', ic: 'in', nome: 'LinkedIn',  seguidores: '4,3 mil',  handle: 'BRF Previdência',  href: 'https://linkedin.com/company/brf-previdencia' },
      { classe: 'fb', ic: 'f',  nome: 'Facebook',  seguidores: '43,7 mil', handle: '/brfprevidencia',  href: 'https://facebook.com/brfprevidencia' },
      { classe: 'yt', ic: '▶',  nome: 'YouTube',   seguidores: '11 mil',   handle: '/canalbrfprev',    href: 'https://www.youtube.com/channel/UCp2JyTO7GLaMnLmWErsBhpg' },
      { classe: 'wa', ic: '✉',  nome: 'WhatsApp',  seguidores: null,       handle: 'comunidade fechada', href: 'https://wa.me/5511963259487', labelEspecial: 'Entre no grupo' },
    ],
  },
}

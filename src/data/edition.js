/**
 * Dados da edição atual do Jornal BRF Previdência.
 * Para criar uma nova edição, edite os valores abaixo.
 */
export const edition = {
  // ─── Identificação ────────────────────────────────────────────────────────
  numero: 1,
  mes: 'Maio',
  ano: 2026,

  // ─── Menu Índice (cards visuais logo após o header) ───────────────────────
  menuIndex: [
    {
      id: 'editorial',
      n: '01',
      tag: 'Editorial',
      titulo: 'A edição em foco',
      subtitulo: null,
      imagem: null,
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
      placeholderLabel: 'Editorial',
    },
    {
      id: 'diretor',
      n: '02',
      tag: 'Liderança',
      titulo: 'Mensagem do Diretor-Presidente',
      subtitulo: null,
      imagem: null,
      gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
      placeholderLabel: 'Diretor',
    },
    {
      id: 'compromisso',
      n: '03',
      tag: 'Programa',
      titulo: 'BRF Prev Compromisso com Você',
      subtitulo: 'Visitas presenciais às unidades',
      imagem: null,
      gradient: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)',
      placeholderLabel: 'Compromisso',
    },
    {
      id: 'fale-presidente',
      n: '04',
      tag: 'Canal',
      titulo: 'Fale com o Presidente',
      subtitulo: 'Novo canal de relacionamento',
      imagem: null,
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
      placeholderLabel: 'Fale c/ Presidente',
    },
    {
      id: 'historias',
      n: '05',
      tag: 'Inspiração',
      titulo: 'Histórias que inspiram',
      subtitulo: 'Dra. Ivone Delazari',
      imagem: null,
      gradient: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
      placeholderLabel: 'Histórias',
    },
    {
      id: 'relatorio',
      n: '06',
      tag: 'Transparência',
      titulo: 'Relatório Anual 2025',
      subtitulo: 'Resultados que conectam',
      imagem: null,
      gradient: 'linear-gradient(135deg, #0D9488 0%, #2563EB 100%)',
      placeholderLabel: 'Relatório Anual',
    },
    {
      id: 'webinar',
      n: '07',
      tag: 'Educação',
      titulo: 'Webinar IR 2026',
      subtitulo: 'Declaração na prática',
      imagem: null,
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
      placeholderLabel: 'Webinar IR',
    },
    {
      id: 'encontros',
      n: '08',
      tag: 'Resultados',
      titulo: 'Encontros de Resultados',
      subtitulo: '33ª edição trimestral',
      imagem: null,
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #0D9488 100%)',
      placeholderLabel: 'Encontros',
    },
    {
      id: 'patrimonio',
      n: '09',
      tag: 'Marco',
      titulo: 'R$ 5 bilhões em patrimônio',
      subtitulo: 'Uma marca histórica',
      imagem: null,
      gradient: 'linear-gradient(135deg, #0D9488 0%, #1E3A8A 100%)',
      placeholderLabel: 'Patrimônio',
    },
    {
      id: 'aportes',
      n: '10',
      tag: 'Aporte',
      titulo: 'Aportes extras e contribuições',
      subtitulo: 'Aumente sua reserva',
      imagem: null,
      gradient: 'linear-gradient(135deg, #F97316 0%, #FCD34D 100%)',
      placeholderLabel: 'Aportes',
    },
    {
      id: 'rentabilidade',
      n: '11',
      tag: 'Resultados',
      titulo: 'Desempenho dos Planos',
      subtitulo: null,
      imagem: null,
      gradient: 'linear-gradient(135deg, #0D9488 0%, #2563EB 100%)',
      placeholderLabel: 'Rentabilidade',
    },
    {
      id: 'renda-certa',
      n: '12',
      tag: 'Educação',
      titulo: 'Programa Renda Certa',
      subtitulo: 'Educação financeira digital',
      imagem: null,
      gradient: 'linear-gradient(135deg, #0F172A 0%, #4C1D95 100%)',
      placeholderLabel: 'Renda Certa',
    },
  ],

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badge: 'Nova Edição · Maio 2026',
    titulo: 'BRF Previdência',
    subtitulo: 'Mais próximos de você.',
    lead: 'Em 2026, seguimos fortalecendo um compromisso essencial: estar cada vez mais próximos de você. Alcançamos R$ 5 bilhões em patrimônio e ampliamos nossa presença nas unidades com o programa BRF Prev Compromisso com Você.',
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
      edicao: 'EDIÇÃO 1 · MAI 2026',
      chamada: 'R$ 5 bilhões:\nnossa marca histórica.',
    },
  },

  // ─── Sumário ──────────────────────────────────────────────────────────────
  sumario: [
    { n: '01', tag: 'Editorial',     titulo: 'Editorial — a edição em foco',                  href: '#editorial',       variante: '' },
    { n: '02', tag: 'Liderança',     titulo: 'Mensagem do Diretor-Presidente',                 href: '#diretor',         variante: 'alt' },
    { n: '03', tag: 'Programa',      titulo: 'BRF Prev Compromisso com Você',                 href: '#compromisso',     variante: 'alt2' },
    { n: '04', tag: 'Canal',         titulo: 'Fale com o Presidente',                          href: '#fale-presidente', variante: 'alt3' },
    { n: '05', tag: 'Inspiração',    titulo: 'Histórias que inspiram — Dra. Ivone Delazari',  href: '#historias',       variante: 'alt' },
    { n: '06', tag: 'Transparência', titulo: 'Relatório Anual 2025',                           href: '#relatorio',       variante: 'alt2' },
    { n: '07', tag: 'Educação',      titulo: 'Webinar IR 2026',                                href: '#webinar',         variante: 'alt3' },
    { n: '08', tag: 'Resultados',    titulo: 'Encontros de Resultados — 33ª edição',           href: '#encontros',       variante: '' },
    { n: '09', tag: 'Marco',         titulo: 'R$ 5 bilhões em patrimônio',                     href: '#patrimonio',      variante: 'alt2' },
    { n: '10', tag: 'Aporte',        titulo: 'Aportes extras e contribuições suplementares',   href: '#aportes',         variante: 'alt3' },
    { n: '11', tag: 'Resultados',    titulo: 'Desempenho dos planos',                          href: '#rentabilidade',   variante: '' },
    { n: '12', tag: 'Educação',      titulo: 'Programa Renda Certa',                           href: '#renda-certa',     variante: 'alt' },
  ],

  // ─── Editorial ────────────────────────────────────────────────────────────
  editorial: {
    titulo: 'Em 2026, seguimos fortalecendo um compromisso que é essencial para a BRF Previdência: estar cada vez mais próximos de você.',
    paragrafos: [
      'E é esse propósito que marca o início do nosso ano. Nesta edição do nosso jornal, você acompanhará como estamos ampliando essa conexão na prática, seja por meio da presença nas unidades, com o programa BRF Prev Compromisso com Você, seja pela criação de novos canais que ampliam e fortalecem a escuta e o diálogo com nossos participantes. Além de oferecer soluções, queremos estar presentes, acessíveis e atentos às suas necessidades em cada etapa da sua jornada previdenciária.',
      'Ao mesmo tempo, seguimos reforçando a transparência, um de nossos pilares mais importantes. Por isso, destacamos, nesta edição, o Relatório Anual 2025, um material completo que reúne os principais resultados e iniciativas da entidade, além dos Encontros de Resultados, que permitem acompanhar de perto a evolução dos planos.',
      'Também preparamos conteúdos voltados ao apoio das suas decisões financeiras no dia a dia, como o webinar sobre Imposto de Renda e orientações sobre como potencializar sua reserva previdenciária por meio de aportes extras e contribuições suplementares.',
      'Além disso, celebramos um marco importante em nossa trajetória. Alcançamos R$ 5 bilhões em patrimônio, resultado que reflete a confiança dos nossos participantes e reafirma nosso compromisso com uma gestão sólida, responsável e sustentável. Para encerrar esta edição, compartilhamos uma história que nos inspira e enche de orgulho, apresentando a trajetória da Dra. Ivone Delazari, marcada por dedicação, legado e uma conexão contínua com a BRF Previdência. Vamos seguir juntos, construindo um futuro com mais segurança, proximidade e informação. Boa leitura!',
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
    titulo: 'Programa BRF Prev Compromisso com Você fortalece proximidade com participantes nas unidades da MBRF',
    intro: 'Com o objetivo de fortalecer ainda mais o relacionamento com os participantes e ampliar a proximidade por meio de atendimentos presenciais, a BRF Prev criou o programa BRF Prev Compromisso com Você. Idealizada pela coordenação de Comunicação e Facilities, a iniciativa prevê visitas presenciais às unidades da MBRF em diversas regiões do Brasil ao longo do ano, promovendo um atendimento mais próximo, acessível e personalizado aos participantes.',
    primeiraAcao: {
      local: 'unidade de Curitiba',
      periodo: '30 de março a 2 de abril',
      descricao: 'Durante os quatro dias de atendimento presencial, os participantes puderam esclarecer dúvidas, conhecer melhor os planos administrados pela entidade, receber orientações sobre educação previdenciária e obter apoio em diferentes demandas relacionadas aos serviços da BRF Prev.',
      resultados: [
        { valor: '155', label: 'atendimentos' },
        { valor: '33',  label: 'adesões aos planos previdenciários' },
        { valor: '19',  label: 'aportes e contribuições suplementares' },
        { valor: '90',  label: 'pontos na pesquisa de atendimento (meta atingida)' },
      ],
    },
    citacao: 'Os números demonstram o alcance da ação e a importância do contato direto e da escuta ativa no fortalecimento do vínculo entre a entidade e nossos participantes. O programa foi desenvolvido para aproximar ainda mais a BRF Prev das pessoas, promovendo um relacionamento baseado em confiança, acolhimento e orientação qualificada, características do atendimento presencial.',
    citacaoAutor: 'Rose Zanutto, Coordenadora de Comunicação e Facilities',
    proximaVisita: 'Lucas do Rio Verde, MT — 25 a 29 de maio',
    calendario: [
      { mes: 'Maio',     unidade: 'Lucas do Rio Verde', datas: '25 a 29/05' },
      { mes: 'Junho',    unidade: 'Videira',            datas: 'A definir' },
      { mes: 'Julho',    unidade: 'Chapecó',            datas: 'A definir' },
      { mes: 'Julho',    unidade: 'Concórdia',          datas: 'A definir' },
      { mes: 'Agosto',   unidade: 'Itajaí',             datas: 'A definir' },
      { mes: 'Setembro', unidade: 'Marau',              datas: '14 a 18' },
      { mes: 'Outubro',  unidade: 'Uberlândia',         datas: 'A definir' },
      { mes: 'Outubro',  unidade: 'Toledo',             datas: 'A definir' },
      { mes: 'Novembro', unidade: 'São Paulo',          datas: 'A definir' },
      { mes: 'Novembro', unidade: 'Rio Verde',          datas: 'A definir' },
    ],
  },

  // ─── Fale com o Presidente ────────────────────────────────────────────────
  falePresidente: {
    titulo: 'Fale com o Presidente: um novo canal de escuta e proximidade com os participantes',
    descricao: 'A BRF Prev lançou, em abril, um novo canal de relacionamento com os participantes. O "Fale com o Presidente" é uma iniciativa criada para fortalecer e ampliar ainda mais os espaços de escuta dentro da Entidade.',
    paragrafos: [
      'O novo canal foi desenvolvido como um complemento aos meios tradicionais de atendimento, oferecendo uma alternativa adicional para participantes que desejam aprofundar suas solicitações após utilizarem os canais convencionais.',
      'O "Fale com o Presidente" reforça o compromisso da BRF Prev com a proximidade, a transparência e a escuta ativa, contribuindo para uma experiência de atendimento ainda mais completa e acolhedora.',
      'É importante destacar que o canal não substitui os canais tradicionais de atendimento e não possui caráter de ouvidoria. Sua proposta é atuar como um segundo nível de atendimento, proporcionando mais proximidade na tratativa das demandas apresentadas pelos participantes.',
    ],
    cta: 'O acesso ao novo canal está disponível no site da BRF Prev. Acesse e esclareça todas as suas dúvidas.',
    email: '[inserir e-mail do canal]',
  },

  // ─── Histórias que Inspiram ───────────────────────────────────────────────
  historias: {
    eyebrow: 'Histórias que inspiram',
    subtitulo: 'Dra. Ivone Delazari é exemplo de dedicação à vida e à qualidade dos alimentos',
    intro: 'A nossa homenageada no evento comemorativo ao Dia do Aposentado, organizado pela Abrapp, em janeiro, foi a Dra. Ivone Delazari, aposentada do Plano FAF há mais de 20 anos. Sua história é daquelas que enchem de orgulho, não apenas pela carreira sólida construída ao longo de décadas, mas pelo propósito que segue guiando seus passos até hoje. Aos 84 anos, Dra. Ivone segue ativa, curiosa e profundamente comprometida com aquilo que sempre acreditou: a saúde pública e a segurança dos alimentos. Aposentada há mais de 20 anos, sua trajetória é um exemplo vivo de que o vínculo com o trabalho, com o conhecimento e com as pessoas pode atravessar gerações.',
    blocos: [
      {
        titulo: 'Uma carreira construída com propósito',
        texto: 'Durante sua atuação na Sadia/BRF S.A., a Dra. Ivone construiu uma carreira admirável na área de Segurança e Qualidade de Alimentos, com reconhecimento dentro e fora do Brasil. Sua dedicação a levou a diferentes países, sempre com o olhar atento à melhoria contínua e à proteção do consumidor. Além de títulos e conquistas, o que marcou sua trajetória foi a forma como escolheu viver essa jornada, sempre próxima das pessoas.',
        citacao: 'Eu fazia questão de visitar todas as unidades e estar com os trabalhadores do chão de fábrica. Eles diziam que aprendiam comigo, mas, na realidade, eu que aprendia com eles.',
      },
      {
        titulo: 'Aposentadoria não significa parar',
        texto: 'Para a Dra. Ivone, a aposentadoria nunca foi sinônimo de pausa, mas de reinvenção. Hoje, ela atua como consultora, elaborando dossiês completos sobre higiene e segurança alimentar para diferentes tipos de produtos e indústrias. E faz questão de destacar: "Pra mim, isso é uma diversão". Além disso, novos planos já estão em construção e carregam um forte propósito social como a dedicação à pequena indústria.',
        citacao: 'A pequena indústria faz comida para o povo. Por isso, quero produzir conteúdo gratuito para que tenham acesso às normas de segurança dos alimentos. Se necessário, quero contribuir pessoalmente. Ajudar pequenos empreendedores vai fazer eu me sentir honrada.',
      },
    ],
    fechamento: 'A história da Dra. Ivone Delazari é, acima de tudo, um convite à reflexão sobre propósito, sobre legado e sobre a importância de seguir em movimento, independentemente da fase da vida. Seu exemplo nos lembra que conhecimento compartilhado transforma realidades, e que o verdadeiro reconhecimento está em impactar positivamente a vida das pessoas. Para a BRF Previdência, é uma honra contar com histórias como a dela, que inspiram, conectam e reforçam o orgulho de fazer parte dessa jornada.',
  },

  // ─── Relatório Anual 2025 ─────────────────────────────────────────────────
  relatorio: {
    titulo: 'Relatório Anual 2025 conecta resultados da BRF Prev com os participantes',
    tema: 'resultados que conectam',
    descricao: 'A BRF Previdência apresenta o Relatório Anual 2025, um material que vai além dos números e reforça o compromisso da Entidade com a transparência, as melhores práticas de governança e proximidade com seus participantes.',
    destaques: [
      { ic: '💻', texto: 'Lançamento de novos canais digitais: site, portal de autoatendimento e aplicativo' },
      { ic: '🎨', texto: 'Renovação da identidade visual e campanhas voltadas ao incentivo de aportes adicionais' },
      { ic: '⚙️', texto: 'Revisão de processos e migração do sistema de gestão, com foco em simplificar o acesso às informações' },
      { ic: '📈', texto: 'Planos II, III e FAF superaram suas metas de rentabilidade no ano, com desempenho consistente no longo prazo' },
      { ic: '💰', texto: 'Redução de custos com investimentos e controle das despesas administrativas' },
      { ic: '⭐', texto: 'Índice de satisfação de 83%, alinhado às melhores práticas do segmento' },
    ],
    citacao: 'O Relatório Anual 2025 consolida nossas entregas e reafirma o compromisso com uma gestão responsável, transparente e orientada para resultados sustentáveis. Ele traduz como as decisões de gestão impactam diretamente a vida dos participantes. Em 2025, reforçamos nosso compromisso com uma governança sólida, resultados consistentes e, principalmente, com a evolução contínua da experiência de quem confia na BRF Previdência para planejar o seu futuro.',
    citacaoAutor: 'Vivian Fonseca, Diretora de Administração e Seguridade',
    url: 'https://relatorioanual2025.brfprevidencia.com.br/',
    urlLabel: 'relatorioanual2025.brfprevidencia.com.br',
  },

  // ─── Webinar IR 2026 ──────────────────────────────────────────────────────
  webinar: {
    titulo: 'BRF Prev orienta participantes sobre a Declaração de IR 2026 na prática',
    descricao: 'Com o início do período de entrega da Declaração do Imposto de Renda 2026, a BRF Prev promoveu um webinar especial com o objetivo de apoiar seus participantes no correto preenchimento das informações, especialmente no que se refere à previdência complementar.',
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
    data: '24 de abril',
    urlYoutube: '#',
    urlLabel: 'Assistir gravação no YouTube',
  },

  // ─── Encontros de Resultados ──────────────────────────────────────────────
  encontros: {
    titulo: 'Encontros de Resultados estão disponíveis no YouTube',
    intro: 'Entre os dias 27 e 29 de abril, a BRF Prev realizou a 33ª edição do Encontro Trimestral de Resultados. Os eventos, em formato online, foram transmitidos pela plataforma Teams e as gravações já estão disponíveis no canal no YouTube, organizadas por plano.',
    descricao: 'Foram três dias de conversa aberta para apresentar os resultados dos planos, comentar o cenário econômico atual, compartilhar as perspectivas para 2026 e esclarecer dúvidas dos participantes. Uma oportunidade para acompanhar de perto a situação dos planos.',
    gravacoes: [
      { titulo: 'Planos II e Família',  href: '#' },
      { titulo: 'Planos III e Família', href: '#' },
      { titulo: 'Planos FAF e Família', href: '#' },
    ],
  },

  // ─── R$ 5 Bilhões em Patrimônio ───────────────────────────────────────────
  patrimonio: {
    titulo: 'BRF Prev atinge R$ 5 bilhões em patrimônio e reforça solidez na gestão previdenciária',
    descricao: 'A BRF Prev atingiu uma marca histórica em 2026, alcançando R$ 5 bilhões de patrimônio. O resultado reflete a confiança depositada pelos participantes, que, em diferentes fases da vida, contam com a entidade para apoiar o planejamento de longo prazo e a construção de um futuro mais seguro. Esse volume expressivo de recursos evidencia o crescimento da entidade e, também, a consistência de sua gestão ao longo do tempo, pautada pela responsabilidade, transparência e foco no participante.',
    analogias: [
      { ic: '📅', texto: 'Se você poupasse R$ 5 mil por dia, sem qualquer rendimento, seriam necessários aproximadamente 2.740 anos para atingir esse valor.' },
      { ic: '🎰', texto: 'Esse montante equivale a cerca de 7,9 prêmios da Mega da Virada de 2024.' },
      { ic: '🌍', texto: 'Em distância, seria como dar aproximadamente 125 mil voltas ao redor da Terra.' },
      { ic: '⏱',  texto: 'Se somasse R$ 1 por segundo, seriam necessários cerca de 158 anos para alcançar essa quantidade.' },
    ],
    citacao: 'Atingir a marca de R$ 5 bilhões em patrimônio representa muito mais do que um número. É a materialização da confiança dos nossos participantes e do compromisso diário de toda a equipe com uma gestão responsável, transparente e orientada ao longo prazo. Seguiremos trabalhando para fortalecer ainda mais a segurança e a sustentabilidade dos nossos planos, sempre com foco na geração de valor para cada participante.',
    citacaoAutor: 'Maurício Manduca, Diretor-Presidente',
    valor: 'R$ 5 bilhões',
  },

  // ─── Aportes Extras e Contribuições Suplementares ─────────────────────────
  aportes: {
    titulo: 'Aumente sua reserva para o futuro com aportes extras e contribuições suplementares',
    descricao: 'Planejar o futuro financeiro é uma decisão que pode trazer mais tranquilidade e segurança ao longo da vida. Além das contribuições regulares ao plano, existem alternativas que permitem ampliar sua reserva previdenciária de forma flexível e alinhada ao seu momento financeiro: os aportes extras e as contribuições suplementares.',
    modalidades: [
      {
        titulo: 'O que são contribuições suplementares?',
        planos: 'Planos II e III',
        descricao: 'Os participantes dos Planos II e III podem realizar contribuições suplementares, que são contribuições facultativas feitas além da alíquota máxima da contribuição básica do plano. Nesse caso, o participante escolhe livremente um percentual (não inferior a 1%) aplicado sobre o seu Salário de Participação.',
        beneficios: [
          'Flexibilidade para definir a periodicidade das contribuições.',
          'Possibilidade de suspender as contribuições a qualquer momento.',
          'Liberdade para contribuir conforme seu planejamento financeiro.',
        ],
        obs: 'É importante destacar que não há contrapartida da empresa nessa modalidade. Ainda assim, as contribuições suplementares representam uma estratégia eficiente para ampliar o saldo acumulado ao longo do tempo.',
      },
      {
        titulo: 'O que são aportes extras?',
        planos: 'Plano Família',
        descricao: 'No Plano Família, os aportes extras acontecem por meio da Contribuição Voluntária, que pode ser realizada por participantes e assistidos. Nessa modalidade, o participante define livremente o valor da contribuição e a periodicidade dos aportes.',
        beneficios: [
          'Aportes são facultativos e podem ser realizados sempre que fizer sentido para o planejamento financeiro pessoal.',
          'Essa flexibilidade permite aproveitar oportunidades para investir valores adicionais no futuro.',
        ],
        obs: null,
      },
    ],
    oportunidades: [
      'Recebimento de bônus.',
      'Pagamento do 13º salário.',
      'Recursos extras disponíveis para investimento.',
    ],
    beneficioFiscal: 'Os valores aportados são dedutíveis do Imposto de Renda no limite de até 12% da renda bruta anual para participantes que utilizam o modelo completo da declaração.',
    canais: [
      { ic: '📱', texto: 'WhatsApp: (11) 96325-9487' },
      { ic: '📞', texto: 'Central de Atendimento: 0800 702 4422' },
    ],
  },

  // ─── Rentabilidade / Desempenho dos Planos ────────────────────────────────
  rentabilidade: {
    periodo: '2026 — em breve',
    meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    intro: 'Resumo do desempenho dos planos, com leitura simples dos números e foco em ajudar o participante a entender os resultados. Conteúdo em atualização — previsão de recebimento: 18/05.',
    planos: [
      { nome: 'Plano II',  meses: ['—', '—', '—', '—', '—', '—'], acum: '—', meta: '—' },
      { nome: 'Plano III', meses: ['—', '—', '—', '—', '—', '—'], acum: '—', meta: '—' },
      { nome: 'Plano FAF', meses: ['—', '—', '—', '—', '—', '—'], acum: '—', meta: '—' },
    ],
    referencia: { nome: 'Referência', meses: ['—', '—', '—', '—', '—', '—'], acum: '—', meta: '—' },
    rodape: 'Dados em atualização. Rentabilidade passada não representa garantia de rentabilidade futura.',
  },

  // ─── Programa Renda Certa ─────────────────────────────────────────────────
  rendaCerta: {
    titulo: 'Programa Renda Certa traz mais previsibilidade para sua aposentadoria',
    descricao: 'A BRF Prev oferece o Programa Renda Certa, uma plataforma digital gratuita voltada ao aprendizado em finanças pessoais e previdência complementar. Disponível no portal da BRF Prev, o programa reúne conteúdos educativos, trilhas de aprendizagem, jogos interativos e materiais multimídia que ajudam os participantes a desenvolver hábitos financeiros mais conscientes.',
    objetivo: 'O objetivo do Renda Certa é tornar o aprendizado mais acessível e prático, independentemente do nível de conhecimento de cada pessoa, contribuindo para a transformação financeira dos participantes por meio de conteúdos educativos, ferramentas interativas e experiências de aprendizagem contínua.',
    recursos: [
      {
        ic: '📋',
        titulo: 'Teste de perfil financeiro',
        texto: 'Um questionário para identificar se você é do tipo conservador, moderado ou arrojado.',
      },
      {
        ic: '🎯',
        titulo: 'Trilhas de conhecimento',
        texto: 'Conteúdos organizados de forma prática para toda a família: educação financeira infantil, planejamento financeiro para jovens, finanças para casais, finanças para cuidadores e imposto de renda.',
      },
      {
        ic: '🎮',
        titulo: 'Games e quizzes',
        texto: 'Jogos e questionários interativos permitem testar seus conhecimentos de forma leve e dinâmica, reforçando conceitos importantes sobre orçamento, investimentos e planejamento financeiro.',
      },
      {
        ic: '▶',
        titulo: 'Conteúdos multimídia',
        texto: 'Vídeos e notícias voltados ao desenvolvimento financeiro e previdenciário.',
      },
      {
        ic: '⭐',
        titulo: 'Sistema de pontuação e recompensas',
        texto: 'Conforme o participante acessa conteúdos e realiza atividades, acumula pontos que podem ser trocados por recompensas na loja virtual do programa.',
      },
    ],
    url: 'https://educacao.brfprevidencia.com.br/',
    urlLabel: 'educacao.brfprevidencia.com.br',
  },

  // ─── Redes Sociais ────────────────────────────────────────────────────────
  redes: {
    titulo: 'Continue com a gente em <em>2026!</em>',
    lead: 'A conversa não para na última página do jornal. Siga, marque e compartilhe — toda semana tem conteúdo novo sobre educação financeira e bastidores da BRF Prev.',
    plataformas: [
      { classe: 'ig', ic: 'IG', nome: 'Instagram', seguidores: '44,7 mil', handle: '@brfprevidencia', href: '#' },
      { classe: 'li', ic: 'in', nome: 'LinkedIn',  seguidores: '4,3 mil',  handle: 'BRF Previdência',  href: '#' },
      { classe: 'fb', ic: 'f',  nome: 'Facebook',  seguidores: '43,7 mil', handle: '/brfprevidencia',  href: '#' },
      { classe: 'yt', ic: '▶',  nome: 'YouTube',   seguidores: '11 mil',   handle: '/canalbrfprev',    href: '#' },
      { classe: 'wa', ic: '✉',  nome: 'WhatsApp',  seguidores: null,       handle: 'comunidade fechada', href: '#', labelEspecial: 'Entre no grupo' },
    ],
  },
}

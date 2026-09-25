/**
 * Dados da edição atual do Jornal BRF Previdência.
 * Edição 46 · Setembro 2026 — conteúdo a partir de
 * "Conteudo-jornal-brf-previdencia-set2026_Mirador 0809.docx".
 */
export const edition = {
  // ─── Identificação ────────────────────────────────────────────────────────
  numero: 46,
  mes: 'Setembro',
  ano: 2026,

  // ─── Menu Índice (cards visuais logo após o header) ───────────────────────
  menuIndex: [
    {
      id: 'editorial',
      n: '01',
      tag: 'Editorial',
      titulo: 'Editorial',
      subtitulo: 'O segundo semestre está a todo vapor na BRF Prev',
      gradient: 'linear-gradient(135deg, #EE686D 0%, #F472B6 100%)',
      placeholderLabel: 'Editorial',
      imagem: '/menu-editorial.jpg',
    },
    {
      id: 'portabilidade',
      n: '02',
      tag: 'Especial',
      titulo: 'Portabilidade',
      subtitulo: 'Traga sua previdência de outra instituição para a BRF Prev',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
      placeholderLabel: 'Portabilidade',
      imagem: '/menu-portabilidade.jpg',
    },
    {
      id: 'beneficiarios',
      n: '03',
      tag: 'Planos Previdenciários',
      titulo: 'Atualize seus\nbeneficiários',
      subtitulo: 'Quando foi a última vez que você revisou o seu cadastro?',
      gradient: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)',
      placeholderLabel: 'Beneficiários',
      imagem: '/menu-beneficiarios.jpg',
    },
    {
      id: 'reconhecimento',
      n: '04',
      tag: 'Reconhecimento',
      titulo: 'Selo Sintonia A+',
      subtitulo: 'BRF Prev conquista o mais alto selo da Receita Federal',
      gradient: 'linear-gradient(135deg, #F97316 0%, #FCD34D 100%)',
      placeholderLabel: 'Selo Sintonia A+',
      imagem: '/menu-reconhecimento.png',
    },
    {
      id: 'conexao',
      n: '05',
      tag: 'Conexão BRF Previdência',
      titulo: 'Encontro Trimestral\nde Resultados',
      subtitulo: '34ª edição já está no YouTube',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #0D9488 100%)',
      placeholderLabel: 'Encontro de Resultados',
      imagem: '/menu-conexao.jpg',
    },
    {
      id: 'rentabilidade',
      n: '06',
      tag: 'Resultado dos Planos',
      titulo: 'Desempenho dos\ninvestimentos',
      subtitulo: 'Cenário econômico e rentabilidade dos planos da BRF Prev',
      gradient: 'linear-gradient(135deg, #1B46B2 0%, #7D94FC 100%)',
      placeholderLabel: 'Desempenho dos Investimentos',
      imagem: '/menu-rentabilidade.jpg',
      imagemPosition: '58% 50%',
    },
    {
      id: 'planejamento',
      n: '07',
      tag: 'Planejamento Previdenciário',
      titulo: 'Quando a empresa\ninveste no futuro',
      subtitulo: 'Compromisso com Você chega à unidade de Tatuí',
      gradient: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
      placeholderLabel: 'Compromisso com Você',
      imagem: '/menu-planejamento.jpg',
    },
    {
      id: 'plano-familia',
      n: '08',
      tag: 'Plano Família',
      titulo: 'Desenhe o futuro\nde quem você ama',
      subtitulo: 'Dia das Crianças · 12 de outubro',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #F97316 100%)',
      placeholderLabel: 'Plano Família',
      imagem: '/menu-plano-familia.jpg',
    },
  ],

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badge: 'Edição 46 · Setembro 2026',
    titulo: 'Jornal',
    subtitulo: 'BRF Previdência',
    lead: 'Nesta edição do Jornal da BRF Prev, mostramos como trazer para o seu plano recursos que podem estar em outras instituições financeiras ou em outros planos de previdência. A portabilidade é uma excelente oportunidade para fortalecer sua reserva na BRF Prev e uma opção inteligente para quem deseja construir um futuro financeiro mais seguro.',
    destaques: [
      { titulo: 'Portabilidade: saiba como transferir\nsua previdência para a BRF Prev', href: '#portabilidade', label: 'Ver matéria' },
      { titulo: 'Atualize os beneficiários\ndo seu plano', href: '#beneficiarios', label: 'Ver matéria' },
      { titulo: 'BRF Prev conquista o Selo\nSintonia A+ da Receita Federal', href: '#reconhecimento', label: 'Ver matéria' },
    ],
    numMaterias: 6,
    tempoLeitura: 18,
    rentCard: {
      label: 'Reconhecimento',
      valor: 'A+',
      plano: 'Selo Sintonia · Receita Federal',
      periodo: 'conformidade fiscal 2026',
      tags: ['Transparência', 'Governança'],
    },
    miniCard: {
      edicao: 'EDIÇÃO 46 · SET 2026',
      chamada: 'Traga sua previdência\npara a BRF Prev.',
    },
  },

  // ─── Sumário ──────────────────────────────────────────────────────────────
  sumario: [
    { n: '01', tag: 'Especial',                    titulo: 'Portabilidade — traga sua previdência para a BRF Prev', href: '#portabilidade',   variante: '' },
    { n: '02', tag: 'Planos Previdenciários',       titulo: 'Atualize os beneficiários do seu plano',                href: '#beneficiarios',   variante: 'alt2' },
    { n: '03', tag: 'Reconhecimento',               titulo: 'BRF Prev conquista o Selo Sintonia A+',                  href: '#reconhecimento', variante: 'alt3' },
    { n: '04', tag: 'Conexão BRF Previdência',      titulo: 'Encontro Trimestral de Resultados — 34ª edição',        href: '#conexao',         variante: 'alt' },
    { n: '05', tag: 'Planejamento Previdenciário',  titulo: 'Quando a empresa investe no futuro das pessoas',        href: '#planejamento',    variante: 'alt2' },
    { n: '06', tag: 'Plano Família',                titulo: 'Plano Família: desenhe o futuro de quem você ama',    href: '#plano-familia',  variante: 'alt3' },
  ],

  // ─── Editorial ────────────────────────────────────────────────────────────
  editorial: {
    titulo: 'O segundo semestre está a todo vapor na BRF Prev, cheio de novidades que reforçam nosso compromisso de estar cada vez mais perto de você',
    paragrafos: [
      'Nesta edição do Jornal da BRF Prev, mostramos como trazer para o seu plano recursos que podem estar em outras instituições financeiras ou em outros planos de previdência. A portabilidade é uma excelente oportunidade para fortalecer sua reserva na BRF Prev e uma opção inteligente para quem deseja construir um futuro financeiro mais seguro.',
      'Em outra matéria especial, aproveitamos para lembrar a importância de revisar periodicamente os seus dados cadastrais, em especial os beneficiários cadastrados no seu plano e como isso pode facilitar o seu planejamento sucessório.',
      'Temos ainda a satisfação de compartilhar a conquista do Selo Sintonia A+ pela BRF Prev, o mais alto reconhecimento da Receita Federal em conformidade fiscal. Um resultado que reforça nosso compromisso com a transparência, a governança e a excelência na gestão.',
      'Falando em transparência, contamos também como foi o nosso Encontro Trimestral de Resultados, que aconteceu em agosto. As gravações estão disponíveis em nosso canal no Youtube e a agenda dos próximos encontros já está definida para o mês de outubro.',
      'O Programa Compromisso com Você continua percorrendo o país, e nesta edição você conhecerá o relato de quem viveu de perto essa experiência na unidade de Tatuí. E, encerramos a edição, antecipando a comemoração do Dia das Crianças, sugerindo um presente diferente: investir no futuro de quem a gente mais ama, com o Plano Família.',
      'Boa leitura!',
    ],
    citacao: 'Um resultado que reforça nosso compromisso com a transparência, a governança e a excelência na gestão.',
    citacaoAutor: '— Comitê Editorial · BRF Previdência',
  },

  // ─── Portabilidade ────────────────────────────────────────────────────────
  portabilidade: {
    eyebrow: 'Especial · Portabilidade',
    titulo: 'Traga sua previdência de outra instituição para a BRF Prev',
    lead: 'Você possui recursos em outro plano de previdência? Conheça as vantagens de reunir sua reserva na BRF Prev.',
    intro: [
      'Você tem recursos investidos em previdência de outros bancos, seguradoras ou planos relacionados a empregos anteriores? Muitas pessoas possuem recursos acumulados em planos de previdência de empregos anteriores ou de outras instituições financeiras e acabam não acompanhando regularmente a evolução desses valores.',
      'A boa notícia é que dá para trazer esse dinheiro para a BRF Prev, sem burocracia e sem custo tributário no momento da mudança. Isso se chama portabilidade, mecanismo que permite transferir os recursos de um plano de previdência complementar para outro, sem a necessidade de resgatar o dinheiro.',
    ],
    comoFunciona: {
      titulo: 'Como funciona na prática:',
      itens: [
        'O valor não passa pela sua conta corrente. A movimentação acontece diretamente entre as instituições de previdência.',
        'Não há incidência de Imposto de Renda no momento da transferência.',
        'O valor portado passa a ser rentabilizado no plano, aumentando sua poupança previdenciária na BRF Prev.',
      ],
    },
    porQueTrazer: {
      titulo: 'Por que trazer sua previdência para a BRF Prev',
      paragrafos: [
        'Na BRF Prev não há cobrança de taxa de carregamento nem taxa de saída, o que contribui para que uma parcela maior dos recursos permaneça investida para o participante.',
        'Além disso, as taxas administrativas da BRF Prev são competitivas em relação às praticadas no mercado. Isso porque as Entidades Fechadas de Previdência Complementar (EFPC), como a BRF Prev, são organizações sem fins lucrativos. Ou seja, existem para administrar os recursos dos participantes, não para gerar lucro a acionistas. Essa é uma diferença estrutural em relação à previdência aberta, oferecida por bancos e seguradoras.',
        'Desta forma, as EFPCs apresentam resultados consistentes no longo prazo, como destaca o Relatório Gerencial de Previdência Complementar. As entidades fechadas acumularam rentabilidade de 163,3% entre 2016 e março de 2025, contra 118,8% do segmento aberto no mesmo período. O relatório associa essa diferença a fatores como menores taxas, gestão de longo prazo e o caráter não lucrativo das EFPCs.',
      ],
      destaque: {
        label: 'Rentabilidade acumulada (2016 a 2025)',
        fechada: '179,1%',
        fechadaLabel: 'Previdência Fechada',
        aberta: '138,5%',
        abertaLabel: 'Previdência Aberta',
        fonte: 'Fonte: Relatório Gerencial de Previdência Complementar',
      },
      grafico: {
        titulo: 'Rentabilidade acumulada das entidades de previdência complementar: comparativo',
        anos: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '12/2025'],
        efpc: [18.5, 33.0, 44.1, 63.7, 82.1, 93.2, 112.9, 140.0, 154.7, 179.1],
        eapc: [14.8, 27.8, 43.3, 63.9, 69.8, 68.2, 81.0, 105.0, 112.6, 138.5],
        eixoMax: 200,
        rodape: {
          esquerda: 'Rentabilidade acumulada, em % — base 2016',
          direita: 'Fonte: Relatório Gerencial de Previdência Complementar',
        },
      },
    },
    comparativo: {
      titulo: 'Previdência Aberta × BRF Prev',
      colAberta: 'Previdência Aberta',
      colFechada: 'BRF Prev',
      linhas: [
        ['Pode ter taxa de carregamento', 'Sem taxa de carregamento'],
        ['Pode ter taxa administrativa', 'Taxa de administração reduzida'],
        ['Pode ter taxa de saída', 'Sem taxa de saída'],
        ['Instituição com fins lucrativos', 'Entidade sem fins lucrativos'],
        ['Gestão voltada para o acionista', 'Gestão voltada para o participante'],
      ],
    },
    quemPode: {
      titulo: 'Quem pode fazer a portabilidade',
      itens: [
        'Participantes que possuem previdência complementar em outra instituição.',
        'Participantes que possuem recursos mantidos em planos na modalidade PGBL ou planos compatíveis.',
      ],
    },
    regras: {
      titulo: 'Regras importantes',
      itens: [
        'Para portar, é necessário cumprir o prazo mínimo de permanência exigido no plano  de origem.',
        'O recurso precisa estar em fase de acumulação.',
        'O processo é normalmente concluído em até 10 dias úteis após o envio completo da documentação.',
      ],
    },
    comoFazer: {
      titulo: 'Como fazer',
      passos: [
        { n: '1', texto: 'Entre em contato com a BRF Prev.' },
        { n: '2', texto: 'Receba e preencha o Termo de Concordância.' },
        { n: '3', texto: 'A BRF Prev solicitará os dados do seu plano de origem.' },
        { n: '4', texto: 'A BRF Prev fará contato com a instituição responsável e conduzirá todo o processo de transferência.' },
        { n: '5', texto: 'Pronto! Após a conclusão do processo, os recursos passarão a integrar sua reserva previdenciária na BRF Prev.' },
      ],
    },
    faq: {
      titulo: 'Portabilidade: tire suas dúvidas em 5 perguntas',
      intro: 'Pensar em portabilidade de previdência costuma trazer uma dúvida antes de todas as outras: será que vale a pena, e como funciona na prática? Reunimos as respostas às perguntas que mais chegam até a nossa equipe sobre o tema para você dar o próximo passo com segurança.',
      perguntas: [
        { p: '1. Posso trazer recursos de qualquer instituição?', r: 'Você pode solicitar a portabilidade de recursos acumulados em planos de previdência complementar de outras entidades, como bancos, seguradoras e planos de previdência. Entretanto, é necessário que os planos sejam compatíveis. A portabilidade ocorre entre modalidades equivalentes.' },
        { p: '2. Existe cobrança de imposto de renda?', r: 'Não. A portabilidade não é considerada resgate e, por isso, não há incidência de Imposto de Renda no momento da transferência. O saldo continua investido e segue destinado aos seus objetivos de longo prazo.' },
        { p: '3. Quanto tempo demora?', r: 'Após o envio da documentação completa, a transferência costuma ser concluída em até 10 dias úteis. O prazo pode variar de acordo com a análise e o processamento da entidade de origem.' },
        { p: '4. Posso transferir apenas parte do saldo?', r: 'Em muitos casos, sim. A possibilidade de portabilidade parcial depende das características do plano de origem e das regras aplicáveis ao recurso que será transferido. A equipe da BRF Prev poderá orientar o participante caso a caso.' },
        { p: '5. Como acompanhar o processo?', r: 'Após manifestar interesse, a BRF Prev orienta sobre toda a documentação necessária e acompanha o processo junto à instituição de origem. Caso necessário, o participante pode entrar em contato com a equipe da BRF Prev para verificar o andamento da solicitação.' },
      ],
    },
    destaques: {
      titulo: 'Destaques',
      itens: [
        'O dinheiro não passa pela sua conta corrente.',
        'Não há cobrança de Imposto de Renda na transferência.',
        'A BRF Prev faz contato com a instituição de origem para efetivar o processo.',
        'Você continua investindo para o seu futuro sem interromper sua estratégia previdenciária.',
      ],
    },
    fechamento: 'Ainda tem dúvidas? Fale conosco pelos canais de relacionamento. Estamos à disposição para esclarecer seus questionamentos para você fazer a portabilidade com segurança e aproveitar os benefícios de um plano administrado por uma entidade sem fins lucrativos.',
  },

  // ─── Planos Previdenciários — Beneficiários ───────────────────────────────
  beneficiarios: {
    eyebrow: 'Planos Previdenciários',
    titulo: 'Quando foi a última vez que você revisou seus beneficiários no plano?',
    intro: [
      'Essa é uma informação que muitas vezes passa despercebida, mas que merece atenção. Afinal, se algo acontecesse com você hoje, as pessoas indicadas no plano seriam as mesmas que você gostaria de proteger?',
      'Mudanças como casamento, união estável, separação, nascimento de filhos, inclusão de enteados ou falecimento de familiares podem alterar seus planos e prioridades. Por isso, revisar periodicamente os beneficiários cadastrados é uma forma importante de garantir que suas escolhas continuem refletindo sua realidade atual.',
    ],
    quemEBeneficiario: {
      titulo: 'Quem é o beneficiário do plano?',
      texto: 'É a pessoa que vai receber os recursos do seu plano de previdência, após seu falecimento, conforme as regras específicas de cada plano previdenciário. Atualizar o cadastro costuma ser simples e rápido, você só precisa estar atento às regras que variam de acordo com o plano ao qual está vinculado.',
    },
    quandoRevisar: {
      titulo: 'Quando vale a pena revisar?',
      intro: 'Alguns momentos da vida são um bom gatilho para checar o seu cadastro:',
      itens: [
        'Casamento ou união estável',
        'Separação ou divórcio',
        'Nascimento de filhos',
        'Inclusão de enteados',
        'Falecimento de beneficiário',
        'Mudanças na composição familiar',
        'Alteração dos objetivos de planejamento patrimonial',
      ],
    },
    comoFunciona: {
      titulo: 'Como funciona na BRF Prev',
      intro: 'Cada plano tem sua própria regra para definir quem recebe os recursos, em caso de falecimento do participante titular.',
      planos: [
        {
          nome: 'Plano III',
          intro: 'Existem duas categorias de beneficiário:',
          categorias: [
            { titulo: 'Beneficiário legal', texto: 'os dependentes reconhecidos pela Previdência Social:    -cônjuge ou companheiro(a); filhos e enteados solteiros menores de 21 anos; filhos e enteados solteiros até 24 anos, se estiverem cursando ensino superior; e filhos inválidos, sem limite de idade.' },
            { titulo: 'Beneficiário indicado', texto: 'qualquer pessoa escolhida livremente pelo participante, podendo ser uma ou mais, com indicação alterável a qualquer momento.' },
          ],
          ordem: {
            titulo: 'A ordem de prioridade para recebimento é:',
            itens: ['1º - beneficiário legal', '2º - beneficiário indicado', '3º - herdeiros legais, mediante comprovação'],
          },
        },
        {
          nome: 'Plano II',
          intro: 'Existem duas categorias de beneficiário:',
          categorias: [
            { titulo: 'Beneficiário legal', texto: 'os dependentes reconhecidos pela Previdência Social: cônjuge ou companheiro(a), filhos e enteados solteiros menores de 21 anos ou até 24 anos cursando ensino superior, e filhos inválidos, sem limite de idade.' },
            { titulo: 'Beneficiário indicado', texto: 'qualquer pessoa física indicada, que só recebe valores na ausência de beneficiários legais. A indicação pode ser alterada a qualquer momento.' },
          ],
        },
        {
          nome: 'Plano Família',
          texto: 'Aqui a lógica é diferente, pois não existe a figura do beneficiário legal. Os beneficiários são definidos livremente pelo participante, podendo ser mais de uma pessoa, com percentuais de distribuição do benefício também definidos pelo próprio participante. Tudo isso pode ser alterado a qualquer momento.',
          extra: 'Como a escolha é totalmente do participante, manter o cadastro atualizado   é ainda mais importante.',
        },
        {
          nome: 'Plano FAF',
          texto: 'Segue a lógica tradicional dos planos de benefício definido. O participante não precisa se preocupar com os detalhes regulatórios, mas é importante saber que os beneficiários/pensionistasprevistos pelo plano devem estar devidamente cadastrados, que mudanças na composição familiar precisam ser comunicadas à BRF Prev, e que manter o cadastro atualizado ajuda a garantir a correta aplicação das regras do plano.',
        },
      ],
      fechamento: 'Vale a pena também conversar com sua família sobre a existência do plano de previdência e revisar os beneficiários periodicamente.',
    },
    dependenteIR: {
      titulo: 'Dependente no Imposto de Renda',
      texto: 'Um erro comum entre os participantes de planos previdenciários é pensar que o dependente declarado no Imposto de Renda é, automaticamente, o beneficiário do plano. Não é verdade! São cadastros diferentes e com finalidades diferentes.',
    },
    comoAtualizar: {
      titulo: 'Como atualizar seus beneficiários',
      intro: 'A atualização pode ser feita de forma rápida, pelos canais digitais da BRF Prev.',
      canais: [
        { titulo: 'Pelo aplicativo BRF Prev', texto: 'acesse sua conta e atualize seus dados cadastrais e de beneficiários.' },
        { titulo: 'Pelo Autoatendimento no site', texto: 'em Home → Meu Cadastro → Beneficiário, revise os dados cadastrados e faça as alterações necessárias.' },
      ],
    },
    boxFinal: {
      titulo: 'Mantenha seu cadastro em dia',
      intro: 'Beneficiários não são os únicos dados que merecem atenção.',
      texto: 'Para garantir uma comunicação eficiente e mais segurança na gestão do seu plano, é importante manter sempre atualizados seus dados cadastrais, como:',
      itens: ['Telefone', 'E-mail', 'Endereço', 'Estado civil', 'Informações dos beneficiários'],
      fechamento: 'Dados atualizados facilitam o contato da BRF Prev com você, agilizam solicitações e ajudam a evitar transtornos quando alguma informação ou documentação for necessária.',
    },
  },

  // ─── Reconhecimento — Selo Sintonia A+ ────────────────────────────────────
  reconhecimento: {
    eyebrow: 'Reconhecimento',
    titulo: 'BRF Prev conquista o Selo Sintonia A+',
    paragrafos: [
      'A BRF Previdência conquistou o Selo Sintonia A+, reconhecimento concedido pela Receita Federal às organizações que se destacam pelo alto padrão de conformidade fiscal e pelo cumprimento consistente de suas obrigações tributárias. A distinção reforça o compromisso da entidade com boas práticas de gestão, governança e transparência, pilares que sustentam a solidez da BRF Prev perante participantes, assistidos e patrocinadoras.',
      'O selo faz parte do Programa Receita Sintonia, criado pela Receita Federal para incentivar boas práticas fiscais e reconhecer organizações com elevado grau de regularidade. As classificações variam entre A+, A, B, C e D, sendo o A+ o nível máximo de conformidade, categoria em que a BRF Prev se posicionou.',
    ],
    criterios: {
      titulo: 'A classificação considera critérios como:',
      itens: [
        'Regularidade cadastral.',
        'Pontualidade no cumprimento das obrigações.',
        'Consistência das informações prestadas.',
        'Adimplência tributária.',
        'Histórico de conformidade perante a Receita Federal.',
      ],
    },
    paragrafos2: [
      'Este reconhecimento demonstra o compromisso da entidade com boas práticas de gestão, reforça a transparência na administração dos recursos, evidencia a solidez dos processos internos e fortalece a credibilidade da BRF Prev perante participantes, assistidos, patrocinadoras e órgãos reguladores.',
    ],
    citacao: 'A conquista do Selo Sintonia A+ é um reflexo direto da forma como conduzimos a gestão da BRF Prev: com rigor, transparência e responsabilidade em cada processo. Esse reconhecimento não é um ponto de chegada, mas a confirmação de que estamos no caminho certo para seguir entregando segurança e solidez a quem confia na nossa entidade.',
    citacaoAutor: 'Maurício Manduca,\nDiretor Presidente da BRF Previdência',
    paragrafos3: [
      'É importante destacar que o selo não altera diretamente regras ou benefícios dos planos administrados pela BRF Prev. Os ganhos são indiretos, relacionados à confiança e à governança da entidade; evidencia a qualidade dos processos internos, reforça a transparência na gestão e proporciona mais segurança para participantes e assistidos ao perceberem que a BRF Prev mantém elevado padrão de conformidade e boas práticas.',
      'A conquista do Selo Sintonia A+ é mais um marco que confirma o compromisso da BRF Prev com a excelência na gestão dos recursos que sustentam o futuro de seus participantes e assistidos.',
    ],
    destaqueVisual: {
      titulo: 'Selo Sintonia A+',
      itens: [
        'Classificação máxima da Receita Federal',
        'Alto nível de conformidade fiscal',
        'Regularidade no cumprimento das obrigações',
        'Reconhecimento nacional de boas práticas de gestão',
      ],
    },
  },

  // ─── Conexão BRF Previdência — Encontro Trimestral ────────────────────────
  conexao: {
    eyebrow: 'Conexão BRF Previdência',
    titulo: 'Encontro Trimestral de Resultados: confira no YouTube',
    paragrafos: [
      'Entre os dias 4 e 6 de agosto, a BRF Prev realizou a 34ª edição do Encontro Trimestral de Resultados, com uma atualização completa sobre a gestão dos planos de previdência da Entidade.',
      'O evento, 100% online e transmitido pela plataforma Teams, reuniu participantes em três dias de conversa aberta com a Diretoria da BRF Prev. As gravações já estão disponíveis no canal do YouTube, organizadas por plano. Quem não pôde acompanhar ao vivo, pode dar uma conferida nas apresentações do Presidente, Maurício Manduca, da Diretora Administrativa e de Seguridade, Vivian Fonseca e do Diretor de Investimentos, Milton Cabral.',
      'Ao longo dos três dias, a BRF Prev apresentou as novidades da Entidade, notícias e resultados dos planos previdenciários, uma análise dos cenários macroeconômicos e seus efeitos na rentabilidade dos planos, além de um espaço para esclarecimento de dúvidas dos participantes.',
      'O Encontro Trimestral é uma oportunidade de acompanhar de perto a situação dos planos e reforça o compromisso da BRF Prev com a transparência na gestão dos recursos dos participantes.',
    ],
    gravacoesIntro: 'Confira as gravações nos links abaixo:',
    gravacoes: [
      { plano: 'Planos III e Família', videoId: '2czxVc1n3CE' },
      { plano: 'Planos FAF e Família', videoId: 'snq-8YoAqYI' },
      { plano: 'Planos II e Família',  videoId: '0bNJA-mX5SA' },
    ],
    proximosEncontros: {
      titulo: 'Anote na sua agenda os próximos encontros que serão realizados em outubro e acompanhe ao vivo pela Plataforma Teams.',
      itens: [
        { plano: 'Planos II e Família',   data: '26/10 - às 10h' },
        { plano: 'Planos III e Família',  data: '27/10 - às 10h' },
        { plano: 'Planos FAF e Família',  data: '28/10 - às 10h' },
      ],
    },
  },

  // ─── Desempenho dos Planos e Cenário Econômico ─────────────────────────────
  rentabilidade: {
    periodo: 'maio a agosto de 2026',
    tituloPrefixo: 'Desempenho dos Planos e cenário econômico',
    cenarioBoxes: [
      {
        accent: '#7D94FC',
        titulo: 'Cenário Internacional',
        paragrafos: [
          'As tensões geopolíticas e seus impactos sobre o preço do petróleo continuaram influenciando os mercados ao longo do quadrimestre encerrado em agosto último, gerando momentos de instabilidade e maior cautela por parte dos investidores. Esse cenário manteve os mercados globais precificando elevação de inflação, juros maiores e crescimento econômico mais lento, influenciando o comportamento dos ativos financeiros em diversas regiões do mundo. Esta circunstância, em geral negativa para a maioria dos ativos de renda variável, foi atenuada pelo dinamismo das empresas de tecnologia com os resultados obtidos no começo do ano com a aceleração dos resultados com inteligência artificial.',
        ],
      },
      {
        accent: '#EE686D',
        titulo: 'Brasil',
        paragrafos: [
          'No Brasil, a inflação permaneceu em patamar elevado durante boa parte do período, enquanto as decisões de política monetária mantiveram os juros elevados e a política fiscal seguia irrigando a economia com diversos mecanismos de incentivo a diversos segmentos da economia, em flagrante conflito entre ambas. Esse ambiente trouxe reflexos para os diferentes segmentos de investimentos, exigindo seletividade dos gestores e dos investidores diante das oscilações observadas ao longo do ano.',
        ],
      },
    ],
    desempenhoPrefixo: 'Desempenho dos',
    desempenhoBadge: 'investimentos',
    desempenhoSufixo: 'da BRF Prev',
    desempenhoParagrafos: [
      'Nesse contexto, os planos da BRF Prev atravessaram um período de maior oscilação, especialmente nos investimentos com exposição à renda variável. Já os ativos vinculados à inflação, cerca de 80% do patrimônio da entidade, e à renda fixa apresentaram comportamento mais aderente às características de proteção e longo prazo que compõem a estratégia dos investimentos da entidade.',
      'É importante lembrar que a previdência complementar é uma construção de longo prazo. Por isso, oscilações de curto prazo fazem parte do processo de investimento e devem ser analisadas dentro de uma perspectiva mais ampla. A BRF Prev segue acompanhando continuamente o cenário econômico e de mercado, mantendo uma gestão alinhada aos objetivos de longo prazo dos participantes e assistidos.',
    ],
    meses: ['Mai/26', 'Jun/26', 'Jul/26', 'Ago/26'],
    linhas: [
      { nome: 'II (Classe BD)',         meses: ['0,69', '1,25', '0,54', '0,58'], acum: '6,89', p12m: '10,24', p24m: '17,60', p36m: '29,75', tipo: 'plano' },
      { nome: 'II (Classe CD)',         meses: ['0,69', '0,94', '0,69', '1,40'], acum: '7,25', p12m: '11,36', p24m: '17,34', p36m: '31,39', tipo: 'plano' },
      { nome: 'III',                    meses: ['0,73', '0,96', '0,78', '1,38'], acum: '7,59', p12m: '11,57', p24m: '18,29', p36m: '32,19', tipo: 'plano' },
      { nome: 'Meta (IPCA + 5,00%a.a)', meses: ['0,97', '0,57', '0,52', '0,09'], acum: '6,47', p12m: '9,43',  p24m: '20,75', p36m: '32,01', tipo: 'meta'  },
      { nome: 'FAF',                    meses: ['0,75', '1,35', '0,50', '0,87'], acum: '7,03', p12m: '10,85', p24m: '19,25', p36m: '35,06', tipo: 'plano' },
      { nome: 'Meta (INPC + 5,00%a.a)', meses: ['1,04', '0,55', '0,44', '0,09'], acum: '6,54', p12m: '9,18',  p24m: '20,39', p36m: '30,94', tipo: 'meta'  },
      { nome: 'FAMÍLIA',                meses: ['0,91', '1,40', '0,99', '1,35'], acum: '8,60', p12m: '13,29', p24m: '25,00', p36m: '41,27', tipo: 'plano' },
      { nome: 'Meta (103% do CDI)',     meses: ['1,11', '1,15', '1,25', '1,13'], acum: '9,62', p12m: '15,10', p24m: '30,70', p36m: '46,89', tipo: 'meta'  },
    ],
    indices: [
      { nome: 'IMA-B 5 +', meses: ['-0,20', '-2,05', '0,75',  '1,81'],  acum: '4,84',  p12m: '9,20',   p24m: '10,74', p36m: '14,19' },
      { nome: 'CDI',       meses: ['1,07',  '1,12',  '1,22',  '1,09'],  acum: '9,33',  p12m: '14,63',  p24m: '29,38', p36m: '43,89' },
      { nome: 'IBOVESPA',  meses: ['-7,22', '-1,01', '3,47',  '-0,33'], acum: '10,11', p12m: '25,45',  p24m: '30,45', p36m: '53,29' },
      { nome: 'DÓLAR',     meses: ['1,37',  '2,37',  '-1,92', '2,05'],  acum: '-5,83', p12m: '-4,51',  p24m: '-8,39', p36m: '5,28'  },
    ],
    rodape: 'Fonte: BRF Previdência e Quantum · (em %)',
  },

  // ─── Planejamento Previdenciário — Compromisso com Você ───────────────────
  planejamento: {
    eyebrow: 'Planejamento previdenciário',
    titulo: 'Quando a empresa investe no futuro das pessoas',
    paragrafos: [
      'A Previdência complementar costuma ser lembrada como um benefício de longo prazo, algo que só vai ser efetivamente valorizado décadas depois. Mas, no dia a dia, ela também cumpre um papel mais imediato, proporcionando clareza e segurança para que o colaborador planeje sua vida financeira com mais tranquilidade, sabendo que tem, ao seu lado, uma empresa que investe junto com ele nesse futuro.',
      'Quando uma empresa oferece previdência complementar, ela está demonstrando que também se importa com o que acontece com seus colaboradores depois do expediente e depois da carreira. Esse tipo de benefício tende a ser percebido- como um investimento genuíno no bem-estar financeiro das pessoas, e não apenas como mais um item na folha de pagamento.',
      'Para a BRF Prev, essa percepção de valor se constrói com presença e esse é o propósito do Programa Compromisso com Você, criado para fortalecer o relacionamento com os participantes por meio de atendimentos presenciais, levando a entidade até as unidades da MBRF em diferentes regiões do país.',
      'Várias unidades da MBRF já foram visitadas e o Programa seguirá percorrendo o país, levando a mensagem da previdência complementar para todos os colaboradores da patrocinadora, um contato direto para apoiar decisões sobre o futuro. Em 2026, 06 unidades da MBRF foram visitadas, com mais de 8.000 atendimentos realizados. Entre julho e agosto, o Compromisso com Você chegou também à unidade de Tatuí, da MBRF, e o resultado, mais uma vez, confirma que a proximidade é o que transforma um benefício em algo palpável na rotina das pessoas. Quem vive o dia a dia da relação entre RH e colaboradores também sente essa diferença. Daniele Fernanda, da área de Recursos Humanos da unidade de Tatuí, destaca o impacto do benefício corporativo na retenção e valorização dos colaboradores e a parceria da BRF Prev.',
    ],
    citacao: 'Há quatro anos trazemos a previdência complementar para a nossa unidade. No início, o trabalho foi apresentar o benefício na forma de palestras aos colaboradores, mostrando que é um investimento em que a empresa contribui na mesma proporção que o colaborador. A previdência é como uma poupança que, mesmo em caso de desligamento, ele pode levar consigo como investimento para o futuro. Por isso, considero um benefício fundamental para reter e valorizar quem trabalha com a gente. A BRF Previdência é uma parceira que caminha junto com o RH da empresa, promovendo este benefício para os colaboradores”.',
    citacaoAutor: 'Daniele Fernanda,\nRecursos Humanos · Unidade Tatuí, MBRF',
    paragrafoFinal: 'O depoimento de Daniele resume bem o que o Programa Compromisso com Você busca todos os dias, transformando um benefício corporativo em algo compreendido e valorizado por quem o utiliza. Quando a empresa investe no futuro das pessoas, e a previdência é apoiada por um atendimento próximo e acessível, o resultado é maior clareza na hora de decidir, mais segurança no planejamento de longo prazo e um vínculo mais forte entre participante e plano.',
    solicitarVisita: {
      titulo: 'Solicite uma visita',
      texto: 'Qualquer colaborador pode solicitar atendimento personalizado em sua unidade. Basta entrar em contato com a BRF Prev para tirar dúvidas ou agendar uma ação do Programa Compromisso com Você. E, se você já conhece de perto os benefícios do seu plano, que tal compartilhar essa informação com um colega que ainda não aderiu? Muitas vezes, uma conversa é o que falta para alguém dar o primeiro passo.',
    },
    porOndePassamos: {
      titulo: 'Por onde passamos',
      unidade: 'Unidade Marau (RS) · 14 a 18 de setembro de 2026',
      texto: 'uma das 10 palestras do Programa Compromisso com Você, conduzidas por Vitória e Adriana.',
    },
  },

  // ─── Plano Família — Dia das Crianças ─────────────────────────────────────
  planoFamilia: {
    eyebrow: 'Plano Família',
    titulo: 'Plano Família: desenhe o futuro de quem você ama',
    paragrafos: [
      'Tem presente que dura um dia e tem presente que continua fazendo diferença anos depois. Com o Dia das Crianças, em 12 de outubro, vale a pergunta: já pensou em investir no futuro de quem você mais ama?',
      'Além dos brinquedos, dos jogos e das surpresas de sempre, existe uma forma de presentear que cresce junto com a criançada. O Plano Família pode se tornar o primeiro passo para realizar os grandes sonhos de um filho, neto ou sobrinho. Imagine poder acumular, desde a primeira infância, os recursos para financiar a faculdade, o intercâmbio, o primeiro negócio e a construção de uma reserva financeira para os projetos que vierem pela frente. Isso é possível com o Plano Família da BRF Prev.',
      'Ele foi pensado não só para participantes e assistidos, mas também para seus familiares, incluindo os mais novos da casa. O plano funciona como uma reserva financeira de médio e longo prazo, construída por meio de contribuições mensais que são investidas e geram rendimentos ao longo do tempo.',
      'Os menores de idade podem aderir ao Plano Família, desde que tenham um responsável financeiro que assumirá as contribuições e a gestão da conta em nome da criança ou adolescente até a maioridade. Assim, é possível começar a construir o futuro de um filho ou neto muito antes de ele conseguir fazer isso por conta própria. Imagine chegar à fase da faculdade, de um intercâmbio ou dos primeiros projetos profissionais contando com uma reserva construída ao longo dos anos.',
    ],
    quemPodeContribuir: {
      titulo: 'Quem pode contribuir',
      texto: 'Pais, mães, avós, padrinhos e outros parentes podem contribuir para o plano de um menor de idade por meio da Contribuição Eventual, que permite a terceiros fazer aportes, definindo livremente o valor e a periodicidade das contribuições. Assim, o responsável financeiro pode convidar outras pessoas a contribuir para o plano, incrementando ainda mais a poupança previdenciária da criança. Dessa forma, familiares e pessoas próximas podem participar da construção dessa reserva ao longo do tempo por meio de contribuições eventuais.',
    },
    pequenasContribuicoes: {
      titulo: 'Pequenas contribuições fazem diferença',
      texto: 'O Plano Família não exige valor mínimo de contribuição. Quem contribui decide o quanto quer investir. O que faz a diferença, aqui, não é o tamanho do aporte, mas o tempo. Com os juros compostos, o dinheiro investido passa a gerar rendimento sobre o próprio rendimento e quanto mais tempo os recursos ficam aplicados, maior esse efeito ao longo dos anos. Uma contribuição mensal modesta, mantida por 10 ou 15 anos, desde a infância até a entrada na faculdade, por exemplo, tem muito mais tempo para crescer do que um valor maior aportado de uma vez só, na véspera de um objetivo.',
    },
    paraQueFuturo: {
      titulo: 'Para que futuro você está contribuindo?',
      intro: 'Cada família tem um sonho diferente em mente. Alguns exemplos de objetivos que podem ser planejados com antecedência:',
      itens: ['a faculdade;', 'um intercâmbio;', 'o primeiro negócio;', 'a independência financeira.'],
      fechamento: 'Não é preciso escolher um objetivo específico no momento da adesão. A reserva constituída ao longo dos anos pode ser direcionada para o que fizer sentido quando a hora chegar.',
    },
    fechamento: 'Então, neste Dia das Crianças, considere dar um presente que os pequenos vão entender e agradecer no futuro.',
    comoAderir: {
      titulo: 'Como aderir ao Plano Família',
      intro: 'Desenhar esse futuro começa com um passo simples. Veja como aderir ao Plano Família:',
      canais: [
        { n: '1', titulo: 'Equipe de Relacionamento', texto: 'Fale diretamente com o time da BRF Prev para tirar dúvidas e iniciar o processo de inscrição.' },
        { n: '2', titulo: 'Canais digitais da BRF Prev', texto: 'Acesse o site ou o aplicativo da BRF Prev para conhecer o passo a passo completo de adesão.' },
      ],
      cta: { label: 'Quero fazer um Plano Família', href: 'https://adesao.brfprevidencia.com.br/contato' },
    },
  },

  // ─── Redes Sociais ────────────────────────────────────────────────────────
  redes: {
    titulo: 'Continue com a gente em <em>2026!</em>',
    lead: 'A conversa não para na última página do jornal. Siga, marque e compartilhe — toda semana tem conteúdo novo sobre educação financeira e bastidores da BRF Prev.',
    plataformas: [
      { classe: 'ig', ic: 'IG', logo: '/logo-instagram.png', nome: 'Instagram', seguidores: '44,7 mil', handle: '@brfprevidencia',   href: 'https://instagram.com/brfprevidencia' },
      { classe: 'li', ic: 'in', logo: '/logo-linkedin.png',  nome: 'LinkedIn',  seguidores: '4,3 mil',  handle: 'BRF Previdência',  href: 'https://linkedin.com/company/brf-previdencia' },
      { classe: 'fb', ic: 'f',  logo: '/logo-facebook.png',  nome: 'Facebook',  seguidores: '43,7 mil', handle: '/brfprevidencia',  href: 'https://facebook.com/brfprevidencia' },
      { classe: 'yt', ic: '▶',  logo: '/logo-youtube.png',   nome: 'YouTube',   seguidores: '11 mil',   handle: '/canalbrfprev',    href: 'https://www.youtube.com/channel/UCp2JyTO7GLaMnLmWErsBhpg' },
    ],
  },
}

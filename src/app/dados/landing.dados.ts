/** Conteúdo da landing — copy e mídia centralizados. */
export interface Servico {
  titulo: string;
  descricao: string;
  icone: 'peso' | 'corrida' | 'bike' | 'martial' | 'funcional' | 'nutricao';
}

export interface Depoimento {
  id: string;
  nome: string;
  texto: string;
  papel: string;
  fotoUrl: string | null;
}

export interface ItemGaleria {
  id: string;
  legenda: string;
  imagemUrl: string | null;
}

export const LANDING_DADOS = {
  nome: 'Manoel Ednaldo',
  /** Wordmark: base + sufixo (corpo da marca + destaque) */
  marca: {
    prefixo: 'manoelednaldo',
    sufixo: 'personal',
  },
  cargo: 'Educador físico · Personal trainer',

  imagens: {
    principal: '/foto1.jpeg',
    sobre: '/foto2.jpeg',
  },

  contato: {
    whatsappE164: '5511999999999',
    whatsappMensagemPadrao:
      'Olá, Manoel! Vi seu site e quero começar. Meu objetivo é: ',
    instagram: null as string | null,
    email: null as string | null,
  },

  hero: {
    headline:
      'Transforme seu corpo com acompanhamento profissional — mesmo que você nunca tenha conseguido manter consistência',
    subheadline:
      'Treinos personalizados em musculação, corrida e spinning, com acompanhamento próximo, correção técnica e foco no seu resultado.',
    provaRapida:
      '+5 anos de experiência prática • Faixa preta 4º DAN • Pós em musculação e nutrição',
    microcopyBotao: 'Resposta rápida no WhatsApp',
    ctas: {
      principal: 'Quero começar agora',
    },
  },

  quebraObjecao: {
    titulo: 'Se você já tentou treinar sozinho e não viu resultado, o problema não é você.',
    texto:
      'A maioria das pessoas treina sem direção, sem acompanhamento e sem estratégia.',
    pergunta: 'Resultado?',
    pontosNegativos: [
      'Falta de evolução',
      'Desmotivação',
      'Risco de lesão',
      'Tempo perdido',
    ],
    fechamento: 'Com o acompanhamento certo, isso muda completamente.',
  },

  sobre: {
    titulo: 'Quem vai te acompanhar',
    paragrafos: [
      'Sou Manoel Ednaldo, educador físico e personal trainer.',
      'Minha base vem das artes marciais, onde desenvolvi disciplina e técnica como faixa preta 4º DAN em Taekwondo.',
      'Sou formado e pós-graduado em musculação avançada e nutrição esportiva, com experiência prática em musculação, corrida, spinning, CrossFit e treinamento funcional.',
      'Hoje atuo diretamente no dia a dia da academia, acompanhando alunos de perto e aplicando método de verdade — não treino genérico.',
    ],
  },

  servicosSecao: {
    titulo: 'Como posso te ajudar',
  },

  servicos: [
    {
      titulo: '🏋️ Musculação',
      descricao:
        'Treinos personalizados com foco em resultado — seja hipertrofia, emagrecimento ou condicionamento.',
      icone: 'peso',
    },
    {
      titulo: '🏃 Corrida',
      descricao:
        'Planejamento completo para evolução segura, do iniciante ao avançado.',
      icone: 'corrida',
    },
    {
      titulo: '🚴 Spinning Bike',
      descricao:
        'Treinos intensos e controlados para melhorar resistência e performance.',
      icone: 'bike',
    },
  ] as Servico[],

  diferencial: {
    titulo: 'Por que treinar comigo é diferente?',
    itens: [
      'Acompanhamento real (não é planilha jogada)',
      'Treino ajustado conforme sua evolução',
      'Correção técnica constante',
      'Experiência prática no dia a dia',
      'Método baseado em resultado',
    ],
  },

  galeriaSecao: {
    titulo: 'Na prática',
    subtitulo: 'Treino, aulas na academia e corrida — método aplicado no dia a dia.',
  },

  galeria: [
    { id: 'g1', legenda: 'Treino e técnica', imagemUrl: null },
    { id: 'g2', legenda: 'Aulas e equipamentos', imagemUrl: null },
    { id: 'g3', legenda: 'Momentos na academia', imagemUrl: null },
    { id: 'g4', legenda: 'Corrida e performance', imagemUrl: null },
  ] satisfies ItemGaleria[],

  depoimentosSecao: {
    titulo: 'Resultados de quem já treina',
    subtitulo: 'Quem acompanha de perto sente a diferença na técnica e na evolução.',
  },

  depoimentos: [
    {
      id: '1',
      nome: 'Aluno',
      texto:
        'Treinos bem explicados, acompanhamento de verdade. Evoluí muito mais rápido do que treinando sozinho.',
      papel: 'Musculação',
      fotoUrl: null,
    },
    {
      id: '2',
      nome: 'Aluna',
      texto:
        'Corrida com planejamento e sem lesão. Finalmente consegui manter constância.',
      papel: 'Corrida',
      fotoUrl: null,
    },
    {
      id: '3',
      nome: 'Aluno',
      texto: 'Aulas de bike intensas mas seguras — rendimento subiu muito.',
      papel: 'Spinning',
      fotoUrl: null,
    },
  ] satisfies Depoimento[],

  nivel: {
    titulo: 'Não importa seu nível atual',
    texto:
      'Você não precisa estar preparado para começar. Eu ajusto o treino de acordo com seu nível, rotina e objetivo. O importante é dar o primeiro passo.',
  },

  ctaFinal: {
    titulo: 'Vamos começar?',
    texto:
      'Me chama no WhatsApp e me conta seu objetivo. Te explico como funciona e vemos a melhor forma de começar.',
    botao: 'Quero começar agora',
    microcopy: 'Sem compromisso • Resposta rápida no WhatsApp',
  },

  rodape: {
    direitos: 'Manoel Ednaldo. Todos os direitos reservados.',
    aviso:
      'Serviços de educação física dentro da legislação e competências do profissional. Não substitui avaliação médica quando necessária.',
  },
} as const;

export function urlWhatsApp(): string {
  const { whatsappE164, whatsappMensagemPadrao } = LANDING_DADOS.contato;
  const texto = encodeURIComponent(whatsappMensagemPadrao);
  return `https://wa.me/${whatsappE164}?text=${texto}`;
}

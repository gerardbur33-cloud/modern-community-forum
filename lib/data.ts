export const categories = [
  {
    name: 'Technologie',
    description: 'Projets, outils, stack technique et évolutions du web.',
    topics: 238,
    icon: '⚙️',
    color: '#38bdf8',
  },
  {
    name: 'Design',
    description: 'UX, interfaces, branding et inspiration visuelle.',
    topics: 154,
    icon: '🎨',
    color: '#f472b6',
  },
  {
    name: 'Marketing',
    description: 'Growth, acquisition, storytelling et stratégie.',
    topics: 121,
    icon: '📈',
    color: '#a78bfa',
  },
  {
    name: 'Communauté',
    description: 'Événements, annonces et échanges entre membres.',
    topics: 97,
    icon: '🤝',
    color: '#34d399',
  },
];

export const stats = [
  { label: 'Membres', value: '18k+' },
  { label: 'Sujets', value: '2.4k' },
  { label: 'Contributeurs', value: '5.3k' },
];

export const trendingTags = ['nextjs', 'ux', 'launch', 'community', 'design', 'ai'];

export type Topic = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  createdAt: string;
  views: number;
  replies: number;
  likes: number;
  tags: string[];
  pinned?: boolean;
};

export const topics: Topic[] = [
  {
    id: '1',
    title: 'Quels outils utilisez-vous pour votre stack de side-project ?',
    category: 'Technologie',
    excerpt: 'Je cherche des outils fiables pour lancer un produit lean sans trop d’overhead. Partagez vos setups, outils de productivité et vos retours d’expérience.',
    author: 'Aline',
    createdAt: 'Il y a 2 heures',
    views: 1234,
    replies: 48,
    likes: 96,
    tags: ['productivity', 'stack', 'tooling'],
    pinned: true,
  },
  {
    id: '2',
    title: 'Comment structurer une communauté active dès le lancement ?',
    category: 'Communauté',
    excerpt: 'Je veux créer un espace vivant sans devoir surveiller chaque message. Quels mécanismes d’engagement avez-vous testés ?',
    author: 'Nicolas',
    createdAt: 'Il y a 5 heures',
    views: 981,
    replies: 21,
    likes: 71,
    tags: ['community', 'launch'],
  },
  {
    id: '3',
    title: 'Meilleurs outils de design system pour une startup SaaS ?',
    category: 'Design',
    excerpt: 'Je cherche des ressources et principes pour créer un système cohérent et maintenable, sans perdre de vitesse sur le développement.',
    author: 'Maya',
    createdAt: 'Hier',
    views: 746,
    replies: 33,
    likes: 64,
    tags: ['ux', 'designsystem'],
  },
  {
    id: '4',
    title: 'Comment faire grandir son audience sans publicité payante ?',
    category: 'Marketing',
    excerpt: 'Partagez vos astuces de contenu, d’email marketing et d’outreach qui ont réellement fonctionné pour vous.',
    author: 'Sami',
    createdAt: 'Il y a 1 jour',
    views: 853,
    replies: 29,
    likes: 57,
    tags: ['growth', 'content'],
  },
];

export const featuredTopics = topics;

export type Post = {
  id: string;
  topicId: string;
  author: string;
  role: string;
  content: string;
  createdAt: string;
};

export const postsByTopic: Record<string, Post[]> = {
  '1': [
    {
      id: 'p1',
      topicId: '1',
      author: 'Karim',
      role: 'moderator',
      content: 'Je recommande une stack simple : Linear + Notion + Supabase + Vercel. Cela garde de la vitesse sans casser la clarté.',
      createdAt: 'Il y a 1 heure',
    },
    {
      id: 'p2',
      topicId: '1',
      author: 'Lina',
      role: 'member',
      content: 'Pour side-projects, j’utilise surtout des outils qui me font gagner du temps sur la maintenance. Une vraie base simple est plus utile qu’une techno trop avancée.',
      createdAt: 'Il y a 40 min',
    },
  ],
  '2': [
    {
      id: 'p3',
      topicId: '2',
      author: 'Bruno',
      role: 'admin',
      content: 'Le point clé est d’avoir un premier battement de communauté. Des premiers sujets à fort intérêt, un petit calendrier hebdo et des modérateurs actifs portent beaucoup.',
      createdAt: 'Il y a 3 heures',
    },
  ],
  '3': [
    {
      id: 'p4',
      topicId: '3',
      author: 'Lea',
      role: 'member',
      content: 'J’essaie de garder la structure simple : tokens, composants, documentation, templates. Une base claire aide beaucoup plus qu’un système trop complexe.',
      createdAt: 'Hier',
    },
  ],
  '4': [
    {
      id: 'p5',
      topicId: '4',
      author: 'Yves',
      role: 'member',
      content: 'Le meilleur levier est souvent le contenu utile et cohérent, accompagné de vraie conversation. Les gens répondent plus quand le message apporte de la valeur.',
      createdAt: 'Il y a 12 heures',
    },
  ],
};

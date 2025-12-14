import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type NewsCategory = 'Все' | 'Новости' | 'События' | 'История';

interface NewsArticle {
  id: number;
  title: string;
  category: NewsCategory;
  date: string;
  excerpt: string;
  featured?: boolean;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('Главная');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('Все');

  const newsData: NewsArticle[] = [
    {
      id: 1,
      title: 'Открытие нового спортивного комплекса в центре села',
      category: 'События',
      date: '14 декабря 2024',
      excerpt: 'Сегодня состоялось торжественное открытие современного спортивного комплекса, строительство которого велось последние два года. На церемонии присутствовали жители села и почётные гости.',
      featured: true
    },
    {
      id: 2,
      title: 'Школьники Ульяново заняли первое место в областной олимпиаде',
      category: 'Новости',
      date: '13 декабря 2024',
      excerpt: 'Команда учеников местной школы показала блестящие результаты на областной олимпиаде по математике и естественным наукам.',
    },
    {
      id: 3,
      title: 'История основания села: 200 лет назад',
      category: 'История',
      date: '12 декабря 2024',
      excerpt: 'Архивные документы рассказывают о том, как в далёком 1824 году переселенцы основали первое поселение на месте современного Ульяново.',
    },
    {
      id: 4,
      title: 'Ярмарка выходного дня привлекла более 500 посетителей',
      category: 'События',
      date: '11 декабря 2024',
      excerpt: 'Традиционная сельская ярмарка порадовала жителей свежими продуктами от местных фермеров и ремесленными изделиями.',
    },
    {
      id: 5,
      title: 'Ремонт дороги на улице Центральной завершён досрочно',
      category: 'Новости',
      date: '10 декабря 2024',
      excerpt: 'Дорожные работы, начавшиеся месяц назад, были завершены на две недели раньше запланированного срока благодаря хорошей погоде.',
    },
    {
      id: 6,
      title: 'Легенды и предания Ульяново: что рассказывали наши деды',
      category: 'История',
      date: '9 декабря 2024',
      excerpt: 'Сборник народных преданий и историй, передававшихся из поколения в поколение, теперь доступен в сельской библиотеке.',
    },
  ];

  const filteredNews = newsData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter(n => n.featured);
  const regularNews = filteredNews.filter(n => !n.featured);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">УЛЬЯНОВО+</h1>
              <p className="text-sm text-muted-foreground mt-1 font-semibold tracking-wide">СЕЛЬСКИЕ НОВОСТИ И СОБЫТИЯ</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">Суббота</p>
              <p className="text-2xl font-bold">14.12.2024</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-wide">
            {['Главная', 'Новости', 'События', 'История села', 'Подписка'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`hover:text-primary transition-colors relative pb-1 ${
                  activeSection === section 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по архиву новостей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 border-2 border-border focus:border-primary"
              />
            </div>
            <Button 
              variant="default" 
              className="h-12 px-8 font-semibold uppercase tracking-wide"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['Все', 'Новости', 'События', 'История'] as NewsCategory[]).map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {featuredNews.length > 0 && (
          <div className="mb-12">
            {featuredNews.map(article => (
              <Card key={article.id} className="border-2 border-primary p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default" className="font-bold uppercase tracking-wider">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-semibold">{article.date}</span>
                </div>
                <h2 className="text-4xl font-black mb-4 leading-tight hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-lg leading-relaxed text-foreground">{article.excerpt}</p>
              </Card>
            ))}
          </div>
        )}

        <Separator className="my-8 h-1 bg-border" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map(article => (
            <Card key={article.id} className="border border-border p-6 hover:border-primary hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="font-semibold uppercase text-xs tracking-wider">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground font-semibold">{article.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight hover:text-primary transition-colors cursor-pointer">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <Icon name="FileSearch" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить критерии поиска</p>
          </div>
        )}
      </main>

      <footer className="border-t-4 border-primary bg-background mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">УЛЬЯНОВО+</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ежедневная газета села Ульяново. Новости, события и истории нашего края.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wide mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ulyanovoplus.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (123) 456-78-90
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wide mb-4">Подписка</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Получайте свежие новости на email
              </p>
              <div className="flex gap-2">
                <Input placeholder="Ваш email" className="border-2" />
                <Button variant="default" className="font-semibold">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <p className="text-center text-sm text-muted-foreground">
            © 2024 УЛЬЯНОВО+. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

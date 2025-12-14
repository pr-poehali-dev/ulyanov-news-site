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
  content: string;
  author?: string;
  featured?: boolean;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('Главная');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('Все');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const newsData: NewsArticle[] = [
    {
      id: 1,
      title: 'Открытие нового спортивного комплекса в центре села',
      category: 'События',
      date: '14 декабря 2024',
      excerpt: 'Сегодня состоялось торжественное открытие современного спортивного комплекса, строительство которого велось последние два года. На церемонии присутствовали жители села и почётные гости.',
      content: 'Сегодня в центре села Ульяново состоялось торжественное открытие нового спортивного комплекса. Строительство объекта велось последние два года при поддержке областных властей и местного бюджета.\n\nНа церемонии открытия присутствовали глава администрации района, директор школы, представители спортивных федераций и более 300 жителей села. Комплекс оснащён современным оборудованием для занятий различными видами спорта.\n\nВ здании расположены волейбольная и баскетбольная площадки, тренажёрный зал, зал для занятий единоборствами и раздевалки с душевыми. Особое внимание уделено доступности для людей с ограниченными возможностями.\n\n«Это важное событие для нашего села, — отметил глава администрации. — Теперь у жителей появилась возможность заниматься спортом в комфортных условиях круглый год».\n\nПервыми посетителями комплекса стали школьники, которые провели показательные выступления по волейболу и художественной гимнастике.',
      author: 'Марина Соколова',
      featured: true
    },
    {
      id: 2,
      title: 'Школьники Ульяново заняли первое место в областной олимпиаде',
      category: 'Новости',
      date: '13 декабря 2024',
      excerpt: 'Команда учеников местной школы показала блестящие результаты на областной олимпиаде по математике и естественным наукам.',
      content: 'Команда учеников школы села Ульяново одержала победу на областной олимпиаде школьников по математике и естественным наукам. Соревнования проходили в областном центре при участии 45 команд из разных районов.\n\nВ состав команды вошли восемь учеников 9-11 классов. Особо отличились Иван Петров (11 класс), занявший первое место в математике, и Анна Смирнова (10 класс) с победой в биологии.\n\nПодготовкой команды занимались учителя Елена Викторовна Морозова и Сергей Иванович Белов. «Ребята показали отличные знания и умение работать в команде», — отметила директор школы.\n\nВсе участники получили дипломы и ценные подарки. Победители будут представлять область на региональном этапе олимпиады в феврале следующего года.',
      author: 'Дмитрий Кузнецов'
    },
    {
      id: 3,
      title: 'История основания села: 200 лет назад',
      category: 'История',
      date: '12 декабря 2024',
      excerpt: 'Архивные документы рассказывают о том, как в далёком 1824 году переселенцы основали первое поселение на месте современного Ульяново.',
      content: 'В районном архиве были обнаружены уникальные документы, проливающие свет на историю основания села Ульяново. Согласно найденным записям, первое поселение на этом месте появилось в 1824 году.\n\nОснователями села стали переселенцы из центральных губерний России, получившие земли по указу императора Александра I. Первоначально поселение насчитывало 15 дворов и около 80 жителей.\n\nНазвание село получило в честь помещика Ульянова, владевшего окрестными землями. В документах 1830-х годов впервые упоминается деревянная церковь и школа для крестьянских детей.\n\nК концу XIX века Ульяново превратилось в крупное село с населением более 500 человек. Здесь действовали две мельницы, кузница и торговые лавки.\n\nСегодня в сельском музее можно увидеть копии этих документов, старинные фотографии и предметы быта первых жителей села.',
      author: 'Ольга Историкова'
    },
    {
      id: 4,
      title: 'Ярмарка выходного дня привлекла более 500 посетителей',
      category: 'События',
      date: '11 декабря 2024',
      excerpt: 'Традиционная сельская ярмарка порадовала жителей свежими продуктами от местных фермеров и ремесленными изделиями.',
      content: 'В минувшие выходные в центре села прошла традиционная сельская ярмарка. Мероприятие привлекло более 500 посетителей и 35 торговцев из Ульяново и соседних населённых пунктов.\n\nПосетители смогли приобрести свежие овощи, молочные продукты, мёд, домашнюю выпечку и изделия местных ремесленников. Особым спросом пользовались вязаные изделия и деревянные игрушки ручной работы.\n\nВ рамках ярмарки прошли мастер-классы по традиционным ремёслам. Дети учились лепить из глины, плести из соломы и расписывать деревянные заготовки.\n\nФольклорный ансамбль «Рябинушка» выступил с концертной программой народных песен. Для самых маленьких работала игровая зона с аниматорами.\n\n«Такие ярмарки помогают поддержать местных производителей и сохранить традиции», — отметил организатор мероприятия.',
      author: 'Марина Соколова'
    },
    {
      id: 5,
      title: 'Ремонт дороги на улице Центральной завершён досрочно',
      category: 'Новости',
      date: '10 декабря 2024',
      excerpt: 'Дорожные работы, начавшиеся месяц назад, были завершены на две недели раньше запланированного срока благодаря хорошей погоде.',
      content: 'Ремонт дороги на главной улице села Ульяново завершён досрочно. Работы, которые планировалось закончить к концу месяца, были выполнены на две недели раньше срока.\n\nПодрядная организация провела капитальный ремонт 1,2 километра дорожного полотна. Было заменено старое покрытие, установлены новые бордюры, обновлена ливневая канализация.\n\nБлагоприятные погодные условия позволили строителям работать без перерывов. «Мы смогли закончить раньше благодаря тёплой погоде и слаженной работе бригад», — прокомментировал прораб Александр Степанов.\n\nОбщая стоимость работ составила 8,5 миллионов рублей из областного бюджета. В следующем году планируется отремонтировать ещё три улицы села.\n\nЖители села отмечают значительное улучшение качества дорожного покрытия и благодарят рабочих за оперативность.',
      author: 'Дмитрий Кузнецов'
    },
    {
      id: 6,
      title: 'Легенды и предания Ульяново: что рассказывали наши деды',
      category: 'История',
      date: '9 декабря 2024',
      excerpt: 'Сборник народных преданий и историй, передававшихся из поколения в поколение, теперь доступен в сельской библиотеке.',
      content: 'В сельской библиотеке состоялась презентация сборника «Легенды и предания Ульяново». Книга содержит народные истории, собранные у старожилов села за последние три года.\n\nРаботу по сбору материалов вели сотрудники библиотеки совместно с краеведческим кружком школы. Было записано более 50 историй от 23 жителей села старше 70 лет.\n\nСреди преданий — рассказы о таинственном лесном озере, старинном кладе, спрятанном во время войны, и призраке мельника, который, по легенде, до сих пор бродит у старой мельницы.\n\nОсобый интерес представляют истории о народных традициях и обрядах, которые соблюдались в селе сто лет назад. Многие из них сегодня забыты.\n\n«Эти истории — живая связь с нашим прошлым, — говорит библиотекарь Вера Сергеевна. — Важно сохранить их для будущих поколений».\n\nСборник можно взять в библиотеке. Планируется выпуск второго тома с новыми материалами.',
      author: 'Ольга Историкова'
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

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b-4 border-primary bg-background">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">УЛЬЯНОВО+</h1>
              </div>
              <Button
                variant="outline"
                onClick={() => setSelectedArticle(null)}
                className="font-semibold uppercase tracking-wide"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                К списку новостей
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <article>
            <div className="mb-6">
              <Badge variant="default" className="font-bold uppercase tracking-wider mb-4">
                {selectedArticle.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                {selectedArticle.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  {selectedArticle.date}
                </span>
                {selectedArticle.author && (
                  <span className="flex items-center gap-2">
                    <Icon name="User" size={16} />
                    {selectedArticle.author}
                  </span>
                )}
              </div>
            </div>

            <Separator className="my-8" />

            <div className="prose prose-lg max-w-none">
              {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="font-semibold"
                onClick={() => setSelectedArticle(null)}
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Вернуться к новостям
              </Button>
            </div>
          </article>
        </main>

        <footer className="border-t-4 border-primary bg-background mt-16">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 УЛЬЯНОВО+. Все права защищены.
            </p>
          </div>
        </footer>
      </div>
    );
  }

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
                <h2 
                  className="text-4xl font-black mb-4 leading-tight hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
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
              <h3 
                className="text-xl font-bold mb-3 leading-tight hover:text-primary transition-colors cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
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
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Базовый курс',
      duration: '3 недели',
      price: '25 000 ₽',
      description: 'Основы маникюра, покрытие гель-лаком, базовые техники',
      icon: 'Sparkles'
    },
    {
      title: 'Продвинутый уровень',
      duration: '5 недель',
      price: '45 000 ₽',
      description: 'Сложные техники, укрепление ногтей, коррекция формы',
      icon: 'Award'
    },
    {
      title: 'Мастер-класс по нейл-арту',
      duration: '2 дня',
      price: '15 000 ₽',
      description: 'Художественная роспись, дизайн, тренды 2026',
      icon: 'Palette'
    }
  ];

  const teachers = [
    {
      name: 'Виктория Романова',
      position: 'Основатель школы',
      experience: '12 лет опыта',
      description: 'Международный сертифицированный мастер'
    },
    {
      name: 'Анна Белова',
      position: 'Преподаватель нейл-арта',
      experience: '8 лет опыта',
      description: 'Победитель чемпионата по дизайну ногтей'
    },
    {
      name: 'Мария Золотова',
      position: 'Преподаватель базового курса',
      experience: '10 лет опыта',
      description: 'Эксперт по укреплению и восстановлению'
    }
  ];

  const reviews = [
    {
      name: 'Елена К.',
      text: 'Прошла базовый курс и сразу начала работать! Преподаватели дали все необходимые знания и поддержку.',
      rating: 5
    },
    {
      name: 'Ольга М.',
      text: 'Невероятная атмосфера, профессиональный подход. Мастер-классы просто волшебные!',
      rating: 5
    },
    {
      name: 'Дарья Л.',
      text: 'После продвинутого курса моя техника вышла на совершенно новый уровень. Рекомендую!',
      rating: 5
    }
  ];

  const portfolioImages = [
    'https://cdn.poehali.dev/projects/5ec296ba-819c-4ed2-a2ea-6335f1e12602/files/4c42ee18-5a3a-45a5-a1b3-373f721543ec.jpg',
    'https://cdn.poehali.dev/projects/5ec296ba-819c-4ed2-a2ea-6335f1e12602/files/eadf6d7c-6052-4489-99ad-22c5b8b6aa34.jpg',
    'https://cdn.poehali.dev/projects/5ec296ba-819c-4ed2-a2ea-6335f1e12602/files/5e3f8b4d-f22d-48f8-96c5-992fa06f57a4.jpg',
    'https://cdn.poehali.dev/projects/5ec296ba-819c-4ed2-a2ea-6335f1e12602/files/4c42ee18-5a3a-45a5-a1b3-373f721543ec.jpg',
    'https://cdn.poehali.dev/projects/5ec296ba-819c-4ed2-a2ea-6335f1e12602/files/eadf6d7c-6052-4489-99ad-22c5b8b6aa34.jpg',
    'https://cdn.poehali.dev/projects/5ec296ba-819c-4ed2-a2ea-6335f1e12602/files/5e3f8b4d-f22d-48f8-96c5-992fa06f57a4.jpg',
    'https://cdn.poehali.dev/projects/5ec296ba-819c-4ed2-a2ea-6335f1e12602/files/4c42ee18-5a3a-45a5-a1b3-373f721543ec.jpg',
    'https://cdn.poehali.dev/projects/5ec296ba-819c-4ed2-a2ea-6335f1e12602/files/eadf6d7c-6052-4489-99ad-22c5b8b6aa34.jpg'
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-gold/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gold font-serif">
            VeriNail
          </div>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'courses', 'teachers', 'portfolio', 'reviews', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm hover-gold transition-colors ${
                  activeSection === section ? 'text-gold' : 'text-foreground/80'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О школе'}
                {section === 'courses' && 'Курсы'}
                {section === 'teachers' && 'Преподаватели'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button className="bg-gold hover:bg-gold/90 text-background">
            Записаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gold mb-6 animate-fade-in font-serif">
            VeriNail
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 animate-slide-up">
            Школа маникюра премиум-класса
          </p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 animate-slide-up">
            Превратите свою страсть в профессию. Обучение у лучших мастеров с международными сертификатами
          </p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-background gold-glow">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Выбрать курс
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-gold mb-12 font-serif">
            О школе VeriNail
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                VeriNail — это не просто школа маникюра. Это пространство, где рождаются профессионалы своего дела. 
                За 8 лет работы мы выпустили более 2000 успешных мастеров.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Наша философия — индивидуальный подход, премиальное качество обучения и постоянная поддержка выпускников.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2 font-serif">2000+</div>
                  <div className="text-sm text-foreground/70">Выпускников</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2 font-serif">8</div>
                  <div className="text-sm text-foreground/70">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2 font-serif">15</div>
                  <div className="text-sm text-foreground/70">Преподавателей</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gold/20 to-secondary/20 rounded-2xl p-8 gold-glow">
              <h3 className="text-2xl font-bold text-gold mb-4 font-serif">
                Почему VeriNail?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Сертификаты международного образца</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Помощь в трудоустройстве после обучения</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Премиальные материалы для практики</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Пожизненная поддержка выпускников</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-gold mb-4 font-serif">
            Наши курсы
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Выберите программу обучения, которая подходит именно вам
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="bg-card border-gold/20 hover:border-gold/50 transition-all hover:gold-glow group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon name={course.icon as any} size={32} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-gold mb-3 font-serif">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </span>
                    <span className="text-gold font-semibold text-lg">{course.price}</span>
                  </div>
                  <p className="text-foreground/70 mb-6">
                    {course.description}
                  </p>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-background">
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-gold mb-4 font-serif">
            Преподаватели
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Учитесь у лучших мастеров индустрии красоты
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-card border-gold/20 hover:border-gold/50 transition-all hover:gold-glow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-gold/30 to-secondary/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-gold mb-2 font-serif">
                    {teacher.name}
                  </h3>
                  <p className="text-foreground/80 font-medium mb-2">{teacher.position}</p>
                  <p className="text-sm text-gold mb-3">{teacher.experience}</p>
                  <p className="text-foreground/70 text-sm">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-gold mb-4 font-serif">
            Портфолио работ
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Работы наших талантливых учеников
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {portfolioImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden hover:gold-glow transition-all cursor-pointer group">
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-gold mb-4 font-serif">
            Отзывы выпускников
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Что говорят наши студенты о школе VeriNail
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-gold/20">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{review.text}"</p>
                  <p className="text-gold font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center text-gold mb-4 font-serif">
            Запишитесь на курс
          </h2>
          <p className="text-center text-foreground/70 mb-12">
            Оставьте заявку и мы свяжемся с вами в ближайшее время
          </p>
          <Card className="bg-card border-gold/20 gold-glow">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Ваше имя</label>
                    <Input placeholder="Анна" className="border-gold/30 focus:border-gold" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="border-gold/30 focus:border-gold" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                  <Input type="email" placeholder="anna@example.com" className="border-gold/30 focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Выберите курс</label>
                  <select className="w-full px-4 py-2 rounded-md bg-background border border-gold/30 focus:border-gold focus:outline-none">
                    <option>Базовый курс</option>
                    <option>Продвинутый уровень</option>
                    <option>Мастер-класс по нейл-арту</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Сообщение</label>
                  <Textarea placeholder="Расскажите о своих целях..." className="border-gold/30 focus:border-gold min-h-[120px]" />
                </div>
                <Button className="w-full bg-gold hover:bg-gold/90 text-background text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-12 pt-8 border-t border-gold/20">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="MapPin" size={24} className="text-gold mx-auto mb-2" />
                    <p className="text-sm text-foreground/70">Москва, ул. Примерная, 123</p>
                  </div>
                  <div>
                    <Icon name="Phone" size={24} className="text-gold mx-auto mb-2" />
                    <p className="text-sm text-foreground/70">+7 (999) 123-45-67</p>
                  </div>
                  <div>
                    <Icon name="Mail" size={24} className="text-gold mx-auto mb-2" />
                    <p className="text-sm text-foreground/70">info@verinail.ru</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-gold/20 bg-card/50">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold text-gold mb-4 font-serif">
            VeriNail
          </div>
          <p className="text-foreground/60 mb-6">Школа маникюра премиум-класса</p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" size={24} className="text-gold hover:text-gold/80 cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-gold hover:text-gold/80 cursor-pointer transition-colors" />
            <Icon name="Youtube" size={24} className="text-gold hover:text-gold/80 cursor-pointer transition-colors" />
          </div>
          <p className="text-sm text-foreground/50">© 2026 VeriNail. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

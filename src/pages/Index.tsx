import { useState, useEffect } from "react";
import { MapPin, Clock, Phone, Instagram, ChevronDown, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const cocktails = [
  {
    name: "Noir Sunset",
    description: "Виски, амаретто, вишневый ликёр, апельсин",
    price: "650₽",
    tag: "Signature",
  },
  {
    name: "Midnight Gold",
    description: "Ром, маракуйя, лайм, шампанское",
    price: "720₽",
    tag: "Популярный",
  },
  {
    name: "Velvet Shadow",
    description: "Джин, малина, розмарин, тоник",
    price: "580₽",
    tag: null,
  },
  {
    name: "Dark Empress",
    description: "Текила, голубая кюрасао, лайм, соль",
    price: "690₽",
    tag: "Новинка",
  },
  {
    name: "Golden Hour",
    description: "Водка, St. Germain, персик, просекко",
    price: "750₽",
    tag: "Premium",
  },
  {
    name: "Smoky Affair",
    description: "Мескаль, ананас, халапеньо, агава",
    price: "820₽",
    tag: null,
  },
];

const features = [
  { icon: Sparkles, title: "Авторские коктейли", desc: "60+ уникальных рецептов" },
  { icon: Star, title: "Премиум алкоголь", desc: "Редкие сорта со всего мира" },
  { icon: Clock, title: "До последнего гостя", desc: "Работаем без спешки" },
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-background/90 backdrop-blur-lg border-b border-border' : ''}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-semibold tracking-wide">
            <span className="text-gradient">NOIR</span>
            <span className="text-muted-foreground ml-2 text-lg font-body font-light">BAR</span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">Меню</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center noise">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s', transform: `translateY(${scrollY * -0.05}px)` }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <p 
              className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-6 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Добро пожаловать в
            </p>
            <h1 
              className="font-display text-[clamp(4rem,15vw,12rem)] font-semibold leading-none mb-4 animate-fade-up text-shadow"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-gradient">NOIR</span>
            </h1>
            <p 
              className="font-display text-[clamp(1.5rem,5vw,3rem)] italic text-muted-foreground mb-8 animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              Cocktails & Atmosphere
            </p>
            <p 
              className="font-body text-muted-foreground max-w-xl mx-auto text-lg mb-12 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.8s' }}
            >
              Место, где каждый коктейль — это история, а каждый вечер — незабываемое приключение
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
              style={{ animationDelay: '1s' }}
            >
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body px-8 py-6 text-base shadow-glow hover-glow transition-all"
              >
                Забронировать столик
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-secondary font-body px-8 py-6 text-base"
              >
                Смотреть меню
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#features"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer animate-fade-in"
          style={{ animationDelay: '1.5s' }}
        >
          <span className="font-body text-xs uppercase tracking-widest">Листайте</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-dark relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-gradient-card border border-border hover-lift hover-glow transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 relative noise">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-accent uppercase tracking-[0.2em] text-sm mb-4">Откройте для себя</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              Наши <span className="text-gradient">Signature</span> коктейли
            </h2>
            <div className="w-24 h-0.5 bg-gradient-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cocktails.map((cocktail, index) => (
              <div 
                key={cocktail.name}
                className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-accent/30 hover-lift transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cocktail.tag && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-medium bg-accent/20 text-accent border border-accent/30">
                    {cocktail.tag}
                  </span>
                )}
                <h3 className="font-display text-2xl mb-2 group-hover:text-gradient transition-all">
                  {cocktail.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cocktail.description}
                </p>
                <p className="font-display text-xl text-accent">{cocktail.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body"
            >
              Полное меню
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-dark relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-right">
              <p className="font-body text-accent uppercase tracking-[0.2em] text-sm mb-4">О нас</p>
              <h2 className="font-display text-5xl md:text-6xl font-semibold mb-8 leading-tight">
                Искусство <br />
                <span className="text-gradient">коктейлей</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                NOIR — это не просто бар. Это место, где традиции смешиваются с инновациями, 
                а каждый напиток создается с любовью к деталям. Наши бармены — настоящие 
                художники, превращающие ингредиенты в произведения искусства.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                Мы верим, что идеальный коктейль — это больше, чем просто напиток. 
                Это история, которую хочется рассказать, и воспоминание, которое останется надолго.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="font-display text-4xl text-gradient">60+</p>
                  <p className="font-body text-sm text-muted-foreground">авторских коктейлей</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-gradient">5</p>
                  <p className="font-body text-sm text-muted-foreground">лет опыта</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-gradient">10K+</p>
                  <p className="font-body text-sm text-muted-foreground">довольных гостей</p>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-left" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-[4/5] rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full border-2 border-accent/30 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <Sparkles className="w-12 h-12 text-accent" />
                    </div>
                    <p className="font-display text-2xl text-gradient">NOIR</p>
                    <p className="font-body text-muted-foreground text-sm">Est. 2019</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/20 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-accent/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative noise">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-accent uppercase tracking-[0.2em] text-sm mb-4">Приходите к нам</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              <span className="text-gradient">Контакты</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-gradient-card border border-border hover-lift transition-all">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-display text-xl mb-2">Адрес</h3>
              <p className="font-body text-muted-foreground text-sm">
                ул. Большая Садовая, 12<br />
                Москва, Россия
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-card border border-border hover-lift transition-all">
              <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-display text-xl mb-2">Часы работы</h3>
              <p className="font-body text-muted-foreground text-sm">
                Пт — Сб: 19:00 — 06:00<br />
                Вс — Чт: 18:00 — 03:00
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-card border border-border hover-lift transition-all">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-display text-xl mb-2">Бронирование</h3>
              <p className="font-body text-muted-foreground text-sm">
                +7 (495) 123-45-67<br />
                hello@noir-bar.ru
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body px-12 py-6 text-base shadow-glow hover-glow transition-all"
            >
              Забронировать столик
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-display text-xl">
              <span className="text-gradient">NOIR</span>
              <span className="text-muted-foreground ml-2 text-base font-body font-light">BAR</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <p className="font-body text-muted-foreground text-sm">
              © 2024 NOIR BAR. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
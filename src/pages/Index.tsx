import { useState, useEffect } from "react";
import { MapPin, Clock, Phone, Instagram, ChevronDown, Star, Sparkles, Wine, Music, Users, Quote, ArrowRight, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import heroBg from "@/assets/hero-bg.jpg";
import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";
import cocktail3 from "@/assets/cocktail-3.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";

const cocktails = [
  { name: "Golden Hour", description: "Whiskey, honey, lemon, ginger beer, gold flakes", price: "$16", tag: "Signature", image: cocktail1 },
  { name: "Midnight Rose", description: "Gin, rose water, elderflower, sparkling", price: "$18", tag: "Popular", image: cocktail2 },
  { name: "Velvet Thunder", description: "Dark rum, coffee liqueur, cream, espresso", price: "$15", tag: null, image: cocktail3 },
  { name: "Sunset Boulevard", description: "Tequila, passion fruit, lime, chili rim", price: "$17", tag: "Spicy", image: cocktail4 },
  { name: "Electric Dreams", description: "Vodka, blue curaçao, lychee, prosecco", price: "$19", tag: "New", image: cocktail1 },
  { name: "Smoky Affair", description: "Mezcal, pineapple, jalapeño, agave", price: "$20", tag: "Premium", image: cocktail2 },
];

const features = [
  { icon: Sparkles, title: "Craft Cocktails", desc: "60+ unique recipes" },
  { icon: Star, title: "Premium Spirits", desc: "Rare finds worldwide" },
  { icon: Clock, title: "Open Late", desc: "Until the last guest" },
];

const events = [
  { day: "FRI", name: "Jazz Nights", desc: "Live jazz from 9PM", icon: Music },
  { day: "SAT", name: "DJ Sessions", desc: "House & deep vibes", icon: Zap },
  { day: "SUN", name: "Chill Sundays", desc: "Acoustic sessions", icon: Heart },
];

const reviews = [
  { name: "Sarah M.", text: "Best cocktails in the city. The atmosphere is unmatched!", rating: 5 },
  { name: "James K.", text: "Harry's never disappoints. My go-to spot for dates.", rating: 5 },
  { name: "Emma L.", text: "The bartenders are true artists. Every drink is a masterpiece.", rating: 5 },
];

const stats = [
  { value: "60+", label: "Signature Drinks" },
  { value: "5", label: "Years Running" },
  { value: "10K+", label: "Happy Guests" },
  { value: "15", label: "Awards Won" },
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden grain">
      {/* Animated Background Orbs - Global */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] bg-accent/20 rounded-full glow-orb animate-drift"
          style={{ top: '10%', left: '10%' }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full glow-orb animate-float-slow"
          style={{ top: '50%', right: '5%', animationDelay: '2s' }}
        />
        <div 
          className="absolute w-[300px] h-[300px] bg-accent/15 rounded-full glow-orb animate-float-reverse"
          style={{ bottom: '10%', left: '20%', animationDelay: '4s' }}
        />
        {/* Additional floating particles */}
        <div className="absolute w-2 h-2 bg-accent rounded-full animate-particle" style={{ top: '20%', left: '30%' }} />
        <div className="absolute w-3 h-3 bg-accent/60 rounded-full animate-particle" style={{ top: '60%', left: '70%', animationDelay: '1s' }} />
        <div className="absolute w-2 h-2 bg-accent/40 rounded-full animate-particle" style={{ top: '80%', left: '15%', animationDelay: '2s' }} />
        <div className="absolute w-4 h-4 bg-accent/30 rounded-full animate-particle" style={{ top: '40%', left: '80%', animationDelay: '3s' }} />
        <div className="absolute w-2 h-2 bg-accent/50 rounded-full animate-particle" style={{ top: '70%', left: '40%', animationDelay: '4s' }} />
        
        {/* Mouse follower */}
        <div 
          className="absolute w-64 h-64 bg-accent/10 rounded-full glow-orb transition-all duration-1000 ease-out"
          style={{ 
            left: mousePos.x - 128, 
            top: mousePos.y - 128,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'glass' : ''}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-semibold tracking-wide">
            <span className="text-gradient animate-flicker">Harry's</span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform">Menu</a>
            <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform">Events</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform">Contact</a>
            <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Book a Table
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img 
            src={heroBg} 
            alt="Harry's Bar interior" 
            className="w-full h-full object-cover animate-zoom-pulse"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          <div 
            className="absolute top-20 left-20 w-32 h-32 border border-accent/20 rounded-full animate-rotate-slow"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute top-40 right-32 w-24 h-24 border border-accent/10 animate-rotate-reverse"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent/10 animate-morph" />
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent rounded-full animate-sparkle animate-orbit" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-accent rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-accent rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
          {/* Orbiting elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-accent/40 rounded-full animate-orbit" style={{ animationDuration: '15s' }} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-accent/60 rounded-full animate-orbit" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <p 
              className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-6 animate-blur-in"
              style={{ animationDelay: '0.2s' }}
            >
              Welcome to
            </p>
            <h1 
              className="font-display text-[clamp(4rem,18vw,14rem)] font-semibold leading-none mb-4 animate-blur-in text-shadow"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-gradient animate-gradient-x bg-[length:200%_200%]" style={{ background: 'linear-gradient(90deg, hsl(32, 85%, 50%), hsl(40, 90%, 65%), hsl(32, 85%, 50%), hsl(40, 90%, 65%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '300% 100%' }}>Harry's</span>
            </h1>
            <p 
              className="font-display text-[clamp(1.5rem,4vw,2.5rem)] italic text-muted-foreground mb-8 animate-blur-in"
              style={{ animationDelay: '0.6s' }}
            >
              Cocktails & Good Vibes
            </p>
            <p 
              className="font-body text-muted-foreground max-w-xl mx-auto text-lg mb-10 leading-relaxed animate-slide-up"
              style={{ animationDelay: '0.8s' }}
            >
              Where every cocktail tells a story and every night becomes unforgettable
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
              style={{ animationDelay: '1s' }}
            >
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body px-8 py-6 text-base shadow-glow hover-glow transition-all group animate-pulse-glow"
              >
                Book a Table
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-secondary font-body px-8 py-6 text-base"
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#features"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer animate-fade-in z-10"
          style={{ animationDelay: '1.5s' }}
        >
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce-slow" />
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-dark relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-gradient-card border border-border hover-lift hover-glow transition-all animate-fade-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow group-hover:animate-swing">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 animate-wave" style={{ animationDuration: '20s' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-display text-4xl md:text-5xl text-gradient mb-1 group-hover:animate-bounce-slow">{stat.value}</p>
                <p className="font-body text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section with Images */}
      <section id="menu" className="py-20 relative noise">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.2em] text-sm mb-3 animate-sway">Discover</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Our <span className="text-gradient">Signature</span> Cocktails
            </h2>
            <div className="w-24 h-0.5 bg-gradient-gold mx-auto animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {cocktails.map((cocktail, index) => (
              <div 
                key={cocktail.name}
                className="group relative rounded-2xl bg-gradient-card border border-border hover:border-accent/30 hover-lift transition-all animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Cocktail Image */}
                <div className="relative h-48 overflow-hidden shine">
                  <img 
                    src={cocktail.image} 
                    alt={cocktail.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  {cocktail.tag && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-medium bg-accent/90 text-accent-foreground border border-accent/30 animate-pulse-glow">
                      {cocktail.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2 group-hover:text-gradient transition-all">
                    {cocktail.name}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cocktail.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-display text-xl text-accent">{cocktail.price}</p>
                    <Button size="sm" variant="outline" className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      Order
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body group"
            >
              Full Menu
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gradient-dark relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full animate-wave" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.2em] text-sm mb-3">What's On</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Weekly <span className="text-gradient">Events</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <div 
                key={event.name}
                className="relative p-6 rounded-2xl bg-gradient-card border border-border hover-lift hover-glow transition-all animate-fade-up overflow-hidden group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors animate-glow-pulse" />
                <span className="inline-block px-3 py-1 rounded-full text-xs font-body font-semibold bg-accent text-accent-foreground mb-4 animate-bounce-slow">
                  {event.day}
                </span>
                <event.icon className="w-10 h-10 text-accent mb-4 group-hover:animate-swing" />
                <h3 className="font-display text-2xl mb-2">{event.name}</h3>
                <p className="font-body text-muted-foreground text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 relative noise">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.2em] text-sm mb-3">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              What Our <span className="text-gradient">Guests</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div 
                key={review.name}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover-lift transition-all animate-fade-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="w-8 h-8 text-accent/30 mb-4 group-hover:animate-sway" />
                <p className="font-body text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <span className="font-body text-muted-foreground text-sm">— {review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with enhanced image */}
      <section id="about" className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full animate-drift" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <p className="font-body text-accent uppercase tracking-[0.2em] text-sm mb-3">About Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                The Art of <br />
                <span className="text-gradient">Mixology</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
                Harry's is more than a bar. It's where tradition meets innovation, 
                and every drink is crafted with love for detail. Our bartenders are 
                true artists, turning ingredients into works of art.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                We believe the perfect cocktail is more than just a drink. 
                It's a story worth telling and a memory that lasts.
              </p>
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative animate-slide-left" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card relative shine group">
                <img 
                  src={heroBg} 
                  alt="Harry's Bar atmosphere"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-3xl text-gradient animate-flicker">Harry's</p>
                  <p className="font-body text-muted-foreground text-sm">Est. 2019</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/20 rounded-full animate-float animate-rotate-slow" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-accent/10 rounded-full animate-float-reverse animate-rotate-reverse" />
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-accent rounded-full animate-sparkle" />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 animate-gradient-x" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <a 
            href="#" 
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
          >
            <Instagram className="w-6 h-6 group-hover:animate-swing" />
            <span className="font-body text-lg">Follow us @harrysbar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative noise">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.2em] text-sm mb-3">Visit Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              <span className="text-gradient">Get in Touch</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6 rounded-2xl bg-gradient-card border border-border hover-lift transition-all group">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-slow">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl mb-2">Location</h3>
              <p className="font-body text-muted-foreground text-sm">
                123 Main Street<br />
                New York, NY
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-card border border-border hover-lift transition-all group">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-slow">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl mb-2">Hours</h3>
              <p className="font-body text-muted-foreground text-sm">
                Fri — Sat: 7PM — 4AM<br />
                Sun — Thu: 6PM — 2AM
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-card border border-border hover-lift transition-all group">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-slow">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl mb-2">Reservations</h3>
              <p className="font-body text-muted-foreground text-sm">
                +1 (555) 123-4567<br />
                hello@harrysbar.com
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body px-12 py-6 text-base shadow-glow hover-glow transition-all group animate-pulse-glow"
            >
              Book Your Table
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-display text-xl">
              <span className="text-gradient animate-flicker">Harry's</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform hover:animate-swing">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform hover:animate-swing">
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <p className="font-body text-muted-foreground text-sm">
              © 2024 Harry's Bar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

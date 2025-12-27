const Index = () => {
  const letters = "hello".split("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="font-[var(--font-display)] text-[clamp(4rem,20vw,16rem)] font-light tracking-tight text-foreground lowercase">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block animate-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Index;

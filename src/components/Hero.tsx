import { useState, useEffect } from "react";
import { Button } from "./ui/button";
const rotatingPhrases = ["you are real.", "your content is authentic.", "your identity is protected.", "trust is mathematical."];
export const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const phrase = rotatingPhrases[currentPhrase];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < phrase.length) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhrase(prev => (prev + 1) % rotatingPhrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);
  return <section className="min-h-screen flex items-center justify-center px-[5%] relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute w-[300px] h-[300px] top-[10%] left-[5%] rounded-[20px] bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 backdrop-blur-lg border border-[hsl(var(--cyan))]/20 animate-float-3d" />
      <div className="absolute w-[200px] h-[200px] top-[60%] right-[10%] rounded-[20px] bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 backdrop-blur-lg border border-[hsl(var(--cyan))]/20 animate-float-3d [animation-delay:5s]" />
      <div className="absolute w-[150px] h-[150px] bottom-[10%] left-[15%] rounded-[20px] bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 backdrop-blur-lg border border-[hsl(var(--cyan))]/20 animate-float-3d [animation-delay:10s]" />

      <div className="max-w-6xl text-center z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[hsl(var(--cyan))] to-[hsl(var(--purple))] bg-clip-text text-transparent tracking-tight">
          Validate What's Real.
          <br />
          Protect What's Yours.
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
          In a world of deepfakes, bots, and synthetic everything—
          <br />
          Valyd proves{" "}
          <span className="inline-block min-w-[350px] text-left">
            {displayText}
            <span className="animate-blink text-[hsl(var(--cyan))]">|</span>
          </span>
        </h2>

        <div className="flex gap-6 justify-center flex-wrap mb-12">
          <Button size="lg" className="rounded-full text-base px-8">
            Get Early Access
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-[hsl(var(--cyan))] text-[hsl(var(--cyan))] hover:bg-[hsl(var(--cyan))]/10">
            See Demo
          </Button>
        </div>

        
      </div>
    </section>;
};
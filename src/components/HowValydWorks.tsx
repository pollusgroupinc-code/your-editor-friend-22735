import { Bot, Sprout, Shield, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
export const HowValydWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || !sectionRef.current) return;
      const section = sectionRef.current;
      const scrollContainer = scrollContainerRef.current;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionMiddle = rect.top + rect.height / 2;
      const viewportMiddle = viewportHeight / 2;

      // Only activate when section is roughly centered (within 30% of viewport center)
      const distanceFromCenter = Math.abs(sectionMiddle - viewportMiddle);
      const threshold = viewportHeight * 0.3;
      const isCentered = distanceFromCenter < threshold;
      if (isCentered && rect.top < viewportHeight && rect.bottom > 0) {
        const scrollableWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;

        // Scrolling down/right
        if (e.deltaY > 0 && currentScroll < scrollableWidth - 10) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY * 2;
        }
        // Scrolling up/left
        else if (e.deltaY < 0 && currentScroll > 10) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY * 2;
        }
      }
    };
    window.addEventListener('wheel', handleWheel, {
      passive: false
    });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  const steps = [{
    number: "1️⃣",
    icon: Bot,
    title: "Meet Your AI Agent",
    action: "When your account is created, you automatically get your AI agent and private cloud node.",
    result: "All your data lives privately on your node — encrypted by your face, accessible only to you no third party not even we can access you data."
  }, {
    number: "2️⃣",
    icon: Sprout,
    title: "Add Data, Gain Power",
    action: "Add verified credentials, employment, education, or financial data.",
    result: "Your agent grows smarter — able to generate cryptographic proofs like \"age verified\" or \"licensed professional.\" It can even do your taxes."
  }, {
    number: "3️⃣",
    icon: Shield,
    title: "Share Proof, Not Data",
    action: "When a business requests verification, your AI agent creates a zero-knowledge proof — no identifiable data ever leaves your cloud.",
    result: "You stay private, they stay compliant. Proofs are reusable anywhere on Valyd — validate once, use everywhere, and revoke anytime."
  }, {
    number: "4️⃣",
    icon: Globe,
    title: "Join the Real Network",
    action: "Log in, connect, hire, verify, and interact in an ecosystem of real users and verified businesses. Explore our Valyd ecosystem of social, messaging, gaming, storage and more! Always real.",
    result: "No bots. No fakes. Not just trust. Real human proof."
  }];
  return <section ref={sectionRef} className="py-20 px-[5%] bg-gradient-to-b from-black/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          
          
        </div>

        {/* Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-white font-bold text-xl md:text-2xl leading-relaxed">
            Every Valyd account comes with an AI and a private cloud.<br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              You control your data. You decide what's real.
            </span>
          </p>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden lg:block relative mb-16">
          {/* Connector Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--cyan))] via-[hsl(var(--purple))] to-[hsl(var(--cyan))]" />
          
          <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
            {steps.map((step, index) => <div key={index} className="flex-shrink-0 w-[280px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in hover:bg-white/10 transition-all duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.number} {step.title}
                  </h3>
                  
                  <div className="space-y-3 flex-grow">
                    <div className="text-left">
                      <p className="text-[hsl(var(--cyan))] text-sm font-medium mb-1">Action:</p>
                      <p className="text-white/70 text-sm">{step.action}</p>
                    </div>
                    
                    <div className="text-left">
                      <p className="text-[hsl(var(--purple))] text-sm font-medium mb-1">Result:</p>
                      <p className="text-white/70 text-sm">{step.result}</p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-6 mb-16">
          {steps.map((step, index) => <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.number} {step.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div>
                      <p className="text-[hsl(var(--cyan))] text-sm font-medium mb-1">Action:</p>
                      <p className="text-white/70 text-sm">{step.action}</p>
                    </div>
                    
                    <div>
                      <p className="text-[hsl(var(--purple))] text-sm font-medium mb-1">Result:</p>
                      <p className="text-white/70 text-sm">{step.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
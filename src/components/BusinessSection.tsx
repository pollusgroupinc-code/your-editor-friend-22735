import { Button } from "./ui/button";

const proofTypes = [
  { icon: "✓", label: "Real Humans", description: "Just a selfie proves humanity with minimal friction." },
  { icon: "🎂", label: "Age", description: "Over under, allowed restricted, age gate accordingly and privately." },
  { icon: "📜", label: "Credentials", description: "Healthcare: Patient & Provider ID, loans, credit score, deeds, upload any verifiable credential or document to verify along with any professional credential." },
  { icon: "⚖️", label: "KYC/AML", description: "Comprehensive identity verification for regulatory compliance and anti-money laundering requirements." },
  { icon: "💼", label: "Accredited Investors", description: "Verify investor accreditation status privately without exposing sensitive financial information." },
  { icon: "🏛️", label: "Citizenship", description: "Confirm citizenship and residency status with government-verified documentation." },
  { icon: "💼", label: "Employment", description: "Verify employment history, professional experience, and current job status." },
  { icon: "➕", label: "Custom", description: "Create any custom proof template tailored to your specific business verification needs." },
];

const businessFeatures = [
  {
    icon: "💾",
    title: "No PII Storage",
    description: "You never store user data. Not a ransomware target. Zero breach liability.",
  },
  {
    icon: "⚡",
    title: "Instant Verification",
    description: "Sub-60 second verification. Zero friction for users. Instant compliance.",
  },
  {
    icon: "🤖",
    title: "Stop Bots & Fraud",
    description: "Biometric lock means one person = one account. Mathematically impossible to fake.",
  },
  {
    icon: "⚖️",
    title: "Compliant by Design",
    description: "GDPR, CCPA, KYC, AML—all handled. Government-verified data. Audit-ready.",
  },
  {
    icon: "🔧",
    title: "API Integration",
    description: "Live in days, not months. RESTful API. Complete documentation.",
  },
  {
    icon: "📊",
    title: "Pay Per Verification",
    description: "No platform fees. Scale as you grow. Simple, transparent pricing.",
  },
];

export const BusinessSection = () => {
  return (
    <section className="py-32 px-[5%] relative bg-[hsl(var(--cyan))]/5" id="business">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white to-[hsl(var(--cyan))] bg-clip-text text-transparent">
        For Businesses: Same Network, More Power
      </h2>
      <p className="text-center text-white/60 text-xl mb-16 max-w-3xl mx-auto">
        Create a business account. Add multiple team members. Request custom proofs.
      </p>

      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-white/5 border-2 border-[hsl(var(--purple))]/30 rounded-[20px] p-12">
          <h3 className="text-[hsl(var(--purple))] text-3xl mb-6 text-center">
            How Business Accounts Work
          </h3>
          <p className="text-white/85 text-lg leading-relaxed text-center mb-12">
            It's the same as personal accounts, with three key differences: you need an EIN, you can add multiple team members' faces, and you can create custom proof templates to request specific data from users—without ever seeing their raw information.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-[hsl(var(--purple))]/10 rounded-2xl">
              <div className="text-5xl mb-4">🏢</div>
              <h4 className="text-[hsl(var(--purple))] text-xl font-semibold mb-4">Needs EIN</h4>
              <p className="text-white/80 leading-relaxed">Business accounts require an Employer Identification Number for verification.</p>
            </div>
            <div className="text-center p-8 bg-[hsl(var(--purple))]/10 rounded-2xl">
              <div className="text-5xl mb-4">👥</div>
              <h4 className="text-[hsl(var(--purple))] text-xl font-semibold mb-4">Multiple Faces</h4>
              <p className="text-white/80 leading-relaxed">Add team members to your account. Each authorized face can access the business agent.</p>
            </div>
            <div className="text-center p-8 bg-[hsl(var(--purple))]/10 rounded-2xl">
              <div className="text-5xl mb-4">📋</div>
              <h4 className="text-[hsl(var(--purple))] text-xl font-semibold mb-4">Custom Proofs</h4>
              <p className="text-white/80 leading-relaxed">Create proof templates to request any data you need from users compliantly.</p>
            </div>
          </div>

          <div className="bg-[hsl(var(--cyan))]/10 rounded-2xl p-10">
            <h4 className="text-[hsl(var(--cyan))] text-2xl mb-8 text-center">Create Custom Proof Templates</h4>
            <p className="text-white/85 text-lg leading-relaxed text-center mb-8">
              Need to verify age? Use an age proof. Need to verify a credential we don't have? Easily create a proof template. Users share the proof with your business—you verify it instantly—without ever seeing their raw data. They stay private. You stay compliant.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {proofTypes.map((proof, i) => (
                <div key={i} className="group text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl mb-2 group-hover:text-xl transition-all duration-300">{proof.icon}</div>
                  <p className="text-white text-sm font-semibold mb-2">{proof.label}</p>
                  <p className="text-white/70 text-xs leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 overflow-hidden">
                    {proof.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-white/5 border-2 border-[hsl(var(--cyan))]/30 rounded-[20px] p-12">
          <h3 className="text-[hsl(var(--cyan))] text-3xl mb-8 text-center">Why Businesses Join Valyd Network</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {businessFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-4xl min-w-[40px]">{feature.icon}</span>
                <div>
                  <h4 className="text-white text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full text-lg px-14 py-6 border-[hsl(var(--cyan))] text-[hsl(var(--cyan))] hover:bg-[hsl(var(--cyan))]/10"
        >
          Create Business Account
        </Button>
        <p className="text-white/60 mt-4 text-lg">Join Valyd Network. API integration in days.</p>
      </div>
    </section>
  );
};

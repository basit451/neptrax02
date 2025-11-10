import {
  Globe,
  User,
  Search,
  TrendingUp,
  Megaphone,
  Briefcase,
  Zap
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function MissionSection() {
  const features = [
    {
      icon: Briefcase,
      title: 'Business Website',
      description: 'Professional sites that showcase your services and convert visitors into customers.',
      image: '/portfolio/wildebrands.png',
    },
    {
      icon: User,
      title: 'Personal Portfolio',
      description: 'Stand out with a stunning portfolio that highlights your work and personal brand.',
      image: '/portfolio/rothys.png',
    },
    {
      icon: Search,
      title: 'On-Page SEO',
      description: 'Optimize every element to rank higher and attract the right audience organically.',
      image: '/portfolio/sweeten.png',
    },
    {
      icon: TrendingUp,
      title: 'SEO Audit & Strategy',
      description: 'Deep analysis and actionable insights to dominate search results in your niche.',
      image: '/portfolio/jeton.png',
    },
    {
      icon: Megaphone,
      title: 'Marketing Website',
      description: 'High-converting landing pages designed to capture leads and drive sales.',
      image: '/portfolio/sono.png',
    },
    {
      icon: Globe,
      title: 'Brand Endorsement',
      description: 'Build trust and credibility with a digital presence that speaks to your values.',
      image: '/portfolio/sweeten.png',
    },
  ];

  const benefits = [
    {
      title: 'Local Expertise',
      description: 'We know Canada\'s major markets thoroughly, understanding their unique business requirements.',
    },
    {
      title: 'Proven Results',
      description: 'Our clients have seen real success in website traffic, potential leads, and yearly revenue.',
    },
    {
      title: 'Customized Solutions',
      description: 'We create personalized strategies because we think outside the box.',
    },
    {
      title: 'Transparent Communication',
      description: 'You\'ll get clear updates, and we\'ll collaborate every step of the way.',
    },
    {
      title: 'Affordable Excellence',
      description: 'Our competitive pricing ensures you get outstanding value without compromising quality.',
    },
    {
      title: 'Comprehensive Services',
      description: 'We offer everything from web development to social media management.',
    },
  ];

  return (
    <section className="bg-[#28282B] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                We design experiences that drive results — smarter interfaces, seamless journeys and outcomes that speak themselves.
              </h2>

              <div className="bg-[#1e293b]/50 rounded-2xl p-8 mb-8 border border-white/10">
                <p className="text-white text-lg italic mb-4">
                  "Working with Neptrax was a game-changer. The site looks sharp, runs smooth, and made our online presence feel truly professional."
                </p>
                <p className="text-[#94a3b8] text-sm">
                  — Ethan Fraser, Founder at TechNest
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">92%</div>
                  <div className="text-white/80 text-sm">Client Retention</div>
                </div>
                <div className="bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">30+</div>
                  <div className="text-white/80 text-sm">Projects Delivered with Excellence</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                <img
                  src="/portfolio/jeton.png"
                  alt="Jeton Project"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent mb-4">
              Website management that's actually enjoyable.
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Effortlessly manage content, collaborate with clarity, and navigate your website needs with workflows shaped for you and your team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-[#1e293b]/50 rounded-2xl p-6 hover:bg-[#1e3a8a]/30 transition-all border border-white/10 hover:border-[#2563eb]/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">{feature.description}</p>
                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Why Choose Neptrax?
            </h2>
            <p className="text-white/80 text-lg text-center mb-12">
              Why should you go with Neptrax for your web needs?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 80} direction="up">
                  <div className="bg-[#1e293b]/50 rounded-xl p-6 border border-white/10 hover:border-[#2563eb]/50 transition-all">
                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center py-20 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-[#2563eb] rounded-full blur-[100px] opacity-30"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-6">
                Magnified Outcomes.
              </h2>
              <h3 className="text-3xl font-bold text-white mb-8">
                Fast, Functional, Future-Ready.
              </h3>

              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Zap
                    size={120}
                    className="text-[#2563eb] animate-pulse"
                    strokeWidth={2}
                  />
                  <div className="absolute inset-0 blur-xl bg-[#2563eb]/50"></div>
                </div>
              </div>

              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                From building responsive layouts to setting up SEO foundations, we streamline your entire web presence.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
            <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)]">
              <img
                src="/portfolio/rothys.png"
                alt="About Neptrax"
                className="w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                About Neptrax
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Throughout the US, we build websites, boost rankings, and manage your socials so you don't have to. Our solutions are affordable, our support is solid, and yes — we actually answer emails. Whether you're just starting out or upgrading your digital game, Neptrax is the partner that gets things done (without the fluff).
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

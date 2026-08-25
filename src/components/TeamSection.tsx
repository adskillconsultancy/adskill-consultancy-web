"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState, ElementType } from "react";

export const teamMembers = [
  {
    id: 1,
    name: "Adil Mohammad",
    role: "Founder, AdSkill Consultancy Inc.",
    description: "U.S. Business & Investment Advisor | Supporting Entrepreneurship, Small Business Growth & Foreign Investment in the United States",
    image: "/founder iamge.png",
    linkedin: "https://www.linkedin.com/in/adiiladnaan/",
  },
  {
    id: 2,
    name: "Jacob Jones",
    role: "Manager",
    description: "Experienced manager leading cross-functional teams to deliver impactful business solutions globally.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Kristin Watson",
    role: "Consultant",
    description: "Expert consultant specializing in market analysis, business strategy, and client relations for rapid growth.",
    image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Bessie Cooper",
    role: "Founder",
    description: "Visionary founder driving innovation and strategic direction to achieve sustainable business success.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
];

const IconFacebook = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconInstagram = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const IconLinkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SocialIcon = ({ Icon, href = "#", ariaLabel }: { Icon: ElementType, href?: string, ariaLabel?: string }) => (
  <a 
    href={href}
    target={href !== "#" ? "_blank" : undefined}
    rel={href !== "#" ? "noopener noreferrer" : undefined}
    aria-label={ariaLabel || "Social Media Profile"}
    className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors shadow-md"
  >
    <Icon size={18} />
  </a>
);

const BehanceIcon = ({ ariaLabel }: { ariaLabel?: string }) => (
  <a 
    href="#"
    aria-label={ariaLabel || "Behance Profile"}
    className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors shadow-md"
  >
    <span className="font-bold text-[15px] leading-none">Bē</span>
  </a>
);

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
}

export const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="relative rounded-[20px] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="relative h-80 w-full overflow-hidden bg-gray-50">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top"
        />
        {/* Active Overlay Gradient */}
        <div 
          className={`absolute inset-0 bg-linear-to-t from-brand-primary/90 to-brand-primary/10 mix-blend-multiply transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Social Icons (vertical stack) */}
        <div 
          className={`absolute right-5.5 bottom-12 flex flex-col gap-3 transition-all duration-500 z-20 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
        >
          <div style={{ transitionDelay: isActive ? '150ms' : '0ms' }} className="transition-all duration-300"><SocialIcon Icon={IconFacebook} ariaLabel={`${member.name} Facebook Profile`} /></div>
          <div style={{ transitionDelay: isActive ? '100ms' : '0ms' }} className="transition-all duration-300"><SocialIcon Icon={IconInstagram} ariaLabel={`${member.name} Instagram Profile`} /></div>
          <div style={{ transitionDelay: isActive ? '50ms' : '0ms' }} className="transition-all duration-300"><SocialIcon Icon={IconLinkedin} href={member.linkedin} ariaLabel={`${member.name} LinkedIn Profile`} /></div>
          <div style={{ transitionDelay: isActive ? '0ms' : '0ms' }} className="transition-all duration-300"><BehanceIcon ariaLabel={`${member.name} Behance Profile`} /></div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsActive(!isActive)}
        aria-label={isActive ? `Hide ${member.name} social links` : `Show ${member.name} social links`}
        className={`absolute right-5 top-74 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 z-30 shadow-lg ${isActive ? 'bg-brand-primary text-brand-dark rotate-45' : 'bg-brand-dark text-white rotate-0'}`}
      >
        <Plus size={24} />
      </button>

      {/* Bottom Text Content */}
      <div 
        className={`pt-8 pb-7 px-7 transition-colors duration-500 grow rounded-b-[20px] relative z-10 ${isActive ? 'bg-brand-dark' : 'bg-[#f8f9fa]'}`}
      >
        <h3 className={`text-xl font-bold mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-brand-dark'}`}>
          {member.name}
        </h3>
        <p className={`text-sm font-semibold transition-colors duration-500 ${isActive ? 'text-gray-300' : 'text-gray-700'}`}>
          {member.role}
        </p>
        {member.description && (
          <p className={`mt-3 text-xs leading-relaxed transition-colors duration-500 ${isActive ? 'text-gray-400' : 'text-gray-600'}`}>
            {member.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4 animate-float-y">
            Top Consultant
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-brand-dark leading-[1.2]">
            Enhance Your Experience with <br/>
            <span className="text-brand-primary">Expert Consulting</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

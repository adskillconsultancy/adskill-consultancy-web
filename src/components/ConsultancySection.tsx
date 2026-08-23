import { Lightbulb, PenTool } from "lucide-react";
import Link from "next/link";

export default function ConsultancySection() {
  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Images */}
          <div className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center lg:justify-start">
            
            {/* Main Image */}
            <div className="absolute left-0 top-0 w-[80%] md:w-[75%] h-[80%] md:h-[85%] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white bg-gray-100 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Business Discussion"
                className="object-cover w-full h-full"
              />
              {/* Dark slide-down overlay on hover/click */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 -translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </div>

            {/* Smaller overlapping Image */}
            <div className="absolute right-0 bottom-0 w-[60%] md:w-[50%] h-[45%] md:h-[50%] rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-white bg-gray-100 animate-float-y group cursor-pointer" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
                alt="Working Woman"
                className="object-cover w-full h-full"
              />
              {/* Dark slide-down overlay on hover/click */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 -translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </div>

            {/* Skilled Team Badge */}
            <div className="absolute bottom-[20%] md:bottom-[25%] left-[25%] md:left-[35%] z-30 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 flex flex-col gap-2 animate-float-y hover:-translate-y-2 transition-transform cursor-default" style={{ animationDelay: '0.8s' }}>
              <p className="text-sm font-bold text-brand-dark text-center">Skilled Team</p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-sm">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i * 15}`} 
                      alt="Team Member" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-primary/20 text-brand-dark flex items-center justify-center text-[10px] font-bold shadow-sm z-10">
                  9+
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Content */}
          <div className="max-w-xl">
            <div className="inline-block px-5 py-1.5 rounded-full bg-brand-primary/20 mb-4">
              <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                CONSULTANCY
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-dark leading-[1.2] mb-4">
              The Journey Behind Our Business Success
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Adskill is your trusted partner for visa and immigration consultancy, providing expert guidance and personalized solutions to help you navigate global opportunities seamlessly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Lightbulb size={32} strokeWidth={1.5} className="text-brand-dark" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-3">Tailored Guidance</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Every immigration journey is unique. We provide personalized strategies tailored to your specific visa requirements and goals.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <PenTool size={32} strokeWidth={1.5} className="text-brand-dark" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-3">Proven Expertise</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">With a high success rate and deep understanding of immigration laws, we ensure a smooth and hassle-free visa application process.</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-brand-dark">Business Success</span>
                {/* <span className="font-bold text-brand-dark">85%</span> */}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-brand-teal h-1.5 rounded-full relative" style={{ width: '75%' }}>
                   {/* Optional thumb */}
                   {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#2c5a58] rounded-full"></div> */}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 h-[50px] rounded bg-brand-teal text-white font-semibold hover:bg-brand-dark transition-colors shadow-md"
              >
                Find Services
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                  <img src="https://i.pravatar.cc/100?img=11" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-xl text-brand-dark" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Michel Devid</p>
                  <p className="text-xs text-brand-primary font-semibold mt-0.5">Founder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import { getService, services } from "@/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, Info } from "lucide-react";

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  // Await the params before using them
  return params.then(({ id }) => {
    const service = getService(id);
    if (!service) return { title: "Service Not Found" };
    return {
      title: `${service.title} | Adskill Consultancy`,
      description: service.overview.substring(0, 160),
    };
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params
  const { id } = await params;
  const service = getService(id);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-brand-dark text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-brand-secondary hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Back to All Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light border-l-4 border-brand-secondary pl-4">
              {service.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Info className="text-brand-secondary" size={24} /> Overview
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.overview}
            </p>
          </section>

          {service.benefits.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-brand-secondary shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.eligibility.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Eligibility Requirements</h2>
              <div className="space-y-6">
                {service.eligibility.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 text-brand-secondary flex items-center justify-center font-bold border border-gray-100">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.process.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">The Process</h2>
              <div className="relative border-l-2 border-gray-100 ml-4 space-y-8">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-brand-secondary text-white flex items-center justify-center text-sm font-bold ring-4 ring-white">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Quick Facts</h3>
            <ul className="space-y-4 mb-8">
              {Object.entries(service.quick_facts).map(([key, value], idx) => (
                <li key={idx}>
                  <span className="block text-sm font-medium text-gray-500 mb-1">{key}</span>
                  <span className="block text-gray-900 font-semibold">{value}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="/contact"
              className="flex items-center justify-center w-full py-4 rounded-lg bg-brand-secondary text-white font-bold hover:opacity-90 transition-colors shadow-sm"
            >
              Consult with an Expert
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

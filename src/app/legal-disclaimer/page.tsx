export default function LegalDisclaimer() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-brand-dark mb-8">Legal Disclaimer</h1>
        
        <div className="prose prose-lg text-gray-600 prose-headings:text-brand-dark max-w-none">
          <div className="bg-brand-primary/10 border border-brand-primary/20 p-6 rounded-xl mb-8">
            <p className="font-bold text-brand-dark m-0">
              AdSkill Consultancy Inc. is not a law firm and does not provide legal advice. We coordinate petition preparation services in collaboration with independent licensed immigration attorneys.
            </p>
          </div>
          
          <h2>General Information Purposes Only</h2>
          <p>
            The information provided on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
          
          <h2>Not Legal Advice</h2>
          <p>
            The content on this website should not be construed as legal advice on any subject matter. No recipient of content from this site, client or otherwise, should act or refrain from acting on the basis of any content included in the site without seeking the appropriate legal or other professional advice on the particular facts and circumstances at issue from an attorney licensed in the recipient's state.
          </p>

          <h2>Professional Representation</h2>
          <p>
            While AdSkill Consultancy Inc. assists clients in preparing documents and developing immigration strategies, any legal representation or advice is strictly provided by independent, licensed attorneys who represent the clients directly. We act as consultants and facilitators to streamline the process.
          </p>
        </div>
      </div>
    </main>
  );
}

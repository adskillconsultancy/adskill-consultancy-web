export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  faqs: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "eb-1a",
    title: "EB-1A (Extraordinary Ability)",
    faqs: [
      { id: "1", question: "What qualifies someone for the EB-1A visa?", answer: "Individuals with internationally recognized achievements in science, arts, business, sports, academics, etc." },
      { id: "2", question: "Do I need a job offer for EB-1A?", answer: "No — EB-1A does not require any employer or job offer." },
      { id: "3", question: "What kind of achievements are required?", answer: "Awards, publications, media features, international recognition, or high industry impact." },
      { id: "4", question: "Can artists or athletes apply for EB-1A?", answer: "Yes — artists, athletes, researchers, entrepreneurs, etc., are strongly eligible." },
      { id: "5", question: "How long does EB-1A approval take?", answer: "Typically 6–12 months, faster with premium processing (15 days)." }
    ]
  },
  {
    id: "eb-2-niw",
    title: "EB-2 NIW (National Interest Waiver)",
    faqs: [
      { id: "6", question: "What is the biggest advantage of the NIW category?", answer: "You can apply without employer or job offer — based on your value to the U.S." },
      { id: "7", question: "Do I need an employer or sponsor for NIW?", answer: "No — you can self-petition." },
      { id: "8", question: "Who is considered eligible for NIW?", answer: "Professionals with advanced degrees, research contributions, innovations, or public impact." },
      { id: "9", question: "What makes a strong NIW petition?", answer: "Proof that your work benefits the U.S. economy, health, technology, or national interest." },
      { id: "10", question: "Can I apply for EB-2 NIW from outside the U.S.?", answer: "Yes — NIW can be applied from any country." }
    ]
  },
  {
    id: "eb-3",
    title: "EB-3 (Skilled, Professional & Unskilled)",
    faqs: [
      { id: "11", question: "What are the job categories under EB-3?", answer: "Skilled workers, degree professionals, and entry-level/unskilled workers." },
      { id: "12", question: "Does EB-3 require an employer sponsor?", answer: "Yes — a U.S. employer must offer you a full-time job." },
      { id: "13", question: "How long does the EB-3 process take?", answer: "Usually 3–6 years, depending on country quota." },
      { id: "14", question: "Can unskilled workers apply for EB-3?", answer: "Yes — if the job does not require higher education or training." },
      { id: "15", question: "Is EB-3 better than student visa options?", answer: "Yes — EB-3 leads to direct Green Card, no study or work limits." }
    ]
  },
  {
    id: "eb-4",
    title: "EB-4 (Special Immigrants)",
    faqs: [
      { id: "16", question: "Who is eligible under the EB-4 category?", answer: "Religious workers, broadcasters, certain employees, special immigrants." },
      { id: "17", question: "Can religious workers apply under EB-4?", answer: "Yes — priests, pastors, and religious professionals are eligible." },
      { id: "18", question: "Does EB-4 offer permanent residency?", answer: "Yes — EB-4 directly leads to U.S. Green Card." },
      { id: "19", question: "Are dependents allowed under EB-4?", answer: "Yes — spouse and unmarried children under 21 are eligible." },
      { id: "20", question: "What is the processing time for EB-4?", answer: "Typically 12–24 months." }
    ]
  },
  {
    id: "eb-5",
    title: "EB-5 Investor Visa",
    faqs: [
      { id: "21", question: "What is the minimum investment for EB-5?", answer: "$800,000 in a TEA (job-creation zone) or $1,050,000 in regular projects." },
      { id: "22", question: "Does EB-5 guarantee a Green Card?", answer: "Yes — if 10 U.S. jobs are created, approval is strong." },
      { id: "23", question: "Can I invest in my own business?", answer: "Yes — as long as it is a U.S. job-creating enterprise." },
      { id: "24", question: "How long does EB-5 approval take?", answer: "Generally 2–5 years, depending on USCIS and country backlog." },
      { id: "25", question: "Can my spouse and children move with me?", answer: "Yes — EB-5 Green Card includes family (spouse + children)." }
    ]
  },
  {
    id: "e-2",
    title: "E-2 Investor Visa",
    faqs: [
      { id: "26", question: "What is the minimum investment for E-2?", answer: "No fixed rule — typically $100K–$200K USD is considered reasonable." },
      { id: "27", question: "Can I bring my family under E-2?", answer: "Yes — spouse and children under 21 get full legal status." },
      { id: "28", question: "Is the E-2 visa a path to Green Card?", answer: "Not direct — but can be converted later via EB-5 or EB-1C." },
      { id: "29", question: "Do I need a U.S. partner or company?", answer: "No — you can start your own business 100% owned by you." },
      { id: "30", question: "How long is the E-2 visa valid?", answer: "Usually 2–5 years, renewable unlimited times." }
    ]
  },
  {
    id: "general",
    title: "General / All Services",
    faqs: [
      { id: "31", question: "What is the total cost including government fees?", answer: "It depends on the visa category — government fees are separate from consultancy charges and are paid directly to the U.S. government." },
      { id: "32", question: "Do I need to pay everything at once or in installments?", answer: "No — we offer flexible installment payment options, depending on your selected visa category and service plan." },
      { id: "33", question: "What happens if my visa application gets rejected?", answer: "We review the rejection reason, prepare a strong reapplication or appeal strategy, and guide you for correction and success." },
      { id: "34", question: "Is your consultancy legally registered and U.S. attorney connected?", answer: "Yes — we work with licensed U.S. immigration attorneys and former visa officers to ensure legal accuracy and professional service." },
      { id: "35", question: "Can I apply while staying outside the U.S.?", answer: "Yes — most visas can be applied from your home country through consular processing at the U.S. Embassy." },
      { id: "36", question: "Can I move with my family/spouse/children?", answer: "Yes — almost all employment and investor visa categories allow spouse and unmarried children under 21 to move with you." },
      { id: "37", question: "Do you provide full documentation and form filing support?", answer: "Yes — we handle complete paperwork, form filing, legal drafting, and submission guidance from start to end." },
      { id: "38", question: "How do I know which USA visa category is right for me?", answer: "We offer a free eligibility assessment call to determine the best and safest visa category based on your profile." },
      { id: "39", question: "Can you guarantee visa approval?", answer: "No — because the final decision is made only by the U.S. Embassy — but we maximize success chances with strong preparation and strategy." },
      { id: "40", question: "What is the next step after I book a consultation?", answer: "Our expert team will contact you, review your profile, and guide you step-by-step with the exact process, documents, and timeline." }
    ]
  }
];

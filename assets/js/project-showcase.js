(() => {
  const dialog = document.querySelector('.showcase-modal');
  if (!dialog) return;

  const projects = [
    {
      name: 'Explore Credit', url: 'https://www.explorecredit.com/', image: 'assets/images/exploreCredit.png', alt: 'Explore Credit website screenshot showing its loan application and product information', tag: 'Consumer finance', category: 'Financial products · BFSI',
      description: 'A borrower-facing credit experience within the HIVE financial services portfolio. The existing portfolio identifies Explore Credit among the loan and financial application journeys supported by the design work.',
      purpose: 'Support prospective borrowers exploring and applying for credit.', features: 'Credit and loan journeys; borrower-facing responsive interfaces and review steps, as documented in the portfolio.', role: 'Designed financial application journeys, user flows, responsive interfaces, review steps, and high-fidelity UI with product and engineering partners.', challenge: 'Make complex application requirements and review steps easier to follow; the resume also documents accessibility, usability, compliance, and process audits.'
    },
    {
      name: 'Clover Credit', url: 'https://www.clovercredit.com/', image: 'assets/images/cloverCredit.png', alt: 'Clover Credit website screenshot showing its loan information and application experience', tag: 'Consumer finance', category: 'Financial products · BFSI',
      description: 'Clover Credit offers online short-term installment loans. Its public website describes an online application, quick decisions, loan tracking and management, and customer support for prospective and existing borrowers.',
      purpose: 'Help consumers apply for short-term installment loans and understand the borrowing process.', features: 'Online application, loan progress and management, clear process information, and customer support.', role: 'Designed loan application journeys and borrower-facing responsive experiences as part of the HIVE financial services work.', challenge: 'Clarify requirements and review steps across financial journeys; portfolio experience also includes accessibility and usability audits.'
    },
    {
      name: 'Nora Credit', url: 'https://noracredit.com/', image: 'assets/images/noraCredit.png', alt: 'Nora Credit website screenshot describing its loan and repayment tools', tag: 'Consumer finance', category: 'Financial products · BFSI',
      description: 'Nora Credit is a consumer loan product. Its website emphasizes transparent repayment terms, support, and tools for viewing payment schedules, balances, and account preferences.',
      purpose: 'Serve borrowers seeking a loan and help customers understand and manage repayment.', features: 'Loan information, transparent terms, repayment schedules, payment reminders, balance tracking, and account settings as described on the public site.', role: 'Designed borrower-facing loan journeys and responsive application experiences within the HIVE financial services portfolio.', challenge: 'Present important financial information and process steps clearly; broader work included accessibility, usability, and compliance audits.'
    },
    {
      name: 'HIVE Financial Services', url: 'https://application.explorecredit.com/?ux=topapplylink&_gl=1*1khd3u7*_gcl_au*ODg1ODY3Nzg0LjE3ODk3NDE0MzQ.*_ga*MjA4NTMzMzYyNi4xNzY1MjgyNDUx*_ga_B5C98EGV0J*czE3OTI2NzY0MjkkbzMwJGcxJHQxNzkyNjc2NDY2JGoyMyRsMCRoMA..*_ga_F68ES34L9H*czE3OTI2NzY0MjkkbzI2JGcxJHQxNzkyNjc2NDY2JGoyMyRsMCRoMTI4NTg5NDg.', compactLink: true, image: 'assets/images/hive-financial-flow.svg', alt: 'HIVE financial services workflow diagram', tag: 'Enterprise workflows', category: 'Financial products · Enterprise UX',
      description: 'The portfolio describes HIVE Financial System and modules including Explore Credit, Clover Credit, Nora Credit, Jump Loans, Task Suite, and CSR Dashboard. The internal modules are not publicly detailed, so this overview reflects only that portfolio information.',
      purpose: 'Financial application and operational experiences for borrowers and internal service teams, as reflected in the named products and modules.', features: 'Credit and loan journeys, role-based workflows, review experiences, and operational dashboard work cited in the portfolio.', role: 'Created user flows, wireframes, interaction patterns, responsive layouts, high-fidelity UI, and reusable patterns with cross-functional partners.', challenge: 'Translate complex business requirements into understandable journeys and support accessibility, consistency, and implementation readiness.'
    },
    {
      name: 'CEVA Logistics · CJF', url: 'https://www.cevalogistics.com/en', image: 'assets/images/ceva-logistics-homepage.png', alt: 'CEVA Logistics website homepage', tag: 'Enterprise logistics', category: 'Enterprise application · UX/UI enhancement',
      description: 'CEVA Logistics provides global freight, contract logistics, and supply-chain services. Its public site helps business customers explore services, track shipments, request quotes, and access customer resources. CJF is the enterprise UI modernization work identified in the portfolio.',
      purpose: 'Support business customers exploring logistics services and the enterprise teams using the CJF application.', features: 'Public service discovery, tracking, quotes, and customer resources; the portfolio describes reusable UI patterns and responsive layouts for CJF.', role: 'Supported enterprise UI modernization, implementation reviews, reusable patterns, and UI guidance and training for teams.', challenge: 'Improve consistency and usability across responsive screens while helping engineering resolve UI issues and apply patterns.'
    },
    {
      name: 'Wright Maritime Group', url: 'https://www.wrightmaritime.com/', image: 'assets/images/wmg-homepage.png', alt: 'Wright Maritime Group website homepage', tag: 'Maritime', category: 'Web-enabled accounting · UX/UI',
      description: 'Wright Maritime Group provides large-yacht management and new-construction services. The portfolio separately describes UX/UI work on a web-enabled accounting and reporting application; the public company site does not expose that application.',
      purpose: 'Business-process screens for users of the accounting and reporting application; the public site serves WMG clients and prospective clients.', features: 'Accounting and reporting application screens, based on the portfolio description.', role: 'Designed responsive interfaces and business-process-oriented screens, translating approved concepts into usable experiences.', challenge: 'Make business processes legible in responsive screens and support iterative UI improvements.'
    },
    {
      name: 'Veritiv', url: 'https://www.veritiv.com/home', image: 'assets/images/veritiv-homepage.png', alt: 'Veritiv packaging and supply chain solutions website', tag: 'Business services', category: 'Packaging & supply chain · Product experience',
      description: 'Veritiv serves business customers with packaging, facility, and supply-chain solutions. Its website presents products, services, and information to support business customers exploring those offerings.',
      purpose: 'Help business customers discover packaging, facility, and supply-chain services.', features: 'Product discovery and service information, as described in the existing portfolio.', role: 'Contributed to the digital product experience; the portfolio does not specify individual deliverables or ownership.', challenge: 'Support clear discovery across a broad business offering; no measured outcomes are stated in the portfolio.'
    }
  ];

  const $ = (selector) => dialog.querySelector(selector);
  const fields = {
    title: $('#showcase-title'), description: $('#showcase-description'), image: $('.showcase-image'), imageLink: $('.showcase-image-link'),
    tag: $('.showcase-tag'), category: $('.showcase-category'), url: $('.showcase-url'), purpose: $('.showcase-purpose'),
    features: $('.showcase-features'), role: $('.showcase-role'), challenge: $('.showcase-challenge'), position: $('.showcase-position'), count: $('.showcase-count')
  };
  let index = 0;
  let returnFocus = null;

  function render() {
    const project = projects[index];
    fields.title.textContent = project.name;
    fields.description.textContent = project.description;
    fields.image.src = project.image;
    fields.image.alt = project.alt;
    fields.imageLink.href = project.url;
    fields.tag.textContent = project.tag;
    fields.category.textContent = project.category;
    fields.url.href = project.url;
    const website = new URL(project.url);
    fields.url.textContent = `${website.hostname}${website.pathname === '/' ? '' : website.pathname}`;
    fields.url.classList.toggle('showcase-url--compact', Boolean(project.compactLink));
    fields.purpose.textContent = project.purpose;
    fields.features.textContent = project.features;
    fields.role.textContent = project.role;
    fields.challenge.textContent = project.challenge;
    fields.position.textContent = `${index + 1} of ${projects.length}`;
    fields.count.textContent = `${projects.length} projects`;
  }

  function move(amount) {
    index = (index + amount + projects.length) % projects.length;
    render();
  }

  document.querySelectorAll('[data-showcase-open]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      returnFocus = event.currentTarget;
      index = 0;
      render();
      dialog.showModal();
      $('[data-showcase-close]').focus();
    });
  });
  $('[data-showcase-close]').addEventListener('click', () => dialog.close());
  $('[data-showcase-prev]').addEventListener('click', () => move(-1));
  $('[data-showcase-next]').addEventListener('click', () => move(1));
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => returnFocus?.focus());
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  });
})();

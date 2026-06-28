export default function ResumePage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans text-slate-800">

      {/* Header */}
      <header className="bg-teal-800 text-white px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-1">
            Ivelisse Feliciano Hernandez
          </h1>
          <p className="text-teal-200 text-sm uppercase tracking-widest mb-4 font-medium">
            Senior Network Pricing Consultant · Healthcare Analytics
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-teal-100">
            <a
              href="mailto:Ivelisse.Feliciano22@gmail.com"
              className="hover:text-white transition-colors"
            >
              Ivelisse.Feliciano22@gmail.com
            </a>
            <span>(813) 774-1741</span>
            <a
              href="https://www.linkedin.com/in/ivelisse-feliciano-hernandez-961412114"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Ivelisse-Feliciano"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left column */}
        <aside className="md:col-span-1 space-y-8">

          {/* Summary */}
          <section aria-labelledby="summary-heading">
            <h2
              id="summary-heading"
              className="text-xs font-semibold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3"
            >
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Results-driven healthcare analytics and network pricing professional with 14+ years of experience leading cross-functional initiatives, driving strategic decision-making, and delivering data-driven solutions within managed care. Expertise in network pricing, business analysis, stakeholder engagement, and regulatory compliance.
            </p>
          </section>

          {/* Skills */}
          <section aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="text-xs font-semibold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3"
            >
              Technical Skills
            </h2>
            <ul className="flex flex-wrap gap-2">
              {[
                "SQL",
                "SQL Server Management Studio",
                "SAS",
                "Advanced Excel",
                "Access",
                "PowerPoint",
                "Word",
                "Outlook",
                "Quest Analytics",
                "Geo Networks",
                "Financial Modeling",
                "Reporting & Dashboards",
                "Data Analysis",
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded border border-teal-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* Leadership & Business Skills */}
          <section aria-labelledby="business-skills-heading">
            <h2
              id="business-skills-heading"
              className="text-xs font-semibold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3"
            >
              Leadership &amp; Business
            </h2>
            <ul className="flex flex-wrap gap-2">
              {[
                "Team Leadership",
                "Stakeholder Management",
                "Executive Presentations",
                "Strategic Planning",
                "Business Analysis",
                "Project Coordination",
                "Change Management",
                "Process Improvement",
                "Training & Mentoring",
                "Regulatory Compliance",
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded border border-slate-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section aria-labelledby="education-heading">
            <h2
              id="education-heading"
              className="text-xs font-semibold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3"
            >
              Education
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-slate-800 leading-snug">
                  B.S. Business Analytics &amp; Information Systems
                </p>
                <p className="text-slate-500">University of South Florida</p>
                <p className="text-teal-600 text-xs mt-0.5">Expected Spring 2027</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 leading-snug">
                  A.A. Business Administration
                </p>
                <p className="text-slate-500">Hillsborough Community College</p>
                <p className="text-teal-600 text-xs mt-0.5">2017</p>
              </div>
            </div>
          </section>

        </aside>

        {/* Right column — Experience */}
        <section
          aria-labelledby="experience-heading"
          className="md:col-span-2 space-y-8"
        >
          <h2
            id="experience-heading"
            className="text-xs font-semibold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1"
          >
            Professional Experience
          </h2>

          {/* Job 1 */}
          <article>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="text-base font-semibold text-slate-800">
                Senior Network Pricing Consultant
              </h3>
              <span className="text-xs text-slate-400 whitespace-nowrap mt-0.5 sm:mt-0">
                Aug 2022 – Present
              </span>
            </div>
            <p className="text-sm font-medium text-teal-700 mb-2">UnitedHealthcare</p>
            <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-outside pl-4">
              <li>Partner with senior leaders and stakeholders to deliver analytics solutions supporting strategic business decisions and network affordability initiatives.</li>
              <li>Monitor unit cost trends and identify opportunities to improve financial performance and affordability.</li>
              <li>Perform complex analyses using multiple data sources and develop actionable recommendations.</li>
              <li>Lead cross-functional collaboration across multiple business units to drive pricing strategy and reporting enhancements.</li>
              <li>Support budget forecasting, target setting, performance reporting, and financial modeling.</li>
              <li>Build strong relationships with stakeholders and influence strategic decisions across the organization.</li>
            </ul>
          </article>

          {/* Job 2 */}
          <article>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="text-base font-semibold text-slate-800">
                Data and Reporting Analyst II
              </h3>
              <span className="text-xs text-slate-400 whitespace-nowrap mt-0.5 sm:mt-0">
                Jun 2020 – Aug 2022
              </span>
            </div>
            <p className="text-sm font-medium text-teal-700 mb-2">Humana</p>
            <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-outside pl-4">
              <li>Developed and maintained reporting solutions and ad hoc analyses in compliance with state contractual requirements.</li>
              <li>Analyzed data trends and delivered executive-level presentations to support business decisions.</li>
              <li>Served as a trusted advisor to Directors and senior leaders on complex technical and business initiatives.</li>
              <li>Identified growth opportunities through competitive analysis and contract review.</li>
              <li>Led data integrity initiatives that improved reporting quality, compliance, and decision-making.</li>
            </ul>
          </article>

          {/* Job 3 */}
          <article>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="text-base font-semibold text-slate-800">
                Senior Business Analyst
              </h3>
              <span className="text-xs text-slate-400 whitespace-nowrap mt-0.5 sm:mt-0">
                Nov 2011 – Jun 2020
              </span>
            </div>
            <p className="text-sm font-medium text-teal-700 mb-2">Centene / WellCare</p>
            <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-outside pl-4">
              <li>Developed ad hoc reports and network analyses using Quest Analytics and Geo Networks software.</li>
              <li>Analyzed state contracts and Medicaid RFPs to recommend operational improvements and business strategies.</li>
              <li>Led stakeholder meetings and executive presentations to communicate strategic recommendations and regulatory requirements.</li>
              <li>Managed and mentored analysts and operational teams responsible for contract loading and implementation.</li>
              <li>Supported network expansion initiatives, dashboards, regulatory submissions, and reporting.</li>
            </ul>
          </article>

          {/* Job 4 */}
          <article>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="text-base font-semibold text-slate-800">
                Configuration Analyst
              </h3>
            </div>
            <p className="text-sm font-medium text-teal-700 mb-2">Centene / WellCare</p>
            <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-outside pl-4">
              <li>Built and tested provider contract pricing structures and fee schedules in compliance with state and federal requirements.</li>
              <li>Resolved complex claim pricing issues while ensuring contractual and regulatory compliance.</li>
              <li>Collaborated with business and technical teams to improve claims adjudication processes.</li>
            </ul>
          </article>

          {/* Leadership */}
          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-4">
              Additional Leadership
            </h2>
            <article>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-base font-semibold text-slate-800">
                  Event Coordinator
                </h3>
              </div>
              <p className="text-sm font-medium text-teal-700 mb-2">
                Abundant Love Worship Center
              </p>
              <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-outside pl-4">
                <li>Lead planning and execution of large-scale conferences, youth camps, outreach programs, and church events.</li>
                <li>Coordinate volunteers, budgets, logistics, communications, and vendor relationships.</li>
                <li>Manage project timelines and stakeholder communications to ensure successful event delivery.</li>
                <li>Lead teams of volunteers and ministry leaders across multiple initiatives.</li>
              </ul>
            </article>
          </div>

        </section>
      </div>

      <footer className="bg-teal-800 text-teal-200 text-center text-xs py-4 mt-4">
        Ivelisse Feliciano Hernandez · (813) 774-1741 · Ivelisse.Feliciano22@gmail.com
      </footer>

    </main>
  );
}
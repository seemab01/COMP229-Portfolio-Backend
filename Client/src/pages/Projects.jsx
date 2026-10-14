// Projects page: three projects with an image, my role and the outcome
function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>

      <div className="cards">
        <div className="card">
          <img src="/images/project-1.svg" alt="Ledger and bank reconciliation" />
          <h3>General Ledger and Bank Reconciliation</h3>
          <p>Regular reconciliation of the general ledger, accounting transaction reports and bank statements at Sony Electronics, Pakistan (2014 - 2019).</p>
          <p><b>My role:</b> Senior Account Executive. I matched ledger entries to bank and transaction reports, authorized payments and calculated depreciation.</p>
          <p><b>Outcome:</b> Accurate and up to date accounts for the company's retail shops.</p>
        </div>

        <div className="card">
          <img src="/images/project-2.svg" alt="Internal audit and financial reporting" />
          <h3>Internal Audit and Financial Reporting</h3>
          <p>Prepared financial statements and audited company accounts and systems at Sony Electronics, Pakistan.</p>
          <p><b>My role:</b> I prepared profit and loss and cash flow statements, organized data for managers, ran internal audits and worked with the external auditors.</p>
          <p><b>Outcome:</b> Clear financial reports for managers and smooth coordination with external audits.</p>
        </div>

        <div className="card">
          <img src="/images/project-3.svg" alt="Personal portfolio website" />
          <h3>Personal Portfolio Website</h3>
          <p>This website! A six page portfolio built with React, React Router and CSS.</p>
          <p><b>My role:</b> Designer and developer</p>
          <p><b>Outcome:</b> A responsive site with a working contact form, hosted online.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects

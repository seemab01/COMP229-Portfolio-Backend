// Services page: the services I offer, each with a picture
function Services() {
  return (
    <div className="page">
      <h1>Services</h1>

      <div className="cards">
        <div className="card">
          <img src="/images/service-reconciliation.svg" alt="Reconciliation" />
          <h3>Ledger and Bank Reconciliation</h3>
          <p>Matching general ledger entries, transaction reports and bank statements to keep accounts accurate.</p>
        </div>

        <div className="card">
          <img src="/images/service-reporting.svg" alt="Financial reporting" />
          <h3>Financial Statements and Reporting</h3>
          <p>Profit and loss and cash flow statements, with data organized clearly for managers.</p>
        </div>

        <div className="card">
          <img src="/images/service-audit.svg" alt="Internal audit" />
          <h3>Internal Audit Support</h3>
          <p>Checking company accounts and systems, and coordinating with external auditors.</p>
        </div>

        <div className="card">
          <img src="/images/service-web.svg" alt="Web development" />
          <h3>Web Development</h3>
          <p>Simple, responsive websites made with HTML, CSS, JavaScript and React.</p>
        </div>

        <div className="card">
          <img src="/images/service-programming.svg" alt="Programming" />
          <h3>General Programming</h3>
          <p>Small programs and scripts that solve everyday problems.</p>
        </div>
      </div>
    </div>
  )
}

export default Services

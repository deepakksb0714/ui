// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Collapse } from 'react-bootstrap';

import '../style.css';

const Sidebar = () => {

  const [isTransactionsOpen, setIsTransactionsOpen] = useState(false);
  const [isExemptionsOpen, setIsExemptionsOpen] = useState(false);
  const [isTransactions1Open, setIsTransactions1Open] = useState(false);
  const [isExemptions1Open, setIsExemptions1Open] = useState(false);

  const [isTransactions2Open, setIsTransactions2Open] = useState(false);
  const [isExemptions2Open, setIsExemptions2Open] = useState(false);
  const [isTransactions3Open, setIsTransactions3Open] = useState(false);
  const [isExemptions3Open, setIsExemptions3Open] = useState(false);


 
  const handleTransactionClick = () => {
    setIsExemptionsOpen(false);
    setIsTransactionsOpen(!isTransactionsOpen);
    setIsExemptions1Open(false);
    setIsExemptions2Open(false);
    setIsExemptions3Open(false);
    setIsTransactions1Open(false)
    setIsTransactions2Open(false)
    setIsTransactions3Open(false)
    
  };
  const handleExemptionsClick = () => {
    setIsExemptionsOpen(!isExemptionsOpen);
    setIsTransactionsOpen(false);
    setIsExemptions1Open(false);
    setIsExemptions2Open(false);
    setIsExemptions3Open(false);
    setIsTransactions1Open(false)
    setIsTransactions2Open(false)
    setIsTransactions3Open(false)
    
  };
  const handleTransaction1Click = () => {
    setIsExemptionsOpen(false);
    setIsTransactionsOpen(false);
    setIsExemptions1Open(false);
    setIsExemptions2Open(false);
    setIsExemptions3Open(false);
    setIsTransactions1Open(!isTransactions1Open)
    setIsTransactions2Open(false)
    setIsTransactions3Open(false)
    
  };
  const handleExemptions1Click = () => {
    setIsExemptionsOpen(false);
    setIsTransactionsOpen(false);
    setIsExemptions1Open(!isExemptions1Open);
    setIsExemptions2Open(false);
    setIsExemptions3Open(false);
    setIsTransactions1Open(false)
    setIsTransactions2Open(false)
    setIsTransactions3Open(false)
    
  };
  const handleTransaction2Click = () => {
    setIsExemptionsOpen(false);
    setIsTransactionsOpen(false);
    setIsExemptions1Open(false);
    setIsExemptions2Open(false);
    setIsExemptions3Open(false);
    setIsTransactions1Open(false)
    setIsTransactions2Open(!isTransactions2Open)
    setIsTransactions3Open(false)
    
  };
  const handleExemptions2Click = () => {
    setIsExemptionsOpen(false);
    setIsTransactionsOpen(false);
    setIsExemptions1Open(false);
    setIsExemptions2Open(!isExemptions2Open);
    setIsExemptions3Open(false);
    setIsTransactions1Open(false)
    setIsTransactions2Open(false)
    setIsTransactions3Open(false)
    
  };
  const handleTransaction3Click = () => {
    setIsExemptionsOpen(false);
    setIsTransactionsOpen(false);
    setIsExemptions1Open(false);
    setIsExemptions2Open(false);
    setIsExemptions3Open(false);
    setIsTransactions1Open(false)
    setIsTransactions2Open(false)
    setIsTransactions3Open(!isTransactions3Open)
    
  };
  const handleExemptions3Click = () => {
    setIsExemptionsOpen(false);
    setIsTransactionsOpen(false);
    setIsExemptions1Open(false);
    setIsExemptions2Open(false);
    setIsExemptions3Open(!isExemptions3Open);
    setIsTransactions1Open(false)
    setIsTransactions2Open(false)
    setIsTransactions3Open(false)
    
  };
  return (
  
     
    <Nav className="flex-column sidenavbar" variant="pills" >
       <Nav.Item>
        <Nav.Link as={Link} to="#" onClick={handleTransaction1Click} className="menu-link">
        <h6>Home</h6>
        </Nav.Link>
        <Collapse in={isTransactions1Open}>
          <div className='menu-items'>
            <Nav.Link as={Link} to="/transactions/transactions" className="menu-link">
            Transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions/import transactions" className="menu-link">
            Import transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions/import transactions history" className="menu-link">
            Import transactions history
            </Nav.Link>
            <Nav.Link as={Link} to="/calculator"  className="menu-link">
            Tax calculator
            </Nav.Link>
           </div>
        </Collapse>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="#" onClick={handleTransactionClick} className="menu-link">
        <h6>Transactions</h6>
        </Nav.Link>
        <Collapse in={isTransactionsOpen}>
          <div className='menu-items'>
            <Nav.Link as={Link} to="/transactions/transactions" className="menu-link">
            Transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions/import transactions" className="menu-link">
            Import transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions/import transactions history" className="menu-link">
            Import transactions history
            </Nav.Link>
            <Nav.Link as={Link} to="/calculator"  className="menu-link">
            Tax calculator
            </Nav.Link>
           </div>
        </Collapse>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link as={Link} to="#" onClick={handleExemptionsClick} className="menu-link">
        <h6>Exemptions</h6>
        </Nav.Link>
        <Collapse in={isExemptionsOpen}>
          <div className='menu-items'>
            <Nav.Link as={Link} to="#" className="menu-link">
            Overview
            </Nav.Link>
            <Nav.Link as={Link} to="#" className="menu-link">
            Resources
            </Nav.Link>
            <Nav.Link as={Link} to="#" className="menu-link">
            Customers
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Incoming certificates to review
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Certificate requests
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Customer certificates
            </Nav.Link>
           </div>
        </Collapse>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link as={Link} to="#" onClick={handleExemptions1Click} className="menu-link">
        <h6>contact</h6>
        </Nav.Link>
        <Collapse in={isExemptions1Open}>
          <div className='menu-items'>
            <Nav.Link as={Link} to="#" className="menu-link">
            Overview
            </Nav.Link>
            <Nav.Link as={Link} to="#" className="menu-link">
            Resources
            </Nav.Link>
            <Nav.Link as={Link} to="#" className="menu-link">
            Customers
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Incoming certificates to review
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Certificate requests
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Customer certificates
            </Nav.Link>
           </div>
        </Collapse>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="#" onClick={handleTransaction2Click} className="menu-link">
        <h6>About</h6>
        </Nav.Link>
        <Collapse in={isTransactions2Open}>
          <div className='menu-items'>
            <Nav.Link as={Link} to="/transactions/transactions" className="menu-link">
            Transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions/import transactions" className="menu-link">
            Import transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions/import transactions history" className="menu-link">
            Import transactions history
            </Nav.Link>
            <Nav.Link as={Link} to="/calculator"  className="menu-link">
            Tax calculator
            </Nav.Link>
           </div>
        </Collapse>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link as={Link} to="#" onClick={handleExemptions2Click} className="menu-link">
        <h6>Career</h6>
        </Nav.Link>
        <Collapse in={isExemptions2Open}>
          <div className='menu-items'>
            <Nav.Link as={Link} to="#" className="menu-link">
            Overview
            </Nav.Link>
            <Nav.Link as={Link} to="#" className="menu-link">
            Resources
            </Nav.Link>
            <Nav.Link as={Link} to="#" className="menu-link">
            Customers
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Incoming certificates to review
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Certificate requests
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Customer certificates
            </Nav.Link>
           </div>
        </Collapse>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="#" onClick={handleTransaction3Click} className="menu-link">
        <h6>Company</h6>
        </Nav.Link>
        <Collapse in={isTransactions3Open}>
          <div className='menu-items'>
            <Nav.Link as={Link} to="/transactions/transactions" className="menu-link">
            Transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions/import transactions" className="menu-link">
            Import transactions
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions/import transactions history" className="menu-link">
            Import transactions history
            </Nav.Link>
            <Nav.Link as={Link} to="/calculator"  className="menu-link">
            Tax calculator
            </Nav.Link>
           </div>
        </Collapse>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link as={Link} to="#" onClick={handleExemptions3Click} className="menu-link">
        <h6>Tax</h6>
        </Nav.Link>
        <Collapse in={isExemptions3Open}>
          <div className='menu-items'>
            <Nav.Link as={Link} to="#" className="menu-link">
            Overview
            </Nav.Link>
            <Nav.Link as={Link} to="#" className="menu-link">
            Resources
            </Nav.Link>
            <Nav.Link as={Link} to="#" className="menu-link">
            Customers
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Incoming certificates to review
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Certificate requests
            </Nav.Link>
            <Nav.Link as={Link} to="#"  className="menu-link">
            Customer certificates
            </Nav.Link>
           </div>
        </Collapse>
      </Nav.Item>
      {/* Other Nav Items */}
     
    </Nav>
   
    
  );
};

export default Sidebar;

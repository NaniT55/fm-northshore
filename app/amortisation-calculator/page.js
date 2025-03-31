"use client";
import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import Layout from "@/components/layout/Layout";


export default function Service() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(5.0);
  const [loanTerm, setLoanTerm] = useState(30);
  const [showPopup, setShowPopup] = useState(false);
  const [amortizationData, setAmortizationData] = useState([]);

  const calculateMortgage = () => {
    const P = loanAmount - downPayment;
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    let balance = P;
    let data = [];
    
    let startDate = new Date(); // Get current date
  
    for (let i = 0; i < n; i++) {
      let interest = balance * r;
      let principal = monthlyPayment - interest;
      balance -= principal;
  
      let currentMonth = new Date(startDate);
      currentMonth.setMonth(startDate.getMonth() + i);
  
      let formattedDate = currentMonth.toLocaleString("default", { month: "short", year: "numeric" });
  
      data.push({
        date: formattedDate, // "Mar 2025" format
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance.toFixed(2),
      });
    }
  
    setAmortizationData(data);
    setShowPopup(true);
  };

  return (
    <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Amortisation Calculator">
      <div className="calculator-container">
        <div className="form-section">
          {/* <h2>Mortgage Calculator</h2> */}

          <label>Total Amount ($):</label>
          <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />

          <label>Down Payment ($):</label>
          <input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />

          <label>Interest Rate (%):</label>
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />

          <label>Loan Term (years):</label>
          <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />

          <button className="calculate-btn" onClick={calculateMortgage}>
            Calculate
          </button>
        </div>

        {showPopup && (
  <div className="overlay">
    <div className="popup">
      <button className="btn-close" onClick={() => setShowPopup(false)}>✖</button>
      <h2>Amortization Schedule</h2>

      <LineChart width={500} height={250} data={amortizationData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="balance" stroke="red" />
        <Line type="monotone" dataKey="principal" stroke="green" />
        <Line type="monotone" dataKey="interest" stroke="yellow" />
      </LineChart>

      <div className="table-container">
        <table>
        <thead>
          <tr>
            <th>Date</th> {/* Updated from "Year" */}
            <th>Principal</th>
            <th>Interest</th>
            <th>Balance</th>
          </tr>
        </thead>
          <tbody>
            {amortizationData.slice(0, 10).map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>${row.principal}</td>
                <td>${row.interest}</td>
                <td>${row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

{/* Move Disclaimer Below */}
{/* <div className="disclaimer">
  <p>
    <strong>DISCLAIMER:</strong> This calculator is provided by the contributor “as is” and any express or implied warranties, 
    including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. 
    In no event shall the contributor be liable for any direct, indirect, incidental, special, exemplary, or consequential damages.
  </p>
</div> */}
      </div>
    </Layout>
  );
}

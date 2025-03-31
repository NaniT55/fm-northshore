'use client'
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";

export default function RefinanceCalculator() {
  const [currentLoanAmount, setCurrentLoanAmount] = useState(500000);
  const [currentRate, setCurrentRate] = useState(5.0);
  const [remainingTerm, setRemainingTerm] = useState(20);
  const [newRate, setNewRate] = useState(4.0);
  const [newTerm, setNewTerm] = useState(20);
  const [loanType, setLoanType] = useState("principle_and_interest"); // New field
  const [savings, setSavings] = useState(null);

  const calculateSavings = () => {
    const P = parseFloat(currentLoanAmount);
    const oldR = parseFloat(currentRate) / 100 / 12;
    const oldN = remainingTerm * 12;
    const newR = parseFloat(newRate) / 100 / 12;
    const newN = newTerm * 12;

    let oldMonthlyPayment, newMonthlyPayment;

    if (loanType === "principle_and_interest") {
      // Monthly payment formula: M = P[r(1+r)^n] / [(1+r)^n - 1]
      oldMonthlyPayment = (P * oldR) / (1 - Math.pow(1 + oldR, -oldN));
      newMonthlyPayment = (P * newR) / (1 - Math.pow(1 + newR, -newN));
    } else {
      // Interest-only payment: (P * R)
      oldMonthlyPayment = P * oldR;
      newMonthlyPayment = P * newR;
    }

    const monthlySavings = oldMonthlyPayment - newMonthlyPayment;
    const totalSavings = monthlySavings * newN;

    setSavings({
      monthlySavings: monthlySavings.toFixed(2),
      totalSavings: totalSavings.toFixed(2),
    });
  };

  return (
    <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Repayment Calculator">
        <div className="calculator-container">
        <div className="form-section">
        <h2>Loan Refinance Calculator</h2>

        <label>Current Loan Amount (NZ$):</label>
        <input
          type="number"
          value={currentLoanAmount}
          onChange={(e) => setCurrentLoanAmount(e.target.value)}
        />

        <label>Current Interest Rate (%):</label>
        <input
          type="number"
          step="0.01"
          value={currentRate}
          onChange={(e) => setCurrentRate(e.target.value)}
        />

        <label>Remaining Loan Term (Years):</label>
        <input
          type="number"
          value={remainingTerm}
          onChange={(e) => setRemainingTerm(e.target.value)}
        />

        <label>New Interest Rate (%):</label>
        <input
          type="number"
          step="0.01"
          value={newRate}
          onChange={(e) => setNewRate(e.target.value)}
        />

        <label>New Loan Term (Years):</label>
        <input
          type="number"
          value={newTerm}
          onChange={(e) => setNewTerm(e.target.value)}
        />

        {/* Loan Type Selection */}
        <label>Loan Type:</label>
        <select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
          <option value="principle_and_interest">Principle and Interest</option>
          <option value="interest_only">Interest Only</option>
        </select>

        <button onClick={calculateSavings}>Calculate Savings</button>
      </div>

      {savings && (
        <div className="result-section">
          <h3>Results</h3>
          <p><strong>Monthly Savings (NZ$):</strong> {savings.monthlySavings}</p>
          <p><strong>Total Savings Over New Loan Term (NZ$):</strong> {savings.totalSavings}</p>
        </div>
      )}

      <div className="disclaimer">
        <p>
          <strong>DISCLAIMER:</strong> This calculator is provided by the contributor “as is” and any express or implied warranties, including, but not limited to,
          the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall the contributor be liable for any direct, indirect,
          incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits;
          or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in
          any way out of the use of this calculator, even if advised of the possibility of such damage.
        </p>
      </div>
        </div>
      
    </Layout>
  );
}

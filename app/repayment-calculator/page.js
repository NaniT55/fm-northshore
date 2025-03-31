'use client'
import React from 'react';
import { useState } from "react";
import Layout from "@/components/layout/Layout"

export default function RepaymentCalculator(){
    const [loanAmount, setLoanAmount] = useState(500000);
  const [rate, setRate] = useState(6);
  const [term, setTerm] = useState(30);
  const [type, setType] = useState("principal_interest");
  const [frequency, setFrequency] = useState("weekly");
  const [additionalPayment, setAdditionalPayment] = useState(0);
  const [result, setResult] = useState(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const interestRate = parseFloat(rate) / 100;
    const months = term * 12;
    const monthlyRate = interestRate / 12;

    let monthlyPayment;
    if (type === "interest_only") {
      monthlyPayment = principal * monthlyRate;
    } else {
      monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    }

    const newMonthlyPayment = monthlyPayment + parseFloat(additionalPayment);
    const totalRepay = monthlyPayment * months;
    const totalRepayExtra = newMonthlyPayment * months;
    const totalInterest = totalRepay - principal;
    const totalInterestExtra = totalRepayExtra - principal;

    setResult({
      payment: monthlyPayment.toFixed(2),
      newPayment: newMonthlyPayment.toFixed(2),
      totalRepay: totalRepay.toFixed(2),
      totalRepayExtra: totalRepayExtra.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalInterestExtra: totalInterestExtra.toFixed(2),
      months,
      monthsExtra: months,
    });
  };


  return (
    <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Repayment Calculator">
      <div className="calculator-container">
        <div className="form-section">
          <h2>Mortgage Calculator</h2>

          <label>Loan Amount</label>
          <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />

          <label>Rate (%)</label>
          <input type="number" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />

          <label>Term (Years)</label>
          <input type="range" min="1" max="40" value={term} onChange={(e) => setTerm(e.target.value)} />
          <p>{term} years</p>

          <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="principal_interest">Principal & Interest</option>
          <option value="interest_only">Interest Only</option>
        </select>

          <label>Payment Frequency</label>
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="weekly">Weekly</option>
            <option value="Fortnightly">Fortnightly</option>
            <option value="monthly">Monthly</option>
          </select>

          <label>Additional Mortgage Payment</label>
          <input type="number" value={additionalPayment} onChange={(e) => setAdditionalPayment(e.target.value)} />

          <button onClick={calculateMortgage} className="btn-box">Calculate</button>
        </div>

        {result && (
          <div className="result-section">
            <h2>Results</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Without Extra Payment</th>
                  <th>With Extra Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Payment</td>
                  <td>${result.payment}</td>
                  <td>${result.newPayment}</td>
                </tr>
                <tr>
                  <td>Total Repayment</td>
                  <td>${result.totalRepay}</td>
                  <td>${result.totalRepayExtra}</td>
                </tr>
                <tr>
                  <td>Total Interest Paid</td>
                  <td>${result.totalInterest}</td>
                  <td>${result.totalInterestExtra}</td>
                </tr>
                <tr>
                  <td>Time to Repayment</td>
                  <td>{Math.floor(result.months / 12)} yrs</td>
                  <td>{Math.floor(result.monthsExtra / 12)} yrs</td>
                </tr>
              </tbody>
            </table>
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
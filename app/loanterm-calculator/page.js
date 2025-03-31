'use client'
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Layout from "@/components/layout/Layout";

export default function RefinanceCalculator() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [loanTerm, setLoanTerm] = useState(30);
    const [interestRate, setInterestRate] = useState(7.28);
    const [extraPayment, setExtraPayment] = useState(50);
  
    // Function to calculate remaining balance per year
    const calculateRemainingBalance = () => {
      let balance = loanAmount;
      let annualRate = interestRate / 100;
      let monthlyRate = annualRate / 12;
      let monthlyPayment =
        (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm * 12));
      
      let data = [];
      for (let year = 1; year <= loanTerm; year++) {
        let yearlyExtra = extraPayment * 12;
        for (let month = 0; month < 12; month++) {
          balance = balance * (1 + monthlyRate) - (monthlyPayment + extraPayment);
          if (balance <= 0) {
            balance = 0;
            break;
          }
        }
        data.push({ year, balance: Math.max(balance, 0) });
        if (balance === 0) break;
      }
      return data;
    };
  
  

  return (
    <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Loan Term Calculator">
        <div className="loan-container">
      <div className="loan-form">
        {/* <h2>Extra Repayments</h2> */}
        <label>Loan Amount</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />

        <label>Loan Term</label>
        <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}>
          {[...Array(31).keys()].slice(1).map((year) => (
            <option key={year} value={year}>
              {year} Years
            </option>
          ))}
        </select>

        <label>Interest Rate</label>
        <input
          type="number"
          value={interestRate}
          step="0.01"
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />

        <label>Extra Contribution Per Payment</label>
        <input
          type="number"
          value={extraPayment}
          onChange={(e) => setExtraPayment(Number(e.target.value))}
        />
      </div>

      <div className="chart-container">
        <h3>Remaining Balance at Year End</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={calculateRemainingBalance()}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="balance" fill="#4682B4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
      
    </Layout>
  );
}

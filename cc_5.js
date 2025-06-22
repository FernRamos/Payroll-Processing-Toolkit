const employees = [
  { name: "Alice", hourlyRate: 20, hoursWorked: 38 },
  { name: "Bob", hourlyRate: 15, hoursWorked: 42 },
  { name: "Carlos", hourlyRate: 22, hoursWorked: 45 },
  { name: "Diana", hourlyRate: 18, hoursWorked: 40 },
  { name: "Eva", hourlyRate: 25, hoursWorked: 50 }
];

// Step 3: Calculate Base Pay (up to 40 hours)
function calculateBasePay(hourlyRate, hoursWorked) {
  const baseHours = Math.min(hoursWorked, 40);
  return baseHours * hourlyRate;
}

// Step 4: Calculate Overtime Pay (1.5x for hours > 40)
function calculateOvertimePay(hourlyRate, hoursWorked) {
  const overtimeHours = Math.max(hoursWorked - 40, 0);
  return overtimeHours * hourlyRate * 1.5;
}

// Step 5: Calculate 15% Tax on Gross Pay
function calculateTax(grossPay) {
  return grossPay * 0.15;
}

function processPayroll(employee) {
  const { name, hourlyRate, hoursWorked } = employee;

  const basePay = calculateBasePay(hourlyRate, hoursWorked);
  const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
  const grossPay = basePay + overtimePay;
  const tax = calculateTax(grossPay);
  const netPay = grossPay - tax;

  return {
    name: name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    tax: tax.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}
const outputDiv = document.getElementById("payroll-output");

console.log("=== Final Payroll Log ===");

for (const employee of employees) {
  const payroll = processPayroll(employee);
  console.log(payroll);

  // Detailed console output
  console.log(`Payroll for ${payroll.name}`);
  console.log(`  Base Pay: $${payroll.basePay}`);
  console.log(`  Overtime Pay: $${payroll.overtimePay}`);
  console.log(`  Gross Pay: $${payroll.grossPay}`);
  console.log(`  Tax: $${payroll.tax}`);
  console.log(`  Net Pay: $${payroll.netPay}`);
  console.log("----------------------------");

 // Create a paragraph element for each employee's payroll
  const employeeDiv = document.createElement("div");
  employeeDiv.innerHTML = `
    <h3>${payroll.name}</h3>
    <ul>
      <li><strong>Base Pay:</strong> $${payroll.basePay}</li>
      <li><strong>Overtime Pay:</strong> $${payroll.overtimePay}</li>
      <li><strong>Gross Pay:</strong> $${payroll.grossPay}</li>
      <li><strong>Tax (15%):</strong> $${payroll.tax}</li>
      <li><strong>Net Pay:</strong> $${payroll.netPay}</li>
    </ul>
  `;
  outputDiv.appendChild(employeeDiv);
} 
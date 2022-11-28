// Call promt-sync in order to get the actual prompting function.
const prompt = require("prompt-sync")();
// Define variable salary.
// Prompt users to input their basic salary, which is stored in the salary variable.
const grossPay = prompt("Please enter your Gross salary: ");
// Define variable benefits.
// Prompt users to input their monthly benefits, which is stored in the benefits variable.
const benefits = prompt("Please enter your monthly benefits: ");
// Define NHIF, NSSF, PAYE, totalDeductions, taxablePay variables.
    let NHIF=0;
    let NSSF = 200;
    let PAYE = 0;
    let totalDeductions
    let taxablePay
    
    // Calculate Personal Releif
        if (grossPay <= 24001){
            PAYE = grossPay * 0.1;
        }else if(grossPay >=32333){
            PAYE = 2400;
            taxablePay = grossPay - 24000;
            PAYE = (taxablePay *0.25) + PAYE;
        }else{
            PAYE =  4483;
            taxablePay= grossPay-32333
            PAYE = (taxablePay *0.30) +PAYE;
        }
        // Calculate NHIF Deductions
        if (grossPay <=5999){
            NHIF = 150;
        }else if(grossPay>=6000 && grossPay<=7999){
            NHIF = 300;
        }else if(grossPay>=8000 && grossPay <=11999){
            NHIF =400;
        }else if(grossPay>=12000 && grossPay <=14999){
            NHIF =500;
        }else if(grossPay>=15000 && grossPay <=19999){
            NHIF =600;
        }else if(grossPay>=20000 && grossPay <=24999){
            NHIF =750;
        }else if(grossPay>=25000 && grossPay <=29999){
            NHIF =850;
        }else if(grossPay>=30000 && grossPay <=34999){
            NHIF =900;
        }else if(grossPay>=35000 && grossPay <=39999){
            NHIF =950;
        }else if(grossPay>=40000 && grossPay <=44999){
            NHIF =1000;
        }else if(grossPay>=45000 && grossPay <=49999){
            NHIF =1100;
        }else if(grossPay>=50000 && grossPay <=59999){
            NHIF =1200;
        }else if(grossPay>=60000 && grossPay <=69999){
            NHIF =1300;
        }else if(grossPay>=70000 && grossPay <=79999){
            NHIF =1400;
        }else if(grossPay>=80000 && grossPay <=89999){
            NHIF =1500;
        }else if(grossPay>=90000 && grossPay <=99999){
            NHIF ==1600;
        }else (grossPay=10000 )=>{
            NHIF ==1700;
        }
// Calculate total deductions
totalDeductions = NHIF + PAYE+NSSF;
// Calculate monthly salary
monthlySalary = grossPay - totalDeductions;
// Calculate the gross pay
console.log(`Your gross pay is ksh: ${grossPay}`);
// Calculate the PAYE
console.log (`Your PAYE is ksh: ${PAYE}`);
// Calculate the total NHIF Deductions
console.log(`Your NHIF deductions are ksh: ${NHIF}`);
// Calculate the total NSSF deductions
console.log(`Your NSSF deductions are ksh: ${NSSF}`);
// Calculate total deductions
console.log(`Your total deductions are ksh: ${totalDeductions}`);
// Calculate Monthly Salary
console.log(`Your monthly salary is ksh: ${monthlySalary}`);
# phase-1-toy-problems-prerequisites

## Learning Goals

-Use javascript to produce three programs that prompt the user to input the value that will be used to solve the following challenges:

Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below:

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

> For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.- Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

## Getting Started

## Challenge 1: Student Grade Generator (Toy Problem)

## Define the variable score.

1. Create a new file called grade.js. You can either do this on your terminal or directly from VS Code or from your GitHub account.
2. To install the lab's dependencies, run the following code on your terminal:
   ```js
   npm install prompt-sync`

- For this challenge, run the tests using:
  ```js
  node grade.js`
   ```
3. Open grade.js on your text editor and add the following code:
   ```js
   const prompt = require("prompt-sync")();
   ```
   -The above code calls the prompt-sync in order to create prompting functions.
4. To prompt users to input student marks, copy and paste the following code:
   ```js
   const score = prompt("Please Input Student Marks: ");
   ```
5. Define a function studentGradeGenerator:
   ```js
   function studentGradeGenerator() 
   ```

6. For the next step, we will pass student marks into the function studentGradeGenerator.
   -A certain block of code will be executed if the specified condition is true and a grade will be assigned to the student. Else if the condition is not met, another block of code will be executed.
   -If the student input does not meet any condition, the program will print out,Invalide Input!
   -To do this, copy and paste the following code into your tect editor:
   ```js
   {
   if (score > 79 && score < 100) {
   console.log("A");
   } else if (score >= 60 && score <= 79) {
   console.log("B");
   } else if (score >= 49 && score <= 59) {
   console.log("C");
   } else if (score >= 40 && score <= 48) {
   console.log("D");
   } else if (score >= 0 && score <= 39) {
   console.log("E");
   }else {
   console.log("Invalid Input!");
   }
   } 
   ```
7. Render the result by calling the studentGradeGenerator function:
   ```js
   studentGradeGenerator();
   ```

## Challenge 2: Speed Detector (Toy Problem)

1. Create a new file called speed.js. You can either do this on your terminal or directly from VS Code or from your GitHub account.
2. To install the lab's dependencies, run the following code on your terminal:
   ```js 
   npm install prompt-sync
   ```
- For this challenge, run the tests using:
  ```js 
  node speed.js
  ```

3. Open speed.js on your text editor and add the following code:
   ```js
   const prompt = require("prompt-sync")();
   ```
   -The above code calls the prompt-sync in order to create prompting functions.
4. To prompt users to input speed, copy and paste the following code:
   ```js
   const speed = prompt("Input speed of your car: ");
   ```
5. For the next step, we are going to create a function thatgives the driver one demerit point for every 5 km/s above the speed limit (70), then print out the total number of demerit points.

- To do this, copy and paste the following code into your speed.js file:
  ```js
  let points = (speed-70) /5;
  ```

5. Now, we are going to define a function speedDetector that takes in the car speed. If the car speed is less than 70, it prints out 'Ok'.

- Else if the carspeed is above the speed limit, it calculates and prints out points for the user.
- If customer points exceed 12, prompt out, 'License suspended'.
- To do this, copy the following code:
  ```js 
   function speedDetector(){
    if (speed <70){
        console.log('Ok');
    } else if(points >12){
        console.log('License suspended');
    }else{
    console.log(`points: ${points}`);
}
}
  ```

6. Render the result by calling the speedDetector function:
   ```js
   speedDetector();
   ```

## Challenge 3: Net Salary Calculator (Toy Problem)

1. Create a new file called salarycalculator.js. You can either do this on your terminal or directly from VS Code or from your GitHub account.
2. To install the lab's dependencies, run the following code on your terminal:
   ```js
   npm install prompt-sync
   ```

- For this challenge, run the tests using:
  ```js 
  node salarycalculator.js
  ```

3. Open salarycalculator.js on your text editor and add the following code:
   ```js
   const prompt = require("prompt-sync")();
   ```
-The above code calls the prompt-sync in order to create prompting functions.
4. To prompt users to input their basic salary and monthly benefits copy and paste the following code:
   ```js
   const grossPay = prompt("Please enter your Gross salary: ");
   
   const benefits = prompt("Please enter your monthly benefits: ");
   ```
5. Next, we are going to define NHIF, NSSF, PAYE, totalDeductions, taxablePay variables using the code below:
   ```js
   let NHIF=0;
    let NSSF = 200;
    let PAYE = 0;
    let totalDeductions
    let taxablePay
    ```
6. To calsulate personal releif, copy and paste the following code to to your text editor:
   ```js
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
        ```
7. Every public servant with access to National Health Insurance Fund(NHIF) is required to pay a monthly fee for the fund. To calculate the NHIF deductions for an individual, copy the following code into the text editor window:
   ```js
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
        ```
8. To calculate the total deductions on an employees basic salary, type the folowing:
   ```js
   totalDeductions = NHIF + PAYE+NSSF;
   ```
9. To calculate an individual's monthly salary, the program must deduct the individual's gross pay from their total monthly deductions. To do this, type the following code onto your text editor:
   ```js
      monthlySalary = grossPay - totalDeductions;
      ```
10.Type the following code in order to generate an individual's gross pay,PAYE, NHIF, NSSF, Total Deductions and Monthly salary:
   ```js
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
   ```



<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make an interface Payable with a method calculatePay() returning a float
// 2. Make an abstract class Employee implementing Payable with properties: name, baseSalary
// 3. Make Developer and Manager classes extending Employee
// 4. Developer has a string property 'programmingLanguage'
// 5. Manager has a float property 'bonus'
// 6. Developer's calculatePay() returns just the baseSalary
// 7. Manager's calculatePay() returns baseSalary + bonus
// 8. The Manager's bonus setter must throw an Exception if the bonus is negative
// 9. Make a Company class that has a property 'employees' (an array of Employee)
// 10. Company has methods addEmployee(Employee $employee) and getTotalPayroll() which sums calculatePay() of all employees
// 11. Add a static property 'totalHires' in Employee to track the number of created employees, with a static getter

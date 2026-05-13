const departments = [
    { deptId: 1, name: "Engineering", budget: 500000 },
    { deptId: 2, name: "Marketing", budget: 200000 },
    { deptId: 3, name: "HR", budget: 100000 }
];

const employees = [
    { empId: 1, name: "Alice", deptId: 1, salary: 120000 },
    { empId: 2, name: "Bob", deptId: 1, salary: 110000 },
    { empId: 3, name: "Charlie", deptId: 2, salary: 80000 },
    { empId: 4, name: "David", deptId: 3, salary: 70000 },
    { empId: 5, name: "Eve", deptId: 1, salary: 130000 }
];

const projects = [
    { projectId: "P1", name: "Website Redesign", status: "Active" },
    { projectId: "P2", name: "New API", status: "Completed" },
    { projectId: "P3", name: "Hiring Campaign", status: "Active" }
];

const employeeProjects = [
    { empId: 1, projectId: "P1", hours: 40 },
    { empId: 2, projectId: "P1", hours: 30 },
    { empId: 1, projectId: "P2", hours: 50 },
    { empId: 5, projectId: "P2", hours: 20 },
    { empId: 3, projectId: "P3", hours: 25 },
    { empId: 4, projectId: "P3", hours: 10 }
];

// challenge 1 : return the total salary expenses for each department along with the department name
// challenge 2 : find the project with the most total hours logged
// challenge 3 : list all employees working on active projects, including their name and project name
// challenge 4 : find the department that has the highest average salary
// challenge 5 : find employees who are not assigned to any projects

const students = [
    { studentId: 1, name: "John Doe", major: "Computer Science" },
    { studentId: 2, name: "Jane Smith", major: "Mathematics" },
    { studentId: 3, name: "Emily Johnson", major: "Physics" }
];

const courses = [
    { courseId: "CS101", title: "Intro to Programming", credits: 3 },
    { courseId: "MA201", title: "Calculus I", credits: 4 },
    { courseId: "PH301", title: "Quantum Mechanics", credits: 4 }
];

const enrollments = [
    { enrollmentId: 1, studentId: 1, courseId: "CS101" },
    { enrollmentId: 2, studentId: 1, courseId: "MA201" },
    { enrollmentId: 3, studentId: 2, courseId: "MA201" },
    { enrollmentId: 4, studentId: 3, courseId: "PH301" },
    { enrollmentId: 5, studentId: 3, courseId: "CS101" }
];

const grades = [
    { enrollmentId: 1, score: 95 },
    { enrollmentId: 2, score: 85 },
    { enrollmentId: 3, score: 90 },
    { enrollmentId: 4, score: 88 },
    { enrollmentId: 5, score: 92 }
];

// challenge 1 : calculate the average score for each course and return an array of objects with course title and average score
// challenge 2 : find the student with the highest total score across all their enrolled courses
// challenge 3 : return an array of students taking a course outside their major (assume CS takes CS, Math takes MA, Physics takes PH)
// challenge 4 : calculate the total credits each student is enrolled in
// challenge 5 : find the course with the highest number of enrollments

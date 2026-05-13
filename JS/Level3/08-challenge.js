const students = [{ id: 1, name: "Ali", className: "A" }, { id: 2, name: "Sara", className: "B" }, { id: 3, name: "Omar", className: "A" }, { id: 4, name: "Imane", className: "B" }]
const absences = [{ classId: 1, studentId: 1, count: 1 }, { classId: 1, studentId: 2, count: 4 }, { classId: 2, studentId: 1, count: 3 }]

// challenge 1: Retourner la liste des étudiants ayant plus de 3 absences.
const studentsWithMoreThan3Absences = students.filter(student => {
  const totalAbsences = absences
    .filter(a => a.studentId === student.id)
    .reduce((sum, a) => sum + a.count, 0);
  return totalAbsences > 3;
});
console.log("Challenge 1:", studentsWithMoreThan3Absences);

// challenge 2: calculer le nombre total d’absences par classe
const absencesParClasse = absences.reduce((acc, absence) => {
  acc[absence.classId] = (acc[absence.classId] || 0) + absence.count;
  return acc;
}, {});
console.log("Challenge 2:", absencesParClasse);

// challenge 3: trouver le cours qui a le plus d’absences en tout
const coursLePlusAbsent = Object.entries(absencesParClasse).reduce((max, [classId, count]) => {
  return count > max.count ? { classId, count } : max;
}, { classId: null, count: 0 });
console.log("Challenge 3:", coursLePlusAbsent);

// challenge 4: lister les étudiants ayant des absences
const studentIdsAvecAbsences = [...new Set(absences.map(a => a.studentId))];
const studentsAvecAbsences = students.filter(s => studentIdsAvecAbsences.includes(s.id));
console.log("Challenge 4:", studentsAvecAbsences);

// challenge 5: calculer la moyenne d’absence par étudiant
const moyenneAbsenceParEtudiant = students.map(student => {
  const totalAbsences = absences
    .filter(a => a.studentId === student.id)
    .reduce((sum, a) => sum + a.count, 0);
  const nbCours = absences.filter(a => a.studentId === student.id).length;
  return { name: student.name, moyenne: nbCours > 0 ? totalAbsences / nbCours : 0 };
});
console.log("Challenge 5:", moyenneAbsenceParEtudiant);

// challenge 6: l'etudiant avec le plus d'absences
const totalParEtudiant = students.map(student => ({
  ...student,
  total: absences.filter(a => a.studentId === student.id).reduce((sum, a) => sum + a.count, 0)
}));
const etudiantLePlusAbsent = totalParEtudiant.reduce((max, s) => s.total > max.total ? s : max);
console.log("Challenge 6:", etudiantLePlusAbsent);

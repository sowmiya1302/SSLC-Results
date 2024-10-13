const urlParams = new URLSearchParams(window.location.search);
const rollNum = urlParams.get('rollNum');
const dob = urlParams.get('dob');

const students = [
  { rollNum: '101', dob: '2000-01-01', marks: [80, 85, 90, 75, 88] },
  { rollNum: '102', dob: '2000-02-02', marks: [70, 65, 80, 75, 78] },
  { rollNum: '103', dob: '2000-03-03', marks: [90, 95, 88, 85, 92] },
  { rollNum: '104', dob: '2000-04-04', marks: [60, 70, 75, 68, 72] },
  { rollNum: '105', dob: '2000-05-05', marks: [85, 90, 92, 88, 90] }
];

const student = students.find(s => s.rollNum === rollNum && s.dob === dob);
if (student) {
  // Display roll number
  document.getElementById('rollNum').textContent = `Roll Number: ${student.rollNum}`;

  const marksBody = document.getElementById('marksBody');
  const totalMarksCell = document.getElementById('totalMarks');
  let totalMarks = 0;

  student.marks.forEach((mark, index) => {
    const row = document.createElement('tr');
    const subjectCell = document.createElement('td');
    const marksCell = document.createElement('td');

    subjectCell.textContent = `Subject ${index + 1}`;
    marksCell.textContent = mark;

    row.appendChild(subjectCell);
    row.appendChild(marksCell);

    marksBody.appendChild(row);

    totalMarks += mark;
  });

  totalMarksCell.textContent = totalMarks;
} else {
  alert('Student not found!');
}

const marks = [80, 80, 50, 10];
let average = 0;

function calculateGrade(marks) {
  for (let i = 0; i < marks.length; i++) {
    average += marks[i];
  }

  average /= marks.length;

  if (average > 1 && average < 59) {
    console.log("F");
  } else if (average > 60 && average < 69) {
    console.log("D");
  } else if (average > 70 && average < 79) {
    console.log("C");
  } else if (average > 80 && average < 89) {
    console.log("B");
  } else if (average > 90 && average < 100) {
    console.log("A");
  } else {
    console.log("Bunday son yo`q");
  }
}

calculateGrade(marks);

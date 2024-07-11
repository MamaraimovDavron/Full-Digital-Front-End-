const marks = [80, 100, 50, 10];
let sum = 0;

function calculateGrade(marks) {
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  sum /= marks.length;
  if (sum > 1 && sum < 59) {
    console.log("F");
  } else if (sum > 60 && sum < 69) {
    console.log("D");
  } else if (sum > 70 && sum < 79) {
    console.log("C");
  } else if (sum > 80 && sum < 89) {
    console.log("B");
  } else if (sum > 90 && sum < 100) {
    console.log("A");
  } else {
    console.log("Bunday son yo`q");
  }
}

calculateGrade(marks);

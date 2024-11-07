for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

function countdown() {
  for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
  }
}

countdown();

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// Loop over the array and print each name in uppercase
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
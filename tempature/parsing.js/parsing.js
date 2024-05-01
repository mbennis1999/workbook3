let name = "senior jefe";

let index = name.indexOf(" ");
let lastName = name.substring(index + 1);
let firstName = name.substring(0, index);

function parseAndDisplayName(name) {
  let index = name.indexOf(" ");
  let lastName = name.substring(index + 1);
  let firstName = name.substring(0, index);
  console.log(index);
  console.log(firstName);
  console.log(lastName);
}

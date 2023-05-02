function solve(input) {
  let groceries = input.shift().split("!");

  for (let index = 0; index < input.length; index++) {
    if (input[index] === "Go Shopping!") {
      break;
    }

    let tokens = input[index].split(" ");
    let command = tokens[0];
    let item = tokens[1];

    switch (command) {
      case "Urgent":
        if (!groceries.includes(item)) {
          groceries.unshift(item);
        }
        break;
      case "Unnecessary":
        if (groceries.includes(item)) {
          groceries.splice(groceries.indexOf(item), 1);
        }
        break;
      case "Correct":
        let newItem = tokens[2];
        if (groceries.includes(item)) {
          groceries[groceries.indexOf(item)] = newItem;
        }
        break;
      case "Rearrange":
        if (groceries.includes(item)) {
          groceries.splice(groceries.indexOf(item), 1);
          groceries.push(item);
        }
        break;
    }

  }

  console.log(groceries.join(", "));

}

// solve(["Tomatoes!Potatoes!Bread",
// "Unnecessary Milk",
// "Urgent Tomatoes",
// "Go Shopping!"])

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])


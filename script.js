document.addEventListener('DOMContentLoaded', () => {
    let userName;
    const name = document.getElementById('name');
    while (!userName || userName.length > 22) {
      userName = prompt("Please enter your name (maximum 22 letters):");
      if (userName === null) {
        console.log("You canceled entering your name.");
        break; // Exit the loop if the user cancels
      }
      if (userName === "") {
        console.log("You didn't enter anything.");
      } else if (userName.length > 22) {
        console.log("Your name must be 22 characters or less.");
      } else {
        name.textContent = userName;
      }
    }
  });
document.addEventListener('DOMContentLoaded', () => {
    let userName;
    const name = document.getElementById('name');
    const body = document.body;

    body.style.display = 'none';

    while (!userName || userName.length > 22) {
      userName = prompt("Please enter your name (maximum 22 letters):");
      if (userName === "") {
        console.log("You didn't enter anything.");
      } else if (userName.length > 22) {
        console.log("Your name must be 22 characters or less.");
      } else {
        body.style.display = 'flex';
        name.textContent = userName;
      }
    }
  });
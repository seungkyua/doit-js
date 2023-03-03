// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => console.log(users))

async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  // console.log(users);
  display(users);
}

function display(users) {
  const result = document.querySelector("#result");
  let str = "";
  users.forEach(user => {
    str += `
      <ul>
        <li>${user.name}</li>
        <li>${user.username}</li>
        <li>${user.email}</li>
      </ul>
    `
  });
  result.innerHTML = str;
}

init();
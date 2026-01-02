
function saveUser() {
  // Step 1: Get user input
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  // Step 2: Make an object
  let user = {
    name: name,
    age: age
  };

  // Step 3: Convert object to JSON string
  let jsonString = JSON.stringify(user);

  // Step 4: Save to local storage
  localStorage.setItem("userData", jsonString);

  // Step 5: Show on screen
  showUser();
}

function showUser() {
  // Get JSON from localStorage
  let data = localStorage.getItem("userData");

  // Convert back to object
  let userObj = JSON.parse(data);

  // Show the data
  document.getElementById("output").innerHTML =
    "Name: " + userObj.name + "<br>" +
    "Age: " + userObj.age;
}

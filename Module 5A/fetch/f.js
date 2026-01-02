//get data//
fetch("https://jsonplaceholder.typicode.com/posts/3")
  .then(response => response.json())  
  .then(data => console.log(data))    
  .catch(error => console.log("Error:", error));

//Post data//
  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello Kittu",
    body: "This is my first fetch POST request",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Created:", data))
  .catch(error => console.log("Error:", error));

//Put data//
  fetch("https://jsonplaceholder.typicode.com/posts/3", {
  method: "PUT", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 3,
    title: "Updated Title",
    body: "This is the updated content",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Updated:", data))
  .catch(error => console.log("Error:", error));

//Delete data//
  fetch("https://jsonplaceholder.typicode.com/posts/3", {
  method: "DELETE"
})
  .then(response => {
    if (response.ok) {
      console.log("Post with ID 3 deleted successfully");
    } else {
      console.log("Failed to delete, status:", response.status);
    }
  })
  .catch(error => console.log("Error:", error));

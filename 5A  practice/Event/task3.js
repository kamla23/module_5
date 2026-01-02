

const body = document.body;

const dive = document.createElement("div");
dive.classList.add("flex");
dive.style.backgroundImage = 'url("https://cdn.vectorstock.com/i/1000v/02/81/green-color-code-streams-glowing-on-screen-matrix-vector-20170281.jpg")';
dive.style.backgroundSize = "cover";
dive.style.height = "100vh";
dive.style.padding = "30px";
dive.style.borderColor = "#48ee59";
dive.style.borderWidth = "5px";
dive.style.borderStyle = "solid";
body.appendChild(dive);

const h = document.createElement("h1");
h.classList.add("Top");
h.innerHTML = "Code is more than some  bytes in a file.";
h.style.color = "white";
h.style.fontFamily = "bree Serif";
h.style.backgroundColor = "#00000000";
h.style.padding = "15px";
h.style.fontSize = "30px";
dive.appendChild(h);
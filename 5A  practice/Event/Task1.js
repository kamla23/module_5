


const body = document.body;
body.style.height = "100vh";
body.style.margin = "0px";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const div2 = document.createElement("div");
// div2.style.backgroundColor = "blue";
div2.style.display = "flex";
div2.style.alignItems = "center";
div2.style.justifyContent = "center";
div2.style.marginTop = "0px";
document.body.appendChild(div2);

const div = document.createElement("div");
div.style.backgroundImage =
  "url(https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=1380&t=st=1705589139~exp=1705589739~hmac=bf9e192e8095ceb6b0a426d7b81a0d08eae620dade1c54099a7304bc0510370a)";
div.style.backgroundSize = "cover";
div.style.backgroundPosition = "center";
div.style.backgroundRepeat = "no-repeat";
div.style.height = "90vh";
div.style.padding = "40px";
div.style.paddingTop = "40px"
div.style.fontFamily = "san-serif";
div.style.marginBottom= "10px";
div.style.marginTop = "10px";
div.style.borderRadius = "5px";
div.classList.add("todo");
div.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
div2.appendChild(div);


const heading = document.createElement("h1");
heading.textContent = "Todolist";
heading.style.margin = "10px 0";
heading.style.color = "white";
heading.style.fontSize = "30px";
heading.alignItems = "center";
div.appendChild(heading);


const para = document.createElement("p");
para.innerText = "Each day I will accomplish one thing on my todo list.";
para.style.textAlign = "center";
para.style.fontSize = "5px";
div.appendChild(para);

const para1 = document.createElement("p");
para1.innerText = "Read a Book";
para1.style.color = "#ffffff";
para1.style.marginLeft = "-40px";
para1.style.paddingLeft = "0px";
para1.style.textAlign = "left";
para1.style.fontSize = "8px";
div.appendChild(para1);

const para3 = document.createElement("p");
para3.textContent =
  "I don't think that the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist...";
para3.style.fontSize = "5px";
para3.style.textAlign = "left";
para3.style.marginLeft = "-40px";
para3.style.width = "150px";
div.appendChild(para3);

const div1 = document.createElement("div");
div1.style.textAlign = "center";

const button = document.createElement("button");
button.innerHTML = "Start";
button.style.color = "white";
button.style.backgroundColor = "orange";
// button.style.border = "none";
button.style.padding = "3px 10px";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";
button.style.fontSize = "14px";

div1.appendChild(button);
div.appendChild(div1);

const para4 = document.createElement("p");
para4.innerText = "Don't skip introduction";
para4.style.color = "#fff";
para4.style.textDecoration = "underline";
para4.style.marginTop = "10px";
para4.style.fontSize = "10px";
div.appendChild(para4);



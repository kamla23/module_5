
const body = document.body;

const div = document.createElement("div");
div.classList.add("background");
div.style.backgroundImage = 'url("https://i.pinimg.com/736x/d4/f9/8a/d4f98a34cf769b13baba13d46fa03f2f.jpg")';
div.style.backgroundSize = "cover";
div.style.width = "300px"; 
div.style.height = "600px"; 
div.style.backgroundSize = "contain";
div.style.backgroundRepeat = "no-repeat";  
div.style.backgroundPosition = "center";
div.style.margin = "0 auto"; 
div.style.borderRadius = "5px";
body.appendChild(div);

const h = document.createElement("h1");
h.classList.add("heading");
h.innerHTML = "Chat";
div.appendChild(h);

const d = document.createElement("div");
d.classList.add("whole");
d.style.padding = "14px";
d.style.color = "#ffffff";
d.style.fontFamily = "Roboto";
d.style.fontSize = "12px";
div.appendChild(d);

const p1  = document.createElement("p");
p1.classList.add("text-sent");
p1.innerHTML = "Hello, how are you?"; 
d.appendChild(p1);

const p2 = document.createElement("p");
p2.classList.add("text-rec");
p2.innerHTML = "Hi Varakumar, I am good. How are you?";
d.appendChild(p2);  

const p3 = document.createElement("p");
p3.classList.add("text-sent");
p3.innerHTML = "I'm fine. I am learning HTML and CSS";
d.appendChild(p3); 

const p4 = document.createElement("p");
p4.classList.add("text-rec");
p4.innerHTML = "HTML and CSS";

d.appendChild(p4); 

const p5 = document.createElement("p");
p5.classList.add("text-sent");
p5.innerHTML = "Yes, by doing projects parallelly, i am learning it";
d.appendChild(p5);

const p6 = document.createElement("p");
p6.classList.add("text-rec");
p6.innerHTML = "Awesome, can you tell how you are learning it";
d.appendChild(p6);

const p7 = document.createElement("p");
p7.classList.add("text-sent");
p7.innerHTML = "can i call you?";
d.appendChild(p7);


const style = document.createElement("style");
style.innerHTML = `
  .background {
    min-height: 100vh;
    background-size: cover;
    padding: 0;
    margin: 0;
  }

  .heading {
    background-color: #323f4b;
    color: white;
    font-size: 24px;
    padding: 16px;
    text-align: center;
    font-family: Roboto, sans-serif;
  }

  .whole {
    padding: 20px;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    color: #fff;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .text-sent,
  .text-rec {
    padding: 12px;
    border-radius: 12px;
    margin: 8px 0;
    max-width: 80%;
    word-wrap: break-word;
  }

  .text-sent {
    background-color: #47a3f3;
    align-self: flex-end;
    text-align: right;
  }

  .text-rec {
    background-color: #52606d;
    align-self: flex-start;
    text-align: left;
  }

  @media (max-width: 600px) {
    .heading {
      font-size: 18px;
      padding: 12px;
    }

    .whole {
      padding: 12px;
      font-size: 12px;
    }

    .text-sent,
    .text-rec {
      max-width: 100%;
      font-size: 13px;
    }
  }
`;
document.head.appendChild(style);




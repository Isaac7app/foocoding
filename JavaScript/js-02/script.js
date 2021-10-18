const button = document.getElementById("button");
const imgdiv = document.querySelector(".imgDiv");
const image = document.createElement("img");
image.src = "https://cdn.mos.cms.futurecdn.net/iKGs9DvGL594rf3whuTdi9.jpg";

image.style.width = "150px";
image.style.height = "150px";

button.onclick = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  console.log("user :", username, "pass :", password, "email :", email);
};

button.onmouseover = () => {
  button.style.backgroundColor = "red";
};

button.onmouseout = () => {
    button.style.backgroundColor = "white";
}

imgdiv.append(image);

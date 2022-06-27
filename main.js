let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let message = document.getElementById("rights");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Can't leave blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    collectData();
  }
};

let data = {};

let collectData = () => {
  data["message"] = input.value;
  console.log(data);
  createMessage();
};

let createMessage = () => {
  message.innerHTML += 
  `  <div class="right" id="right">
          <p>${data.message}</p>
        <span>
          <i onClick = "editPost(this)"class='bx bx-edit-alt'></i>
          <i onClick = "deletePost(this)" class='bx bx-trash' style='color:#fb0b0b'></i>
        </span>
      </div>`
      input.value = '';
};

let deletePost = (e)=>{
  e.parentElement.parentElement.remove();

};

let editPost = (e)=>{
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

};
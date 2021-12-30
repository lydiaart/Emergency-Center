var dropdown = document.querySelector(".dropdown");
var imagePlaceHolder = document.querySelector("#image-placeholder");
var nameplaceHolder = document.querySelector("#name-placeholder");
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name")

function changeAvatar(event){
event.preventDefault()

console.log(this.value)
imagePlaceHolder.setAttribute("src",this.value)
nameplaceHolder.textContent = firstName.value + " " + lastName.value

}

dropdown.addEventListener("change", changeAvatar)
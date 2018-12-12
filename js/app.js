const form = document.querySelector("#contact-form");
const response = document.querySelector(".response-box");
const formBox = document.querySelector(".contact-form-box");
form.addEventListener("submit", event => {
    event.preventDefault();
    const fd = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", event => {
        form.classList.add("hide");
        response.innerHTML = "<p>" + event.target.responseText + "</p>";
		response.classList.replace("no-display", "appear");
        console.log(event.target.responseText);
    });
    xhr.addEventListener("error", event => {
        console.log(event);
    });
    xhr.open("POST", form.action);
    xhr.send(fd);
});
const form = document.querySelector("#contact-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const fd = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", event => {
        console.log(event.target.responseText);
    });
    xhr.addEventListener("error", event => {
        console.log(event);
    });
    xhr.open("POST", form.action);
    xhr.send(fd);
});
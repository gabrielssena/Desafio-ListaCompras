document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.getElementById("input-add");
    const ul = document.querySelector("ul");

    function addItem(text) {
        if (!text.trim()) 
        return alert("Digite algum texto por gentileza");
        
        const li = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("input-li");
        
        const span = document.createElement("span");
        span.textContent = text;
        
        const trash = document.createElement("img");
        trash.src = "./assets/icons/trash.svg";
        trash.alt = "Remover item";
        trash.classList.add("delete-item");
        trash.style.cursor = "pointer";
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(trash);
        ul.appendChild(li);
        
        input.value = "";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        addItem(input.value);
    });

    ul.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-item")) {
            event.target.parentElement.remove();
        }
    });

    ul.addEventListener("change", function (event) {
        if (event.target.classList.contains("input-li")) {
            event.target.nextElementSibling.classList.toggle("checked");
        }
    });
});

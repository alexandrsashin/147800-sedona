var link = document.querySelector(".application-title");
var form = document.querySelector(".application");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");


link.addEventListener("click", function(event) {
    if (form.classList.contains("application-show")) {
        event.preventDefault();
        form.classList.remove("application-show");
    } else {
	    event.preventDefault();
        form.classList.add("application-show");
        arrival.focus();
    }
});

form.addEventListener("submit", function(event) {
    if (!arrival.value || !departure.value) {
    	event.preventDefault();
        console.log("Нужно ввести дату заезда и выезда"); 
    } 
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
    	if (form.classList.contains("application-show")) {
            form.classList.remove("application-show");
        }
    }
});

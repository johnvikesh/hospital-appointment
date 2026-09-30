function selectDoctor(doctorName) {

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("doctor").value = doctorName;
}


document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const message =
            document.getElementById("message");

        message.innerHTML =
            "✓ Thank you, " + name +
            "! Your appointment request has been submitted successfully.";

        document.getElementById("bookingForm").reset();

    });
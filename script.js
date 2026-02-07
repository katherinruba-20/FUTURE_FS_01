document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response").innerText =
        "Thank you! Your message has been submitted.";
});

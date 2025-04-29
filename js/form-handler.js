// Trigger the modal on form submission
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission to another page

    // Show the thank-you modal
    var myModal = new bootstrap.Modal(document.getElementById('thankYouModal'), {
        keyboard: false
    });
    myModal.show();
};
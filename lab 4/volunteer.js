

console.log("Volunteer form JavaScript loaded.");


const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");

// Select the form, email input, and interest dropdown.
const form = document.querySelector("#volunteerForm");
const emailInput = document.querySelector("#email");
const interestSelect = document.querySelector("#interest");

// Add a submit event listener to the form.
form.addEventListener("submit", function (event) {
    // Prevent the default form submission.
    event.preventDefault();

    // Read the input values.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const interest = interestSelect.value;

    // Check for missing information and display a response.
    if (name === "") {
        result.textContent = "Please enter your full name.";
    } else if (email === "") {
        result.textContent = "Please enter your email address.";
    } else if (interest === "") {
        result.textContent = "Please select an area of interest.";
    } else if (interest === "outreach") {
        result.textContent = `Thanks, ${name}! Our Community Outreach team will contact you about upcoming food drives and neighborhood clean-ups.`;
    } else if (interest === "events") {
        result.textContent = `Thanks, ${name}! Our Event Support team will contact you about helping with setup, check-in, and teardown at upcoming events.`;
    } else if (interest === "mentoring") {
        result.textContent = `Thanks, ${name}! Our Youth Mentoring coordinator will contact you about tutoring and mentorship opportunities with local students.`;
    } else {
        result.textContent = "Something went wrong. Please try again.";
    }
});
// Reference to survey form using the forms collection
const form = document.forms["surveyForm"];

// Reference to modal hidden on the page.
const modal = document.getElementById("resultModal");

// Add a listner to the submit event for the survey form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Check if form is valid
    // This a conditional statement. We will cover this later in the semester.
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    // Retrive values from form inputs
    document.getElementById("name").textContent = form['name'].value;

    document.getElementById("email"). textContent = form['email'].value;

    document.getElementById("age").textContent = form['age'].value;

    document.getElementById("satisfaction").textContent = ['satisfaction'].value;

    document.getElementById("contactMethod").textContent = ['contactMethod'].value;

    document.getElementById("comments").textContent = form ['comments'].value;

    //show modal with results
    new bootstrap.Modal(modal).show();

    // Reset the form and validation state
    form.reset();
    form.classList.remove('was-validated');
});


    

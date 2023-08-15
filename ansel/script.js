document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("user-form");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        if (validateForm()) {
            const formData = {
                name: form.name.value,
                email: form.email.value,
                age: form.age.value,
                gender: form.gender.value
            };

            const headers = {
                "Content-Type" :'application/json',
                "X-Parse-Application-Id" :'ye5O0XqcUW1tmWuoQh1ofZBKstzh45ryoWAC37tp',
                "X-Parse-REST-API-Key": 'gKldSLuhNrMPaYZwVB8JgbgzZBLz8iMcnaZm9gc5', 
                
            }

            // Send the data to the server using Axios
            axios.post("https://parseapi.back4app.com/parse/classes/user_entry", formData,{headers:headers})
                .then(function(response) {
                    console.log("response ", response)
                    if (response.status === 201) {
                        alert("Form submitted successfully:\n" +
                              "Name: " + formData.name + "\n" +
                              "Email: " + formData.email + "\n" +
                              "Age: " + formData.age + "\n" +
                              "Gender: " + formData.gender);
                    } else {
                        alert("An error occurred while submitting the form.");
                    }
                })
                .catch(function(error) {
                    console.error("Error submitting form:", error);
                    alert("An error occurred while submitting the form.");
                });
        }
    });

    function validateForm() {
        let isValid = true;

        // Basic validation for required fields
        if (form.name.value.trim() === "") {
            isValid = false;
            alert("Please enter your name.");
        }

        if (form.email.value.trim() === "") {
            isValid = false;
            alert("Please enter your email.");
        }

        if (form.age.value === "" || form.age.value <= 0) {
            isValid = false;
            alert("Please enter a valid age.");
        }

        return isValid;
    }
});

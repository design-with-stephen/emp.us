document.addEventListener("DOMContentLoaded", function () {
    let fieldAdded = false; // Track if an extra field is added
    const toggleFieldBtn = document.getElementById("toggleFieldBtn");
    const extraFieldContainer = document.getElementById("extraFieldContainer");
    const contactForm = document.getElementById("contactForm");

    // Function to save form data to localStorage
    function saveFormData() {
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            extra: fieldAdded ? document.getElementById("extra").value : "",
            fieldAdded: fieldAdded
        };
        localStorage.setItem("contactFormData", JSON.stringify(formData));
    }

    // Function to restore form data from localStorage
    function loadFormData() {
        const savedData = localStorage.getItem("contactFormData");
        if (savedData) {
            const formData = JSON.parse(savedData);
            
            document.getElementById("name").value = formData.name;
            document.getElementById("email").value = formData.email;
            document.getElementById("message").value = formData.message;

            if (formData.fieldAdded) {
                addExtraField(formData.extra);
            }
        }
    }

    // Function to add the extra field
    function addExtraField(value = "") {
        if (!fieldAdded) {
            const div = document.createElement("div");
            div.classList.add("form-group");
            div.setAttribute("id", "extraField");

            div.innerHTML = `
                <label for="extra">Additional Field</label>
                <input type="text" id="extra" name="extra" placeholder="Enter extra info" value="${value}">
            `;

            extraFieldContainer.appendChild(div);
            fieldAdded = true;

            toggleFieldBtn.textContent = "Remove Extra Field";
            toggleFieldBtn.classList.add("remove");
        }
    }

    // Add event listener to toggle field button
    toggleFieldBtn.addEventListener("click", function () {
        if (!fieldAdded) {
            addExtraField();
        } else {
            const extraField = document.getElementById("extraField");
            if (extraField) {
                extraFieldContainer.removeChild(extraField);
            }
            fieldAdded = false;

            toggleFieldBtn.textContent = "Add Extra Field";
            toggleFieldBtn.classList.remove("remove");
        }
        saveFormData();
    });

    // Restore form data on page load
    loadFormData();

    // Save data on input change
    document.querySelectorAll("#contactForm input, #contactForm textarea").forEach(input => {
        input.addEventListener("input", saveFormData);
    });

    // Clear localStorage on form submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Remove this if you want actual submission
        localStorage.removeItem("contactFormData");
        alert("Form submitted successfully!");
        contactForm.reset();
        fieldAdded = false;
        extraFieldContainer.innerHTML = "";
        toggleFieldBtn.textContent = "Add Extra Field";
        toggleFieldBtn.classList.remove("remove");
    });
});

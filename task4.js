// question 4 event
var content = document.getElementById("content");
        var moreText = document.getElementById("moreText");
        var readMoreBtn = document.getElementById("readMoreBtn");

        // Toggle functionality for Read More/Less
        readMoreBtn.addEventListener("click", function() {
            if (moreText.style.display === "none") {
                moreText.style.display = "inline";   // Show the hidden text
                content.classList.add("expanded");   // Expand the content area
                readMoreBtn.textContent = "Read less";  // Change button text
            } else {
                moreText.style.display = "none";    // Hide the extra text
                content.classList.remove("expanded");  // Collapse content
                readMoreBtn.textContent = "Read more";  // Reset button text
            }
        });


        // question 5
        function createForm() {
            const form = document.createElement('form');
            form.id = 'studentForm';
          
            // Add input fields for student details
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = 'name';
            nameInput.placeholder = 'Enter name';
            form.appendChild(nameInput);
          
            const ageInput = document.createElement('input');
            ageInput.type = 'number';
            ageInput.name = 'age';
            ageInput.placeholder = 'Enter age';
            form.appendChild(ageInput);
          
            const gradeInput = document.createElement('input');
            gradeInput.type = 'text';
            gradeInput.name = 'grade';
            gradeInput.placeholder = 'Enter grade';
            form.appendChild(gradeInput);
          
            // Add submit button
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.textContent = 'Add Student';
            form.appendChild(submitButton);
          
            return form;
          }
          
          function createTable() {
            const table = document.createElement('table');
            table.id = 'studentTable';
          
            // Create table header row
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Actions</th>
            `;
            table.appendChild(headerRow);
          
            return table;
          }
          
          function addStudent(event) {
            event.preventDefault();
          
            const form = document.getElementById('studentForm');
            const name = form.name.value;
            const age = form.age.value;
            const grade = form.grade.value;
          
            const table = document.getElementById('studentTable');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
              <td>${name}</td>
              <td>${age}</td>
              <td>${grade}</td>
              <td>
                <button class="deleteButton">Delete</button>
                <button class="editButton">Edit</button>
              </td>
            `;
            table.appendChild(newRow);
          
            // Clear form fields
            form.reset();
          }
          
          function deleteStudent(event) {
            const rowToDelete = event.target.parentNode.parentNode;
            rowToDelete.parentNode.removeChild(rowToDelete);
          }
          
          function editStudent(event) {
            const rowToEdit = event.target.parentNode.parentNode;
            const name = rowToEdit.querySelector('td:nth-child(1)').textContent;
            const age = rowToEdit.querySelector('td:nth-child(2)').textContent;
            const grade = rowToEdit.querySelector('td:nth-child(3)').textContent;
          
            const editForm = document.createElement('form');
            editForm.id = 'editForm';
            editForm.innerHTML = `
              <label for="editName">Name:</label>
              <input type="text" id="editName" name="name" value="${name}">
              <br>
              <label for="editAge">Age:</label>
              <input type="number" id="editAge" name="age" value="${age}">
              <br>
              <label for="editGrade">Grade:</label>
              <input type="text" id="editGrade" name="grade" value="${grade}">
              <br>
              <button type="submit">Save Changes</button>
            `;
          
            rowToEdit.querySelector('td:nth-child(4)').innerHTML = '';
            rowToEdit.appendChild(editForm);
          
            editForm.addEventListener('submit', function (event) {
              event.preventDefault();
          
              const newName = editForm.name.value;
              const newAge = editForm.age.value;
              const newGrade = editForm.grade.value;
          
              rowToEdit.querySelector('td:nth-child(1)').textContent = newName;
              rowToEdit.querySelector('td:nth-child(2)').textContent = newAge;
              rowToEdit.querySelector('td:nth-child(3)').textContent = newGrade;
          
              rowToEdit.querySelector('td:nth-child(4)').innerHTML = `
                <button class="deleteButton">Delete</button>
                <button class="editButton">Edit</button>
              `;
            });
          }
          
          const form = createForm();
          const table = createTable();
          
          document.body.appendChild(form);
          document.body.appendChild(table);
          
          form.addEventListener('submit', addStudent);
          
          table.addEventListener('click', function (event) {
            if (event.target.classList.contains('deleteButton')) {
              deleteStudent(event);
            } else if (event.target.classList.contains('editButton')) {
              editStudent(event);
            }
          });


        //   question 6 dom
        // Get the element with id "main-content" and store it in a variable
const mainContent = document.getElementById("main-content");

// Check if the element is found before proceeding
if (mainContent) {
  console.log("Element with id 'main-content' found!");

  // Display all child elements of "main-content"
  const childElements = mainContent.children;
  console.log("Child elements of 'main-content':");
  for (let i = 0; i < childElements.length; i++) {
    console.log(childElements[i]); // Logs the element itself (HTML structure)
    console.log(childElements[i].textContent); // Logs the text content within the element
  }

  // Get all elements with class "render" and display their innerHTML
  const renderElements = document.querySelectorAll(".render");
  console.log("Elements with class 'render' and their innerHTML:");
  for (let element of renderElements) {
    console.log(element.innerHTML);
  }

  // Fill input value for elements with ids "first-name", "last-name", and "email" (if they exist)
  const firstNameInput = document.getElementById("first-name");
  if (firstNameInput) {
    firstNameInput.value = "Alex"; // Or any desired value
  } else {
    console.warn("Input element with id 'first-name' not found.");
  }

  const lastNameInput = document.getElementById("last-name");
  if (lastNameInput) {
    lastNameInput.value = "Bank";
  } else {
    console.warn("Input element with id 'last-name' not found.");
  }

  const emailInput = document.getElementById("email");
  if (emailInput) {
    emailInput.value = "alexbank@example.com";
  } else {
    console.warn("Input element with id 'email' not found.");
  }
} else {
  console.error("Element with id 'main-content' not found in the HTML document.");
}
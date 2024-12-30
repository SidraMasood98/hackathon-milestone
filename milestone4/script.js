//  get reference to the form and display area
var form = document.getElementById("Resume-form");
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values;
    var names = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //  Generate the resume content dynamically
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>/<span contenteditable=\"true\">".concat(names, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</span></p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</span></p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">>").concat(skills, "</span></p>");
    // Display the Generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});

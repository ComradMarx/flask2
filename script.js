document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Create a FormData object
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);

  // Send the form data to the server using an AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "submit.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Handle the response from the server
      console.log(xhr.responseText); // You can customize this part based on your requirements
    }
  };
  xhr.send(formData);
});

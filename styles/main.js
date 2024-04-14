// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector("nav");

  burger.addEventListener("click", () =>{
    navList.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");

  });
};

$(document).ready(function() {
  // Handle form submission
  $("#contact-form form").submit(function(event) {
    // Prevent the form from submitting in the default way
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var hp = $('#hp').val();
    var message = $('#message').val();

    $('.error').remove();

    if (name,length ,1){
$('#name').after('<span class="error">Name is required</span>');
    }
    if (!isValidEmail(email)){
$('#email').after('<span class="error">please enter a valid email</span>');
    }
    if (!isValidPhoneNumber(hp)) {
      $('#hp').after('<span class="error">Please enter a valid phone number</span>');
  }
});

function isValidEmail(email) {

    return email.length > 0 && email.includes('@');
}

function isValidPhoneNumber(phoneNumber) {
    if (phoneNumber.length < 6 || phoneNumber.length > 12) {
        $('#hp').after('<span class="error">Phone number must be between 6 and 12 digits</span>');
        return false;
    }
    if (!(/^\d+$/.test(phoneNumber))) {
        $('#hp').after('<span class="error">Phone number must contain only digits</span>');
        return false;
    }
    return true;
}
});
   
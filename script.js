
$(document).ready(function () {
    $('#contact-form').validate({
      rules: {
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        msg: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Your name must be at least 3 characters long"
        },
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
        },
        msg: {
          required: "Please enter a message",
          minlength: "Message should be at least 5 characters"
        }
      },
      submitHandler:function(form){
        alert('Submitted !');
        form.submit();
      }
    });
  });

  
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const badge = button.querySelector(".badge");
      let count = parseInt(badge.innerText);
      count++;
      badge.innerText = count;
    });
  });
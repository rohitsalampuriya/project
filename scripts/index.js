document.addEventListener("DOMContentLoaded", function() {
//signup
  var modal = document.getElementById("signupModal");
  var btn = document.getElementsByClassName("signup-button")[0];
  var span = document.getElementsByClassName("close")[0];
var showSignupLink = document.getElementById("showSignup");
  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

 showSignupLink.onclick = function(event) {
        event.preventDefault();
        signupModal.style.display = "block";
        var signinModal = document.getElementById("signinModal");
        signinModal.style.display = "none";
    }

//signin
var modal1 = document.getElementById("signinModal");
  var btn1 = document.getElementsByClassName("signin-button")[0];
  var span1 = document.getElementsByClassName("close")[1];

  btn1.onclick = function() {
    modal1.style.display = "block";
  }

  span1.onclick = function() {
    modal1.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
//createPost
  var createPostModal = document.getElementById("createPostModal");
      var openCreatePostBtn = document.getElementById("openCreatePostModal");
      var closeCreatePostBtn = document.getElementsByClassName("close")[2];

      openCreatePostBtn.onclick = function() {
          createPostModal.style.display = "block";
      }

      closeCreatePostBtn.onclick = function() {
          createPostModal.style.display = "none";
      }

      window.onclick = function(event) {
          if (event.target == createPostModal) {
              createPostModal.style.display = "none";
          }
      }
});
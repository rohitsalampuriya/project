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

  // allposts

        var modal3 = document.getElementById("deletePostModal");


        var deleteButtons = document.querySelectorAll(".delete-icon");


        var deleteYesButton = document.querySelector(".delete-yes");
        var deleteNoButton = document.querySelector(".delete-no");


        function displayDeleteModal() {
            modal3.style.display = "block";
        }


        function hideDeleteModal() {
            modal3.style.display = "none";
        }


        deleteButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                displayDeleteModal();
            });
        });


        deleteYesButton.addEventListener("click", function() {

            var postContainer = document.querySelector('.posts-container');


            var deletedPost = document.querySelector('.post-card.selected'); // Assuming you have a selected class when a post is marked for deletion
            postContainer.removeChild(deletedPost);


            rearrangePosts();


            hideDeleteModal();
        });

        function rearrangePosts() {
            var remainingPosts = document.querySelectorAll('.post-card');
            remainingPosts.forEach(function(postCard, index) {
                var newRow = Math.floor(index / 2) + 1;
                var newColumn = (index % 2) + 1;
                postCard.style.gridColumn = newColumn;
                postCard.style.gridRow = newRow;
            });
        }


        deleteNoButton.addEventListener("click", function() {

            hideDeleteModal();
        });


        window.onclick = function(event) {
            if (event.target == modal3) {
                hideDeleteModal();
            }
        }

  });



document.querySelectorAll('.ellipsis-icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Retrieve post data related with this ellipsis icon
        var postCard = icon.closest('.post-card');
        var author = postCard.querySelector('.username').textContent;
        var title = postCard.querySelector('.post-content .para1 p').textContent;
        var content = postCard.querySelector('.post-content .para').textContent;

        author = encodeURIComponent(author);
        title = encodeURIComponent(title);
        content = encodeURIComponent(content);


        var url = 'post.html?author=' + author + '&title=' + title + '&content=' + content;
        window.location.href = url;
    });
});


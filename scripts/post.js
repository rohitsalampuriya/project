
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
        // Hide the Sign In modal if it's currently displayed
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

document.addEventListener("DOMContentLoaded", function() {
    const editSaveBtn = document.getElementById('edit-save-btn');
    const postTitle = document.querySelector('.post-title');
    const postContent = document.querySelector('.post-content');

    editSaveBtn.addEventListener('click', function() {
        if (editSaveBtn.textContent.trim() === 'Edit') {
            // edit part
            postTitle.contentEditable = true;
            postContent.contentEditable = true;
            postTitle.style.border = '1px solid pink';
            postContent.style.border = '1px solid pink';
            editSaveBtn.innerHTML = '<i class="fa fa-save"></i> Save';
        } else {
            // Save update
            postTitle.contentEditable = false;
            postContent.contentEditable = false;
            postTitle.style.border = 'none';
            postContent.style.border = 'none';
            editSaveBtn.innerHTML = '<i class="fa fa-edit"></i> Edit';
        }
    });
});

   document.addEventListener('DOMContentLoaded', function() {

       var urlParams = new URLSearchParams(window.location.search);
       var author = urlParams.get('author');
       var title = urlParams.get('title');
       var content = urlParams.get('content');


       document.getElementById('postTitle').textContent = decodeURIComponent(title);
       document.getElementById('post-author').textContent =decodeURIComponent(author);
       document.getElementById('postContent').textContent = decodeURIComponent(content);
   });
document.addEventListener('DOMContentLoaded', function() {

    var likeCount = 0;


    var likeButton = document.getElementById('likeButton');
    var likeStatus = document.getElementById('likeStatus');


    function updateLikeStatus() {
        if (likeCount === 0) {
            likeStatus.textContent = "Be the first one to like this!";
        } else if (likeCount === 1) {
            likeStatus.textContent = "1 person likes this!";
        } else {
            likeStatus.textContent = likeCount + " people like this!";
        }
    }


    likeButton.addEventListener('click', function() {
        likeCount++;
        likeButton.textContent = 'Liked!';
        updateLikeStatus();
    });


    commentButton.addEventListener('click', function() {
            var commentText = commentInput.value;
            if (commentText.trim() !== '') {
                var commentElement = document.createElement('p');
                commentElement.textContent = commentText;
                 commentElement.classList.add('comment');
                 allComments.insertBefore(commentElement, allComments.firstChild);
                commentInput.value = ''; // Clear input box
                 allComments.style.display = 'block';
            }
        });
});



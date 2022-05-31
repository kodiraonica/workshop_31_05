const signupButton = document.getElementById("btn-signup");
signupButton.addEventListener("click", function(){
    document.getElementById("modal").style.display = "block";
});

const closeButton = document.getElementById("btn-close");
closeButton.addEventListener("click", function(){
    document.getElementById("modal").style.display = "none";
});


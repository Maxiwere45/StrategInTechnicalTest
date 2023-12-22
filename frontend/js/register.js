$(document).ready(function() {
    // Capture l'événement de soumission du formulaire
    $("#registerForm").submit(function(event) {
        event.preventDefault(); // Empêche la soumission normale du formulaire

        // Appelle la fonction de connexion
        submitLoginForm();
    });
});

function submitLoginForm() {
    let email = $("#email").val();
    let password = $("#password").val();

    $.ajax({
        url: "http://localhost:3000/api/auth/register",
        method: "POST",
        contentType: "application/json",  // Ajout de cette ligne
        data: JSON.stringify({ email: email, password: password }),
        success: () => {
            // Redirige vers la page d'accueil
            window.location.href = 'login.html';
        },
        error: function(xhr, status, error) {
            console.error("Erreur lors de l'inscription :", error);
            alert("Erreur lors de l'inscription : " + error);
        }
    });
}

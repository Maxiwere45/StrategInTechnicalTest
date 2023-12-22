$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        submitLoginForm();
    });
});

function submitLoginForm() {
    let email = $("#email").val();
    let password = $("#password").val();

    // Faire une requête AJAX vers le serveur Node.js
    $.ajax({
        url: "http://localhost:3000/api/auth/login",
        method: "POST",
        contentType: "application/json",  // Ajout de cette ligne
        data: JSON.stringify({ email: email, password: password }),
        success: function(response) {
            // Stocke le token JWT dans le stockage local
            localStorage.setItem('jwtToken', response.token);

            // Redirige vers la page d'accueil
            window.location.href = 'users.html';
        },
        error: function(xhr, status, error) {
            console.error("Erreur lors de la connexion :", xhr.responseText);
            alert("Erreur lors de la connexion : email ou mot de passe incorrect !");
        }
    });
}

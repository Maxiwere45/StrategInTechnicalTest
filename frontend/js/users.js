// Vérifie si l'utilisateur est connecté
if (!localStorage.getItem('jwtToken')) {
    window.location.href = 'login.html';
}

function disconnect() {
    localStorage.removeItem('jwtToken');

    // Redirige d'abord vers une page vide pour invalider le cache du navigateur
    window.location.href = 'logout.html';

    setTimeout(function() {
        window.location.href = 'login.html';
    }, 0);
}

// Requête AJAX vers le serveur Node.js
let request = $.ajax({
    url: "http://localhost:3000/api/users/",
    method: "GET",
    contentType: "application/json",  // Ajout de cette ligne
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    }
});

function remplirTableau(data, tableId) {
    let table = $("#" + tableId + " tbody");
    table.empty(); // Vide le tableau

    // Remplir le tableau avec les nouvelles données
    for (let i = 0; i < data.length; i++) {
        let row = "<tr><td>" + data[i]['_id'] + "</td><td>" + data[i]['email'] + "</td></tr>";
        table.append(row);
    }
}

// En cas de succès
request.done((data) => {
    console.log("Données reçues du serveur :", data);
    remplirTableau(data, "usersTable");
});

// En cas d'erreur
request.fail((xhr, status, error) => {
    console.error("Erreur lors de la requête AJAX :", status, error);
    alert("Erreur lors de la requête AJAX : " + error);
});
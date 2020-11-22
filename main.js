function rafraichir() {
    // On initialise la variable text dans laquelle on affichera la date
    var text = '';

    // On initialise la fonction date qui nous servira a afficher les caractéristiques de la date (jour, mois, heure ...)
    var date = new Date();

    /* Fonction ' JOUR SEMAINE ' */
    // Le jour de la semaine sera affiché de la façon : Lundi.
    var jour_actuel = date.getDay();
    var chaine_jour = Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
    var jour_semaine = chaine_jour[jour_actuel];

    /* Fonction ' JOUR ' */
    // Le jour sera affiché de façon 20.
    // Pour les jours de 1 a 9, on affichera donc un '0' devant.
    if (date.getDate() <= 9) {
        var jour = '0' + date.getDate();
    } else {
        var jour = date.getDate();
    }

    /* Fonction ' MOIS ' */
    var mois_actuel = date.getMonth();
    var chaine_mois = Array('janvier', 'f&eacute;vrier', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'ao&ucirc;t', 'septembre', 'octobre', 'novembre', 'd&eacute;cembre');
    var mois = chaine_mois[mois_actuel];


    /* Fonction ' HEURES ' */
    if (date.getHours() <= 9) {
        var heure = '0' + date.getHours();
    } else {
        var heure = date.getHours();
    }

    /* Fonction ' MINUTES ' */
    if (date.getMinutes() <= 9) {
        var minutes = '0' + date.getMinutes();
    } else {
        var minutes = date.getMinutes();
    }

    /* Fonction ' SECONDES ' */
    if (date.getSeconds() <= 9) {
        var secondes = '0' + date.getSeconds();
    } else {
        var secondes = date.getSeconds();
    }

    // On prépare l'affichage de la date et de l'heure
    text += jour_semaine + ' ' + jour + ' ' + mois + ' ' + date.getFullYear();
    text += ' - il est ';
    text += heure + ':' + minutes + ':' + secondes;

    // On indique que cette date sera affichée dans une balise dont l'"id" est "affiche_date"
    document.getElementById('affiche_date').innerHTML = text;
}
// On écrit la balise dons l'id est "affiche_date"
// On peut aussi choisir une autre balise HTML !
// document.write('<p id="affiche_date"></p>');

// Enfin, on rafraichi la fonction "rafraichir" toutes les secondes.
setInterval('rafraichir()', 1000);
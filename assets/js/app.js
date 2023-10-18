function validerFormulaire() {
    const nom = document.getElementById('nom').value;
    const entreprise = document.getElementById('entreprise').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const card = document.getElementById('formulaire')

    if (nom && entreprise && email && telephone) {
      afficherCarteVisite(nom, entreprise, email, telephone);
      card.style.display = 'none'
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
  
  
  function afficherCarteVisite(nom, entreprise, email, telephone) {
    const carteVisite = document.getElementById('carteVisite');
    const nomAffiche = document.getElementById('nomAffiche');
    const entrepriseAffiche = document.getElementById('entrepriseAffiche');
    const emailAffiche = document.getElementById('emailAffiche');
    const telephoneAffiche = document.getElementById('telephoneAffiche');
  
    nomAffiche.textContent = nom;
    entrepriseAffiche.textContent = entreprise;
    emailAffiche.textContent = email;
    telephoneAffiche.textContent = telephone;
    
    carteVisite.classList.remove('hidden');
  }
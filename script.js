document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const status = document.getElementById('status');

  // Vérifier que l'objet grecaptcha est disponible
  if (typeof grecaptcha === 'undefined') {
    status.textContent = "⚠️ reCAPTCHA non chargé. Veuillez actualiser la page.";
    status.style.color = "red";
    return;
  }

  const response = grecaptcha.getResponse();

  if (!response || response.length === 0) {
    status.textContent = "⚠️ Veuillez valider le reCAPTCHA avant d'envoyer.";
    status.style.color = "red";
    return;
  }

  // ✅ Si on arrive ici, le reCAPTCHA est bien coché
  status.textContent = "✅ Formulaire soumis avec succès !";
  status.style.color = "green";

  // Réinitialiser le reCAPTCHA pour le prochain envoi
  grecaptcha.reset();
});

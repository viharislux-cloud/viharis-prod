document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const status = document.getElementById('status');
  const response = grecaptcha.getResponse();

  if (!response) {
    status.textContent = "⚠️ Veuillez valider le reCAPTCHA avant d'envoyer.";
    status.style.color = "red";
    return;
  }

  // Ici, normalement tu enverrais les données à un serveur pour traitement.
  // Comme le site est statique, on affiche simplement un message.
  status.textContent = "✅ Formulaire soumis avec succès !";
  status.style.color = "green";

  // Réinitialiser le reCAPTCHA
  grecaptcha.reset();
});

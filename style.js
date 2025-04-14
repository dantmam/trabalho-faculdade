document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Verifica o token do reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert("Por favor, confirme que você não é um robô.");
      return;
    }
  
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const timestamp = Date.now();
  
    db.ref('comments/' + timestamp).set({
      name,
      message,
      timestamp
    });
  
    document.getElementById('commentForm').reset();
    grecaptcha.reset(); // Reseta o reCAPTCHA após o envio
  });
  
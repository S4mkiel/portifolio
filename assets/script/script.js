document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact-form');
  const dialogOverlay = document.querySelector('.dialog-overlay');
  const dialogBox = document.querySelector('.dialog-box');

  // Verificar se o formulário e o diálogo existem antes de adicionar os ouvintes de evento
  if (form && dialogOverlay && dialogBox) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // EmailJS service initialization
      emailjs.init('dZXrwMlW9l7HUZGPv');

      // Gathering form data
      const formData = {
        toName: 'Roberto',
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value,
      };

      // Sending email through EmailJS
      emailjs.send('service_gqz1i0u', 'template_le6a3qx', formData).then(
        function (response) {
          // Exibir o diálogo de sucesso
          showDialog();
          form.reset(); // Reset the form
        },
        function (error) {
          console.log(error);
          alert('Ocorreu um erro ao enviar a mensagem.', error);
        },
      );
    });

    dialogBox.querySelector('button').addEventListener('click', function () {
      dialogOverlay.style.display = 'none';
    });
  } else {
    console.error('Elemento não encontrado.');
  }

  // Função para exibir o diálogo de sucesso
  function showDialog(message) {
    const messageContainer = dialogBox.querySelector('p');
    messageContainer.textContent = message;
    dialogOverlay.style.display = 'flex';
  }
});

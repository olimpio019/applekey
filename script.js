const form = document.getElementById('leadForm');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const text = encodeURIComponent(
      `Olá, me chamo *${nome}*\n\n` +
      `Quero saber mais sobre o desbloqueio do meu aparelho.\n` +
      `WhatsApp: ${whatsapp}\n` +
      `Modelo: ${modelo}\n` +
      `Mensagem: ${mensagem}`
    );

    const whatsappUrl = `https://wa.me/5519958731833?text=${text}`;
    window.open(whatsappUrl, '_blank');
  });
}

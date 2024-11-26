document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!email || !nome || !mensagem) {
        document.getElementById("resposta").innerText = "Por favor, preencha todos os campos obrigatórios.";
        return;
    }

	document.getElementById("resposta").innerText = "Mensagem enviada com sucesso. Obrigado pelo feedback!";
    document.getElementById("contato-form").reset();
});

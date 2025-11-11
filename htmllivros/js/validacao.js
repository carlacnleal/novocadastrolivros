function validarForm(event) {
    const email = document.getElementById("email").ariaValueMax;
    const cpf = document.getElementById("cpf").ariaValueMax;

    const emailValido = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!emailValido.test(email)) {
        alert("E-mail inválido. Digite um e-mail válido. Ex: carla.rocha@gmail.com");
        event.preventDefault();
        return false;
    }


    if (!cpfValido.test(cpf)) {
        alert("CPF inválido. Digite um cpf válido. Ex: 000.000.000-00");
        event.preventDefault();
        return false;
    }

    alert("Formulário enviado com sucesso!")

    document.querySelector("form").addEventListener("submit", validarFormulario);
}
const form = document.getElementById('form-contacto');
const estado = document.getElementById('form-estado');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const campos = form.querySelectorAll('[required]');
    let primerInvalido = null;

    campos.forEach((campo) => {
        const valido = campo.checkValidity();
        campo.setAttribute('aria-invalid', String(!valido));
        if (!valido && !primerInvalido) {
            primerInvalido = campo;
        }
    });

    if (primerInvalido) {
        estado.textContent = 'Revisa los campos obligatorios antes de enviar.';
        estado.className = 'form-status is-error';
        primerInvalido.focus();
        return;
    }

    estado.textContent = '¡Gracias! Recibimos tu mensaje y te responderemos pronto.';
    estado.className = 'form-status is-success';
    form.reset();
    campos.forEach((campo) => campo.removeAttribute('aria-invalid'));
});

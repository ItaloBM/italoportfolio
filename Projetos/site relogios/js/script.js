window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

document.addEventListener('pageshow', function(event) {
    const form = document.querySelector('#content form');

    if (form) {
        // Tenta resetar o formulário
        form.reset();

        // Itera sobre todos os campos do formulário para garantir que estão vazios
        // e tenta remover o foco para evitar preenchimento automático
        const formElements = form.elements; // Pega todos os inputs, textareas, selects
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.type !== 'submit' && element.type !== 'hidden' && element.type !== 'button') {
                element.value = ''; // Define o valor como vazio (redundante com reset, mas para garantir)
                element.blur();    // Tenta remover o foco do campo
            }
        }

        // Tenta resetar novamente após um pequeno atraso, às vezes ajuda contra o cache
        setTimeout(() => {
            form.reset();
            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                if (element.type !== 'submit' && element.type !== 'hidden' && element.type !== 'button') {
                    element.value = '';
                    element.blur();
                }
            }
        }, 50); // Atraso de 50 milissegundos
    }
});

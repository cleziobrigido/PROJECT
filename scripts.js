document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const logoutButton = document.getElementById('logout');
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Credenciais predefinidas para validação
    const validUser = 'admin';
    const validPassword = '1234';

    // Lógica de login
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Verificação simples de login
            if (username === validUser && password === validPassword) {
                // Redireciona para a tela principal se o login for válido
                window.location.href = 'main.html';
            } else {
                // Exibe a mensagem de erro se o login for inválido
                errorMessage.classList.remove('hidden');
            }
        });
    }

    // Lógica de logout
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Função para exibir a seção correta e esconder as outras
    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active-section');
                section.classList.remove('hidden');
            } else {
                section.classList.remove('active-section');
                section.classList.add('hidden');
            }
        });
    }

    // Navegação entre as seções
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Upload de vídeos
    document.getElementById('videoUpload').addEventListener('change', (e) => {
        const files = e.target.files;
        const videoList = document.getElementById('videoList');
        videoList.innerHTML = '';
        for (let i = 0; i < files.length; i++) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(files[i]);
            video.controls = true;
            videoList.appendChild(video);
        }
    });

    // Upload de PDFs
    document.getElementById('pdfUpload').addEventListener('change', (e) => {
        const files = e.target.files;
        const pdfList = document.getElementById('pdfList');
        pdfList.innerHTML = '';
        for (let i = 0; i < files.length; i++) {
            const iframe = document.createElement('iframe');
            iframe.src = URL.createObjectURL(files[i]);
            iframe.height = 600;
            pdfList.appendChild(iframe);
        }
    });
});

// Función para mostrar la noticia cuando se hace clic en el botón
document.getElementById('mostrar-noticia').addEventListener('click', function() {
    var noticia = document.getElementById('noticia');
    if (noticia.style.display === 'none' || noticia.style.display === '') {
        noticia.style.display = 'block';
    } else {
        noticia.style.display = 'none';
    }
});

    const hamburger = document.getElementById('hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
     });

    const links = sidebar.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
               sidebar.classList.remove('active'); 
        });
     });
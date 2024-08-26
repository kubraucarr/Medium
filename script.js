// Elemanları seçme
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close-button');
const modalContent = document.getElementById('modalContent'); // Modal içeriği bölümü
const modalcontent=document.querySelector('.modal-content');

// Modali açma ve konumlandırma
openModalButton.addEventListener('click', function() {

    modalcontent.style.display='block';



    const rect = openModalButton.getBoundingClientRect(); // Butonun konumunu al
    modal.style.display = 'block';

   
});


// Modali kapatma
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Pencere dışına tıklayınca modalı kapatma
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

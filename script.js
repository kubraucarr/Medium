// Elemanları seçme
const openModalButtons = document.querySelectorAll('.openModalButton');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close-button');
const modalContent = document.getElementById('modalContent'); // Modal içeriği bölümü
const modalcontent=document.querySelector('.modal-content');




// Modali açma ve konumlandırma

openModalButtons.forEach(button => {
button.addEventListener('click', function(event){

    modalcontent.style.display='block';



    const rect = button.getBoundingClientRect(); // Butonun konumunu al
    modal.style.display = 'block';
    modal.style.top = `${rect.bottom + window.scrollY-80}px`; // Butonun hemen altına yerleştir
    modal.style.right = `${rect.right + window.scrollx+100}px`; // Butonun sol hizasında yerleştir

   
});
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

// Elemanları seçme
const openModalButtons = document.querySelectorAll('.openModalButton');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close-button');
const modalContent = document.getElementById('modalContent'); // Modal içeriği bölümü
const modalcontent=document.querySelector('.modal-content');
const publishButton = document.querySelector('.story-btn');
const textAreas = document.querySelectorAll('.text-area h1, .text-area h4');



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



textAreas.forEach(textArea => {
    textArea.addEventListener('click', () => {
        // Butonun opaklığını kaldır
        publishButton.style.opacity = '1';
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

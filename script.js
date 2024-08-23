// Elemanları seçme
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close-button');
const modalContent = document.getElementById('modalContent'); // Modal içeriği bölümü

// Modali açma ve konumlandırma
openModalButton.addEventListener('click', function() {

    modalContent.innerHTML = `
    <h2>Yeni Modal Başlık</h2>
    <p>Bu, modal penceresine tıklandığında gösterilecek dinamik içeriktir. Buraya istediğiniz HTML veya metni ekleyebilirsiniz.</p>
   
`;



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

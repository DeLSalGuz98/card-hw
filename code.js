const btnInvitar = document.getElementById('invitarBtn')
const containerCard = document.getElementById('container')
const descargarBtn = document.getElementById('descargarBtn')

console.log(descargarBtn.classList[1])
btnInvitar.addEventListener('click',()=>{
    let person
    person = prompt("Ingrese el nombre de la persona que quiere invitar")
    let textCard = `<h1>Halloween</h1>
    <h2>ZANQHA FEST PARTY</h2>
    <div class="invitation-card ">
    <p class="name">${person}</p>
    <p>Ven y únete a nosotros para una noche llena de sustos y diversión.</p>
    <p><strong>Fecha:</strong> 31 de octubre</p>
    <p><strong>Hora:</strong> 10:00 pm</p>
    <p><strong>Lugar:</strong> Urb. Bancopata - F8</p>
    <p>¡No olvides vestirte con tu mejor disfraz de Halloween!</p>
    <p>Valor de la entrada S/.10.00, incluye un shot + un sal de andrews</p>
    </div>`
    containerCard.innerHTML = textCard
    descargarBtn.classList.replace('hide', 'show')
    console.log(descargarBtn.classList)
})

descargarBtn.addEventListener('click', ()=>{
    descargarBtn.classList.replace('show', 'hide')
    const element = document.body; // Elemento que quieres convertir en imagen

    // Usa html2canvas para generar la imagen
    html2canvas(element).then(canvas => {
        // Crea una URL de la imagen
        const imgData = canvas.toDataURL('image/png');

        // Crea un enlace temporal y lo descarga como imagen
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'captura_halloween.png';
        link.click();
    });
})
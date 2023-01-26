const divCard = (personaje) => {
    const article =document.createElement('article');
    divCard.classList.add('card', 'm-3');
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    imagePerfil.src = personaje.post
    const cardBody = document.createElement('div');
    cardBody.classList.add('card__userDetails', 'd-flex', 'align-items-center', 'mb-2')
    const imagePerfil = document.createElement('img')
    imagePerfil.src = personaje.perfil

    const divPerfil = document.createElement('div');
    divPerfil.classList.add('d-flex', 'flex-column');

    const nombrePerfil = document.createElement('p');
    nombrePerfil.classList.add('fw-bold');
    nombrePerfil.textContent = element.firstName

    const fechaPerfil = document.createElement('p');
    fechaPerfil.classList.add('time');
    nombrePerfil.textContent = element.date

    const linkPost = document.createElement('a')

    const tituloPost = document.createElement('h3')
    tituloPost.classList.add('card-title', 'ms-4');
    tituloPost.textContent = personaje.titulo + ' ' + personaje.lastName;

    const listaElementos = document.createElement('ul');
    listaElementos.classList.add('d-flex', 'flex-wrap', 'p-0', 'ms-4')
    const listaItem1 = document.createElement('li')
    listaItem1.textContent = "#weekly"
    const listaItem2 = document.createElement('li')
    listaItem2.textContent =  "#webdev"
    const listaItem3 = document.createElement('li')
    listaItem3.textContent = "#beginners"

    const cardInteraccion = document.createElement('div');
    cardInteraccion.classList.add('card__buttons', 'd-flex', 'ms-4');

    const divInteraccion = document.createElement('div');
    divInteraccion.classList.add('interactions', 'd-flex')

    const divReacion = document.createElement('div');
    divReacion.classList.add('reactions', 'd-flex', 'me-4')

    const iconoReaccion = document.createElement('img');
    iconoReaccion.src = ''
    const pReaccion = document.createElement('p');

    iconoComentario.src = ''
    const pComentario = document.createElement('p')
    pComentario.textContent = 'Add Comment'




}
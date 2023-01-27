const divCard = (personaje) => {

    const article = document.createElement('article');
    article.classList.add('card', 'm-3');

    const image = document.createElement('img');
    image.classList.add('card-img-top');
    imagePerfil.src = personaje.post
    article.appendChild(imagePerfil)

    const cardBody = document.createElement('div');
    cardBody.classList.add('card__userDetails', 'd-flex', 'align-items-center', 'mb-2')
    article.appendChild(cardBody)

    const imagePerfil = document.createElement('img')
    imagePerfil.src = personaje.perfil;
    cardBody.appendChild(imagePerfil);

    const divPerfil = document.createElement('div');
    divPerfil.classList.add('d-flex', 'flex-column');
    cardBody.appendChild(divPerfil)

    const nombrePerfil = document.createElement('p');
    nombrePerfil.classList.add('fw-bold');
    nombrePerfil.textContent = element.firstName
    divPerfil.appendChild(nombrePerfil)

    const fechaPerfil = document.createElement('p');
    fechaPerfil.classList.add('time');
    fechaPerfil.textContent = element.date
    divPerfil.appendChild(fechaPerfil)

    const linkPost = document.createElement('a')
    linkPost.classList.add('')
    cardBody.appendChild(linkPost)

    const tituloPost = document.createElement('h3')
    tituloPost.classList.add('card-title', 'ms-4');
    tituloPost.textContent = personaje.titulo;
    linkPost.appendChild(tituloPost);

    const listaElementos = document.createElement('ul');
    listaElementos.classList.add('d-flex', 'flex-wrap', 'p-0', 'ms-4')
    cardBody.appendChild(listaElementos)

    const listaItem1 = document.createElement('li')
    listaItem1.textContent = "#weekly"
    listaElementos.appendChild(listaItem1)

    const listaItem2 = document.createElement('li')
    listaItem2.textContent =  "#webdev"
    listaElementos.appendChild(listaItem2)

    const listaItem3 = document.createElement('li')
    listaItem3.textContent = "#beginners"
    listaElementos.appendChild(listaItem3)

    const cardInteraccion = document.createElement('div');
    cardInteraccion.classList.add('card__buttons', 'd-flex', 'ms-4');
    cardBody.appendChild(cardInteraccion)

    const divInteraccion = document.createElement('div');
    divInteraccion.classList.add('interactions', 'd-flex')
    cardInteraccion.appendChild(divInteraccion)

    const divReaccion = document.createElement('div');
    divReaccion.classList.add('reactions', 'd-flex', 'me-4')
    divInteraccion.appendChild(divReaccion)

    const iconoReaccion = document.createElement('img');
    iconoReaccion.src = '../Assets/iconos/like.svg'
    divReaccion.appendChild(iconoReaccion)

    const pReaccion = document.createElement('p');
    pReaccion.textContent = 'Reactions'
    divReaccion.appendChild(pReaccion)

    const divComentario = document.createElement('div')
    divComentario.classList.add('d-flex')
    divInteraccion.appendChild(divComentario)

    const iconoComentario = document.createElement('img')
    iconoComentario.src = '../Assets/iconos/comment.svg'
    divComentario.appendChild(iconoComentario)

    const pComentario = document.createElement('p')
    pComentario.textContent = 'Add Comment'
    divComentario.appendChild(pComentario)

    return article;

}


export  { divCard }

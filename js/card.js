const divCard = (personaje) => {

    const article = document.createElement('article');
    article.classList.add('card', 'm-3');

    const image = document.createElement('img');
    image.classList.add('card-img-top');
    imagePerfil.src = personaje.post
    imagePerfil.appendChild(article)

    const cardBody = document.createElement('div');
    cardBody.classList.add('card__userDetails', 'd-flex', 'align-items-center', 'mb-2')
    cardBody.appendChild(article)

    const imagePerfil = document.createElement('img')
    imagePerfil.src = personaje.perfil;
    imagePerfil.appendChild(cardBody);

    const divPerfil = document.createElement('div');
    divPerfil.classList.add('d-flex', 'flex-column');
    divPerfil.appendChild(cardBody)

    const nombrePerfil = document.createElement('p');
    nombrePerfil.classList.add('fw-bold');
    nombrePerfil.textContent = element.firstName
    nombrePerfil.appendChild(divPerfil)

    const fechaPerfil = document.createElement('p');
    fechaPerfil.classList.add('time');
    fechaPerfil.textContent = element.date
    fechaPerfil.appendChild(divPerfil)

    const linkPost = document.createElement('a')
    linkPost.classList.add('')
    linkPost.appendChild(cardBody)

    const tituloPost = document.createElement('h3')
    tituloPost.classList.add('card-title', 'ms-4');
    tituloPost.textContent = personaje.titulo;
    tituloPost.appendChild(linkPost);

    const listaElementos = document.createElement('ul');
    listaElementos.classList.add('d-flex', 'flex-wrap', 'p-0', 'ms-4')
    listaElementos.appendChild(cardBody)

    const listaItem1 = document.createElement('li')
    listaItem1.textContent = "#weekly"
    listaItem1.appendChild(listaElementos)

    const listaItem2 = document.createElement('li')
    listaItem2.textContent =  "#webdev"
    listaItem2.appendChild(listaElementos)

    const listaItem3 = document.createElement('li')
    listaItem3.textContent = "#beginners"
    listaItem3.appendChild(listaElementos)

    const cardInteraccion = document.createElement('div');
    cardInteraccion.classList.add('card__buttons', 'd-flex', 'ms-4');
    cardInteraccion.appendChild(cardBody)

    const divInteraccion = document.createElement('div');
    divInteraccion.classList.add('interactions', 'd-flex')
    divInteraccion.appendChild(cardInteraccion)

    const divReaccion = document.createElement('div');
    divReaccion.classList.add('reactions', 'd-flex', 'me-4')
    divReaccion.appendChild(divInteraccion)

    const iconoReaccion = document.createElement('img');
    iconoReaccion.src = '../Assets/iconos/like.svg'
    iconoReaccion.appendChild(divReaccion)

    const pReaccion = document.createElement('p');
    pReaccion.textContent = 'Reactions'

    const divComentario = document.createElement('div')
    divComentario.classList.add('d-flex')
    divComentario.appendChild(divInteraccion)

    const iconoComentario = document.createElement('img')
    iconoComentario.src = '../Assets/iconos/comment.svg'
    iconoComentario.appendChild(divComentario)

    const pComentario = document.createElement('p')
    pComentario.textContent = 'Add Comment'
    pComentario.appendChild(divComentario)

    return article;

}


export  { divCard }

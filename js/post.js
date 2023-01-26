const post = (contenido) => {

    const card = document.createElement('div')
    card.classList.add('card', 'm-3');

    const imagePost = document.createElement('img')
    imagePost.classList.add('rounded-top')
    imagePost.src = contenido.image
    imagePost.appendChild(card)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    cardBody.appendChild(card)

    const containerPerfil = document.createElement('div')
    containerPerfil.classList.add('container')
    containerPerfil.appendChild(cardBody)

    const containerImage = document.createElement('div');
    containerImage.classList.add('container');
    containerImage.appendChild(containerPerfil);

    const imagePerfil = document.createElement('img');
    imagePerfil.classList.add('rounded-circle', 'float-start', 'me-4');
    imagePerfil.style.width = '3rem';
    imagePerfil.appendChild(containerPerfil);

    const descripcion = document.createElement('div');
    descripcion.classList.add('container')
    descripcion.appendChild(cardBody)

    const name = document.createElement('h5')
    name.appendChild(descripcion)

    const date = document.createElement('small')
    date.appendChild(descripcion)

    const titulo = document.createElement('h1')
    titulo.classList.add('card-title', 'mt-2')
    titulo.appendChild(cardBody)

    const linkTitulo = document.createElement('a')
    linkTitulo.classList.add('card-link', 'text-muted', 'text-decoration-none')
    linkTitulo.textContent = contenido.titulo
    linkTitulo.appendChild(titulo)

    const hashtags = document.createElement('ul');
    hashtags.classList.add('d-flex', 'flex-wrap', 'p-0', 'ms-4')
    hashtags.appendChild(cardBody)

    const listaItem1 = document.createElement('li')
    listaItem1.textContent = "#weekly"
    listaItem1.appendChild(hashtags)

    const listaItem2 = document.createElement('li')
    listaItem2.textContent =  "#webdev"
    listaItem2.appendChild(hashtags)

    const listaItem3 = document.createElement('li')
    listaItem3.textContent = "#beginners"
    listaItem3.appendChild(hashtags)

    const postContenido = document.createElement('div')
    postContenido.classList.add('container')
    postContenido.appendChild(cardBody)

    const autorName = document.createElement('h5')
    autorName.classList.add('pt-3')
    autorName.textContent = 'Author:' + contenido.name;
    autorName.appendChild(postContenido)

    const article = document.createElement('p')
    article.textContent = contenido.post;
    article.appendChild(postContenido)

    return card;

}

export { post }


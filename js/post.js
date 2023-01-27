const post = (contenido) => {

    const card = document.createElement('div')
    card.classList.add('card', 'm-3');

    const imagePost = document.createElement('img')
    imagePost.classList.add('rounded-top')
    imagePost.src = contenido.image
    card.appendChild(imagePost)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.appendChild(cardBody)

    const containerPerfil = document.createElement('div')
    containerPerfil.classList.add('container')
    cardBody.appendChild(containerPerfil)

    const containerImage = document.createElement('div');
    containerImage.classList.add('container');
    containerPerfil.appendChild(containerImage);

    const imagePerfil = document.createElement('img');
    imagePerfil.classList.add('rounded-circle', 'float-start', 'me-4');
    imagePerfil.style.width = '3rem';
    containerPerfil.appendChild(imagePerfil);

    const descripcion = document.createElement('div');
    descripcion.classList.add('container')
    cardBody.appendChild(descripcion)

    const name = document.createElement('h5')
    descripcion.appendChild(name)

    const date = document.createElement('small')
    descripcion.appendChild(date)

    const titulo = document.createElement('h1')
    titulo.classList.add('card-title', 'mt-2')
    cardBody.appendChild(titulo)

    const linkTitulo = document.createElement('a')
    linkTitulo.classList.add('card-link', 'text-muted', 'text-decoration-none')
    linkTitulo.textContent = contenido.titulo
    titulo.appendChild(linkTitulo)

    const hashtags = document.createElement('ul');
    hashtags.classList.add('d-flex', 'flex-wrap', 'p-0', 'ms-4')
    cardBody.appendChild(hashtags)

    const listaItem1 = document.createElement('li')
    listaItem1.textContent = "#weekly"
    hashtags.appendChild(listaItem1)

    const listaItem2 = document.createElement('li')
    listaItem2.textContent =  "#webdev"
    hashtags.appendChild(listaItem2)

    const listaItem3 = document.createElement('li')
    listaItem3.textContent = "#beginners"
    hashtags.appendChild(listaItem3)

    const postContenido = document.createElement('div')
    postContenido.classList.add('container')
    cardBody.appendChild(postContenido)

    const autorName = document.createElement('h5')
    autorName.classList.add('pt-3')
    autorName.textContent = 'Author:' + contenido.name;
    postContenido.appendChild(autorName)

    const article = document.createElement('p')
    article.textContent = contenido.post;
    postContenido.appendChild(article)

    return card;

}

export { post }


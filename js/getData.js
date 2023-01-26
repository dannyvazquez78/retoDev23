//https://kodemia-1543c-default-rtdb.firebaseio.com/.json


const parseInfo = (info) => {
    const list = Object.entries(info);
    const newList = list.map((elemento) => {
        const infoParsed = {
            id: elemento[0],
            ...elemento[1],
        }
        return infoParsed;
    })
    return newList;
}

const get = async(referenciaHTML) => {
    try {
        const url = 'https://kodemia-1543c-default-rtdb.firebaseio.com/.json';
        const response = await fetch(url);
        const result = await response.json();
        parseInfo(result).forEach(element => {
            referenciaHTML.insertAdjacentHTML('afterbegin', `<article class="card m-3 " >
            <img src="../Assets/Imagenes/article-cover.webp" class="card-img-top" alt="image article">
            <div class="card-body">
              <div class="card__userDetails d-flex align-items-center mb-2">
                <img src="../Assets/Imagenes/vincent.webp" alt="profile picture">
                <div class="d-flex flex-column">
                  <p class="fw-bold">${element.firstName}</p>
                  <p class="time">Posted on 16 nov</p>
                </div>
              </div>
              <a href="./src/article.html">
                <h3 class="card-title ms-4">Weekly web development resources #124</h4>
              </a>
              <ul class="d-flex flex-wrap p-0 ms-4">
                <li>
                  <a href="">
                    #weekly
                  </a>
                </li>
                <li>
                  <a href="">
                    #webdev
                  </a>
                </li>
                <li>
                  <a href="">
                    #beginners
                  </a>
                </li>
                </ul>
              <div class="card__buttons d-flex ms-4">
                <div class="interactions d-flex">
                  <div class="reactions d-flex me-4">
                    <img src="../Assets/iconos/like.svg" alt="like icon">
                    <p>2 reactions</p>
                  </div>
                  <div class="comments d-flex">
                    <img src="../Assets/iconos/comment.svg" alt="comment icon">
                    <p>Add Comment</p>
                  </div>
                </div>
                <div class="tools d-flex">
                  <p>2 min read</p>
                  <img src="../Assets/iconos/save.svg" alt="save icon">
                </div>
              </div>
            </div>
          </article>`)
        });


        <div class="card">
                    <img class="rounded-top" src="./images/img-3.webp" alt="cat photo">
                    <div class="card-body">
                        <div class="container">
                            <div class="container">
                                <img src="./images/img-4.jpeg" class="rounded-circle float-start me-4" style="width: 3rem;" alt="Tia Eastwood photo">
                            </div>    
                            <div class="container">
                                <h5>
                                    Necati Özmen
                                </h5>
                                <small>
                                    Nov 19 • Originally published at refine.dev
                                </small>
                            </div>
                        </div>
                        <h1 class="card-title mt-2">
                            <a href="#" id="title-link">
                                How to Create Dynamic Forms in React CRUD app with Ant Design
                            </a>    
                        </h1>
                        <div class="card-body">
                            <a href="#" class="card-link text-muted text-decoration-none" id="hashtag-link">
                                #webdev
                            </a>
                            <a href="#" class="card-link text-muted text-decoration-none" id="hashtag-link">
                                #react
                            </a>
                            <a href="#" class="card-link text-muted text-decoration-none" id="hashtag-link">
                                #tutorial
                            </a>
                            <a href="#" class="card-link text-muted text-decoration-none" id="hashtag-link">
                                #opensource
                            </a>
                        </div>

                        <div class="container">
                          <h5 class="pt-3">
                            Author: <a href="#">David Omotayo</a>
                          </h5>
                          <h3 class="pt-3">
                            Introduction
                          </h3>
                          <p class="pt-2">
                            Forms are one of the most adaptable elements in web development. They come in distinct structures for various use cases.
                          </p>
                          <p class="pt-2">
                            However, due to the sporadic complexity of the information they collect, they tend to grow larger with several fields, which can be a big turnoff for most users.
                          </p>
                          <p class="pt-2">
                            To solve this user experience issue, developers devised a dynamic form, a simple yet complex form that can grow in size on command.
                          </p>
                          <p class="pt-2">
                            This guide will teach us how to create a dynamic form using Ant design and refine's React template.
                          </p>
                          <p class="pt-2">
                            Steps we'll cover:
                          </p>
                          </div>

        

    } catch (error) {
        console.log(error)
    }

}

const post = async(formulario) => {
    try {
        const url = 'https://kodemia-1543c-default-rtdb.firebaseio.com/.json';
        const response = await fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=UTF-8'},
            body: JSON.stringify(formulario),
        })
    } catch (error){
        console.log(error)
    }
}

export { post, get }
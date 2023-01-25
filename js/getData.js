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
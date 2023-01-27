import { post, getAll } from './getData.js';
import { divCard } from  './card.js';

const article = document.getElementById('articles');

const persona = {
    firstName: "Daniel",
    date: "Vazquez",
    titulo: "javascript"

}
article.appendChild(divCard(persona))

// getAll(articles);





















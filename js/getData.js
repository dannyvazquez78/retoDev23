//https://kodemia-1543c-default-rtdb.firebaseio.com/.json
import { divCard } from './card.js'

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

const getAll = async(referenciaHTML) => {
  try {
      const url = 'https://kodemia-1543c-default-rtdb.firebaseio.com/.json';
      const response = await fetch(url);
      const result = await response.json();
      const data = parseInfo(result);
      console.log(result);
      data.forEach(element => {
        referenciaHTML.appendChild(divCard(element));
          console.log(element);
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


const get = async(imagen, titulo, texto) => {
try {
    const url = 'https://kodemia-1543c-default-rtdb.firebaseio.com/-NMaO5gXVdBVykcxE3_P.json';
    const response = await fetch(url);
    const result = await response.json();
    titulo.textContent = result.firstName;
    texto.value = result.lastName;
} catch (error) {
    console.log(error)
}};

const put = async(imagen, titulo, texto) => {
  try {
      const url = 'https://kodemia-1543c-default-rtdb.firebaseio.com/-NMaO5gXVdBVykcxE3_P.json';
      const response = await fetch(url);
      const result = await response.json();
      titulo.textContent = result.firstName;
      texto.value = result.lastName;
  } catch (error) {
      console.log(error)
  }};



export { post, getAll, get, put }
//Variables que obtinenen los enlaces de miniaturas y divs contenedores con las imagenes grandes
let imgs = document.querySelectorAll('.gallery-list-img');
let img_content = document.querySelectorAll('.gallery-content-img');



//for que recorre el img-content y  oculta las imagenes en grande y solo deja visible una
for(let i = 0 ; i < img_content.length; i++){
    img_content[i].classList.add('img-content-hidden');
}
//CODIGO Inicialmente se muestra la primera imagen en grande y miniaturas de todas las imágenes de la galería

// muestra la primera imagen en grande y la miniatura seleccionada
img_content[0].classList.remove('img-content-hidden');
imgs[0].classList.add('img-active');
//-------------------------------------------------------------------------------------------------------------------

//CODIGO Al hacer click en una miniatura, la imagen grande cambia
//CODIGO Se destaca la imagen actual en la lista de miniaturas

// funcion con un for   que recorre todas las minaturas, al darle clik (evento) 
//pueda vizualizarse solo una imagen en grande que coincide con el id  de las miniaturas
//por eso lo hicimos con href
for (let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click', (event) => {
        event.preventDefault(); // elimina la funcionalidad default de los href
        const id = event.currentTarget.getAttribute('href').substring(1); // elimina el # de los id
        for(let i = 0 ; i < img_content.length; i++){
            img_content[i].classList.add('img-content-hidden');
            if (img_content[i].getAttribute('id') == id){   // muestra solo la imagen grande que coincida con el id de la miniatura
                img_content[i].classList.remove('img-content-hidden');
            }
        }
        for(let i = 0; i < imgs.length; i++){
            imgs[i].classList.remove('img-active');
        }
        event.currentTarget.classList.add('img-active');
    });
}




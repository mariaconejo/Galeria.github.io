//Variables que obtinenen los enlaces de miniaturas y el div contenedor con la imagen en grande
const links = document.querySelectorAll('.miniature');
const bigImage = document.getElementById('bigImage');

//Funcion principal de la Galeria
for (let i = 0; i < links.length; i++){ 
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        //De esta forma se abstrae la ubicacion de una imagen y se modifica en el div grande (src)
        let url = event.currentTarget.getAttribute('src');
        bigImage.src = `${url}`;

        //De esta forma se aplica un estilo para cada miniatura en donde se da click
        for(let i = 0 ; i < links.length; i++){
            links[i].classList.add('img-content-hidden');
            if (links[i].getAttribute('src') == url){   
                links[i].classList.remove('img-content-hidden');
            }
        }
        for(let i = 0; i < bigImage.length; i++){
            bigImage[i].classList.remove('img-active');
        }
        event.currentTarget.classList.add('img-active');
    });
    
}


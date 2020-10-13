Autores María José Conejo Leiva, Jeampaul Salazar Castillo.

Galería de imágenes

● Al hacer click en una miniatura, la imagen grande cambia:

Todas la imágenes estarán contenidas en una carpeta llamada img, mediante el JS modificaremos la ubicacion de las imagenes con una funcion que posea un ciclo concatenando el src de la miniatura gracias al evento click, con el contenedor de la visualización grande utilizando ".getAttribute" y sobreescribiendo el valor de la imagen que esta por default. 


● Se destaca la imagen actual en la lista de miniaturas:

Mediante la función antes mencionada con un nuevo ciclo se le muestra o no al usuario un estilo removiendo y colocando clases que permitan que a la imagen que se le da click, resalte entre las demás, en la previsualización. Esto se logró utilizando la clase img-active del css con filter:blur para destacar las miniaturas, cuando se seleccionen.
Autores María José Conejo Leiva, Jeampaul Salazar Castillo.

Galería de imágenes

● Inicialmente se muestra la primera imagen en grande y miniaturas de todas las imágenes de la galería:

Todas la imágenes estarán presentes en el HTML, sin embargo con el JS dejaremos visible únicamente la primera imagen de la previsualización y resaltada con un estilo, además en el gallery-content se vera dicha imagen en macro. Esto se logró utilizando classList add y classList remove, con clases en el css que manejaban la visibilidad, además con un for se recorrió el gallery-content, para manejar dicha visibilidad y ocultar las otras imágenes en grande, con img_content[0] y imgs[0], para visualizar desde un principio la primera imagen en grande y la miniatura seleccionada.

● Al hacer click en una miniatura, la imagen grande cambia:

Se crea una función mediante la cual se oculten las imágenes que no queremos ver interviniendo en el HTML añadiendo y quitando características, en otras palabras que solo se visualice la imagen a la que le damos click (evento).Esto se logró utilizando href en el gallery-prev, donde están la lista ul con las miniaturas y id en gallery-content donde están todas las imágenes en grande, las enlazamos colocando la misma nomenclatura en href y id, al seleccionar la miniatura nos redirigía a la grande.

● Se destaca la imagen actual en la lista de miniaturas:

Mediante la función antes mencionada se le muestra o no al usuario un estilo que permita que la imagen seleccionada sea el punto focal en la previsualización. Esto se logró utilizando la clase img-active del css para destacar las miniaturas, cuando se seleccionen usándolo en conjunto con classList para agregar los estilos con js.
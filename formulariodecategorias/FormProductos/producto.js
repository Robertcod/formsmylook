document.addEventListener('DOMContentLoaded', function () {

    /* INPUTS DEL FORMULARIO */
    const formElements = {
        nombreProd: document.querySelector('.camposInput[placeholder="Nombre del producto..."]'),
            descProducto: document.querySelector('.camposInput[placeholder="Agrega una descripción..."]'),
        imgProd: document.querySelector('.camposInput[type="file"]'),
        formulario: document.querySelector('.formulario')
    };

    /* ELEMENTOS QUE SE VAN A MOSTRAR */
    const previewElements = {
        nombreProd: document.getElementById('vistaNombre'),
        descProducto: document.getElementById('vistaDesc'),
        imgPreview: document.getElementById('vistaImg')
    };

    /* ACTUALIZA LA VISTA */
    function actualizarVistaPrevia() {
        previewElements.nombreProd.textContent = formElements.nombreProd.value || 'Nombre del Producto';
        previewElements.descProducto.textContent = formElements.descProducto.value || 'Descripción: ';
    }

    /* INPUTS NUM */
    [formElements.nombreProd, formElements.descProducto].forEach(element => {
        if (element) {
            element.addEventListener('input', actualizarVistaPrevia);
        }
    });

    /* VISTA PARA LA IMAGEN */
    formElements.imgProd.addEventListener('change', function () {
        const file = formElements.imgProd.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElements.imgPreview.src = e.target.result;
                previewElements.imgPreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            previewElements.imgPreview.style.display = 'none';
        }
    });
});

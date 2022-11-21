
window.addEventListener("load", buildCards);

function buildCards() {
    const $cardContainer = document.getElementById("container_cards");
    let data = JSON.parse(localStorage.getItem("lista_anuncios"));
    let contador = 0;

    //va queriendo. No se que tan necesario es el div row
    let $divRow = document.createElement("div");
    $divRow.classList.add("row");
    //let $divCuatro = document.createElement("div");
    //$divCuatro.classList.add("col-4");
    $cardContainer.appendChild($divRow);
    //$divRow.appendChild($divCuatro);

    if(data != null){
        data.forEach(element => {
            let $card = document.createElement("div");
            $card.classList.add("card");
            $card.innerHTML = `
                <h3> ${element.titulo} </h3>
                <h4> ${element.descripcion} </h4>
                <ul class="ul-card">
                    <li>Precio: $${element.precio}</li><br>
                    <li><img src="./imagenes/icono_puerta.png" alt="icono puerta" class="icono"> ${element.puertas} puertas </li>
                    <li><img src="./imagenes/icono_kms.png" alt="icono kms" class="icono"> ${element.kms} KMs</li>
                    <li><img src="./imagenes/icono_potencia.png" alt="icono potencia" class="icono"> ${element.potencia} de potencia</li>
                    </ul>
                    <button class="btn_ver_vehiculo">Ver Vehiculo</button>`

            $divRow.appendChild($card);

            $divRow.appendChild($card);
            //$cardContainer.appendChild($card);
            contador++;
        });
    }
}

function destroyCards() {
    const container = document.getElementById("container_cards");
    while (container.lastElementChild) 
    {
        container.removeChild(container.lastElementChild);
    }
}

function refreshCards() {
    destroyCards();  
    buildCards();
}

window.addEventListener("click", refreshCards);




let prueba = "";
let imag;
function nextPage() {

    prueba = document.getElementById("entrada").value

    fetch(`https://pokeapi.co/api/v2/pokemon/${prueba}`)  //Concatenar la variable prueba
        .then(res => res.json())                                        //recoger los datos de la API
        .then(json => magia(json));

    function magia(url) {
        //console.log(`${url.base_experience}`)


        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Experiencia', 'Habilidad', 'Peso', 'Altura'],
                datasets: [{
                    label: 'Pokemon',
                    data: [`${url.base_experience}`, `${url.order}`, `${url.weight}`, `${url.height}`],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)'
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });

        imag = url.sprites.front_default
        console.log(imag)
        const image = document.createElement('img')
        image.src  = imag
        document.querySelector('.pokemon').appendChild(image)


    }
}


// function pokemon(url) {
//     console.log(`${url.name}`)
// }
let prueba = "";
function nextPage() {

    prueba = document.getElementById("entrada").value

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${prueba}`)  //Concatenar la variable prueba
        .then(res => res.json())                                        //recoger los datos de la API
        .then(json => magia(json));

        function magia(url) {
            console.log(`${url.base_experience}`)
        
        
        const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Experiencia', 'Habilidad', 'Peso', 'Altura'],
        datasets: [{
            label: '# of Votes',
            data: [`${url.base_experience}`, `${url.order}` ,`${url.weight}`,`${url.height}`],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64x)'
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
}
}


// function pokemon(url) {
//     console.log(`${url.name}`)
// }
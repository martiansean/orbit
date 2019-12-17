function getChar(num) {
    $.get(`https://swapi.co/api/starships/${num}`, function(data) {
        $('#info').append(`
            <div class="ship">
                <p>Name: ${data.name}</p>
                <p>Model: ${data.model}</p>
                <p>Manufacturer: ${data.manufacturer}</p>
            </div>
        `)
    })
}
let i
for(i = 1; i < 10; i++){
    getChar(i)
}

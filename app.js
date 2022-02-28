const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value
    console.log(searchValue)

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
}

const showPlayerDetails = (players) => {
    for (const player of players) {
        const parent = document.getElementById('players-container')
        const div = document.createElement('div')
        div.innerHTML = `  <div class="card  border p-5">
    <div class="pro-pic w-50">
        <img class="w-25" src="${player.strThumb}">
    </div>
    <h2>Name:${player.strPlayer}</h2>
    <h5>Country:${player.strNationality}</h5>
    <p></p>
    <div class="all-button">
        <button class="btn btn-danger">Delete</button>
        <button class="btn btn-success">Details</button>
    </div>
</div>`
        parent.appendChild(div)
    }

}
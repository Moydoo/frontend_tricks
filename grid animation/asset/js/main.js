const wrapper = document.getElementById('tiles');
let columns = 0,
    rows = 0,
    toggled = false;

let count = -1;

const handleOnClick = index => {

    toggled = !toggled;

    count += 1;
    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })

}


const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.onclick = e => handleOnClick(index);

    return tile;
}

const createTiles = quantity => {

    // why not to simplify it by just:
    // for (let i = 0; i < quantity; i++) {
    //     wrapper.appendChild(createTile(i));
    // }

    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}


const createGrid = () => {
    wrapper.innerHTML = "";

    // updating the amount of columns and rows (basing that 1 tile is 50x50 px)
    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);

    // passing variables to CSS 
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);


    createTiles(columns * rows);
}

createGrid();
window.onresize = () => createGrid();



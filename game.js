const CATEGORIES = [
    {id:"maantieto", name:"Maantieto"},
    {id:"yleistieto", name:"Yleistieto"},
    {id:"historia", name:"Historia"},
    {id:"kulttuuri", name:"Kulttuuri"},
    {id:"tiede", name:"Tiede"},
    {id:"urheilu", name:"Urheilu"},
]

const BOARD_SIZE = 18;

const boardElement = document.querySelector("#board");

createBoard();

function createBoardCoordinates(){
    const coordinates = [];

    //Ylärivi
    for(let column = 1; column <= 7; column += 1){
        coordinates.push({row:1, column});
    }
    //oikea reuna
    for(let row = 2; row <= 4; row +=1){
        coordinates.push({row, column: 7});
    }

    //alarivi
    for(let column = 6; column >= 1; column -=1){
        coordinates.push({row:4, column});
    }

    //vasen reuna
    for(let row = 3; row >= 2; row -= 1){
        coordinates.push({row, column: 1});
    }

    console.log(coordinates);
    return coordinates;
}

function createBoard(){

    const coordinates = createBoardCoordinates();

    for(let index = 0; index < BOARD_SIZE; index += 1){

        const category = CATEGORIES[index % CATEGORIES.length];
        //console.log(category);
        const coordinate = coordinates[index];
        const space = document.createElement("div");
        space.className = "space";
        space.dataset.spaceIndex = index;

        space.style.gridColumn = coordinate.column;
        space.style.gridRow = coordinate.row;
        space.dataset.category = category.id;
        space.textContent = category.name;
        boardElement.append(space);
    }

}
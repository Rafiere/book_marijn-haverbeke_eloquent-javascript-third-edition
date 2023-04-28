/* Project - A Robot */

console.log("\nProject - A Robot\n")

/* Esse array de strings contém as estradas de Meadowfield. */

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges){
    let graph = Object.create(null);

    function addEdge(from , to){
        if(graph[from] == null){
            graph[from] = [to]
        } else {
            graph[from].push(to);
        }
    }

    for(let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to)
        addEdge(to, from)
    }

    return graph;
}

/* Nesse objeto, temos um grafo com cada localidade da cidade e quais localidades podem ser acessadas
* através de uma localidade específica. */
const roadGraph = buildGraph(roads)

console.log(roadGraph)

class VillageState{
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    /* Se o destino puder ser acessado do local atual, ele acessará, senão, ele retornará o estado
    * antigo e falará que o movimento atual foi inválido. */
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

/* Nessa configuração, o robô andará de forma aleatória. */
runRobot(VillageState.random(), randomRobot);

/* Estamos começando no "Post Office". */
let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

/* Estamos nos movendo do "Post Office" para a "Alice's House". */
let next = first.move("Alice's House");

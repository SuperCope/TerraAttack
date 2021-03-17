class DataVillage {
    constructor() {
        this.data = new Map()

        this.data.set("1", {
            id: "1",
            nom: "Village Depart",
            nbHabitants: "0",
            pointVies: "100",
            niveau: "1",
            nbNourriture: "0",
            nbBois: "0",
            nbOr: "0",
            nbArgile: "0",
            nbPierre: "0",
            idRempart: [],
            idPrisonnier: []
        })
        this.data.set("2", {
            id: "2",
            nom: "Village 2",
            nbHabitants: "2",
            pointVies: "100",
            niveau: "1",
            nbNourriture: "4",
            nbBois: "0",
            nbOr: "2",
            nbArgile: "3",
            nbPierre: "0",
            idRempart: [],
            idPrisonnier: []
        })
        this.data.set("3", {
            id: "3",
            nom: "Village Ouest",
            nbHabitants: "6",
            pointVies: "100",
            niveau: "1",
            nbNourriture: "7",
            nbBois: "0",
            nbOr: "0",
            nbArgile: "0",
            nbPierre: "0",
            idRempart: [],
            idPrisonnier: []
        })


        this.data.set("4", {
            id: "4",
            nom: "Village Nord",
            nbHabitants: "6",
            pointVies: "100",
            niveau: "1",
            nbNourriture: "7",
            nbBois: "0",
            nbOr: "0",
            nbArgile: "0",
            nbPierre: "0",
            idRempart: [],
            idPrisonnier: []
        })
        this.data.set("5", {
            id: "5",
            nom: "Village Sud",
            nbHabitants: "0",
            pointVies: "100",
            niveau: "1",
            nbNourriture: "0",
            nbBois: "0",
            nbOr: "4",
            nbArgile: "0",
            nbPierre: "0",
            idRempart: [],
            idPrisonnier: []
        })
        this.data.set("6", {
            id: "6",
            nom: "Village Nord",
            nbHabitants: "6",
            pointVies: "100",
            niveau: "1",
            nbNourriture: "7",
            nbBois: "0",
            nbOr: "0",
            nbArgile: "0",
            nbPierre: "0",
            idRempart: [],
            idPrisonnier: []
        })
        this.data.set("7", {
            id: "7",
            nom: "Village Est",
            nbHabitants: "0",
            pointVies: "100",
            niveau: "1",
            nbNourriture: "0",
            nbBois: "0",
            nbOr: "0",
            nbArgile: "0",
            nbPierre: "1",
            idRempart: [1, 2, 3, 4, 5, 6],
            idPrisonnier: [1]
        })
    }
    getData() {
        return this.data
    }
}
export { DataVillage }
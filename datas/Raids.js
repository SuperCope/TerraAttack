class DataRaids {
    constructor() {
        this.data = new Map()

        this.data.set("1", {
            id: 1,
            nom: "Raid 1",
            temps: 20,
            mobs: [1,2,3,4],
            pointVies: 100,
            type: 2
        })
        this.data.set("2", {
            id: 2,
            nom: "Raid 2",
            temps: 80,
            mobs: [3,5,6],
            pointVies: 100,
            type: 3
        })
        this.data.set("3", {
            id: 3,
            nom: "Raid 3",
            temps: 80,
            mobs: [1,2,4,5],
            pointVies: 100,
            type: 3
        })
        this.data.set("4", {
            id: 4,
            nom: "Raid 4",
            temps: 80,
            mobs: [2,3],
            pointVies: 100,
            type: 2
        })
    }
    getData() {
        return this.data
    }
}
export { DataRaids }
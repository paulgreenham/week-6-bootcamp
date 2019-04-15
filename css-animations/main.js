class Iterate {
    constructor (i) {
        this.i = i
    }
}

let iterator = new Iterate(0)

$("#nav-icon").on("click", function () {
    $("#nav-bar").attr("style", `margin-left: ${25 * iterator.i}`)
    iterator.i = Math.abs(iterator.i) - 1
})
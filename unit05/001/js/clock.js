class clock extends Date {
    constructor(element) {
        var self = this
        this.element = element
        this.now = new Date()
    }
}

clock.prototype.build = () => {

}
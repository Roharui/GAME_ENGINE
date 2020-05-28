
const draw = {
    draw(obj){
        this.clear()
        obj.forEach(x => {
            this.arc(x.loc, x.size)
        })
    },

    line(x, y){
        ctx.beginPath()
        ctx.moveTo(x[0], x[1])
        ctx.lineTo(y[0], y[1])
        ctx.stroke()
    },

    arc(loc, size) {
        ctx.beginPath()
        ctx.arc(loc.x, loc.y, size, 0, 2 * Math.PI)
        ctx.stroke()
    },

    clear() {
        ctx.clearRect(0, 0, canvas.attr('width'), canvas.attr('height'));
    }
}
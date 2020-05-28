
var canvas = null;
var ctx = null

var cvs_size = { x: 0, y : 0}

const frame = 10

const load_fnc = {

    canvas_load() {
        canvas = $('#main')
        ctx = canvas[0].getContext('2d')
    },

    canvas_screen(){
        canvas.attr('width', document.body.clientWidth) //document.width is obsolete
        canvas.attr('height',  940) //document.height is obsolete

        cvs_size.x = document.body.clientWidth
        cvs_size.y = 940
    }
}

const run = {
    
}

$(document).ready(function(){
    Object.values(load_fnc).forEach(x => {x()})
    Object.keys(canvas_event).forEach(x => {
        canvas.bind(x, canvas_event[x])
    })
    setInterval(function(){obj.run()}, frame)
})
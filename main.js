
var canvas = null;
var ctx = null

var cvs_size = { x: 0, y : 0}

const frame = 1000/60

const load_fnc = {

    canvas_load() {
        canvas = $('#main')
        ctx = canvas[0].getContext('2d')
    },

    canvas_screen(){
        canvas.attr('width', document.body.clientWidth) //document.width is obsolete
        canvas.attr('height',  850) //document.height is obsolete

        cvs_size.x = document.body.clientWidth
        cvs_size.y = 850
    }
}

function random(min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
  }

$(document).ready(function(){
    Object.values(load_fnc).forEach(x => {x()})
    Object.keys(canvas_event).forEach(x => {
        canvas.bind(x, function(e){canvas_event[x](e)})
    })
    setInterval(function(){obj.run()}, frame)
})

var move = {x:0, y:0}

const canvas_event = 
{ 
    c : false,

    load : () => {
        
    },

    mousemove : (e) => {
        move = {
            x : e.originalEvent.movementX,
            y : e.originalEvent.movementY
        }
    },

    mouseup : (e) => {
        let loc = {x : e.offsetX, y : e.offsetY}
        obj.Arc(loc, 20, move)
        console.log(move)
    }
}

function createGole(){
    let size = 100

    let loc = {
        x : random(0, cvs_size.x - size),
        y : random(0, cvs_size.y - size)
    }

    obj.gole = obj.Rect(loc, size, 'blue')

    return loc
}
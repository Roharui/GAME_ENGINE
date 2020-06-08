
var move = {x:0, y:0}

const canvas_event = 
{ 
    c : false,
    s_obj : null,

    load : () => {
        
    },

    mousedown : (e) => {
        let loc = {x : e.offsetX, y : e.offsetY}
        this.s_obj = obj_controller.select_obj(loc)
        if(this.s_obj != undefined){ 
            this.c = true 
            this.s_obj.ignore = true
        }
    },

    mousemove : (e) => {
        if(this.c){
            s_obj.loc = {x : e.offsetX, y : e.offsetY}
            return
        }
        move = {
            x : e.originalEvent.movementX,
            y : e.originalEvent.movementY
        }
    },

    mouseup : (e) => {
        if(this.c){ 
            this.c = false;
            this.s_obj.ignore = false
            return;
        }
        let loc = {x : e.offsetX, y : e.offsetY}
        obj.Arc(loc, 20, move)
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
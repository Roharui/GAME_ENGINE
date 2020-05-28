
const canvas_event = 
{ 
    load : () => {
        
    },

    click : (e) => {
        let loc = {x : e.offsetX, y : e.offsetY}
        obj.Arc(loc, 20)
    }
}
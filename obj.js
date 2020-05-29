const obj = {
    objs : Array(),
    gole : null,
    time : 0,

    run(){
        obj.objs.forEach(x => {
            x.do()
        })

        draw.draw(obj.objs)
    },

    clear(){
        this.objs = Array()
    },

    Arc(loc, size, vec) {
        this.objs.push(new this.arc_obj(loc, size, vec))
    },

    Rect(loc, size, color){
        let result = new this.rect_obj(loc, size, color)
        this.objs.push(result)
        return result
    },

    arc_obj : function(loc, size, vec){
        this.loc = loc
        this.size = size

        this.vec = vec
        this.cs = 0

        this.do = function() {
            if(distance.length > 500){
                obj.clear()
            }

            this.cs += frame / 1000
            vector(this)
            crash(this)
            //getDistance(this)
        }

        this.draw = function() {draw.arc(this.loc, this.size)}

        return this
    },

    rect_obj : function(loc, size, color){
        this.loc = loc
        this.size = size
        this.color = color

        this.do = function(){}
        this.draw = function() {draw.rect(this.loc, this.size, this.color)}

        return this
    }
}

function seta(vec){
    let a = vec.y
    let b = vec.x
    let c = Math.sqrt((a * a) + (b * b)) + 0.0000000000001
    return {sin : -Math.abs(a / c), cos : Math.abs(b / c), tan : a/b}
}

function crash(ob){
    if(ob.loc.x - ob.size < 0){
        ob.vec.x = -ob.vec.x * 0.3
        ob.vec.y = ob.vec.y * 0.3
        ob.loc.x = ob.size
    }

    if(ob.loc.x + ob.size > cvs_size.x){
        ob.vec.x = -ob.vec.x * 0.3
        ob.vec.y = ob.vec.y * 0.3
        ob.loc.x = cvs_size.x - ob.size
    }

    if(ob.loc.y + ob.size > cvs_size.y)
    {
        ob.loc.y = cvs_size.y - ob.size
        ob.vec.x = ob.vec.x * 0.3
        ob.vec.y = -ob.vec.y * 0.3
    }

    if(ob.loc.y - ob.size < 0){
        ob.loc.y = ob.size
        ob.vec.x = ob.vec.x * 0.3
        ob.vec.y = -ob.vec.y * 0.3
    }
}

function vector(ob){
    let s = seta(ob.vec)

    let vy = ob.vec.y * s.sin - 9.8 * ob.cs 
    let vx = ob.vec.x * s.cos

    ob.loc.y -= vy
    ob.loc.x += vx
}

function getDistance(ob){
    let ox = ob.loc.x
    let oy = ob.loc.y

    let gx = obj.gole.loc.x
    let gy = obj.gole.loc.y

    let x = ox - gx
    let y = oy - gy

    distance.push(Math.sqrt((x * x) + (y * y)))
}
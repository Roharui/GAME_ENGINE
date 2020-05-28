const obj = {
    objs : Array(),

    run(){
        obj.objs.forEach(x => {
            x.do()
        })

        draw.draw(obj.objs)
    },

    Arc(loc, size) {
        this.objs.push(new this.arc_obj(loc, size))
    },

    arc_obj : function(loc, size){
        this.loc = loc
        this.size = size

        this.cs = 0

        this.do = function() {
            hh = 9.8 * this.cs
            this.cs += frame/ 1000

            if(this.loc.y + hh + size > cvs_size.y)
                this.loc.y = cvs_size.y - size
            else
                this.loc.y += hh
        }

        return this
    }
}
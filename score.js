
var distance = Array()

function doQ_learn(x,y,vx, vy){
    distance = Array()
    obj.Arc({x:x, y:y}, 10, {x:vx, y:vy})
}

function getCost(){
    return Math.min.apply(null, distance)
}
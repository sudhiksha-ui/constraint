class Chain{
constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        length:0.9,
        stiffness:0.4
    }
    this.chain=Matter.Constraint.create(options)
    World.add(world,this.chain)
}
display(){
    var c=this.chain.bodyA.position
    var d=this.chain.bodyB.position
    line(c.x,c.y,d.x,d.y)
}

}

class Stone
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2

			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(x, y, 10,10);
		World.add(world, this.body);
		this.image = loadImage("Pluckingmangoes/stone.png");

	}
	display()
	{
			
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER)
			//strokeWeight(3);
			//fill("red")
			image(this.image,0,0,this.r, this.r);
			pop()
			
			
			
	}

}
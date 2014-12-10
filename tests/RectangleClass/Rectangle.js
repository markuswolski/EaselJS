(function() {

function Rectangle(width, height, outlineColour, fillColour) {
	this.Container_constructor();
	
	this.width = width;
	this.height = height;
	this.outlineColour = outlineColour;
	this.fillColour = fillColour;
	
	this.setup();
}
var p = createjs.extend(Rectangle, createjs.Container);


p.setup = function() {
	var background = new createjs.Shape();
	background.graphics.beginFill(this.outlineColour).drawRect(0,0,this.width,this.height);
	
	this.addChild(background); 
	this.on("click", this.handleClick);
	this.on("rollover", this.handleRollOver);
	this.on("rollout", this.handleRollOver);
	this.cursor = "pointer";

	this.mouseChildren = false;
	
	this.offset = Math.random()*10;  //huh?
	this.count = 0;					//huh?
} ;

p.handleClick = function (event) {
	alert("You clicked on a rectangle: "+this.width);
} ;

p.handleRollOver = function(event) {       
	this.alpha = event.type == "rollover" ? 0.4 : 1;
};

window.Rectangle = createjs.promote(Rectangle, "Container");
}());
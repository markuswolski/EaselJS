//Created by RI 2014-12-10 15:36, modified by AG 2014-12-10 16:00

(function() {

function Rectangle(width, height, outlineColour, fillColour) {
	this.Shape_constructor();

	this.width = width;
	this.height = height;
	this.outlineColour = outlineColour;
	this.fillColour = fillColour;

	this.setup();
}
var p = createjs.extend(Rectangle, createjs.Shape);


p.setup = function() {
	//var background = new createjs.Shape();
	this.graphics.beginStroke(this.outlineColour);
	this.graphics.beginFill(this.fillColour);
	this.graphics.drawRect(0,0,this.width,this.height);

	stage.addChild(this);
	this.on("click", this.handleClick);
	this.on("rollover", this.handleRollOver);
	this.on("rollout", this.handleRollOver);
	this.cursor = "pointer";

	this.mouseChildren = false;

	this.offset = Math.random()*10;  //huh?
	this.count = 0;					//huh?
} ;

p.handleClick = function (event) {
	alert("handleClick starts with rectangle of width: " + this.width + " " + this.height);
} ;

p.handleRollOver = function(event) {
	this.alpha = event.type == "rollover" ? 0.4 : 1;
};

window.Rectangle = createjs.promote(Rectangle, "Shape");
}());
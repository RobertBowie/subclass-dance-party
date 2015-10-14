var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class= "dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step(this.timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  var boundStep = this.step.bind(this);
  setTimeout(boundStep, timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function() {

};














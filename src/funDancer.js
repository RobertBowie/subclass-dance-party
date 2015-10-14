var FunDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('funDancer');
};

FunDancer.prototype = Object.create(Dancer.prototype);
FunDancer.prototype.constructor = FunDancer;
FunDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randomNum = Math.random() * ($("body").height() - 100);
  this.$node.animate({'left': '+=' + this.left * 0.75}, 300);
  this.$node.animate({'top': '+=' + this.top * 0.75}, 300);
  this.$node.animate({'top': '-=' + this.top * 0.75}, 300);
  this.$node.animate({'left': '-=' + this.left * 0.75}, 300);
};

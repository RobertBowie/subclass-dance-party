var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncyDancer');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randomNum = Math.random() * ($("body").height() - 100);
  this.$node.animate({'top': '+=' + randomNum}, 300);
  this.$node.animate({'top': '-=' + randomNum}, 300);
};

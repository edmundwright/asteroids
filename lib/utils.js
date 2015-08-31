(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function () {};

  Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function (magnitude) {
    var x = (Math.random() * magnitude  * 2) - magnitude;
    var y = Math.sqrt(Math.pow(magnitude, 2) - Math.pow(x, 2));
    if (Math.random() < 0.5) {
      y = -y;
    }
    return [x, y];
  };
})();

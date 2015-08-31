(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (options) {
    var color = options.color || Bullet.COLOR;
    var radius = options.radius || Bullet.RADIUS;
    Asteroids.MovingObject.call(this, {
      game: options.game,
      color: color,
      radius: radius,
      pos: options.pos,
      vel: options.vel
    });
  };

  Bullet.COLOR = 'green';
  Bullet.RADIUS = 5;

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.isWrappable = false;
})();

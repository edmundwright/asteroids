(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (options) {
    var color = options.color || Asteroid.COLOR;
    var radius = options.radius || Asteroid.RADIUS;
    Asteroids.MovingObject.call(this, {
      game: options.game,
      color: color,
      radius: radius,
      pos: options.pos,
      vel: Asteroids.Util.randomVec(Asteroid.SPEED)
    });
  };

  Asteroid.COLOR = 'brown';
  Asteroid.RADIUS = 50;
  Asteroid.SPEED = 3;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Asteroids.Bullet) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };
})();

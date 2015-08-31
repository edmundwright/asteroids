(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (options) {
    var color = options.color || Ship.COLOR;
    var radius = options.radius || Ship.RADIUS;
    Asteroids.MovingObject.call(this, {
      game: options.game,
      color: color,
      radius: radius,
      pos: options.pos,
      vel: [0, 0]
    });
  };

  Ship.COLOR = 'blue';
  Ship.RADIUS = 10;
  Ship.SPEED = 3;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    var bullet = new Asteroids.Bullet({
      game: this.game,
      vel: [this.vel[0] * 3, this.vel[1] * 3],
      pos: this.pos.slice()
    });

    this.game.bullets.push(bullet);
  };
})();

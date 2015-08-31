(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    key('up', function () {
      game.ship.power([0,-2]);
    }.bind(this))
    key('down', function () {

      game.ship.power([0,2]);
    }.bind(this))
    key('left', function () {
      game.ship.power([-2,0]);
    }.bind(this))
    key('right', function () {
      game.ship.power([2,0]);
    }.bind(this))
    key('space', function () {
      game.ship.fireBullet();
    }.bind(this))
    setInterval(function() {
      this.game.step();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };
})();

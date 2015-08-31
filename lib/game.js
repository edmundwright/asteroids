(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (dimX, dimY) {
    this.dimX = dimX;
    this.dimY = dimY;
    this.addAsteroids();
    this.ship = new Asteroids.Ship({pos: this.randomPosition(), game: this});

    this.bullets = [];
  };

  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function () {
    this.asteroids = [];

    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({
        pos: this.randomPosition(),
        game: this
      }))
    }
  }

  Game.prototype.randomPosition = function () {
    var x = Math.round(Math.random() * this.dimX);
    var y = Math.round(Math.random() * this.dimY);
    return [x, y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dimX, this.dimY);
    this.allObjects().forEach(function (thisObj) {
      thisObj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (thisObj) {
      thisObj.move();
    });
  };

  Game.prototype.wrap = function (pos) {
   x = (pos[0] > 0) ? pos[0] % this.dimX : this.dimX - pos[0];
   y = (pos[1] > 0) ? pos[1] % this.dimY : this.dimY - pos[1];
   return [x, y];
  };

  Game.prototype.checkCollisions = function () {
    var objects = this.allObjects();

    for (var i = 0; i < objects.length - 1; i++) {
      for (var j = i + 1; j < objects.length; j++) {
        var firstObject = objects[i];
        var secondObject = objects[j];
        if (firstObject.isCollidedWith(secondObject)) {
          firstObject.collideWith(secondObject);
        }
      };
    };
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      var index = this.asteroids.indexOf(obj);
      this.asteroids.splice(index, 1);
    } else {
      index = this.bullets.indexOf(obj);
      this.bullets.splice(index, 1);
    }
  };

  Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship).concat(this.bullets);
  };

  Game.prototype.isOutOfBounds = function (pos) {
    return pos[0] < 0 || pos[0] > this.dimX || pos[1] < 0 || pos[1] > this.dimY;
  };

})();

var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(x, y) {
        var _this = _super.call(this) || this;
        _this.active = true;
        _this.flyTime = egret.getTimer();
        _this.blood = 10;
        _this.id = egret.getTimer();
        _this.x = x;
        _this.y = y;
        _this.speedX = 0;
        _this.speedY = 50;
        egret.startTick(function (time) { return AircraftHelper.randomFly(time, _this); }, _this);
        var data = RES.getRes("huaji_json");
        var txtr = RES.getRes("huaji_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        _this.movieClipData = mcFactory.generateMovieClipData("huaji");
        _this.timer = new egret.Timer(500, 0);
        _this.timer.addEventListener(egret.TimerEvent.TIMER, _this.shoot, _this);
        _this.timer.start();
        return _this;
    }
    Enemy.prototype.task = function () {
        var hero = Main.hero;
        var x = hero.x + hero.width / 2;
        var y = hero.y + hero.height / 2;
        var hit = this.hitTestPoint(x, y, true);
        if (hit) {
            Main.hero.hit(10);
        }
    };
    Enemy.prototype.shoot = function () {
        if (Main.gameOver)
            return;
        var parent = this.parent;
        if (parent !== null) {
            var x = this.getBulletX();
            var y = this.getBulletY();
            var direction = this.getBulletDirection(x);
            parent.addChildAt(new Bomb(x, y, direction), 1);
        }
    };
    Enemy.prototype.hit = function () {
        this.blood--;
        EffectHelper.hit(this, 100);
        if (this.blood == 0) {
            Main.enemys[this.id] = undefined;
            this.active = false;
        }
    };
    Enemy.prototype.getBulletX = function () {
        return this.x + this.width * Math.random();
    };
    Enemy.prototype.getBulletDirection = function (x) {
        return x < this.x + this.width / 2 + 10 ? -1 : 1;
    };
    Enemy.prototype.getBulletY = function () {
        return this.y + this.height;
    };
    Enemy.prototype.destory = function () {
        this.timer.stop();
    };
    return Enemy;
}(egret.MovieClip));
__reflect(Enemy.prototype, "Enemy", ["Aircraft", "egret.DisplayObject"]);
//# sourceMappingURL=Enemy.js.map
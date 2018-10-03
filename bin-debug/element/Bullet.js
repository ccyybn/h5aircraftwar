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
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(x, y) {
        var _this = _super.call(this) || this;
        _this.active = true;
        _this.flyTime = egret.getTimer();
        _this.texture = RES.getRes("bullet_png");
        _this.x = x;
        _this.y = y;
        _this.speedX = 0;
        _this.speedY = -1000;
        egret.startTick(function (time) { return AircraftHelper.fly(time, _this); }, _this);
        return _this;
    }
    Bullet.prototype.task = function () {
        for (var key in Main.enemys) {
            var enemy = Main.enemys[key];
            if (this.isHit(enemy))
                this.active = false;
        }
    };
    Bullet.prototype.isHit = function (enemy) {
        if (enemy === undefined || AircraftHelper.isOutBackground(enemy))
            return false;
        var hit = enemy.hitTestPoint(this.x, this.y, true);
        if (hit) {
            enemy.hit();
            return true;
        }
        return false;
    };
    return Bullet;
}(egret.Bitmap));
__reflect(Bullet.prototype, "Bullet", ["Aircraft", "egret.DisplayObject"]);
//# sourceMappingURL=Bullet.js.map
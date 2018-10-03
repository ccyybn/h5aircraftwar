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
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb(x, y, direction) {
        var _this = _super.call(this) || this;
        _this.active = true;
        _this.flyTime = egret.getTimer();
        _this.texture = RES.getRes("bomb_png");
        _this.x = x;
        _this.y = y;
        _this.speedX = 150 * direction * Math.random();
        _this.speedY = 200;
        _this.scaleX = 0.5;
        _this.scaleY = 0.5;
        egret.startTick(function (time) { return AircraftHelper.fly(time, _this); }, _this);
        return _this;
    }
    Bomb.prototype.task = function () {
        var hit = Main.hero.hitTestPoint(this.x, this.y, true);
        if (hit) {
            if (Main.hero.hit(1))
                this.active = false;
        }
    };
    return Bomb;
}(egret.Bitmap));
__reflect(Bomb.prototype, "Bomb", ["Aircraft", "egret.DisplayObject"]);
//# sourceMappingURL=Bomb.js.map
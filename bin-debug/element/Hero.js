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
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this) || this;
        _this.blood = 5;
        _this.texture = RES.getRes("hero_png");
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.startMove, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.stopMove, _this);
        _this.timer = new egret.Timer(300, 0);
        _this.timer.addEventListener(egret.TimerEvent.TIMER, _this.shoot, _this);
        _this.timer.start();
        return _this;
    }
    Hero.prototype.shoot = function () {
        var parent = this.parent;
        if (parent !== null) {
            this.parent.addChildAt(new Bullet(this.getBulletX(), this.getBulletY()), 1);
        }
    };
    Hero.prototype.startMove = function (e) {
        this.offsetX = e.stageX - this.x;
        this.offsetY = e.stageY - this.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    Hero.prototype.stopMove = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    Hero.prototype.onMove = function (e) {
        if (Main.gameOver)
            return;
        this.x = e.stageX - this.offsetX;
        this.y = e.stageY - this.offsetY;
    };
    Hero.prototype.getBulletX = function () {
        return this.x + this.width / 2 - 10;
    };
    Hero.prototype.getBulletY = function () {
        return this.y;
    };
    Hero.prototype.hit = function (hurt) {
        var parent = this.parent;
        this.blood -= hurt;
        if (this.blood <= 0 && parent !== null) {
            EffectHelper.bomb(this);
            this.timer.stop();
            Main.gameOver = true;
        }
        else {
            EffectHelper.flashing(this, 5);
        }
        return true;
    };
    return Hero;
}(egret.Bitmap));
__reflect(Hero.prototype, "Hero");
//# sourceMappingURL=Hero.js.map
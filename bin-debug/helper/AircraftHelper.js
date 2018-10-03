var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AircraftHelper = (function () {
    function AircraftHelper() {
    }
    AircraftHelper.fly = function (time, fly) {
        if (Main.gameOver)
            return false;
        var pass = time - fly.flyTime;
        fly.x = fly.x + (pass / 1000) * fly.speedX;
        fly.y = fly.y + (pass / 1000) * fly.speedY;
        fly.flyTime = time;
        if (AircraftHelper.isOutBackground(fly)) {
            return AircraftHelper.clear(fly);
        }
        if (fly.task != null) {
            fly.task();
        }
        return true;
    };
    AircraftHelper.randomFly = function (time, fly) {
        if (Main.gameOver)
            return false;
        fly.speedX += (Math.random() - 0.5) * 10;
        fly.speedY += (Math.random() - 0.5) * 10;
        var pass = time - fly.flyTime;
        fly.x = fly.x + (pass / 1000) * fly.speedX;
        fly.y = fly.y + (pass / 1000) * fly.speedY;
        fly.flyTime = time;
        if (AircraftHelper.isOutBackground(fly)) {
            return AircraftHelper.clear(fly);
        }
        if (fly.task != null) {
            fly.task();
        }
        return true;
    };
    AircraftHelper.isOutBackground = function (fly) {
        if (!fly.active)
            return true;
        var background = fly.parent;
        if (background === null)
            return true;
        return fly.y + fly.height < 0 || fly.y > background.stageHeight || fly.x + fly.width < 0 || fly.x > background.stageHeight;
    };
    AircraftHelper.clear = function (fly) {
        if (fly.destory != null)
            fly.destory();
        egret.stopTick(function (e) { return true; }, fly);
        var background = fly.parent;
        if (background === null)
            return false;
        fly.parent.removeChild(fly);
        return false;
    };
    return AircraftHelper;
}());
__reflect(AircraftHelper.prototype, "AircraftHelper");
//# sourceMappingURL=AircraftHelper.js.map
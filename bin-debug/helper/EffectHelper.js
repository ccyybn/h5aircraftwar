var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EffectHelper = (function () {
    function EffectHelper() {
    }
    EffectHelper.hit = function (aircraft, delay) {
        var tw = egret.Tween.get(aircraft);
        tw.to({ "alpha": 0.5 }, 100);
        tw.to({ "alpha": 1 }, 100);
    };
    EffectHelper.flashing = function (aircraft, repeat) {
        var tw = egret.Tween.get(aircraft);
        for (var i = 0; i < repeat; i++) {
            tw.to({ "alpha": 0.1 }, 100);
            tw.to({ "alpha": 1 }, 100);
        }
    };
    EffectHelper.bomb = function (aircraft) {
        var tw = egret.Tween.get(aircraft);
        tw.to({ "alpha": 1 });
        aircraft.texture = RES.getRes("hero_blowup_png");
    };
    return EffectHelper;
}());
__reflect(EffectHelper.prototype, "EffectHelper");
//# sourceMappingURL=EffectHelper.js.map
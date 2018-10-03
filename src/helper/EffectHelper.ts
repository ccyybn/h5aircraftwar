class EffectHelper {
    public static hit(aircraft: egret.DisplayObject, delay: number) {
        let tw = egret.Tween.get(aircraft);
        tw.to({ "alpha": 0.5 }, 100);
        tw.to({ "alpha": 1 }, 100);
    }

    public static flashing(aircraft: egret.DisplayObject, repeat: number) {
        let tw = egret.Tween.get(aircraft);
        for (var i = 0; i < repeat; i++) {
            tw.to({ "alpha": 0.1 }, 100);
            tw.to({ "alpha": 1 }, 100);
        }
    }

    public static bomb(aircraft: egret.Bitmap) {
        let tw = egret.Tween.get(aircraft);
        tw.to({ "alpha": 1 });
        aircraft.texture = RES.getRes("hero_blowup_png");
    }
}
class Bomb extends egret.Bitmap implements Aircraft {
    public active: boolean = true;
    public flyTime: number = egret.getTimer();
    public speedY: number;
    public speedX: number;

    constructor(x: number, y: number, direction: number) {
        super();
        this.texture = RES.getRes("bomb_png");
        this.x = x;
        this.y = y;
        this.speedX = 150 * direction * Math.random();
        this.speedY = 200;
        this.scaleX = 0.5;
        this.scaleY = 0.5;
        egret.startTick(time => AircraftHelper.fly(time, this), this);
    }

    task() {
        let hit = Main.hero.hitTestPoint(this.x, this.y, true);
        if (hit) {
            if (Main.hero.hit(1)) this.active = false;
        }
    }
}
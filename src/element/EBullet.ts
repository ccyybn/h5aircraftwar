class EBullet extends egret.Bitmap implements Aircraft {
    public active: boolean = true;
    public flyTime: number = egret.getTimer();
    public speedY: number;
    public speedX: number;

    constructor(x: number, y: number) {
        super();
        this.texture = RES.getRes("e_bullet_png");
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 200;
        egret.startTick(time => AircraftHelper.fly(time, this), this);
    }

    private hitHero() {
        let hit = Main.hero.hitTestPoint(this.x, this.y, true);
        if (hit) {
            if (Main.hero.hit(1)) this.active = false;
        }
    }
}
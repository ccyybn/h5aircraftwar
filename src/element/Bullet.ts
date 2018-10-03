class Bullet extends egret.Bitmap implements Aircraft {
    public active: boolean = true;
    public flyTime: number = egret.getTimer();
    public speedY: number;
    public speedX: number;

    constructor(x: number, y: number) {
        super();
        this.texture = RES.getRes("bullet_png");
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = -1000;
        egret.startTick(time => AircraftHelper.fly(time, this), this);
    }

    task() {
        for (var key in Main.enemys) {
            let enemy = Main.enemys[key];
            if (this.isHit(enemy)) this.active = false;
        }
    }

    private isHit(enemy: Enemy) {
        if (enemy === undefined || AircraftHelper.isOutBackground(enemy)) return false;
        let hit = enemy.hitTestPoint(this.x, this.y, true);
        if (hit) {
            enemy.hit();
            return true;
        }
        return false;
    }
}
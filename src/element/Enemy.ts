class Enemy extends egret.MovieClip implements Aircraft {
    public active: boolean = true;
    public flyTime: number = egret.getTimer();
    public speedY: number;
    public speedX: number;

    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 50;
        egret.startTick(time => AircraftHelper.randomFly(time, this), this);

        var data = RES.getRes("huaji_json");
        var txtr = RES.getRes("huaji_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.movieClipData = mcFactory.generateMovieClipData("huaji");

        this.timer = new egret.Timer(500, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.shoot, this);
        this.timer.start();
    }

    task() {
        let hero = Main.hero;
        let x = hero.x + hero.width / 2;
        let y = hero.y + hero.height / 2;
        let hit = this.hitTestPoint(x, y, true);
        if (hit) {
            Main.hero.hit(10);
        }
    }


    private shoot() {
        if (Main.gameOver) return;
        let parent = this.parent;
        if (parent !== null) {
            let x = this.getBulletX();
            let y = this.getBulletY();
            let direction = this.getBulletDirection(x);
            parent.addChildAt(new Bomb(x, y, direction), 1);
        }
    }

    private timer: egret.Timer;
    public blood: number = 10;
    public id: number = egret.getTimer();

    public hit() {
        this.blood--;
        EffectHelper.hit(this, 100);
        if (this.blood == 0) {
            Main.enemys[this.id] = undefined;
            this.active = false;
        }
    }

    private getBulletX() {
        return this.x + this.width * Math.random();
    }

    private getBulletDirection(x: number) {
        return x < this.x + this.width / 2 + 10 ? -1 : 1;
    }

    private getBulletY() {
        return this.y + this.height;
    }

    destory() {
        this.timer.stop();
    }
}
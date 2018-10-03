class Hero extends egret.Bitmap {


    constructor() {
        super();
        this.texture = RES.getRes("hero_png");
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.stopMove, this);

        this.timer = new egret.Timer(300, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.shoot, this);
        this.timer.start();
    }

    private timer: egret.Timer;
    public blood: number = 5;

    private shoot() {
        let parent = this.parent;
        if (parent !== null) {
            this.parent.addChildAt(new Bullet(this.getBulletX(), this.getBulletY()), 1);
        }
    }

    private offsetX: number;
    private offsetY: number;

    private startMove(e: egret.TouchEvent): void {
        this.offsetX = e.stageX - this.x;
        this.offsetY = e.stageY - this.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    }

    private stopMove(e: egret.TouchEvent) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    }

    private onMove(e: egret.TouchEvent): void {
        if (Main.gameOver) return;
        this.x = e.stageX - this.offsetX;
        this.y = e.stageY - this.offsetY;
    }

    private getBulletX() {
        return this.x + this.width / 2 - 10;
    }

    private getBulletY() {
        return this.y;
    }


    public hit(hurt: number) {
        let parent = this.parent;
        this.blood -= hurt;
        if (this.blood <= 0 && parent !== null) {
            EffectHelper.bomb(this);
            this.timer.stop();
            Main.gameOver = true;
        } else {
            EffectHelper.flashing(this, 5);
        }
        return true;
    }
}
class AircraftHelper {
    public static fly(time: number, fly: Aircraft) {
        if (Main.gameOver) return false;

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
    }
    
    public static randomFly(time: number, fly: Aircraft) {
        if (Main.gameOver) return false;

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
    }


    public static isOutBackground(fly: Aircraft) {
        if (!fly.active) return true;
        let background: Main = <Main>fly.parent;
        if (background === null) return true;
        return fly.y + fly.height < 0 || fly.y > background.stageHeight || fly.x + fly.width < 0 || fly.x > background.stageHeight
    }


    private static clear(fly: Aircraft) {
        if (fly.destory != null) fly.destory();

        egret.stopTick(e => { return true }, fly);

        let background: Main = <Main>fly.parent;
        if (background === null) return false;
        fly.parent.removeChild(fly);
        return false;
    }
}
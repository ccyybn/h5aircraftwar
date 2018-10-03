interface Aircraft extends egret.DisplayObject {
    active: boolean;
    flyTime: number;
    speedY: number;
    speedX: number;
    destory?: () => void;
    task?: () => void;
}
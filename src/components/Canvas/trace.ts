export class Particle {
  rotate: (
    canvas: HTMLCanvasElement,
    { x, y }: { x: number; y: number }
  ) => void;
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public color: string,
    public bgColor: string
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
    this.rotate = (
      canvas: HTMLCanvasElement,
      { x, y }: { x: number; y: number }
    ) => {
      const initialPoint = {
        x: this.x,
        y: this.y,
      };
      this.x = x;
      this.y = y;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = this.bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(initialPoint.x, initialPoint.y);
      ctx.lineWidth = this.width;
      ctx.lineCap = "round";
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = this.color;
      ctx.stroke();
    };
  }
}

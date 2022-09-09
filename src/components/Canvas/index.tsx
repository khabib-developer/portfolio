import { Particle } from "./trace";

export function renderCanvas(color: string, bgColor: string, mobile: boolean) {
  csv().remove();
  const canvas = csv();
  document.getElementById("root")?.appendChild(canvas);
  canvas.style.position = "fixed";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (!mobile) trace(color, bgColor, canvas);
}

function csv() {
  const canvas = document.querySelector("canvas");
  if (canvas) return canvas;
  return document.createElement("canvas");
}

function trace(color: string, bgColor: string, canvas: HTMLCanvasElement) {
  const coords = { x: (1240 / 1440) * window.innerWidth, y: 100 };
  document.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  document.addEventListener("touchmove", (e) => {
    coords.x = e.touches[0].clientX;
    coords.y = e.touches[0].clientY;
  });
  const dot = new Particle(coords.x, coords.y, 10, color, bgColor);

  function animate() {
    if (canvas) {
      if (dot) dot.rotate(canvas!, coords);
    }
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

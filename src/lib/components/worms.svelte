<script lang="ts">
  import { createNoise2D } from 'simplex-noise';

  type Worm = {
    origin: number;
    x: number;
    y: number;
    a: number;
    v: number;
    r: number;
    hue: number;
  };

  const worms = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!;

    const onResize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', onResize);

    onResize();
    setTimeout(onResize, 0);

    const map = (a: number, b: number, c: number, d: number, x: number) =>
      ((x - a) / (b - a)) * (d - c) + c;

    const wrap = (a: number, b: number, x: number) => {
      const d = b - a;
      return ((((x - a) % d) + d) % d) + a;
    };

    const clamp = (a: number, b: number, x: number) => Math.max(a, Math.min(b, x));

    const simplex = createNoise2D();

    const getA = (origin: number) => map(0, 1, -Math.PI, Math.PI, simplex(origin / 3, -Math.PI));

    const getV = (origin: number) => map(-1, 1, 0, 300, simplex(origin / 4, Math.PI));

    const getR = (origin: number) => map(-1, 1, 4, 20, simplex(origin / 10, 3 * Math.PI));

    const seedState = (wormCount: number) => {
      const worms = [];
      for (let i = 0; i < wormCount; i++) {
        const origin = map(0, 1, -1e6, 1e6, Math.random());
        worms.push({
          origin,
          x: map(0, 1, 0, canvas.width, Math.random()),
          y: map(0, 1, 0, canvas.height, Math.random()),
          a: getA(origin),
          v: getV(origin),
          r: getR(origin),
          hue: map(0, 1, 0, 360, Math.random())
        });
      }
      return worms;
    };

    let time = 0;
    const stepSimulation = (state: Worm[], dT: number) => {
      for (const worm of state) {
        worm.x += (Math.cos(worm.a) * worm.v * dT) / 1e3;
        worm.y += (Math.sin(worm.a) * worm.v * dT) / 1e3;
        worm.a = getA(worm.origin + time / 1e3);
        worm.v = getV(worm.origin + time / 1e3);
        worm.r = getR(worm.origin + time / 1e3);
      }
      time += dT;
    };

    const fade = (amount: number) => {
      ctx.save();
      ctx.globalCompositeOperation = 'difference';
      ctx.fillStyle = '#' + clamp(0, 255, ~~amount).toString(16).padStart(2, '0').repeat(3);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    };

    const getWormColor = (hue: number) => `hsl(${clamp(0, 360, ~~hue)}deg,60%,60%)`;

    const draw = (state: Worm[]) => {
      fade(2);
      for (const worm of state) {
        ctx.beginPath();
        ctx.arc(
          wrap(0, canvas.width, worm.x),
          wrap(0, canvas.height, worm.y),
          worm.r,
          0,
          2 * Math.PI,
          true
        );
        ctx.fillStyle = getWormColor(worm.hue);
        ctx.closePath();
        ctx.fill();
      }
    };

    const state = seedState((canvas.width * canvas.height) / 8e3);

    let previousTime = 0;
    const onFrame = (time: number) => {
      const delta = time - previousTime;
      timer = requestAnimationFrame(onFrame);
      stepSimulation(state, delta);
      draw(state);
      previousTime = time;
    };

    let timer = requestAnimationFrame(onFrame);

    return () => cancelAnimationFrame(timer);
  };
</script>

<canvas {@attach worms}></canvas>

<style>
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>

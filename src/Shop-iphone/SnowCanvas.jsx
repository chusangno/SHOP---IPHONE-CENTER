import { useEffect, useRef } from "react";
import "./snow.css";



export default function FireworksCanvas() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const fireworks = [];
    const streaks = [];
    const sparks = [];
    let tick = 0;

    /* ===== FIREWORK (ĐUÔI CONG + RUNG) ===== */
    class Firework {
      constructor() {
        const w = canvas.width / DPR;
        const h = canvas.height / DPR;

        this.x = Math.random() * w;
        this.y = h;
        this.prevY = h;
        this.prevPrevY = h;

        this.speed = 4.5 + Math.random() * 2;
        this.targetY = h * (0.18 + Math.random() * 0.22);

        const hues = [260, 300, 200, 50, 0]; // tím – hồng – xanh – vàng – trắng
        this.hue = hues[Math.floor(Math.random() * hues.length)];
      }

      update() {
        this.prevPrevY = this.prevY;
        this.prevY = this.y;
        this.y -= this.speed;

        // ✨ spark trail rất nhẹ
        if (Math.random() < 0.6) {
          sparks.push(new Spark(this.x, this.y, this.hue));
        }

        if (this.y <= this.targetY) {
          this.explode();
          return true;
        }
        return false;
      }

      draw() {
        ctx.save();

        // 🌊 cong nhẹ theo tốc độ + thời gian
        const curve =
          Math.sin(tick * 0.05 + this.y * 0.10) * (this.speed * 0.10);

        const grad = ctx.createLinearGradient(
          this.x + curve,
          this.prevPrevY,
          this.x,
          this.y
        );
        grad.addColorStop(0, `hsla(${this.hue},100%,65%,0)`);
        grad.addColorStop(0.5, `hsla(${this.hue},100%,65%,0.4)`);
        grad.addColorStop(1, `hsla(${this.hue},100%,75%,0.95)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `hsla(${this.hue},100%,75%,0.9)`;

        ctx.beginPath();
        ctx.moveTo(this.x + curve, this.prevPrevY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // 🔥 đầu pháo
        ctx.fillStyle =
          this.hue === 0
            ? "rgba(255,255,255,0.9)"
            : `hsl(${this.hue},100%,75%)`;

        ctx.fillRect(this.x - 2, this.y - 2, 4, 4);

        ctx.restore();
      }

      explode() {
        const count = window.innerWidth < 768 ? 16 : 22;
        for (let i = 0; i < count; i++) {
          streaks.push(new Streak(this.x, this.y, this.hue));
        }
      }
    }

    /* ===== SPARK RUNG NHẸ ===== */
    class Spark {
      constructor(x, y, hue) {
        this.x = x + Math.random() * 4 - 2;
        this.y = y + Math.random() * 4 - 2;
        this.vx = Math.random() * 0.8 - 0.4;
        this.vy = Math.random() * 0.8 - 0.4;
        this.alpha = 0.8;
        this.life = 25;
        this.hue = hue;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.04;
        this.life--;
      }

      draw() {
        ctx.fillStyle =
          this.hue === 0
            ? `rgba(255,255,255,${this.alpha})`
            : `hsla(${this.hue},100%,70%,${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    /* ===== TIA SAU KHI NỔ ===== */
    class Streak {
      constructor(x, y, hue) {
        this.x = x;
        this.y = y;
        this.px = x;
        this.py = y;
        this.hue = hue;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 8 + Math.random() * 2;
        this.alpha = 1;
        this.life = 140;
      }

      update() {
        this.px = this.x;
        this.py = this.y;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + 0.15;
        this.alpha -= 0.012;
        this.life--;
      }

      draw() {
       ctx.shadowBlur = 14;
ctx.shadowColor = `hsla(${this.hue},100%,80%,${this.alpha})`;

ctx.strokeStyle =
  this.hue === 0
    ? `rgba(255,255,255,${this.alpha})`
    : `hsla(${this.hue},100%,75%,${this.alpha})`;

ctx.lineWidth = 2.6;

        ctx.beginPath();
        ctx.moveTo(this.px, this.py);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.restore();
      }
    }

    function animate() {
      tick++;
      ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR);

      if (Math.random() < 0.02 && fireworks.length < 3) {
        fireworks.push(new Firework());
      }

      fireworks.forEach((f, i) => {
        if (f.update()) fireworks.splice(i, 1);
        else f.draw();
      });

      streaks.forEach((s, i) => {
        s.update();
        s.draw();
        if (s.life <= 0 || s.alpha <= 0) streaks.splice(i, 1);
      });

      sparks.forEach((s, i) => {
        s.update();
        s.draw();
        if (s.life <= 0) sparks.splice(i, 1);
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 5,
        pointerEvents: "none",
      }}
    />
  );
}

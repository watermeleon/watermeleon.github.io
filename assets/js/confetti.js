// Mouse Confetti Effect
// Add this to your Jekyll site's JavaScript

(function () {
    const confettiConfig = {
        particleCount: 1,        // Particles per mouse move
        particleSize: 8,         // Size in pixels
        gravity: 0.5,            // How fast particles fall
        colors: ['#7a0177',  '#ffa600', '#db3657'],
        // colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
        lifetime: 100,           // Frames before particle disappears
    };

    const particles = [];
    let animationId;

    class Confetti {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * confettiConfig.particleSize + 2;
            this.speedX = (Math.random() - 0.5) * 4;
            this.speedY = (Math.random() - 0.5) * 4 - 2;
            this.color = confettiConfig.colors[Math.floor(Math.random() * confettiConfig.colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = (Math.random() - 0.5) * 10;
            this.life = confettiConfig.lifetime;
            this.opacity = 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedY += confettiConfig.gravity;
            this.rotation += this.rotationSpeed;
            this.life--;
            this.opacity = this.life / confettiConfig.lifetime;
        }

        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        for (let i = 0; i < confettiConfig.particleCount; i++) {
            particles.push(new Confetti(mouseX, mouseY));
        }
    });

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw(ctx);

            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }

        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup function (optional, for single-page apps)
    window.cleanupConfetti = function () {
        cancelAnimationFrame(animationId);
        canvas.remove();
        document.removeEventListener('mousemove', () => { });
    };
})();
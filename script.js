/* ===================================================
   PROMOVEMOS SEGUROS — SCRIPT.JS (PREMIUM EDITION)
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ─── 1. LOADING SCREEN ──────────────────────────
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            setTimeout(() => loader.style.display = 'none', 600);
        }, 1200);
    });

    // ─── 2. CUSTOM CURSOR ───────────────────────────
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (cursorDot && cursorRing) {
        let ringX = 0, ringY = 0;
        let dotX = 0, dotY = 0;

        document.addEventListener('mousemove', (e) => {
            dotX = e.clientX;
            dotY = e.clientY;
        });

        const animateCursor = () => {
            ringX += (dotX - ringX) * 0.12;
            ringY += (dotY - ringY) * 0.12;

            cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
            cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        document.querySelectorAll('a, button, .service-card, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('expanded'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('expanded'));
        });
    }

    // ─── 3. MOBILE MENU ─────────────────────────────
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('open');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('open');
            navLinks.classList.remove('active');
        });
    });

    // ─── 4. NAVBAR SCROLL EFFECT ────────────────────
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        navbar.classList.toggle('scrolled', currentScroll > 60);
        navbar.classList.toggle('hidden', currentScroll > lastScroll && currentScroll > 200);
        lastScroll = currentScroll;
    });

    // ─── 5. TYPED TEXT ANIMATION ────────────────────
    const typedEl = document.getElementById('typed-text');
    const words = ['importa.', 'amas.', 'construiste.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        const current = words[wordIndex];
        const displayed = isDeleting
            ? current.substring(0, charIndex - 1)
            : current.substring(0, charIndex + 1);

        typedEl.textContent = displayed;
        isDeleting ? charIndex-- : charIndex++;

        let speed = isDeleting ? 60 : 100;

        if (!isDeleting && charIndex === current.length) {
            speed = 2200;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }
        setTimeout(type, speed);
    };
    type();

    // ─── 6. CANVAS PARTICLES ────────────────────────
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        const particles = [];
        const NUM_PARTICLES = 60;

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.4 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 107, 0, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < NUM_PARTICLES; i++) particles.push(new Particle());

        // Draw connection lines between close particles
        const drawLines = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.strokeStyle = `rgba(255,107,0,${0.1 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            drawLines();
            requestAnimationFrame(animateParticles);
        };
        animateParticles();
    }

    // ─── 7. SCROLL REVEAL OBSERVER ──────────────────
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));

    // ─── 8. ANIMATED COUNTERS ───────────────────────
    const counters = document.querySelectorAll('.stat-number');
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const target = +e.target.getAttribute('data-target');
                const step = target / 70;
                let count = 0;
                const update = () => {
                    count += step;
                    if (count < target) {
                        e.target.textContent = Math.ceil(count);
                        requestAnimationFrame(update);
                    } else {
                        e.target.textContent = target;
                    }
                };
                update();
                counterObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObs.observe(c));

    // ─── 9. CARD TILT EFFECT ────────────────────────
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotX = ((y - cy) / cy) * -8;
            const rotY = ((x - cx) / cx) * 8;
            card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ─── 10. ACTIVE NAV LINK ON SCROLL ──────────────
    const sections = document.querySelectorAll('section[id], header[id]');
    const navItems = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                navItems.forEach(nav => nav.classList.remove('active'));
                const activeNav = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
                if (activeNav) activeNav.classList.add('active');
            }
        });
    }, { threshold: 0.4 });
    sections.forEach(s => sectionObserver.observe(s));

});

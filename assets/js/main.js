document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("ul");

    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = -(e.clientY / window.innerHeight - 0.5) * 40;

        container.style.transform = `translate(-50%, -50%) perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;

        container.style.filter = `drop-shadow(${x * 0.5}px ${y * 0.5}px 25px rgba(255,255,255,0.1))`;
    });

    const particleContainer = document.querySelector(".particles");

    for (let i = 0; i < 40; i++) {
        const p = document.createElement("span");
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";
        p.style.animationDelay = Math.random() * 5 + "s";
        p.style.opacity = 0.3 + Math.random() * 0.7;
        particleContainer.appendChild(p);
    }
});

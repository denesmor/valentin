function clickOnIgen() {
    document.getElementById("valentine").innerText = "Ezazzzz, YAY!💕";
    document.getElementById("kep").src = "successkid.jpg";
    document.getElementById("igenGomb").style.display = "none";
    document.getElementById("nemGomb").style.display = "none";

}

document.addEventListener('DOMContentLoaded', () => {
    const nem = document.getElementById('nemGomb');
    if (!nem) return;
    // Keep button in normal flow initially so layout stays centered
    nem.style.transition = 'left 120ms ease, top 120ms ease';

    nem.addEventListener('mouseenter', () => {
        // Switch to fixed positioning when first moving so it can teleport freely
        if (getComputedStyle(nem).position !== 'fixed') {
            const rect = nem.getBoundingClientRect();
            nem.style.position = 'fixed';
            nem.style.left = rect.left + 'px';
            nem.style.top = rect.top + 'px';
        }
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const bw = nem.offsetWidth;
        const bh = nem.offsetHeight;

        const x = Math.floor(Math.random() * Math.max(0, vw - bw));
        const y = Math.floor(Math.random() * Math.max(0, vh - bh));

        nem.style.left = x + 'px';
        nem.style.top = y + 'px';
    });
});
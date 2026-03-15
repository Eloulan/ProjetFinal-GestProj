const bouton = document.getElementById('bt_fuis');
document.addEventListener('mousemove',(souris) => {
    const rect = bouton.getBoundingClientRect();
    const distance = Math.sqrt(Math.pow(souris.clientX - (rect.left + rect.width / 2),2)+Math.pow(souris.clientY - (rect.top + rect.height / 2),2));
    
    if(distance < 80){
        const newTop = Math.random() * (window.innerHeight - rect.height);
        const newLeft = Math.random() * (window.innerWidth - rect.width);

        bouton.style.top = newTop + 'px';
        bouton.style.left = newLeft + 'px';
    }
});

// Bouton "Oui" - Confettis
const boutonOui = document.getElementById('bt_oui');

boutonOui.addEventListener('click', () => {
    creerConfettis();
});

// Ta fonction pour créer les confettis
function creerConfettis() {
    const conteneur = document.getElementById('confettis');

    for (let i = 0; i < 300; i++) { 
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const size = 6 + Math.random() * 12; 
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';

        const couleurs = ['#ff6b9d', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da'];
        confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];

        const duration = 2 + Math.random() * 4; 
        const delay = Math.random() * duration; 
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';

        conteneur.appendChild(confetti);

        const remaining = duration + delay;
        setTimeout(() => {
            confetti.remove();
        }, (remaining + 0.5) * 1000);
    }
}
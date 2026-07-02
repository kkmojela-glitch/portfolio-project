const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const headerOffset = 90;

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Skill card modal
const skillModal = document.getElementById('skillModal');
const skillTitle = document.getElementById('skillTitle');
const skillDescription = document.getElementById('skillDescription');
const modalClose = document.querySelector('.modal-close');

function openSkillModal(title, desc) {
    skillTitle.textContent = title;
    skillDescription.textContent = desc;
    skillModal.classList.add('active');
    skillModal.setAttribute('aria-hidden', 'false');
}

function closeSkillModal() {
    skillModal.classList.remove('active');
    skillModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3') ? card.querySelector('h3').textContent : 'Skill';
        const desc = card.getAttribute('data-info') || '';
        openSkillModal(title, desc);
    });
});

modalClose && modalClose.addEventListener('click', closeSkillModal);
skillModal && skillModal.addEventListener('click', (e) => {
    if (e.target === skillModal || e.target.classList.contains('modal-backdrop')) closeSkillModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSkillModal(); });

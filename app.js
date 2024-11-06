const getContent = () => {
    const birth = new Date(2003, 4, 19);
    const startProg = 2016;

    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth()
    if (month < 0 || (month == 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    let exp = today.getFullYear() - startProg;

    return `I am ${age} years old and I am studying at university, ` +
        `specifically at the Faculty of Computer Science in Brno. ` +
        `Programming is my hobby and dream job in one. I have been learning ` +
        `programming for about ${exp} years now. I am mainly involved in web` +
        ` development, but I am expanding my skills in areas such as desktop` +
        ` application development.<br /><br />` +
        `Lately I've been enjoying rust a lot, where I make various ` +
        `utilities or applications with TUI.`;
};

document.addEventListener('DOMContentLoaded', () => {
    const content = getContent();
    document.getElementById('about-text').innerHTML = content;
});

const circles = document.querySelectorAll('.circle');
const baseMoveFactor = 0.09;
document.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    circles.forEach(circle => {
        const rect = circle.getBoundingClientRect();
        const circleX = rect.left + rect.width / 2;
        const circleY = rect.top + rect.height / 2;

        const deltaX = mouseX - circleX;
        const deltaY = mouseY - circleY;

        const angle = Math.atan2(deltaY, deltaX);

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const size = rect.width;
        const movementFactor = baseMoveFactor * (40000 / (size * size));

        const moveDistance = distance * movementFactor;
        const moveX = Math.cos(angle) * moveDistance;
        const moveY = Math.sin(angle) * moveDistance;

        circle.style.transform =
            `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
    });
});

document.getElementById('projects').onmousemove = e => {
    for (const card of document.querySelectorAll('.projects-card')) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
}

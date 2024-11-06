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
const sockets = document.querySelectorAll('.socket');
const starterContent = document.querySelector('.starter-content');

const starterGetPos = (_rect, angle, moveDistance) => {
    return [ Math.cos(angle) * moveDistance, Math.sin(angle) * moveDistance ];
}

const socketGetPos = (rect, angle, moveDistance) => {
    const offsetX = rect.width * 0.5;
    const offsetY = rect.height / 0.45 * 0.275;

    return [
        Math.min(Math.max(Math.cos(angle) * moveDistance, -offsetX), offsetX),
        Math.min(Math.max(Math.sin(angle) * moveDistance, -offsetY), offsetY)
    ];
}

const mouseMove = (e, element, factor, getPos) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
        return;
    }

    const circleX = rect.left + rect.width / 2;
    const circleY = rect.top + rect.height / 2;

    const deltaX = e.clientX - circleX;
    const deltaY = e.clientY - circleY;

    const angle = Math.atan2(deltaY, deltaX);

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const movementFactor = factor * (40000 / (rect.width * rect.width));
    const moveDistance = distance * movementFactor;

    const [x, y] = getPos(rect, angle, moveDistance);
    element.animate({
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
    }, { duration: 1000, fill: 'forwards' });
}

document.addEventListener('mousemove', e => {
    circles.forEach(circle => {
        mouseMove(e, circle, 0.09, starterGetPos);
    });
    mouseMove(e, starterContent, 0.05, starterGetPos)

    sockets.forEach(socket => mouseMove(e, socket, 0.00003, socketGetPos));
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

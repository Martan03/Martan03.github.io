const ray = document.querySelector(".ray");
const home = document.getElementById("home");
const info = document.getElementById("info");
const projectBg = document.querySelector(".project-bg");

var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    let infoOffset = info.offsetTop;
    let projectOffset = projectBg.offsetTop;
    let offsetBottom = window.pageYOffset - window.innerHeight;

    if (offsetBottom >= projectOffset)
    {
        document.querySelector(".bg-image").style.opacity = 0;
        ray.style.opacity = 0;
    }
    else
    {
        document.querySelector(".bg-image").style.opacity = 1;
        ray.style.opacity = 0.7;
    }

    if (offset >= (infoOffset - info.offsetHeight / 2))
        ray.style.borderLeft = '100vmin solid yellow';
    else
        ray.style.borderLeft = '100vmin solid var(--prim)';
});
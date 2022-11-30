document.querySelector(".email-copy").addEventListener("click", () => {
    navigator.clipboard.writeText("martinslezak03@gmail.com");
    document.querySelector(".copy-email-text").innerHTML = "Copied!";
});

function sendEmail()
{
    const message = document.querySelector('.message').value;
    window.open('mailto:martinslezak03@gmail.com?subject=Website&body=' + message);
}
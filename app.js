function sendEmail()
{
    const message = document.querySelector('.message').value;
    const email = document.querySelector('.email').value;
    window.open('mailto:martinslezak03@gmail.com?subject=Web: ' + email + '&body=' + message);
}
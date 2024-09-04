function showDetails(details) {
    const popup = document.getElementById('popup');
    popup.innerText = details;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

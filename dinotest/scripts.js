
document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        alert('导航功能尚未实现');
    });
});
document.getElementById('proxy-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const targetUrl = document.getElementById('target-url').value;
    const iframe = document.getElementById('proxy-iframe');
    iframe.src = `http://localhost:8080/${targetUrl}`;
});

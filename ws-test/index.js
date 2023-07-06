const btn = document.getElementById('btn');
const socket = new WebSocket('ws://localhost:5000');

socket.onopen = () => {
    socket.send(JSON.stringify({
        method: 'connection',
        id: 555,
        username: 'Slava'
    }))
}

socket.onmessage = (event) => {
    console.log('С сервера получено сообщение', event.data)
}

btn.onclick = () => {
    console.log('123')
    socket.send(JSON.stringify({
        message: "Hi BRO!",
        method: 'message',
        id: 5,
        username: 'HaqpaHR'
    }))
}

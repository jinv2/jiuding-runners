// 点击试炼卡片
document.querySelectorAll('.trial-card').forEach(card => {
    card.addEventListener('click', function () {
        const title = this.querySelector('h4').textContent;
        const desc = this.querySelector('p').textContent;
        alert('🏔️ ' + title + ' 🏔️\n\n' + desc);
    });
});

// 提交留言
document.getElementById('send-btn').addEventListener('click', function () {
    const input = document.getElementById('user-input');
    const msg = input.value.trim();
    if (msg) {
        const blackboard = document.getElementById('blackboard-list');
        const newMsg = document.createElement('p');
        newMsg.textContent = '"' + msg + '"';
        blackboard.appendChild(newMsg);

        const chatHistory = document.getElementById('chat-history');
        const userMsg = document.createElement('div');
        userMsg.className = 'message user-message';
        userMsg.textContent = msg;
        chatHistory.appendChild(userMsg);

        setTimeout(() => {
            const reply = document.createElement('div');
            reply.className = 'message xuanjia-message';
            reply.textContent = '🤖 爷爷说：跑起来，就行。';
            chatHistory.appendChild(reply);
            chatHistory.scrollTop = chatHistory.scrollHeight;
        }, 500);

        input.value = '';
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
});

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') document.getElementById('send-btn').click();
});

// 图片放大
function showBeastModal(item) {
    const img = item.querySelector('img');
    document.getElementById('beast-modal-img').src = img.src;
    document.getElementById('beast-modal-title').textContent = item.dataset.beast;
    document.getElementById('beast-modal-desc').textContent = item.dataset.desc;
    document.getElementById('beast-modal').style.display = 'flex';
}

function hideBeastModal() {
    document.getElementById('beast-modal').style.display = 'none';
}

// 视频放大
function showVideoModal(bvid) {
    const container = document.getElementById('video-modal-container');
    container.innerHTML = `<iframe src="https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&danmaku=0&autoplay=1" 
        allowfullscreen="true" 
        allow="fullscreen; autoplay; encrypted-media" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        scrolling="no" 
        frameborder="0" 
        framespacing="0"></iframe>`;
    document.getElementById('video-modal').style.display = 'flex';
}

function hideVideoModal() {
    document.getElementById('video-modal').style.display = 'none';
    document.getElementById('video-modal-container').innerHTML = '';
}

// 版权保护：禁止右键、F12、调试
document.oncontextmenu = function () { return false; };
document.onkeydown = function (e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
        return false;
    }
};
document.onselectstart = function () { return false; };
document.ondragstart = function () { return false; };

// 检测开发者工具 (基础版)
setInterval(function() {
    if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        // console.clear();
    }
}, 1000);

document.addEventListener('keydown', e => { 
    if (e.key === 'Escape') {
        hideBeastModal();
        hideVideoModal();
    }
});

// Лайки
let likeCount = 0;
document.getElementById('likeBtn').addEventListener('click', () => {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
});

// Комментарии
function addComment() {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    li.textContent = text;
    document.getElementById('commentList').appendChild(li);

    input.value = '';
}


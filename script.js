// Danh sách lời chúc
const messages = [
    "Chúc og Hùng một ngày sinh nhật thật vui vẻ và hạnh phúc! 🎂",
    "Mọi điều tốt đẹp nhất sẽ đến với bạn trong năm nay! 🎉",
    "Chúc ông Hùng gặt hái được nhiều thành tích học tập tốt cũng như nhiều giải liên quân nhá! 🥳"
];

// Hiển thị lời chúc khi nhấn vào hộp quà
function showMessage(index) {
    const messageBox = document.getElementById("messageBox");
    const messageText = document.getElementById("messageText");
    messageText.textContent = messages[index - 1];
    messageBox.classList.add("visible");
}

// Đóng hộp lời chúc
function closeMessage() {
    const messageBox = document.getElementById("messageBox");
    messageBox.classList.remove("visible");
}

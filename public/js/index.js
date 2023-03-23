
  // Lấy button theo ID
const openFileBtn = document.getElementById('createBtn');

  // Lắng nghe sự kiện click trên button
  openFileBtn.addEventListener('click', () => {
    // Mở file mới trong giao diện
    window.open('views/Chat_P2p.html','_self');
  })

const inputIdBtn = document.getElementById('joinBtn');

inputIdBtn.addEventListener('click', () => {
  const id = prompt("Nhập ID:");

  if (!id) {
    alert("ID không hợp lệ");
  } else {
    // Xử lý với ID được nhập vào
    console.log("ID đã nhập: ", id);
  }
});
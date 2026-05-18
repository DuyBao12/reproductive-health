const questions = [
  {
    text: "Tuổi vị thành niên được quy định trong khoảng thời gian nào?",
    options: [
      " 10 - 15 tuổi",
      " 10 - 19 tuổi",
      " 15 - 20 tuổi",
      " 12 - 18 tuổi",
    ],
    correct: 1,
  },
  {
    text: "Dấu hiệu đặc trưng nhất của tuổi dậy thì ở nữ là gì?",
    options: [" Vỡ tiếng", " Mọc râu", " Có kinh nguyệt", " Vai rộng ra"],
    correct: 2,
  },
  {
    text: "Dấu hiệu đặc trưng nhất của tuổi dậy thì ở nam là gì?",
    options: [
      " Ngực phát triển",
      " Xuất tinh lần đầu",
      " Giọng trầm đi",
      " Xuất hiện kinh nguyệt",
    ],
    correct: 1,
  },
  {
    text: "Cơ quan nào sản xuất ra nội tiết tố nam (Testosterone)?",
    options: [" Tuyến yên", " Tinh hoàn", " Tuyến giáp", " Tuyến thượng thận"],
    correct: 1,
  },
  {
    text: "Cơ quan nào sản xuất ra nội tiết tố nữ (Estrogen)?",
    options: [" Buồng trứng", " Tử cung", "C. Tuyến yên", "D. Âm đạo"],
    correct: 0,
  },
  {
    text: "Tại sao tuổi dậy thì ở nữ thường sớm hơn nam?",
    options: [
      " Do nữ nhạy cảm hơn",
      " Do sự phát triển nội tiết tố nhanh hơn",
      " Do chế độ ăn uống",
      " Do môi trường sống",
    ],
    correct: 1,
  },
  {
    text: "Hiện tượng 'mộng tinh' ở nam giới là gì?",
    options: [
      " Bệnh lý cần chữa trị",
      " Hiện tượng xuất tinh không chủ đích khi ngủ",
      " Dấu hiệu của bệnh nhiễm trùng",
      " Chỉ xảy ra khi bị căng thẳng",
    ],
    correct: 1,
  },
  {
    text: "Cần vệ sinh cơ quan sinh dục như thế nào trong những ngày kinh nguyệt?",
    options: [
      " Không cần vệ sinh",
      " Vệ sinh bằng nước muối",
      " Thay băng vệ sinh mỗi 4-6 tiếng",
      " Chỉ rửa bằng nước sạch",
    ],
    correct: 2,
  },
  {
    text: "Tuyến mồ hôi hoạt động mạnh ở tuổi dậy thì gây ra hiện tượng gì?",
    options: [" Khô da", " Mùi cơ thể", "C. Rụng tóc", "D. Giảm cân"],
    correct: 1,
  },
  {
    text: "Hormone nào gây ra mụn trứng cá ở tuổi dậy thì?",
    options: [" Insulin", " Estrogen/Androgen", " Thyroxine", " Cortisol"],
    correct: 1,
  },

  {
    text: "Thế nào là một tình bạn lành mạnh ở tuổi vị thành niên?",
    options: [
      " Cùng nhau trốn học",
      " Giúp đỡ nhau học tập và tôn trọng nhau",
      " Ép buộc bạn làm theo ý mình",
      " Luôn kiểm soát bạn bè",
    ],
    correct: 1,
  },
  {
    text: "Quan hệ tình dục không an toàn ở tuổi vị thành niên có thể dẫn đến?",
    options: [
      " Mang thai ngoài ý muốn",
      " Lây nhiễm bệnh tình dục (STIs)",
      " Tác động tiêu cực đến tâm lý",
      " Tất cả các phương án trên",
    ],
    correct: 3,
  },
  {
    text: "'Sức khoẻ sinh sản' bao gồm những khía cạnh nào?",
    options: [" Thể chất", " Tinh thần", " Xã hội", " Cả 3 khía cạnh trên"],
    correct: 3,
  },
  {
    text: "ện pháp nào vừa tránh thai vừa phòng bệnh lây qua đường tình dục (STIs)?",
    options: [
      " Uốn huốc tránh thai hàng ngày",
      " Sử dụng bao cao su",
      " Tính vòng kinh",
      " Xuất tinh ngoài",
    ],
    correct: 1,
  },
  {
    text: "Tại sao quan hệ tình dục sớm (trước 18 tuổi) bị coi là không an toàn?",
    options: [
      " Cơ thể chưa phát triển hoàn thiện",
      " Thiếu kiến thức phòng tránh",
      " Dễ bị lừa dối",
      " Cả A và B",
    ],
    correct: 3,
  },
  {
    text: "Khi bị người khác xâm hại tình dục, cần làm gì?",
    options: [
      " Im lặng vì sợ hãi",
      " Kể với người lớn tin cậy",
      " Giấu kín",
      " Cảm thấy tội lỗi",
    ],
    correct: 1,
  },
  {
    text: "Bệnh nào dưới đây lây truyền qua đường tình dục?",
    options: [" Sốt ất huyết", " Lậu, Giang mai", " Cúm mùa", " Thủy đậu"],
    correct: 1,
  },
  {
    text: "HIV không lây qua con đường nào sau đây?",
    options: [
      " Đường máu",
      " Đường tình dục",
      " Ôm hôn, bắt tay, dùng chung bát đũa",
      " Từ mẹ sang con khi mang thai",
    ],
    correct: 2,
  },
  {
    text: "Dấu hiệu sớm nhất của việc mang thai thường là gì?",
    options: [
      " Đau bụng dữ dội",
      " Chậm kinh (trễ kinh)",
      " Nhức đầu",
      " Nổi mụn",
    ],
    correct: 1,
  },
  {
    text: "Phụ nữ ở độ tuổi vị thành niên mang thai có nguy cơ gì cao?",
    options: [
      " Đẻ non, sảy thai",
      " Nhiễm độc thai nghén",
      " Ảnh hưởng đến việc học tập và tương lai",
      " Tất cả các phương án trên",
    ],
    correct: 3,
  },
  {
    text: "Thời điểm nào trong chu kỳ kinh nguyệt dễ thụ thai nhất?",
    options: [
      " Ngay khi đang có kinh",
      " Ngày rụng trứng",
      " Ngay sau khi sạch kinh",
      " 2 ngày trước khi có kinh lại",
    ],
    correct: 1,
  },
  {
    text: "ện pháp tránh thai khẩn cấp nên dùng khi nào?",
    options: [
      " Dùn hay cho bao cao su hàng ngày",
      " Sau khi quan hệ không an toàn",
      " Dùng 3 lần mỗi tuần",
      " Dùng trước khi quan hệ 1 ngày",
    ],
    correct: 1,
  },
  {
    text: "Việc nạo phá thai ở tuổi vị thành niên có thể dẫn đến hậu quả gì?",
    options: [" Vô sinh", " Thủng tử cung", " Sang chấn tâm lý", " Tất cả"],
    correct: 3,
  },
  {
    text: "Khi bị ép buộc quan hệ, bạn nên làm gì?",
    options: [" Đồng ý", " Từ chối", "C. Im lặng", "D. Tự trách"],
    correct: 1,
  },
  {
    text: "Nguồn thông tin tin cậy nhất?",
    options: [" Web đen", " Bạn bè", "C. Cha mẹ, bác sĩ", "D. Phim"],
    correct: 2,
  },
  {
    text: "Sự đồng thuận nghĩa là gì?",
    options: [" Ép buộc", " Tự nguyện", " Một lần là mãi mãi", " Im lặng"],
    correct: 1,
  },
  {
    text: "Nghi bị bệnh tình dục thì làm gì?",
    options: [" Tự uống thuốc", " Đi khám", "C. Mặc kệ", "D. Rửa muối"],
    correct: 1,
  },
  {
    text: "Xem phim khiêu dâm sớm gây gì?",
    options: [
      " Lệch nhận thức",
      " Gây nghiện",
      " Hành vi nguy hiểm",
      " Tất cả",
    ],
    correct: 3,
  },
  {
    text: "Độ tuổi kết hôn hợp pháp?",
    options: [" Nam 20, Nữ 18", " Cả 18", " Nam 18, Nữ 16", " Không quy định"],
    correct: 0,
  },
  {
    text: "Kỹ năng quan trọng nhất?",
    options: [" Từ chối", " Thương lượng", "C. Tìm giúp đỡ", "D. Tất cả"],
    correct: 3,
  },
];
const extraQuestions = [
  {
    text: "n phát hiện bao cao su bị rách sau khi quan hệ. Hiệu thuốc gần nhất đã đóng cửa. Bạn sẽ làm gì?",
    options: [
      " Chờ n sáng mai rồi mới tính tiếp",
      " Rửa bằng nước muối hoặc xà phòng thật mạnh",
      " Tìm mua thuốc tránh thai khẩn cấp tại hiệu thuốc trực đêm",
      " Vận động mạnh để đẩy dịch ra ngoài",
    ],
    correct: 2,
  },
  {
    text: "n gái trễ kinh 10 ngày, que thử hiện 1 vạch. Cách xử lý đúng nhất?",
    options: [
      " Yên m hoàn toàn",
      " Chờ 2-3 ngày thử lại hoặc xét nghiệm máu",
      " Uống thuốc dân gian",
      " Thử nhiều que cùng lúc",
    ],
    correct: 1,
  },
  {
    text: "n nam thấy tinh hoàn sưng đau dữ dội sau va chạm. Bạn nên:",
    options: [
      " Chư nóng ở nhà",
      " Mặc quần chật",
      " Đi khám hoặc cấp cứu ngay",
      " Uống thuốc rồi chờ",
    ],
    correct: 2,
  },
  {
    text: "Người yêu cũ đe dọa tung ảnh nhạy cảm. Bạn nên:",
    options: [
      " Quay lại yêu",
      " Trốn tránh",
      " Giữ bằng chứng và báo người lớn/công an",
      " Gửi thêm ảnh",
    ],
    correct: 2,
  },
  {
    text: "Nhận được link 'clip nhạy cảm học sinh'. Bạn sẽ:",
    options: [" Xem ngay", " Gửi bạn bè", " Không click, báo cáo", " Tải về"],
    correct: 2,
  },
  {
    text: "Người yêu yêu cầu định vị 24/7. Bạn xử lý:",
    options: [
      " Cài ngay",
      " Từ chối, nói rõ quyền riêng tư",
      " Cài nhưng fake vị trí",
      " Trả đũa lại",
    ],
    correct: 1,
  },
  {
    text: "Ở tiệc, bạn rời ly nước 5 phút. Khi quay lại:",
    options: [
      " Uống tiếp",
      " Ngửi thử",
      " Bỏ ly đó, lấy ly mới",
      " Đổ bớt rồi uống",
    ],
    correct: 2,
  },
  {
    text: "n trai không muốn dùng bao cao su. Bạn nên:",
    options: [
      " Chi theo",
      " Dừng lại nếu không an toàn",
      " Làm một nửa",
      " Tin là không sao",
    ],
    correct: 1,
  },
  {
    text: "Người lớn có hành vi đụng chạm nhạy cảm. Bạn sẽ:",
    options: [" Im lặng", " Báo người tin cậy", " Tránh mặt", " Cười trừ"],
    correct: 1,
  },
  {
    text: "Muốn tìm hiểu tránh thai lâu dài, bạn nên:",
    options: [
      " Hội nhóm ẩn danh",
      " TikTok",
      " Bệnh viện / trung tâm y tế",
      " Tự dùng thử",
    ],
    correct: 2,
  },
];

// ================= THÊM RANDOM + SOUND =================
const soundCorrect = new Audio("../sound/correct.mp3");
const soundWrong = new Audio("../sound/wrong.mp3");

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// random 30 + 10
const mainRandom = shuffleArray([...questions]).slice(0, 30);
const extraRandom = shuffleArray([...extraQuestions]).slice(0, 10);

// 👉 danh sách cuối
const finalQuestions = [...mainRandom, ...extraRandom];

// ======================================================

questions.forEach((q) => {
  if (!q.explanation) q.explanation = "Kiến thức khoa học liên quan.";
  if (!q.fact) q.fact = "Hiểu đúng giúp bạn bảo vệ bản thân.";
});

let currentIndex = 0;
let selectedAnswer = null;

let hp = 100;

function renderQuestion() {
  const q = finalQuestions[currentIndex];

  document.getElementById("questionTitle").innerText =
    "Câu " + (currentIndex + 1) + ":";

  document.getElementById("questionText").innerText = q.text;

  const answersEl = document.getElementById("answers");
  answersEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const li = document.createElement("li");

    li.className = "list-group-item list-group-item-action";
    li.innerText = opt;

    li.onclick = () => handleAnswer(index);

    answersEl.appendChild(li);
  });
}

function handleAnswer(selectedAnswer) {
  const q = finalQuestions[currentIndex];

  const items = document.querySelectorAll("#answers li");

  // khóa click spam
  items.forEach((item) => {
    item.style.pointerEvents = "none";
  });

  if (selectedAnswer === q.correct) {
    soundCorrect.currentTime = 0;
    soundCorrect.play();

    items[selectedAnswer].classList.add("correct");
  } else {
    hp -= 10;
    updateHP();

    soundWrong.currentTime = 0;
    soundWrong.play();

    items[selectedAnswer].classList.add("wrong");
    items[q.correct].classList.add("correct");

    alert("Sai rồi!\nĐáp án đúng là: " + q.options[q.correct]);

    if (hp <= 0) {
      setTimeout(() => {
        alert("HP = 0 💀 Game Over");
        location.reload();
      }, 500);

      return;
    }
  }

  setTimeout(() => {
    if (currentIndex < finalQuestions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showPopup(title, text) {
  document.getElementById("popupTitle").innerHTML = title;
  document.getElementById("popupText").innerHTML = text;

  new bootstrap.Modal(document.getElementById("popup")).show();
}

// HP
function updateHP() {
  document.getElementById("hp").innerText = hp;
}

// kết quả
function showResult() {
  let msg = "";

  if (hp <= 30) {
    msg = "Kiến thức còn khá yếu, cần tìm hiểu thêm.";
  } else if (hp <= 70) {
    msg = "Bạn có kiến thức cơ bản nhưng vẫn nên cẩn trọng.";
  } else {
    msg = "Bạn có kiến thức khá tốt để tự bảo vệ bản thân.";
  }
  alert("HP còn lại: " + hp + "/100\n" + msg);
}
// init
renderQuestion();
updateHP();

const questions = [
  {
    text: "Tuổi vị thành niên được quy định trong khoảng thời gian nào?",
    options: [
      "A. 10 - 15 tuổi",
      "B. 10 - 19 tuổi",
      "C. 15 - 20 tuổi",
      "D. 12 - 18 tuổi",
    ],
    correct: 1,
  },
  {
    text: "Dấu hiệu đặc trưng nhất của tuổi dậy thì ở nữ là gì?",
    options: [
      "A. Vỡ tiếng",
      "B. Mọc râu",
      "C. Có kinh nguyệt",
      "D. Vai rộng ra",
    ],
    correct: 2,
  },
  {
    text: "Dấu hiệu đặc trưng nhất của tuổi dậy thì ở nam là gì?",
    options: [
      "A. Ngực phát triển",
      "B. Xuất tinh lần đầu",
      "C. Giọng trầm đi",
      "D. Xuất hiện kinh nguyệt",
    ],
    correct: 1,
  },
  {
    text: "Cơ quan nào sản xuất ra nội tiết tố nam (Testosterone)?",
    options: [
      "A. Tuyến yên",
      "B. Tinh hoàn",
      "C. Tuyến giáp",
      "D. Tuyến thượng thận",
    ],
    correct: 1,
  },
  {
    text: "Cơ quan nào sản xuất ra nội tiết tố nữ (Estrogen)?",
    options: ["A. Buồng trứng", "B. Tử cung", "C. Tuyến yên", "D. Âm đạo"],
    correct: 0,
  },
  {
    text: "Tại sao tuổi dậy thì ở nữ thường sớm hơn nam?",
    options: [
      "A. Do nữ nhạy cảm hơn",
      "B. Do sự phát triển nội tiết tố nhanh hơn",
      "C. Do chế độ ăn uống",
      "D. Do môi trường sống",
    ],
    correct: 1,
  },
  {
    text: "Hiện tượng 'mộng tinh' ở nam giới là gì?",
    options: [
      "A. Bệnh lý cần chữa trị",
      "B. Hiện tượng xuất tinh không chủ đích khi ngủ",
      "C. Dấu hiệu của bệnh nhiễm trùng",
      "D. Chỉ xảy ra khi bị căng thẳng",
    ],
    correct: 1,
  },
  {
    text: "Cần vệ sinh cơ quan sinh dục như thế nào trong những ngày kinh nguyệt?",
    options: [
      "A. Không cần vệ sinh",
      "B. Vệ sinh bằng nước muối",
      "C. Thay băng vệ sinh mỗi 4-6 tiếng",
      "D. Chỉ rửa bằng nước sạch",
    ],
    correct: 2,
  },
  {
    text: "Tuyến mồ hôi hoạt động mạnh ở tuổi dậy thì gây ra hiện tượng gì?",
    options: ["A. Khô da", "B. Mùi cơ thể", "C. Rụng tóc", "D. Giảm cân"],
    correct: 1,
  },
  {
    text: "Hormone nào gây ra mụn trứng cá ở tuổi dậy thì?",
    options: [
      "A. Insulin",
      "B. Estrogen/Androgen",
      "C. Thyroxine",
      "D. Cortisol",
    ],
    correct: 1,
  },

  {
    text: "Thế nào là một tình bạn lành mạnh ở tuổi vị thành niên?",
    options: [
      "A. Cùng nhau trốn học",
      "B. Giúp đỡ nhau học tập và tôn trọng nhau",
      "C. Ép buộc bạn làm theo ý mình",
      "D. Luôn kiểm soát bạn bè",
    ],
    correct: 1,
  },
  {
    text: "Quan hệ tình dục không an toàn ở tuổi vị thành niên có thể dẫn đến?",
    options: [
      "A. Mang thai ngoài ý muốn",
      "B. Lây nhiễm bệnh tình dục (STIs)",
      "C. Tác động tiêu cực đến tâm lý",
      "D. Tất cả các phương án trên",
    ],
    correct: 3,
  },
  {
    text: "'Sức khoẻ sinh sản' bao gồm những khía cạnh nào?",
    options: [
      "A. Thể chất",
      "B. Tinh thần",
      "C. Xã hội",
      "D. Cả 3 khía cạnh trên",
    ],
    correct: 3,
  },
  {
    text: "Biện pháp nào vừa tránh thai vừa phòng bệnh lây qua đường tình dục (STIs)?",
    options: [
      "A. Uống thuốc tránh thai hàng ngày",
      "B. Sử dụng bao cao su",
      "C. Tính vòng kinh",
      "D. Xuất tinh ngoài",
    ],
    correct: 1,
  },
  {
    text: "Tại sao quan hệ tình dục sớm (trước 18 tuổi) bị coi là không an toàn?",
    options: [
      "A. Cơ thể chưa phát triển hoàn thiện",
      "B. Thiếu kiến thức phòng tránh",
      "C. Dễ bị lừa dối",
      "D. Cả A và B",
    ],
    correct: 3,
  },
  {
    text: "Khi bị người khác xâm hại tình dục, cần làm gì?",
    options: [
      "A. Im lặng vì sợ hãi",
      "B. Kể với người lớn tin cậy",
      "C. Giấu kín",
      "D. Cảm thấy tội lỗi",
    ],
    correct: 1,
  },
  {
    text: "Bệnh nào dưới đây lây truyền qua đường tình dục?",
    options: [
      "A. Sốt xuất huyết",
      "B. Lậu, Giang mai",
      "C. Cúm mùa",
      "D. Thủy đậu",
    ],
    correct: 1,
  },
  {
    text: "HIV không lây qua con đường nào sau đây?",
    options: [
      "A. Đường máu",
      "B. Đường tình dục",
      "C. Ôm hôn, bắt tay, dùng chung bát đũa",
      "D. Từ mẹ sang con khi mang thai",
    ],
    correct: 2,
  },
  {
    text: "Dấu hiệu sớm nhất của việc mang thai thường là gì?",
    options: [
      "A. Đau bụng dữ dội",
      "B. Chậm kinh (trễ kinh)",
      "C. Nhức đầu",
      "D. Nổi mụn",
    ],
    correct: 1,
  },
  {
    text: "Phụ nữ ở độ tuổi vị thành niên mang thai có nguy cơ gì cao?",
    options: [
      "A. Đẻ non, sảy thai",
      "B. Nhiễm độc thai nghén",
      "C. Ảnh hưởng đến việc học tập và tương lai",
      "D. Tất cả các phương án trên",
    ],
    correct: 3,
  },
  {
    text: "Thời điểm nào trong chu kỳ kinh nguyệt dễ thụ thai nhất?",
    options: [
      "A. Ngay khi đang có kinh",
      "B. Ngày rụng trứng",
      "C. Ngay sau khi sạch kinh",
      "D. 2 ngày trước khi có kinh lại",
    ],
    correct: 1,
  },
  {
    text: "Biện pháp tránh thai khẩn cấp nên dùng khi nào?",
    options: [
      "A. Dùng thay cho bao cao su hàng ngày",
      "B. Sau khi quan hệ không an toàn",
      "C. Dùng 3 lần mỗi tuần",
      "D. Dùng trước khi quan hệ 1 ngày",
    ],
    correct: 1,
  },
  {
    text: "Việc nạo phá thai ở tuổi vị thành niên có thể dẫn đến hậu quả gì?",
    options: [
      "A. Vô sinh",
      "B. Thủng tử cung",
      "C. Sang chấn tâm lý",
      "D. Tất cả",
    ],
    correct: 3,
  },
  {
    text: "Khi bị ép buộc quan hệ, bạn nên làm gì?",
    options: ["A. Đồng ý", "B. Từ chối", "C. Im lặng", "D. Tự trách"],
    correct: 1,
  },
  {
    text: "Nguồn thông tin tin cậy nhất?",
    options: ["A. Web đen", "B. Bạn bè", "C. Cha mẹ, bác sĩ", "D. Phim"],
    correct: 2,
  },
  {
    text: "Sự đồng thuận nghĩa là gì?",
    options: [
      "A. Ép buộc",
      "B. Tự nguyện",
      "C. Một lần là mãi mãi",
      "D. Im lặng",
    ],
    correct: 1,
  },
  {
    text: "Nghi bị bệnh tình dục thì làm gì?",
    options: ["A. Tự uống thuốc", "B. Đi khám", "C. Mặc kệ", "D. Rửa muối"],
    correct: 1,
  },
  {
    text: "Xem phim khiêu dâm sớm gây gì?",
    options: [
      "A. Lệch nhận thức",
      "B. Gây nghiện",
      "C. Hành vi nguy hiểm",
      "D. Tất cả",
    ],
    correct: 3,
  },
  {
    text: "Độ tuổi kết hôn hợp pháp?",
    options: [
      "A. Nam 20, Nữ 18",
      "B. Cả 18",
      "C. Nam 18, Nữ 16",
      "D. Không quy định",
    ],
    correct: 0,
  },
  {
    text: "Kỹ năng quan trọng nhất?",
    options: ["A. Từ chối", "B. Thương lượng", "C. Tìm giúp đỡ", "D. Tất cả"],
    correct: 3,
  },
];
const extraQuestions = [
  {
    text: "Bạn phát hiện bao cao su bị rách sau khi quan hệ. Hiệu thuốc gần nhất đã đóng cửa. Bạn sẽ làm gì?",
    options: [
      "A. Chờ đến sáng mai rồi mới tính tiếp",
      "B. Rửa bằng nước muối hoặc xà phòng thật mạnh",
      "C. Tìm mua thuốc tránh thai khẩn cấp tại hiệu thuốc trực đêm",
      "D. Vận động mạnh để đẩy dịch ra ngoài",
    ],
    correct: 2,
  },
  {
    text: "Bạn gái trễ kinh 10 ngày, que thử hiện 1 vạch. Cách xử lý đúng nhất?",
    options: [
      "A. Yên tâm hoàn toàn",
      "B. Chờ 2-3 ngày thử lại hoặc xét nghiệm máu",
      "C. Uống thuốc dân gian",
      "D. Thử nhiều que cùng lúc",
    ],
    correct: 1,
  },
  {
    text: "Bạn nam thấy tinh hoàn sưng đau dữ dội sau va chạm. Bạn nên:",
    options: [
      "A. Chườm nóng ở nhà",
      "B. Mặc quần chật",
      "C. Đi khám hoặc cấp cứu ngay",
      "D. Uống thuốc rồi chờ",
    ],
    correct: 2,
  },
  {
    text: "Người yêu cũ đe dọa tung ảnh nhạy cảm. Bạn nên:",
    options: [
      "A. Quay lại yêu",
      "B. Trốn tránh",
      "C. Giữ bằng chứng và báo người lớn/công an",
      "D. Gửi thêm ảnh",
    ],
    correct: 2,
  },
  {
    text: "Nhận được link 'clip nhạy cảm học sinh'. Bạn sẽ:",
    options: [
      "A. Xem ngay",
      "B. Gửi bạn bè",
      "C. Không click, báo cáo",
      "D. Tải về",
    ],
    correct: 2,
  },
  {
    text: "Người yêu yêu cầu định vị 24/7. Bạn xử lý:",
    options: [
      "A. Cài ngay",
      "B. Từ chối, nói rõ quyền riêng tư",
      "C. Cài nhưng fake vị trí",
      "D. Trả đũa lại",
    ],
    correct: 1,
  },
  {
    text: "Ở tiệc, bạn rời ly nước 5 phút. Khi quay lại:",
    options: [
      "A. Uống tiếp",
      "B. Ngửi thử",
      "C. Bỏ ly đó, lấy ly mới",
      "D. Đổ bớt rồi uống",
    ],
    correct: 2,
  },
  {
    text: "Bạn trai không muốn dùng bao cao su. Bạn nên:",
    options: [
      "A. Chiều theo",
      "B. Dừng lại nếu không an toàn",
      "C. Làm một nửa",
      "D. Tin là không sao",
    ],
    correct: 1,
  },
  {
    text: "Người lớn có hành vi đụng chạm nhạy cảm. Bạn sẽ:",
    options: [
      "A. Im lặng",
      "B. Báo người tin cậy",
      "C. Tránh mặt",
      "D. Cười trừ",
    ],
    correct: 1,
  },
  {
    text: "Muốn tìm hiểu tránh thai lâu dài, bạn nên:",
    options: [
      "A. Hội nhóm ẩn danh",
      "B. TikTok",
      "C. Bệnh viện / trung tâm y tế",
      "D. Tự dùng thử",
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
let score = 0;
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

    li.onclick = () => {
      selectedAnswer = index;

      document
        .querySelectorAll("#answers li")
        .forEach((item) => item.classList.remove("active"));

      li.classList.add("active");
    };

    answersEl.appendChild(li);
  });

  selectedAnswer = null;
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

// next
document.getElementById("nextBtn").onclick = () => {
  if (selectedAnswer === null) {
    alert("Chọn đáp án");
    return;
  }

  const q = finalQuestions[currentIndex];

  if (selectedAnswer === q.correct) {
    score++;

    // 🔊 đúng
    soundCorrect.currentTime = 0;
    soundCorrect.play();

    document
      .querySelectorAll("#answers li")
      [selectedAnswer].classList.add("list-group-item-success");
  } else {
    hp -= 10;
    updateHP();

    // 🔊 sai
    soundWrong.currentTime = 0;
    soundWrong.play();

    const items = document.querySelectorAll("#answers li");

    items[selectedAnswer].classList.add("list-group-item-danger");
    items[q.correct].classList.add("list-group-item-success");

    showPopup("Sai rồi", "Đáp án đúng là: " + q.options[q.correct]);

    if (hp <= 0) {
      setTimeout(() => {
        alert("HP = 0 💀");
        location.reload();
      }, 300);
    }

    return;
  }

  // mốc 30 câu
  if (currentIndex === 29) {
    showPopup(
      "Hoàn thành phần 1",
      "Bạn đã xong 30 câu hỏi chính. Tiếp theo là 10 câu tình huống.",
    );
  }

  if (currentIndex < finalQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResult();
  }
};

// prev
document.getElementById("prevBtn").onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
};

// kết quả
function showResult() {
  let msg = "";

  if (score <= 10) {
    msg = 'Bạn đang "ngây thơ" trước các mối nguy hiểm.';
  } else if (score <= 20) {
    msg = "Có kiến thức nhưng cần cẩn trọng hơn.";
  } else {
    msg = 'Chúc mừng, bạn là "Hiệp sĩ bảo vệ bản thân"!';
  }

  alert("Điểm: " + score + "/" + finalQuestions.length + "\n" + msg);
}

// init
renderQuestion();
updateHP();

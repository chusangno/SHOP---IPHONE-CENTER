import { useState, useRef } from "react";
import "./LuckyWheel.css";

/* ================== DATA ================== */
const items = [
  { name: "iPhone 17 prm", weight: 0 },   // rất hiếm
  { name: "Lì Xì 500k", weight: 15 },
  { name: "Vali", weight: 3 },
  { name: "Tai nghe", weight: 6 },
  { name: "Sạc dự phòng", weight: 8 },
  { name: "Giỏ quà Tết", weight: 7 },
  { name: " Sạc dự phòng", weight: 8 },
  { name: "Lì Xì 200k", weight: ´ },
  { name: "Lì xì 300k", weight: 12 },
  { name: "Ly nước", weight: 8 },
  { name: "Ấm siêu tốc", weight: 15 },
  { name: "Ly nước", weight: 7 },
];

/* ================== RANDOM BY WEIGHT ================== */
const getRandomIndexByWeight = () => {
  const total = items.reduce((sum, i) => sum + i.weight, 0);
  let rand = Math.random() * total;

  for (let i = 0; i < items.length; i++) {
    if (rand < items[i].weight) return i;
    rand -= items[i].weight;
  }
  return items.length - 1;
};

/* ================== COMPONENT ================== */
export default function LuckyWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);


  /* ================== SPIN ================== */
const [hasSpun, setHasSpun] = useState(false);

const spin = () => {
  if (spinning) return;

  if (hasSpun) {
    alert("⚠️ chỉ được quay 1 lần thôi bé!");
    return;
  }

  setSpinning(true);
  setResult(null);
  setShowConfetti(true);

  const slice = 360 / items.length;
  const randomIndex = getRandomIndexByWeight();
  const extraRounds = 360 * 8;

  const targetAngle =
    extraRounds +
    270 -
    randomIndex * slice -
    slice / 2;

  setRotation(targetAngle);

 setTimeout(() => {
  const prize = items[randomIndex].name;
  setResult(prize);

  const pieces = Array.from({ length: 60 }).map(() => ({
    left: Math.random() * 100,
    color: ["#ffd700", "#ff5252", "#4caf50", "#03a9f4"][
      Math.floor(Math.random() * 4)
    ],
    duration: 2 + Math.random() * 2,
  }));

  setConfettiPieces(pieces);
  setShowConfetti(true);

  // 🎆 chỉ nổ pháo hoa nếu trúng quà thật
  if (prize !== "Không trúng") {
    setShowFireworks(true);

    // tự tắt sau 3s
    setTimeout(() => setShowFireworks(false), 3000);
  }

  setSpinning(false);
  setHasSpun(true);
}, 6000);
}


  /* ================== RENDER ================== */
  return (
    <div className="wheel-wrapper">
      {/* POINTER */}
      
      <div className="pointer"></div>

      {/* WHEEL */}
      <div
        className="wheel"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="slice"
            style={{
              transform: `rotate(${index * (360 / items.length)}deg)`,
            }}
          >
            <span
              style={{
                transform: `
                  translate(-50%, -50%)
                  rotate(${360 / items.length / 2}deg)
                `,
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button className="spin-btn" onClick={spin} disabled={spinning}>
        {spinning ? "ĐANG QUAY..." : "QUAY"}
      </button>

      {/* RESULT */}
      {result && (
        <div className="result-overlay">
          <div className="result-box">
            {showConfetti && (
              <div className="confetti">
                {confettiPieces.map((c, i) => (
                  <span
                    key={i}
                    style={{
                      left: c.left + "%",
                      background: c.color,
                      animationDuration: c.duration + "s",
                    }}
                  />
                ))}
              </div>
            )}

            <h2>🎉 Chúc mừng!</h2>
            <p className="result-text">{result}</p>

            <button
              onClick={() => {
                setResult(null);
                setShowConfetti(false);
                setConfettiPieces([]);
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

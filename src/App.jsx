import { useEffect, useState } from "react";
import "./App.css";
import scoobyImage from "./assets/scooby.png";

const PASSWORD = import.meta.env.VITE_PASSWORD;
const YOUTUBE_LINK = "https://www.youtube.com/watch?v=Xi1DahW2R2k";

function App() {
  const [step, setStep] = useState("start");
  const [password, setPassword] = useState("");
  const [countdown, setCountdown] = useState(3);
  const [madeByAnswer, setMadeByAnswer] = useState("");

  const goToTryAgain = () => {
    setCountdown(3);
    setStep("tryAgain");
  };

  useEffect(() => {
    if (step === "tryAgain") {
      const countdownTimer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            return 1;
          }

          return prev - 1;
        });
      }, 1000);

      const redirectTimer = setTimeout(() => {
        setStep("start");
      }, 3000);

      return () => {
        clearInterval(countdownTimer);
        clearTimeout(redirectTimer);
      };
    }
  }, [step]);

  const goToYoutube = () => {
    window.location.href = YOUTUBE_LINK;
  };

  const checkPassword = () => {
    if (password === PASSWORD) {
      setStep("sure");
    } else {
      setPassword("");
      setStep("start");
    }
  };

  const checkMadeByAnswer = () => {
    const validAnswers = [
      "vince",
      "vincent",
      "toon",
      "camelotbowl",
      "toonthegoon",
      "vinny",
      "cutie",
    ];

    const answer = madeByAnswer.trim().toLowerCase();

    if (validAnswers.includes(answer)) {
      setStep("final");
    } else {
      goToYoutube();
    }
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {step === "start" && (
          <>
            <h1>Are You Scoob?</h1>
            <div style={buttonRow}>
              <button onClick={() => setStep("initials")} style={buttonStyle}>
                Yes
              </button>
              <button onClick={goToTryAgain} style={buttonStyle}>
                No
              </button>
            </div>
          </>
        )}

        {step === "initials" && (
          <>
            <h1>Are your initials in this list?</h1>
            <p>A D V J T M W E L O</p>
            <div style={buttonRow}>
              <button onClick={() => setStep("image")} style={buttonStyle}>
                Yes
              </button>
              <button onClick={goToTryAgain} style={buttonStyle}>
                No
              </button>
            </div>
          </>
        )}

        {step === "image" && (
          <>
            <h1>Is this you?</h1>
            <img src={scoobyImage} alt="Scoob" style={imageStyle} />
            <div style={buttonRow}>
              <button onClick={() => setStep("password")} style={buttonStyle}>
                Yes
              </button>
              <button onClick={goToYoutube} style={buttonStyle}>
                No
              </button>
            </div>
          </>
        )}
        {step === "password" && (
          <>
            <h1>Enter the password</h1>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkPassword();
                }
              }}
              style={inputStyle}
              placeholder="Password"
            />

            <div style={buttonRow}>
              <button onClick={checkPassword} style={buttonStyle}>
                Enter
              </button>

              <button onClick={goToTryAgain} style={buttonStyle}>
                No
              </button>
            </div>
          </>
        )}

        {step === "sure" && (
          <>
            <h1>Are you sure?</h1>
            <div style={buttonRow}>
              <button onClick={() => setStep("oneMore")} style={buttonStyle}>
                Yes
              </button>
              <button
                onClick={goToTryAgain}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#2ecc71";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6a0dad";
                }}
                onMouseDown={(e) => {
                  e.target.style.backgroundColor = "#ff8c00";
                }}
                onMouseUp={(e) => {
                  e.target.style.backgroundColor = "#2ecc71";
                }}
              >
                No
              </button>
            </div>
          </>
        )}

        {step === "oneMore" && (
          <>
            <h1>One more question...</h1>
            <div style={buttonRow}>
              <button onClick={() => setStep("madeBy")} style={buttonStyle}>
                okay...
              </button>
              <button
                onClick={goToTryAgain}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#2ecc71";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6a0dad";
                }}
                onMouseDown={(e) => {
                  e.target.style.backgroundColor = "#ff8c00";
                }}
                onMouseUp={(e) => {
                  e.target.style.backgroundColor = "#2ecc71";
                }}
              >
                No
              </button>
            </div>
          </>
        )}

        {step === "madeBy" && (
          <>
            <h1>Who made you this?</h1>

            <input
              type="text"
              value={madeByAnswer}
              onChange={(e) => setMadeByAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkMadeByAnswer();
                }
              }}
              style={inputStyle}
              placeholder="Enter answer"
            />

            <div style={buttonRow}>
              <button onClick={checkMadeByAnswer} style={buttonStyle}>
                Enter
              </button>

              <button onClick={goToYoutube} style={buttonStyle}>
                No
              </button>
            </div>
          </>
        )}

        {step === "tryAgain" && (
          <>
            <h1>Get outta here...</h1>
            <p>{countdown}</p>
          </>
        )}

        {step === "final" && (
          <>
            <h1>Hi Jalyn ❤️ :D</h1>
            <p>It appears I may have a crush on you</p>

            <div style={buttonRow}>
              <button
                onClick={() => {
                  window.location.href =
                    "https://www.youtube.com/watch?v=tTF4gN6XhF0";
                }}
                style={buttonStyle}
              >
                Hooray!
              </button>

              <button
                onClick={() => {
                  window.location.href =
                    "https://www.youtube.com/watch?v=hFTxCI8RnkA";
                }}
                style={buttonStyle}
              >
                oh no!
              </button>

              <button
                onClick={() => {
                  setStep("start");
                }}
                style={buttonStyle}
              >
                Try again?... ?
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#111",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  padding: "20px",
};

const cardStyle = {
  backgroundColor: "#1f1f1f",
  padding: "40px",
  borderRadius: "16px",
  maxWidth: "600px",
  width: "100%",
};

const buttonRow = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "25px",
  flexWrap: "wrap",
};

const buttonStyle = {};

const inputStyle = {
  padding: "12px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  marginTop: "20px",
  width: "80%",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "350px",
  borderRadius: "12px",
  marginTop: "20px",
};

export default App;

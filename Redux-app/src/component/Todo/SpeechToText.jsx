import { useState } from "react";
import "./SpeechToText.css";

function SpeechToText() {
  const [text, setText] = useState("");

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const spokenWord = event.results[0][0].transcript;
      setText(spokenWord);
    };

    recognition.start();
  };

  return (
    <div className="container">
      <button className="button" onClick={startListening}>🎤 Speak</button>

      <h1 className="text">{text}</h1>
    </div>
  );
}

export default SpeechToText;

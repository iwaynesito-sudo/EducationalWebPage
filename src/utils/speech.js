// src/utils/speech.js

let speechInProgress = false;

export const speakEnglish = (text, onStart, onEnd) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis is not supported in this browser.');
    return;
  }

  try {
    window.speechSynthesis.cancel(); // Detener cualquier audio previo

    const cleanText = text.replace(/_+/g, 'blank').replace(/[^\w\s',.?!-]/g, ' ');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.92; // Velocidad pedagógica clara
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Jenny') || v.name.includes('US'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => {
      speechInProgress = true;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      speechInProgress = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      speechInProgress = false;
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('Error playing speech:', err);
    if (onEnd) onEnd();
  }
};

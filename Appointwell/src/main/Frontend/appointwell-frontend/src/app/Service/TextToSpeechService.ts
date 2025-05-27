import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  constructor() {}

  speak(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    // Customization options
    utterance.rate = 1; // Speed
    utterance.pitch = 1; // Pitch
    utterance.volume = 1; // Volume
    if(sessionStorage.getItem("text-to-speech")==="true") {
      window.speechSynthesis.speak(utterance);
    }
  }
}

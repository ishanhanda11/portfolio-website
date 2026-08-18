// src/utils/audio.ts

let audioCtx: AudioContext | null = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playString(frequency: number, delaySeconds: number = 0) {
  const ctx = getAudioContext();
  const bufferSize = ctx.sampleRate * 2.5; // 2.5 seconds decay
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  
  // Karplus-Strong string synthesis
  const period = Math.floor(ctx.sampleRate / frequency);
  for (let i = 0; i < period; i++) {
    // Generate softer noise by avoiding extreme peaks
    data[i] = (Math.random() * 2 - 1) * 0.5;
  }
  
  for (let i = period; i < bufferSize; i++) {
    const prev = i - period - 1 >= 0 ? data[i - period - 1] : data[i - period];
    data[i] = (data[i - period] + prev) * 0.5 * 0.99; // slightly faster decay for warmth
  }
  
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  
  // Gain for overall volume
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0.25; // Increased volume
  
  // Aggressive lowpass filter to remove metallic harshness and make it warm/soft
  const biquadFilter = ctx.createBiquadFilter();
  biquadFilter.type = "lowpass";
  biquadFilter.frequency.value = 1000; // Let a bit more clarity through
  biquadFilter.Q.value = 1; 
  
  source.connect(biquadFilter);
  biquadFilter.connect(gainNode);
  gainNode.connect(ctx.destination);
  source.start(ctx.currentTime + delaySeconds);
}

export function playChord(chordName: 'Cmaj7' | 'Fmaj7' | 'Am9') {
  try {
    // Frequencies in Hz for beautiful, soothing acoustic voicings
    const chords = {
      // Warm, dreamy C Major 7 (C3, E3, G3, B3, E4)
      'Cmaj7': [130.81, 164.81, 196.00, 246.94, 329.63], 
      
      // Mellow, resolving F Major 7 (F2, C3, E3, A3, C4)
      'Fmaj7': [87.31, 130.81, 164.81, 220.00, 261.63],  
      
      // Deep, emotional A minor 9 (A2, E3, G3, B3, C4)
      'Am9': [110.00, 164.81, 196.00, 246.94, 261.63] 
    };
    
    const frequencies = chords[chordName];
    if (!frequencies) return;
    
    // Stagger the notes to simulate a gentle, finger-picked strum
    frequencies.forEach((freq, i) => {
      // Slower strum speed to make it sound more relaxed and soothing
      playString(freq, i * 0.06); 
    });
  } catch (err) {
    console.error("Audio playback failed:", err);
  }
}

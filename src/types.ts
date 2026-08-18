export type PartType = 'headstock' | 'fretboard' | 'soundhole' | 'bridge' | 'pickups' | 'body'

export const PART_DATA: Record<PartType, { title: string, category: string, description: string, material: string, soundImpact: string }> = {
  headstock: {
    title: 'Headstock & Tuning Pegs',
    category: 'Hardware',
    description: 'The headstock houses the tuning machines. The mass of the headstock can influence the resonance and sustain of the instrument.',
    material: 'Maple with Chrome Tuners',
    soundImpact: 'Slightly alters neck resonance and string tension behind the nut.'
  },
  fretboard: {
    title: 'Fretboard & Neck',
    category: 'Structural',
    description: 'The fretboard provides the playing surface, embedded with metal frets to define pitch intervals.',
    material: 'Rosewood or Maple',
    soundImpact: 'Contributes to the snap (Maple) or warmth (Rosewood) of the tone.'
  },
  soundhole: {
    title: 'Pickguard & Electronics Cavity',
    category: 'Protection',
    description: 'Protects the body from pick scratches and houses the complex wiring and potentiometers for tone control.',
    material: '3-Ply PVC Plastic',
    soundImpact: 'None directly, but anchors the pickups.'
  },
  pickups: {
    title: 'Magnetic Pickups',
    category: 'Electronics',
    description: 'Magnets wrapped in copper wire that translate string vibrations into an electrical current.',
    material: 'Alnico Magnets & Copper Wire',
    soundImpact: 'The single most important factor in the amplified tonal character.'
  },
  bridge: {
    title: 'Tremolo Bridge',
    category: 'Hardware',
    description: 'Anchors the strings to the body and allows for pitch modulation via the whammy bar.',
    material: 'Steel & Brass',
    soundImpact: 'Transfers vibration to the body; mass affects sustain.'
  },
  body: {
    title: 'Solid Body',
    category: 'Structural',
    description: 'The foundation of the guitar. Its mass and density shape the way strings vibrate and sustain.',
    material: 'Alder or Ash',
    soundImpact: 'Provides the baseline resonance profile and sustain characteristics.'
  }
}

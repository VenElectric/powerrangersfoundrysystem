export type RangerColors = "Red" | "Yellow" | "Blue" | "Green" | "Pink" | "Black" | "White";

export interface RangerObject {
  name: string;
  health: {
    current: number;
    total: number;
    damage: number;
  };
  movement: {
    ground: number;
    swim: number;
    aerial: number;
  };
  size: "Small" | "Common" | "Large" | "Long" | "Huge" | "Extended";
  languages: string;
  description: string;
  pronouns: string;
  influences: string[];
  hangups: string[];
  level: number;
  origin: string;
  role: RangerColors;
  personal_power: number;
  strength: {
    value: number;
    toughness: number;
    athletics: {
      value: number;
      specializations: string[];
    };
    brawn: {
      value: number;
      specializations: string[];
    };
    conditioning: number;
    initimidation: {
      value: number;
      specializations: string[];
    };
    might: {
      value: number;
      specializations: string[];
    };
  };
  speed: {
    value: number;
    evasion: number;
    acrobatics: {
      value: number;
      specializations: string[];
    };
    driving: {
      value: number;
      specializations: string[];
    };
    finesse: {
      value: number;
      specializations: string[];
    };
    infiltration: {
      value: number;
      specializations: string[];
    };
    initiative: string;
    targeting: {
      value: number;
      specializations: string[];
    };
  };
  smarts: {
    value: number;
    willpower: number;
    alertness: {
      value: number;
      specializations: string[];
    };
    culture: {
      value: number;
      specializations: string[];
    };
    science: {
      value: number;
      specializations: string[];
    };
    survival: {
      value: number;
      specializations: string[];
    };
    technology: {
      value: number;
      specializations: string[];
    };
  };
  social: {
    value: number;
    cleverness: number;
    animal_handling: {
      value: number;
      specializations: string[];
    };
    deception: {
      value: number;
      specializations: string[];
    };
    performance: {
      value: number;
      specializations: string[];
    };
    persuasion: {
      value: number;
      specializations: string[];
    };
    streetwise: {
      value: number;
      specializations: string[];
    };
  };
  powers: GeneralDesc[];
  perks: GeneralDesc[];
  background_bonds: GeneralDesc[];
  inventory: string[]; //todo create inventory interface
  notes: string;
  zord: string; // todo create zord interface
}

interface GeneralDesc {
  name: string;
  description: string;
}

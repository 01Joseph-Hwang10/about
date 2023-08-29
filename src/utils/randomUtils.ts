import seedrandom, { PRNG } from "seedrandom";

export const randomId = (): string => Math.random().toString(36).slice(2);

export const randomize = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export class SeedRandom {
  private rng: PRNG;

  constructor(seed: number) {
    this.rng = seedrandom(seed.toString());
  }

  public nextFloat(quick?: boolean): number {
    return quick ? this.rng.quick() : this.rng();
  }

  public nextInt(min: number, max: number): number {
    return Math.floor(this.rng.quick() * (max - min + 1)) + min;
  }
}

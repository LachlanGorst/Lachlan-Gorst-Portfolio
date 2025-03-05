export default class Animal {
  private name: string;
  private static count: number = 0;

  constructor(name: string){
    this.name = name;
    Animal.count += 1;
  }

  public get getName(): string {
    return this.name;
  }

  public static get getCount(): number {
    return Animal.count;
  }
}
export default class Person {
  private name: string;
  private age: number;
  private isEducated: boolean;
  private doSomething: () => void;
  private static count: number = 0;

  constructor(
    name: string,
    age: number,
    isEducated: boolean,
    doSomething: () => void
  ) {
    this.name = name;
    this.age = age;
    this.isEducated = isEducated;
    this.doSomething = doSomething;
  }

  public get getName(): string {
    return this.name;
  }

  public get getAge(): number {
    return this.age;
  }

  public get getIsEducated(): boolean {
    return this.isEducated;
  }

  public get getDoSomething(): () => void {
    return this.doSomething;
  }

  public static get getCount(): number {
    return Person.count;
  }

  public static incrementCount(): void {
    Person.count += 1;
  }

  public static decrementCount(): void {
    Person.count -= 1;
  }

  public static resetCount(): void {
    Person.count = 0;
  }

  public static printCount(): void {
    console.log(`Count: ${Person.count}`);
  }

  public printDetails(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Is Educated: ${this.isEducated}`
    );
  }
}

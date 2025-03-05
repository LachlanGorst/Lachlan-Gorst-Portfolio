import Animal from "./classes/Animal";

export class ClassCode{
    private static animals: Animal[] = [];

    constructor(){
      ClassCode.classConstructed();
    }
    
    private static classConstructed(){
      console.log(Animal.getCount);
    }

    public static getAnimal(index: number): Animal | undefined{
      return ClassCode?.animals ? ClassCode.animals[index] : undefined;
    }

    public static addAnimal(animal: Animal): number {
      ClassCode?.animals?.push(animal);
      const arrLength = ClassCode?.animals?.length - 1;
      console.warn(arrLength);
      return arrLength;
    }
}

const classCode: ClassCode = new ClassCode();
ClassCode.addAnimal(new Animal("GARRRRYYY"));

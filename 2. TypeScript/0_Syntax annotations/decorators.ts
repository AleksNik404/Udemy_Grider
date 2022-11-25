class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();

    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (error) {
      console.log('Ooooowodowdwdwd');
    }
  };
}

// new Boat().pilot();

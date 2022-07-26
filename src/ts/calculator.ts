export default class Calculator {
  // eslint-disable-next-line class-methods-use-this
  private screenSkeleton(): HTMLElement {
    const screen = document.createElement('div');
    screen.classList.add('screen');
    screen.innerText = '0';
    return screen;
  }

  // eslint-disable-next-line class-methods-use-this
  private buttonsSkeleton(): HTMLElement {
    const buttonTexts = [
      'AC',
      'DEL',
      '%',
      '/',
      '7',
      '8',
      '9',
      '*',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];

    const buttonsSkeleton = document.createElement('div');
    buttonsSkeleton.classList.add('buttons');

    buttonTexts.forEach((text) => {
      const button = document.createElement('button');
      button.innerText = text;
      buttonsSkeleton.appendChild(button);
    });

    return buttonsSkeleton;
  }

  private skeleton(): HTMLElement {
    const skeleton = document.createElement('div');
    skeleton.classList.add('calculator');

    skeleton.append(this.screenSkeleton(), this.buttonsSkeleton());
    return skeleton;
  }

  public run(): void {
    const skeleton = this.skeleton();
    document.querySelector('main')!.appendChild(skeleton);
  }
}

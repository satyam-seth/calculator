export default class Calculator {
  // eslint-disable-next-line class-methods-use-this
  private displaySkeleton(): HTMLElement {
    const display = document.createElement('div');
    display.classList.add('display');
    return display;
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
      button.addEventListener('click', this.handleButtonClick.bind(this));
      buttonsSkeleton.appendChild(button);
    });

    return buttonsSkeleton;
  }

  private handleButtonClick(event: Event): void {
    const button = event.target as HTMLButtonElement;

    switch (button.innerText) {
      case 'AC':
        this.clearDisplay();
        break;
      case 'DEL':
        this.deleteDisplay();
        break;
      case '=':
        this.calculate();
        break;
      default:
        this.updateDisplay(button.innerText);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private calculate(): void {
    const display = document.querySelector('.display') as HTMLDivElement;
    const expression = display.innerText;
    // eslint-disable-next-line no-eval
    const result = eval(expression) as number;
    display.innerText = result.toString();
  }

  // eslint-disable-next-line class-methods-use-this
  private deleteDisplay(): void {
    const display = document.querySelector('.display') as HTMLDivElement;
    display.innerText = display.innerText.slice(0, -1);
  }

  // eslint-disable-next-line class-methods-use-this
  private clearDisplay(): void {
    (document.querySelector('.display') as HTMLDivElement).innerText = '';
  }

  // eslint-disable-next-line class-methods-use-this
  private updateDisplay(value: string): void {
    const display = document.querySelector('.display') as HTMLDivElement;
    display.innerText += value;
  }

  private skeleton(): HTMLElement {
    const skeleton = document.createElement('div');
    skeleton.classList.add('calculator');

    skeleton.append(this.displaySkeleton(), this.buttonsSkeleton());
    return skeleton;
  }

  public run(): void {
    const skeleton = this.skeleton();
    document.querySelector('main')!.appendChild(skeleton);
  }
}

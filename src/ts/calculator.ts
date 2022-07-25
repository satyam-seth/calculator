export default class Calculator {
  // eslint-disable-next-line class-methods-use-this
  private skeleton(): HTMLElement {
    const skeleton = document.createElement('div');
    skeleton.classList.add('calculator');
    return skeleton;
  }

  public run(): void {
    const skeleton = this.skeleton();
    document.body.appendChild(skeleton);
  }
}

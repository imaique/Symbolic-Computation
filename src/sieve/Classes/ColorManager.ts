export default class ColorManager {
  colors: Array<string>;
  currentIndex: number;

  constructor() {
    this.colors = [
      '#6672A3',
      '#CBF7ED',
      '#23395B',
      '#F39237',
      '#406E8E',
      '#8EA8C3',
    ];
    this.currentIndex = 0;
  }
  top() {
    return this.colors[this.currentIndex];
  }
  pop() {
    const color = this.colors[this.currentIndex++];
    if (this.currentIndex == this.colors.length) this.currentIndex = 0;
    return color;
  }
}

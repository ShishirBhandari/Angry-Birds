class Tower {
  constructor(context) {
    this.context = context;

    this.position = new Vector2D(700, 475);
    this.components = [];

    this.createComponents();
  }

  createComponents() {
    var base = new Pole(
      this.context,
      this.position,
      new Vector2D(0, 20),
      'wood',
      0,
      false
    );
    this.components.push(base);

    var base2 = new Pole(
      this.context,
      this.position,
      new Vector2D(0, 120),
      'wood',
      0,
      true
    );
    this.components.push(base2);

    var base3 = new Pole(
      this.context,
      this.position,
      new Vector2D(80, 120),
      'wood',
      0,
      true
    );
    this.components.push(base3);

    var base4 = new Pole(
      this.context,
      this.position,
      new Vector2D(0, 140),
      'wood',
      0,
      false
    );
    this.components.push(base4);
  }

  draw() {
    for (let i = 0; i < this.components.length; i++) {
      const element = this.components[i];

      element.draw();
    }
  }
}

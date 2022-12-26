class Controls {
  constructor(type) {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    switch (type) {
      case 'ADMIN':
        this.#addKeyboardListeners();
        break;

      case 'DUMMY':
        this.forward = true;
    }
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case 'a':
          this.left = true;
          break;
        case 'd':
          this.right = true;
          break;
        case 'w':
          this.forward = true;
          break;
        case 's':
          this.reverse = true;
          break;
      }
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case 'a':
          this.left = false;
          break;
        case 'd':
          this.right = false;
          break;
        case 'w':
          this.forward = false;
          break;
        case 's':
          this.reverse = false;
          break;
      }
    };
  }
}

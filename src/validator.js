export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const res = this.name.match(/[^a-zA-Z0-9-_]/);
    if (res !== null) {
      return false;
    }

    if (this.name.match(/([0-9][0-9][0-9]+)/) !== null) {
      return false;
    }

    if (this.name.match(/^[0-9_-]/) !== null) {
      return false;
    }

    if (this.name.match(/^[0-9_-]/) !== null) {
      return false;
    }

    if (this.name.match(/[0-9_-]$/) !== null) {
      return false;
    }

    return true;
  }
}

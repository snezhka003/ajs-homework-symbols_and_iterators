export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует!');
    }

    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let current = 0;
    const members = this.toArray();

    return {
      next() {
        if (current < members.length) {
          const value = members[current];
          current += 1;

          return {
            done: false,
            value,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}

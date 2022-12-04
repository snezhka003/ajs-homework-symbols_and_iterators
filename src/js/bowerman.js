import Character from './character';

export default class Bowerman extends Character {
  constructor(name, type = 'Bowerman', attack = 25, defence = 25) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}

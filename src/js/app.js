import Zombie from './zombie';
import Undead from './undead';
import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Bowerman from './bowerman';
import Team from './team';

const activeCharacters = [
  new Zombie('zombie'),
  new Undead('undead'),
  new Daemon('daemon'),
  new Magician('magician'),
  new Swordsman('swordsman'),
  new Bowerman('bowerman'),
];

const team = new Team();
team.addAll(activeCharacters);
team.toArray();

for (const item of team) {
  console.log(item);
}

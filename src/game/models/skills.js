import {
  lensPath,
  view,
  set,
} from 'ramda'

const defenderHp = lensPath(['teams', 1, 'overall', 'hp'])
const defenderDef = lensPath(['teams', 1, 'overall', 'def'])
const attackerAtk = lensPath(['teams', 0, 'overall', 'atk'])

export default [
  {
    name: 'fireball',
    fire: (combat) => {
      const hp = view(defenderHp, combat)
      const damage = view(attackerAtk, combat) - view(defenderDef, combat)/2
      return {
        combat: set(
          defenderHp,
          hp - damage,
          combat,
        ),
        cast: {
          skill: 'fireball',
          type: 'damage',
          value: damage,
        },
      }
    },
  },
]

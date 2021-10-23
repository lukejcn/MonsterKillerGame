const ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 14

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function attackHandler() {
    const playerdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerdamage
    if (currentMonsterHealth <= 0) {
        alert('You Won')
    }
    const damage = dealMonsterDamage(ATTACK_VALUE)
    currentMonsterHealth -= damage
    if (currentPlayerHealth <= 0) {
        alert('You lose :(')
    }
}


attackBtn.addEventListener('click', attackHandler)
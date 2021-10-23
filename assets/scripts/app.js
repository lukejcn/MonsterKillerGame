const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 14

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE)
    currentMonsterHealth -= damage
    const playerdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerdamage
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lose :(')
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('draw')
    }
}

function strongAttackHandler() {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE)
    currentMonsterHealth -= damage
    const playerdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerdamage
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lose :(')
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('draw')
    }
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
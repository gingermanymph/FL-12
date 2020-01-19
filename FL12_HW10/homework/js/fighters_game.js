function Fighter(stats) {

    let name = stats ? stats['name'] : undefined;
    let damage = stats ? stats['damage'] : undefined;
    let strength = stats ? stats['strength'] : undefined;
    let agility = stats ? stats['agility'] : undefined;
    let health = stats ? stats['hp'] : undefined;
    let wins = 0;
    let losess = 0;

    this.getName = () => name;
    this.getDamage = () => damage;
    this.getStrength = () => strength;
    this.getAgility = () => agility;
    this.getHealth = () => health;

    this.attack = enemy => {
        const MAX_CHANCE = 100;
        const ATTACK_CHANCE = MAX_CHANCE - (enemy.getAgility() + enemy.getStrength());

        const isSuccessAttack = chance => {
            const MAX_LENGTH = 99;
            const array = [];
            for (let i = 0; i <= MAX_LENGTH; i++) {
                array.push(i < chance ? 1 : 0);
            }

            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }

            return array[Math.floor(Math.random() * (MAX_CHANCE - 1) + 1) - 1];
        }

        if (isSuccessAttack(ATTACK_CHANCE)) {
            enemy.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${enemy.getName()}!`)
        } else {
            console.log(`${enemy.getName()} missed attack!`)
        }
    };

    this.logCombatHistory = () => console.log(`Name: ${this.getName} Wins: ${wins} Losess: ${losess}`);

    this.heal = amount => {
        health += amount;
    }

    this.dealDamage = amount => {
        health = health - amount > 0 ? health - amount : 0;
    }

    this.addWin = () => wins++;
    this.addLoss = () => losess++;
}

function battle(player1, player2) {
    const isDead = player => player.getHealth() > 0 ? 0 : 1;

    if (isDead(player1)) {
        console.log(`${player1.getName()} is dead and can't fight.`)
        return
    }

    if (isDead(player2)) {
        console.log(`${player2.getName()} is dead and can't fight.`)
        return
    }

    let fighting = true;
    const whoCanAttack = () => Math.floor(Math.random() * (1 + 1));
    const winner = (player1, player2) => {
        player1.addWin();
        player2.addLoss();
        console.log(`${player1.getName()} has won!`);
        fighting = false;
    }

    while (fighting !== false) {
        switch (whoCanAttack()) {
            case 0:
                if (!isDead(player2)) {
                    player1.attack(player2);
                } else {
                    winner(player1, player2);
                }
                break;
            case 1:
                if (!isDead(player1)) {
                    player2.attack(player1);
                } else {
                    winner(player2, player1);
                }
                break;
            default: break;
        }
    }
}

const zeus = new Fighter({ name: 'Zeus', damage: 25, hp: 100, strength: 30, agility: 15 });
const odin = new Fighter({ name: 'Odin', damage: 25, hp: 100, strength: 30, agility: 15 });
battle(zeus, odin);
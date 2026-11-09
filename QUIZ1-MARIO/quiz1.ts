
class Mario {
    // atribut
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: "mario" | "super mario" | "fire mario" = "mario";

    // method bergerak ke kanan
    moveRight(): number {
        this.positionX += this.speed;
        return this.positionX;
    }

    // method Bergerak ke kiri
    moveLeft(): number {
        this.positionX -= this.speed;
        return this.positionX;
    }

    // method Ketika Mario diserang
    getAttacked(): void {
        if (this.invincible === true) {
            console.log("Mario sedang kebal! Serangan gagal!");
            return;
        }

        if (this.hp > 0) {
            this.hp -= 1;
            this.currentForm = "mario";
        }
    }

    // method menembakkan bola api
    throwFireball(): void {
        if (this.currentForm === "fire mario") {
            console.log("Mario menembakkan bola api!");
        } else {
            console.log("Mario belum bisa menembakkan bola api!");
        }
    }
}

class PowerUp {
    mario: Mario;

    constructor(mario: Mario) {
        this.mario = mario;
    }

    effect(): void {
    }
}

// INHERITANCE & POLYMORPHISM
class SuperMushroom extends PowerUp {
    effect(): void {
        this.mario.currentForm = "super mario";
        this.mario.hp += 1;
    }
}

// Fire Flower
class FireFlower extends PowerUp {
    effect(): void {
        this.mario.currentForm = "fire mario";
        this.mario.hp += 1;
    }
}

// Super Star
class SuperStar extends PowerUp {
    effect(): void {
        this.mario.invincible = true;
    }
}

// OBJECT MARIO
const mario1 = new Mario();

// OBJECT POWERUP
const mushroom = new SuperMushroom(mario1);
const flower = new FireFlower(mario1);
const star = new SuperStar(mario1);

// MEMANGGIL METHOD
mushroom.effect();
flower.effect();
mario1.throwFireball();
star.effect();
mario1.getAttacked();

// Menampilkan status Mario
console.log("Status Mario:", mario1);

"use script";

let Jason_hp = 100;
let nom_clichés = ["nerd", "sportif", "blonde", "naif", "chef d'équipe"];


class Survivants{
    constructor(prenom){
        this.prenom =prenom;
        this.carac = nom_clichés[Math.floor(Math.random()*nom_clichés.length)];
        this.proba_mort = Math.random();
        this.degats = Math.random();
        this.degats_mort = Math.random();
        this.mort = false;
    }

    confrontation(){
        if (this.proba_mort > Math.random()) {
            if (this.degats_mort > Math.random()) {
                if (this.degats < Math.random()) {
                    Jason_hp -= 10;
                    console.log(`${this.prenom} le ${this.carac} a esquivé et a infligé 10 points de degats, il reste ${Jason_hp} points de vie à Jason`);
                }
            }else {
                Jason_hp -= 15;
                this.mort = true;
                console.log(`${this.prenom} le ${this.carac} est mort mais il inflige 15 points de degats à Jason, il reste ${Jason_hp} points de vie à Jason`);
            }
        }else {
            this.mort = true;
            console.log(`Jason a tué ${this.prenom} le ${this.carac}`);
        }
    }
}


let survivants = [new Survivants("Annie"), new Survivants("Jack"), new Survivants("Ned"), new Survivants("Alice"), new Survivants("Marcie")];
let survivants_morts = "";
let i = 0;


while (Jason_hp > 0 && survivants.length > 0) {
    let survivant_vise = survivants[i % survivants.length];
    survivant_vise.confrontation();

    if (survivant_vise.mort){
        survivants_morts += survivant_vise.prenom + " ";
        survivants.splice(i % survivants.length,1);
    }
    i ++;
}


if (Jason_hp <= 0) {
    console.log(`Jason est mort les survivants ont gagné mais RIP à ${survivants_morts}`);
}
if (survivants.length == 0) {
    console.log(`Jason à gagné mais RIP à ${survivants_morts}`);
}

function playerAttack(){
    if (attack == true){
        text = 'player attacked'
        terje.hp -= 5;
        view();
    }
}
function npcAttack(){
    if (attack == true){
        text = 'npc attacked'
        player.hp -= 10;
        attack = false;    
        view();
    }
}

function attack(element){
    attack = true;
    playerAttack();
    setTimeout(function() {
        npcAttack();
    }, 1000);

}

function winOrlose(){
    if (win == true){
        alert ('Noice, you are the wiener!');
        }
    else {
        alert ('What a n00b, you lose..');
    }
}

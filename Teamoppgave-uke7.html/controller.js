function playerAttack(){
        text = 'player attacked'
        terje[0].hp -= player[0].attackDamage;
        view();
}
function npcAttack(){
        text = 'npc attacked'
        player[0].hp -= terje[0].attackDamage;   
        view();
}

function attack(){
    playerAttack();
    setTimeout(function(){
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
    view();
}

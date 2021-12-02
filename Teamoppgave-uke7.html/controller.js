
function playerAttack(){
        if(terje[0].hp > 0){
        text = 'player attacked'
        terje[0].hp -= player[0].attackDamage;
        } else{
            alert ('Noice, you are the wiener!');
        }
        view();
}
function npcAttack(){
        if(player[0].hp > 0){
        text = 'npc attacked'
        player[0].hp -= terje[0].attackDamage;   
        } else {
            alert ('What a n00b, you lose..');
        }    
        view();  
}

function attack(){
    playerAttack();
    setTimeout(function(){
    npcAttack();
    }, 1000);
   
}


function playerAttack(){
        if(terje[0].hp > 0){
        text = 'player attacked'
        terje[0].hp -= player[0].attackDamage;
        }
        if(terje[0].hp <= 0){
            alert ('Noice, you are the wiener!');
        }
        view();
}
function npcAttack(){
        if(player[0].hp > 0){
        text = 'npc attacked'
        player[0].hp -= terje[0].attackDamage;   
        } 
        if(player[0].hp <= 0){
            alert ('What a n00b, you lose..');
        }   
        view();  
}
// bytt alert til inni html
function attack(){
    playerAttack();
    setTimeout(function(){
    npcAttack();
    }, 1000);
   
}

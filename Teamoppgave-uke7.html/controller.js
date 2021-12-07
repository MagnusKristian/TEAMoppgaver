
function playerAttack(){
    if (player[0].hp == 0){
        melding = 'PLAYER WON';
        return;
    }
        if(terje[0].hp > 0){
            text = 'player attacked'
            terje[0].hp -= player[0].attackDamage;
        }
        // test3 = Math.floor(Math.random()*10);

    
        view();
    
}
function npcAttack(){
    if (terje[0].hp == 0){
        melding = 'TERJE WON';
        return;
    }
        if(player[0].hp > 0){
        text = 'npc attacked'
        player[0].hp -= terje[0].attackDamage;   
        } 
        // else if(terje[0].hp == 0){
        //     melding = 'You lost'
        //     return;
        // }
        view();
    }

// bytt alert til inni html
function attack(){
    playerAttack();
    setTimeout(function(){
    npcAttack();
    }, 1000);
   
}

// function randomGreier(){
//    if (test3 < 8){
//     player[0].crit = player[0].attackDamage * 2;
//    }
//     console.log(randomGreier, 'randomgreier');
//     view();
// }

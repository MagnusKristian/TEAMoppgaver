view();
function view(){
document.getElementById('main').innerHTML = `
<div class="ting"> HER SKAL DET SKJE SAKER OG TING </div>
<button onclick="attack()">Attack!</button>
<div>WHO ATTACKED: ${text}</div>
<div>TERJE HP:${terje[0].hp}</div>
<div>PLAYER HP:${player[0].hp}</div>
<div>PLAYER NAVN:${player[0].navn}</div>
<div>npc NAVN:${terje[0].navn}</div>
`;
}
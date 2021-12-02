view();
function view(){
document.getElementById('main').innerHTML = `
<div class="ting">
</div>
<button onclick="attack()">Attack!</button>
<div class="infoStuff">WHO ATTACKED: ${text}</div>
<div class="infoStuff">TERJE HP:${terje[0].hp}</div>
<div class="infoStuff">PLAYER HP:${player[0].hp}</div>
<div class="infoStuff">PLAYER NAVN:${player[0].navn}</div>
<div class="infoStuff">npc NAVN:${terje[0].navn}</div>
`;
}
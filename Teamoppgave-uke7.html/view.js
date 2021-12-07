view();
function view(){
document.getElementById('main').innerHTML = `
<div class="ting">

<button onclick="attack()">Attack!</button>
<hr>
<div class="infoStuff">WHO ATTACKED: ${text}</div>
<hr>
<div class="infoStuff">TERJE HP:${terje[0].hp}</div>
<hr>
<div class="infoStuff">PLAYER HP:${player[0].hp}</div>
<hr>
<div class="infoStuff">PLAYER NAVN:${player[0].navn}</div>
<hr>
<div class="infoStuff">npc NAVN:${terje[0].navn}</div>
<hr>
<div id="melding">WHO WON? ${melding}</div>
</div>
`;
}
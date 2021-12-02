view();
function view(){
document.getElementById('main').innerHTML = `
<div class="ting"> HER SKAL DET SKJE SAKER OG TING </div>
<button onclick="attack(this)">Attack!</button>
<div>${text}</div>
`;
}
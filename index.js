
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('ibsInput').addEventListener('input',function(e){
//console.log(123);
let ibsn = e.target.value;
//console.log(pounds);
document.getElementById('output').style.visibility = 'visible';

document.getElementById('gramsOutput').innerHTML = ibsn/0.0022046;

document.getElementById('kgOutput').innerHTML = ibsn/2.2046;

document.getElementById('ozOutput').innerHTML = ibsn*16;
});
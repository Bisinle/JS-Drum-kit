const mainDiv= document.createElement ('div')
mainDiv.classList.add('main-div')
document.body.appendChild(mainDiv)





const  clappDiv = document.createElement('div')
const A_key = document.createElement('kbd')
const A_span = document.createElement('span')
clappDiv.classList.add('key')
clappDiv.setAttribute('data-key','65')
A_key.textContent='A'
clappDiv.append(A_key)
A_span.textContent = 'CLAPP'
clappDiv.append(A_span)
mainDiv.append(clappDiv)
const audio_A = document.createElement('audio')
audio_A.setAttribute('data-key','65')
audio_A.setAttribute('src','./sounds/clap.wav')
document.body.append(audio_A)


const  hithatDiv = document.createElement('div')
const S_key = document.createElement('kbd')
const S_span = document.createElement('span')
hithatDiv.classList.add('key')
hithatDiv.setAttribute('data-key','83')
S_key.textContent='S'
hithatDiv.append(S_key)
S_span.textContent = 'HIHAT'
hithatDiv.append(S_span)
mainDiv.append(hithatDiv)
const audio_S = document.createElement('audio')
audio_S.setAttribute('data-key','83')
audio_S.setAttribute('src','./sounds/hihat.wav')
document.body.append(audio_S)



const kickDiv = document.createElement('div')
const D_key = document.createElement('kbd')
const D_span = document.createElement('span')
kickDiv.classList.add('key')
kickDiv.setAttribute('data-key', '68')
D_key.textContent = 'D'
kickDiv.append(D_key)
D_span.textContent = 'KICK'
kickDiv.append(D_span)
mainDiv.append(kickDiv)
const audio_D = document.createElement('audio')
audio_D.setAttribute('data-key','68')
audio_D.setAttribute('src','./sounds/kick.wav')
document.body.append(audio_D)


const openHatDiv = document.createElement('div')
const F_key = document.createElement('kbd')
const F_span = document.createElement('span')
openHatDiv.classList.add('key')
openHatDiv.setAttribute('data-key', '70')
F_key.textContent = 'F'
openHatDiv.append(F_key)
F_span.textContent = 'OPENHAT'
openHatDiv.append(F_span)
mainDiv.append(openHatDiv)
const audio_F = document.createElement('audio')
audio_F.setAttribute('data-key','70')
audio_F.setAttribute('src','./sounds/openhat.wav')
document.body.append(audio_F)



const boomDiv = document.createElement('div')
const G_key = document.createElement('kbd')
const G_span = document.createElement('span')
boomDiv.classList.add('key')
boomDiv.setAttribute('data-key', '71')
G_key.textContent = 'G'
boomDiv.append(G_key)
G_span.textContent = 'BOOM'
boomDiv.append(G_span)
mainDiv.append(boomDiv)
const audio_G = document.createElement('audio')
audio_G.setAttribute('data-key','71')
audio_G.setAttribute('src','./sounds/boom.wav')
document.body.append(audio_G)


const rideDiv = document.createElement('div')
const H_key = document.createElement('kbd')
const H_span = document.createElement('span')
rideDiv.classList.add('key')
rideDiv.setAttribute('data-key', '72')
H_key.textContent = 'H'
rideDiv.append(H_key)
H_span.textContent = 'RIDE'
rideDiv.append(H_span)
mainDiv.append(rideDiv)
const audio_H = document.createElement('audio')
audio_H.setAttribute('data-key','72')
audio_H.setAttribute('src','./sounds/ride.wav')
document.body.append(audio_H)



const snareDiv = document.createElement('div')
const J_key = document.createElement('kbd')
const J_span = document.createElement('span')
snareDiv.classList.add('key')
snareDiv.setAttribute('data-key', '74')
J_key.textContent = 'J'
snareDiv.append(J_key)
J_span.textContent = 'SNARE'
snareDiv.append(J_span)
mainDiv.append(snareDiv)
const audio_J = document.createElement('audio')
audio_J.setAttribute('data-key','74')
audio_J.setAttribute('src','./sounds/snare.wav')
document.body.append(audio_J)



const tomDiv = document.createElement('div')
const K_key = document.createElement('kbd')
const K_span = document.createElement('span')
tomDiv.classList.add('key')
tomDiv.setAttribute('data-key', '75')
K_key.textContent = 'K'
tomDiv.append(K_key)
K_span.textContent = 'TOM'
tomDiv.append(K_span)
mainDiv.append(tomDiv)
const audio_K = document.createElement('audio')
audio_K.setAttribute('data-key','75')
audio_K.setAttribute('src','./sounds/tom.wav')
document.body.append(audio_K)




const tinkDiv = document.createElement('div')
const L_key = document.createElement('kbd')
const L_span = document.createElement('span')
tinkDiv.classList.add('key')
tinkDiv.setAttribute('data-key', '76')
L_key.textContent = 'L'
tinkDiv.append(L_key)
L_span.textContent = 'TINK'
tinkDiv.append(L_span)
mainDiv.append(tinkDiv)
const audio_L = document.createElement('audio')
audio_L.setAttribute('data-key','76')
audio_L.setAttribute('src','./sounds/tink.wav')
document.body.append(audio_L)
















window.addEventListener('keydown', function(event){
  const audio =document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
  

  
  if(!audio) return;//stops the f(x) from running if there's no keyCode for the key pressed
  audio.currentTime =0;//rewins to the start
  audio.play(); 
 key.classList.add('playing')
})
function removeTransition(e){
console.log(e.propertyName);
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

const allKeys = document.querySelectorAll('.key')
allKeys.forEach(key => key.addEventListener('transitionend', removeTransition) );
window.addEventListener('keyup', function(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!key) return; // Stops the function from running if there's no keyCode for the key released
  if (event.propertyName === 'transform') {
    key.classList.remove('playing');
  }
});
  


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
A_span.textContent = 'clapp'
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
S_span.textContent = 'hihat'
hithatDiv.append(S_span)
mainDiv.append(hithatDiv)
const audio_S = document.createElement('audio')
audio_S.setAttribute('data-key','83')
audio_S.setAttribute('src','./sounds/hihat.wav')
document.body.append(audio_S)


const boomDiv = document.createElement('div')
const D_key = document.createElement('kbd')
const D_span = document.createElement('span')
boomDiv.classList.add('key')
boomDiv.setAttribute('data-key', '68')
D_key.textContent = 'D'
boomDiv.append(D_key)
D_span.textContent = 'Boom'
boomDiv.append(D_span)
mainDiv.append(boomDiv)












window.addEventListener('keydown', function(event){
  const audio =document.querySelector(`audio[data-key="${event.keyCode}"]`)
  if(!audio) return;
  audio.currentTime =0;
  audio.play();

})

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



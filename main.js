document.querySelector('#red').addEventListener('click',changeBackgroundToRed)

document.querySelector('#blue').addEventListener('click',changeBackgroundToBlue)

document.querySelector('#lemon').addEventListener('click',changeBackgroundToLemon)

document.querySelector('#green').addEventListener('click',changeBackgroundToGreen)

document.querySelector('#orange').addEventListener('click',changeBackgroundToOrange)

document.querySelector('#yellow').addEventListener('click',changeBackgroundToYellow)

document.querySelector('#pink').addEventListener('click',changeBackgroundToPink)

document.querySelector('#click').addEventListener('click',resetBackground)

function resetBackground(){
  document.querySelector('body').style.background = 'white';
  document.querySelector('body').style.color = 'black';

}

function changeBackgroundToRed(){
  document.querySelector('body').style.background = 'red';
  document.querySelector('body').style.color = 'white';
}

function changeBackgroundToBlue(){
  document.querySelector('body').style.background = 'blue';
  document.querySelector('body').style.color = 'white';
}

function changeBackgroundToLemon(){
  document.querySelector('body').style.background = 'lime';
  document.querySelector('body').style.color = 'white';
}

function changeBackgroundToGreen(){
  document.querySelector('body').style.background = 'green';
  document.querySelector('body').style.color = 'white';
}

function changeBackgroundToOrange(){
  document.querySelector('body').style.background = 'orange';
  document.querySelector('body').style.color = 'white';
}

function changeBackgroundToYellow(){
  document.querySelector('body').style.background = 'yellow';
  document.querySelector('body').style.color = 'black';
}

function changeBackgroundToPink(){
  document.querySelector('body').style.background = 'pink';
  document.querySelector('body').style.color = 'white';
}
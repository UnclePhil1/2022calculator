const history = document.getElementById('history');

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
button.addEventListener('click',(e) => {
switch(e.target.innerText) {
  case 'C':
    history.innerText = '';
    break;
    case 'X':
    if (history.innerText) {
      history.innerText =  history.innerText.slice(0, -1);
    }
    break;
    case '=':
      try {
        
        if(history.innerText.includes('sin')) {
          let val = history.innerText.slice(3);
          let result = Math.sin(parseInt(val));
          history.innerText = result;
        }  else if (history.innerText.includes('cos')) {
          let val = history.innerText.slice(3);
          let result = Math.cos(parseInt(val));
          history.innerText = result;
        } else {
          history.innerText =eval(history.innerText);
        }
      } catch {
        history.innerText = 'error!';
      }
      break;
    default:
      history.innerText += e.target.innerText;
    
}
});
});
// function sin() {
//   let result = Math.sin(parseInt(history.innerText));
  
//   history.innerText = result;
//   history.innerText = history.innerText.slice(0, -3);
//   console.log(history.innerText);
// }
// // sin()

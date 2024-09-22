// Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд.
// При достижении 0 секунд таймер должен остановиться.

const  timer =  document.getElementById('timer'); 

const simpleCounter = () => {
  let count = 60;

  const countFunc = () => {
    const min =  Math.floor(count / 60);
    const sec = count % 60;

    timer.textContent = min + ':' + sec;

    count--;

    if(count < 0){
        clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(countFunc, 1000);
};

simpleCounter();
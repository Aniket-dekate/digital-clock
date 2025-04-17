const clock = document.querySelector('#clock')


setIntervala(function () {
  let data = new Date();
  //console.log(data.toLocalTimeString());
  clock.innerHTML = data.toLocalImeSting();
}, 1000);
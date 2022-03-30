let playButton = document.getElementById("play-button")

function coolBorder(element){
    val1 = randomIntFromInterval(40, 60)
    val2 = randomIntFromInterval(40, 60)
    val3 = randomIntFromInterval(40, 60)
    val4 = randomIntFromInterval(40, 60)
    val5 = randomIntFromInterval(40, 60)
    val6 = randomIntFromInterval(40, 60)
    val7 = randomIntFromInterval(40, 60)
    val8 = randomIntFromInterval(40, 60)
  
    element.style.borderRadius = `${val1}% ${val2}% ${val3}% ${val4}% / ${val5}% ${val6}% ${val7}% ${val8}%` 
  }

coolBorder(playButton)
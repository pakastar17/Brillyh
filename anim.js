// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
      { text: "♪♫ Llevas tanto tiempo sin hablar ♫♪", time: 2 },
      { text: "♪♫ que ni siquiera recuerdo ♫♪", time: 6 },
      { text: "♪♫ el canto de tu voz ♫♪", time: 8 },
      { text: "♪♫ No vale la pena ya ♫♪", time: 12 },
      { text: "♪♫ vivir pensando en el pasado ♫♪", time: 15 },
      { text: "♪♫ Y ahora que ♫", time:  21},
      { text: "♪♫ quiero ser parte de tu piel ♫", time: 25 },
      { text: "♪♫ Dime por qué ♫♪", time:  30},
      { text: "♪♫ no comprendes, no me entiendes ♫♪", time: 34 },
      { text: "♪♫ Eres chocolate y vainilla ♫♪", time: 38 },
      { text: "♪♫ azúcar de mi felicidad ♫♪", time:  43},
      { text: "♪♫ siempre has sido mi fantasía ♫♪", time: 48 },
      { text: "♪♫ dulce sueño que realizar ♫♪", time:52  },
      { text: "♪♫ Presos de la confusión ♫♪", time:107 },
      { text: "♪♫ víctimas de los años y la desilusión ♫♪", time: 111 },
      { text: "♪♫ LLama a quien la lluvia extinguió♪", time: 116 },
      { text: "♪♫ haz callar el silencio que se hace eterno ♫♪", time: 120 },
      { text: "♪♫ Y ahora lo sé ♫♪", time: 125 },
      { text: "♪♫ siempre fuiste parte de mi piel ♫♪", time: 128 },
      { text: "♪♫ Acércate; tus labios tienen algo ♫♪", time: 134 },
      { text: "♪♫ que yo estoy buscando ♫♪", time:140  },
      { text: "♪♫ Eres chocolate y vainilla ♫♪", time:143  },
      { text: "♪♫ azúcar de mi felicidad ♫♪", time: 147 },
      { text: "♪♫ siempre has sido mi fantasía ♫♪", time: 152 },
      { text: "♪♫ Dulce sueño que realizar ♫♪", time: 156 },
      { text: "♪♫ Eres chocolate y vainilla ♫♪", time:201  },
      { text: "♪♫ azúcar de mi felicidad ♫♪", time: 205 }
    ]


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
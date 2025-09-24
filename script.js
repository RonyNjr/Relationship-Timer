const inicio = new Date(2024, 10, 26, 17, 40) 
// ano, mes (0-11), dia, hora, minuto

// 👉 Data em que o contador deve pausar
const pausa = new Date(2025, 08, 13, 20, 30)


function calcularDiferenca(dataInicio, dataAtual) {
    let anos = dataAtual.getFullYear() - dataInicio.getFullYear()
    let meses = dataAtual.getMonth() - dataInicio.getMonth()
    let dias = dataAtual.getDate() - dataInicio.getDate()

    if (dias < 0) {
        meses--
        let ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate()
        dias += ultimoDiaMesAnterior
    }
    if (meses < 0) {
        anos--
        meses += 12
    }

    let horas = dataAtual.getHours() - dataInicio.getHours()
    let minutos = dataAtual.getMinutes() - dataInicio.getMinutes()
    let segundos = dataAtual.getSeconds() - dataInicio.getSeconds()

    if (segundos < 0) {
        minutos--
        segundos += 60
    }
    if (minutos < 0) {
        horas--
        minutos += 60
    }
    if (horas < 0) {
        dias--
        horas += 24
    }

    return { anos, meses, dias, horas, minutos, segundos}
}

let intervalo // pra poder parar depois

function atualizarContador() {
  const agora = new Date()

  // 👉 Se já chegou na data de pausa, trava no horário de pausa
  if (agora >= pausa) {
    clearInterval(intervalo) // para a atualização
    mostrarTempo(calcularDiferenca(inicio, pausa))
    return
  }

  mostrarTempo(calcularDiferenca(inicio, agora))
}

function mostrarTempo({ anos, meses, dias, horas, minutos, segundos }) {
  document.getElementById("anos").textContent = anos
  document.getElementById("meses").textContent = meses
  document.getElementById("dias").textContent = dias
  document.getElementById("horas").textContent = horas.toString().padStart(2, '0')
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0')
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0')
}

intervalo = setInterval(atualizarContador, 1000)
atualizarContador()
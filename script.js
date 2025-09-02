const inicio = new Date(2024, 10, 26, 17, 40)
// ano, mes (0-11), dia, hora, minuto

function calcularDiferenca(dataInicio, dataAtual) {
    let anos = dataAtual.getFullYear() - dataInicio.getFullYear()
    let meses = dataAtual.getMonth() - dataInicio.getMonth()
    let dias = dataAtual.getDate() - dataInicio.getDate()

    //ajusta meses e anos quando ainda nao chegou no mes/dia
    if (dias < 0) {
        meses--
        // pega o ultimo dia do mes anterior
        let ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate()
        dias += ultimoDiaMesAnterior
    }
    if (meses < 0) {
        anos--
        meses += 12
    }

    // Diferenca de horas, minutos, segundos
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

function atualizarContador() {
  const agora = new Date()
  const { anos, meses, dias, horas, minutos, segundos } = calcularDiferenca(inicio, agora)

  document.getElementById("anos").textContent = anos
  document.getElementById("meses").textContent = meses
  document.getElementById("dias").textContent = dias
  document.getElementById("horas").textContent = horas.toString().padStart(2, '0')
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0')
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0')
}

setInterval(atualizarContador, 1000) // atualiza a cada 1 segundo
atualizarContador() // chama uma vez para não esperar o 1º segundo

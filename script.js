document.addEventListener("DOMContentLoaded", function () {
  let writing = ""
  let num1 = 0
  let num2 = 0
  let result = null
  let choice = ""

  var buttonNumbers = document.getElementsByClassName("num")
  var clean = document.getElementById("clear")
  var replace = document.getElementById("replace")
  var porcentagem = document.getElementById("porcentagem")
  var zero = document.getElementById("zero")
  var dot = document.getElementById("dot")
  var multiplicacao = document.getElementById("multiplicacao")
  var adicao = document.getElementById("adicao")
  var subitracao = document.getElementById("subitracao")
  var divisao = document.getElementById("divisao")
  var equals = document.getElementById("equals")

  for (let i = 0; i < buttonNumbers.length; i++) {
    buttonNumbers[i].addEventListener("click", function () {
      if (writing == "0") {
        writing = buttonNumbers[i].getAttribute("data-num")
      } else {
        writing = writing + buttonNumbers[i].getAttribute("data-num")
      }

      if (choice == "") {
        num1 = writing
      }
      document.getElementById("result").innerHTML = writing
    })
  }

  clean.addEventListener("click", function () {
    writing = ""
    document.getElementById("result").innerHTML = 0

    writing = ""
    num1 = 0
    num2 = 0
    result = null
    choice = ""
  })

  replace.addEventListener("click", function () {
    writing *= -1
    writing += ""
    document.getElementById("result").innerHTML = writing
  })

  zero.addEventListener("click", function () {
    writing = writing + "0"
    if (choice == "") {
      num1 = writing
    }
    document.getElementById("result").innerHTML = writing
  })

  dot.addEventListener("click", function () {
    if (writing == "" || writing == "0") {
      writing = "0."
    } else if (!writing.includes(".")) {
      writing = writing + "."
    }
    if (choice == "") {
      num1 = writing
    }
    document.getElementById("result").innerHTML = writing
  })

  multiplicacao.addEventListener("click", function () {
    if (choice != "" && choice != "M") {
      equal()
    }
    if (choice == "") {
      num1 = writing
      writing = ""
      choice = "M"
    } else {
      num2 = writing
      if (result == null) {
        result = num1 * num2
      } else {
        result *= num2
      }
      writing = result
      document.getElementById("result").innerHTML = result
      writing = ""
    }
  })

  adicao.addEventListener("click", function () {
    if (choice != "" && choice != "A") {
      equal()
    }
    if (choice == "") {
      num1 = writing - 0
      writing = ""
      choice = "A"
    } else {
      num2 = writing - 0
      if (result == null) {
        result = num1 + num2
      } else {
        result += num2
      }
      writing = result
      document.getElementById("result").innerHTML = result
      writing = ""
    }
  })

  subitracao.addEventListener("click", function () {
    if (choice != "" && choice != "S") {
      equal()
    }
    if (choice == "") {
      num1 = writing - 0
      writing = ""
      choice = "S"
    } else {
      num2 = writing - 0
      if (result == null) {
        result = num1 - num2
      } else {
        result -= num2
      }
      writing = result
      document.getElementById("result").innerHTML = result
      writing = ""
    }
  })

  divisao.addEventListener("click", function () {
    if (choice != "" && choice != "D") {
      equal()
    }
    if (choice == "") {
      num1 = writing - 0
      writing = ""
      choice = "D"
    } else {
      num2 = writing - 0
      if (result == null) {
        result = num1 / num2
      } else {
        result = result / num2
      }
      writing = result
      document.getElementById("result").innerHTML = result
      writing = ""
    }
  })

  porcentagem.addEventListener("click", function () {
    if (choice == "M") {
      num2 = writing / 100
      if (result == null) {
        result = num1 * num2
      } else {
        result *= num2
      }
    }

    if (choice == "D") {
      num2 = writing / 100
      if (result == null) {
        result = num1 / num2
      } else {
        result = result / num2
      }
    }

    if (choice == "A") {
      num2 = num1 * (writing / 100)
      if (result == null) {
        result = num1 + num2
      } else {
        result += num2
      }
    }

    if (choice == "S") {
      num2 = num1 * (writing / 100)
      if (result == null) {
        result = num1 - num2
      } else {
        result -= num2
      }
    }

    if (choice == "") {
      result = num1 / 100
      num2 = result
    }

    choice = "P"
    writing = result
    document.getElementById("result").innerHTML = num2
    writing = ""
  })

  equals.addEventListener("click", equal)

  function equal() {
    num2 = writing - 0
    if (choice == "M") {
      if (result == null) {
        result = num1 * num2
      } else {
        result *= num2
      }
    }

    if (choice == "D") {
      if (result == null) {
        result = num1 / num2
      } else {
        result = result / num2
      }

      if (num2 == 0 || result == Infinity) {
        result = "Erro"
      }
    }

    if (choice == "A") {
      if (result == null) {
        result = num1 + num2
      } else {
        result += num2
      }
    }

    if (choice == "S") {
      if (result == null) {
        result = num1 - num2
      } else {
        result -= num2
      }
    }

    if (choice == "") {
      if (writing == "") {
        result = 0
      } else {
        result = writing
      }
    }

    document.getElementById("result").innerHTML = result
    if (result == "Erro") {
      result = 0
    }

    writing = result + ""
    result = null
    choice = ""
  }
})

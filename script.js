document.addEventListener("DOMContentLoaded", function () {
  let writing = ""
  let num1 = 0
  let num2 = 0
  let result = null
  let choice = ""

  var buttonNumbers = document.getElementsByClassName("num")
  var clean = document.getElementById("clear")
  var replace = document.getElementById("replace")
  var zero = document.getElementById("zero")
  var dot = document.getElementById("dot")
  var multiplicacao = document.getElementById("multiplicacao")
  var adicao = document.getElementById("adicao")
  var subitracao = document.getElementById("subitracao")
  var divisao = document.getElementById("divisao")
  var equals = document.getElementById("equals")

  for (let i = 0; i < buttonNumbers.length; i++) {
    buttonNumbers[i].addEventListener("click", function () {
      writing = writing + buttonNumbers[i].getAttribute("data-num")

      if (choice == "") {
        num1 = writing
      }
      document.getElementById("result").innerHTML = writing
    })
  }

  clean.addEventListener("click", function () {
    writing = ""
    document.getElementById("result").innerHTML = 0
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
    console.log(writing)
    writing = writing + "."
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
      console.log(num1, num2, result)
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
      console.log(num1, num2, result)
    }
  })

  adicao.addEventListener("click", function () {
    if (choice != "" && choice != "A") {
      equal()
    }
    if (choice == "") {
      num1 = writing - 0
      writing = ""
      console.log(num1, num2, result)
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
      console.log(num1, num2, result)
    }
  })

  subitracao.addEventListener("click", function () {
    if (choice != "" && choice != "S") {
      equal()
    }
    if (choice == "") {
      num1 = writing - 0
      writing = ""
      console.log(num1, num2, result)
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
      console.log(num1, num2, result)
    }
  })

  divisao.addEventListener("click", function () {
    if (choice != "" && choice != "D") {
      equal()
    }
    if (choice == "") {
      num1 = writing - 0
      writing = ""
      console.log(num1, num2, result)
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
      console.log(num1, num2, result)
    }
  })

  equals.addEventListener("click", equal)

  function equal() {
    num2 = writing - 0
    console.log(num1, num2, result)
    if (choice == "M") {
      if (result == null) {
        result = num1 * num2
      } else {
        result *= num2
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

    if (choice == "D") {
      if (result == null) {
        result = num1 / num2
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

    writing = result
    document.getElementById("result").innerHTML = result
    result = null
    choice = ""
  }
})

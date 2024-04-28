document.addEventListener("DOMContentLoaded", function () {
  let writing = ""
  let num1 = 0
  let num2 = 0
  let result = null
  let choice = ""

  var buttonNumbers = document.getElementsByClassName("num")
  var zero = document.getElementById("zero")
  var dot = document.getElementById("dot")
  var multiplicacao = document.getElementById("multiplicacao")
  var adicao = document.getElementById("adicao")
  var subitracao = document.getElementById("subitracao")
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

  equals.addEventListener("click", equal)

  function clear() {
    writing = ""
    document.getElementById("result").innerHTML = 0
  }

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

    writing = result
    document.getElementById("result").innerHTML = result
    result = null
    choice = ""
  }
})

document.addEventListener("DOMContentLoaded", function () {
  let writing = ""
  let num1 = 0
  let num2 = 0
  let result = null

  var buttonNumbers = document.getElementsByClassName("num")
  var multiplicacao = document.getElementById("multiplicacao")
  var adicao = document.getElementById("adicao")
  var subitracao = document.getElementById("subitracao")
  var equals = document.getElementById("equals")

  for (let i = 0; i < buttonNumbers.length; i++) {
    buttonNumbers[i].addEventListener("click", function () {
      writing = writing + buttonNumbers[i].getAttribute("data-num")
      num1 = writing
      document.getElementById("result").innerHTML = writing
    })
  }

  multiplicacao.addEventListener("click", function () {
    // if (result == 0) {
    //   if (num1 == 0) {
    //     num1 = writing
    //   } else if (num2 == 0) {
    //     num2 = writing
    //   } else {
    //     result = num1 * num2
    //     num1 = 0
    //     num2 = 0
    //   }
    // } else {
    //   if (num1 == 0) {
    //     num1 = writing
    //   } else {
    //     result *= num1
    //     num1 = 0
    //   }
    // }
    if (result == null) {
      result = 1
    }
    result *= writing

    console.log(num1, num2, result)

    writing = ""
  })

  adicao.addEventListener("click", function () {
    clear()
  })

  subitracao.addEventListener("click", function () {
    clear()
  })

  equals.addEventListener("click", function () {
    result *= num1
    clear()

    writing = ""
    console.log(result, writing)
    document.getElementById("result").innerHTML = result
  })

  function clear() {
    writing = ""
    document.getElementById("result").innerHTML = 0
  }
})

// if (num1 == 0) {
//   num1 = writing
// } else if (num2 == 0) {
//   num1 = writing
// } else if (num1 != 0 && num2 != 0) {
// }

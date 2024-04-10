
function generateImg () {
  var d = new Date()
  var year = d.getFullYear()
  var month = d.getMonth() + 1
  var day = d.getDay()
  if (month < 10)
    month = '0' + month
  var img = document.createElement("img")
  var tryCnt
  var url = document.URL
  for (tryCnt = 0; tryCnt < 15; tryCnt++) {

    var num = parseInt(Math.random() * day) + 1
    if (num < 10)
      num = '0' + num
    img.src = `https://raw.githubusercontent.com/ysme1/BingWallpapers/main/wallpapers/${year}/${month}/${year}${month}${num}.jpg`

    img.onload = function () {
      url = img.src
      return url
    }
    img.onerror = function () {
      console.log(tryCnt)
    }
  }
  return url
}
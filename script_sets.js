
var currentCount = 0;
function clearCount() {
  currentCount = 0;
  redisplayCurrentCount();
}

function increment() {
  currentCount = currentCount + 1;
  redisplayCurrentCount();
}

function redisplayCurrentCount() {
  document.getElementById("count").innerHTML = currentCount;
}

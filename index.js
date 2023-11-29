let count = 0;

document.getElementById("dec").onclick = function () {
  document.getElementById("label").innerHTML = count--;
};
document.getElementById("reset").onclick = function () {
  document.getElementById("label").innerHTML = count = 0;
};
document.getElementById("add").onclick = function () {
  document.getElementById("label").innerHTML = count++;
};

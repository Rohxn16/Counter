// Make a simple counter
// target the element with id count and set its innerHTML to 0 if reset add 1 if increase and subract 1 if decrease

var count = 0;

document.getElementById('count').innerHTML = count;

document.getElementById('increase').onclick = function() {
    count++;
    document.getElementById('count').innerHTML = count;
}

document.getElementById('decrease').onclick = function() {
    count--;
    document.getElementById('count').innerHTML = count;
}

document.getElementById('reset').onclick = function() {
    count = 0;
    document.getElementById('count').innerHTML = count;
}
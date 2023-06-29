var l = document.getElementById('l');
var m = document.getElementById('m');
var mi = document.getElementById('mi');
var j = document.getElementById('j');
var v = document.getElementById('v');
var s = document.getElementById('s');
var d = document.getElementById('d');

var l1 = document.getElementById('l1');
var m1 = document.getElementById('m1');
var mi1 = document.getElementById('mi1');
var j1 = document.getElementById('j1');
var v1 = document.getElementById('v1');
var s1 = document.getElementById('s1');
var d1 = document.getElementById('d1');

const currentDate = new Date();
const options = { weekday: 'long' };
const currentDay = currentDate.toLocaleString('en-US', options);
console.log(currentDay);

if (currentDay == 'Monday') {
    l1.style.backgroundColor = 'cadetblue';
}
if (currentDay == 'Tuesday') {
    m1.style.backgroundColor = 'cadetblue';
}
if (currentDay == 'Thursday') {
    mi1.style.backgroundColor = 'cadetblue';
}
if (currentDay == 'Wednesday') {
    j1.style.backgroundColor = 'cadetblue';
}
if (currentDay == 'Friday') {
    v1.style.backgroundColor = 'cadetblue';
}
if (currentDay == 'Saturday') {
    s1.style.backgroundColor = 'cadetblue';
}
if (currentDay == 'Sunday') {
    d1.style.backgroundColor = 'cadetblue';
}


l1.addEventListener('mouseenter', handleMouseEnter);
l1.addEventListener('mouseleave', handleMouseLeave);
function handleMouseEnter() {
    l.style.display = 'block';
}
function handleMouseLeave() {
    l.style.display = 'none';
}

m1.addEventListener('mouseenter', handleMouseEnter1);
m1.addEventListener('mouseleave', handleMouseLeave1);
function handleMouseEnter1() {
    m.style.display = 'block';
}
function handleMouseLeave1() {
    m.style.display = 'none';
}

mi1.addEventListener('mouseenter', handleMouseEnter2);
mi1.addEventListener('mouseleave', handleMouseLeave2);
function handleMouseEnter2() {
    mi.style.display = 'block';
}
function handleMouseLeave2() {
    mi.style.display = 'none';
}

j1.addEventListener('mouseenter', handleMouseEnter3);
j1.addEventListener('mouseleave', handleMouseLeave3);
function handleMouseEnter3() {
    j.style.display = 'block';
}
function handleMouseLeave3() {
    j.style.display = 'none';
}

v1.addEventListener('mouseenter', handleMouseEnter4);
v1.addEventListener('mouseleave', handleMouseLeave4);
function handleMouseEnter4() {
    v.style.display = 'block';
}
function handleMouseLeave4() {
    v.style.display = 'none';
}

s1.addEventListener('mouseenter', handleMouseEnter5);
s1.addEventListener('mouseleave', handleMouseLeave5);
function handleMouseEnter5() {
    s.style.display = 'block';
}
function handleMouseLeave5() {
    s.style.display = 'none';
}

d1.addEventListener('mouseenter', handleMouseEnter6);
d1.addEventListener('mouseleave', handleMouseLeave6);
function handleMouseEnter6() {
    d.style.display = 'block';
}
function handleMouseLeave6() {
    d.style.display = 'none';
}
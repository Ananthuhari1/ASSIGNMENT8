
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


document.querySelector('.allButton').addEventListener('click', function (e) {
  if (!e.target.classList.contains('addBtn')) return;

 
  document.querySelectorAll('.allButton .addBtn').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  const filter = e.target.textContent.toLowerCase(); 
  const items = document.querySelectorAll("#myUL li");

  items.forEach(item => {
    switch (filter) {
      case 'all':
        item.style.display = "";
        break;
      case 'active':
        item.style.display = item.classList.contains('checked') ? "none" : "";
        break;
      case 'completed':
        item.style.display = item.classList.contains('checked') ? "" : "none";
        break;
    }
  });
});
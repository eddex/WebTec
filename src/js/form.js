function send() {
  "use strict";
  var name = document.getElementById('name').value.replace('&', '&amp').replace('<', '&lt').replace('>', '&gt');
  var age = document.getElementById('age').value;
  var message = document.getElementById('message');
  if (name !== '' && age !== '') {
    message.innerHTML = 'data sent to server: { name: ' + name + ', age: ' + age + '}';
  } else {
    message.innerHTML = '<span style="color:red">error: please fill in all fields.</span>';
  }
}
document.getElementById('send').addEventListener('click', send);
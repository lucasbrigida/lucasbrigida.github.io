function loadFile(id, callback) {
  var file    = document.querySelector(id).files[0];
  var reader  = new FileReader();

  console.log(file);

  reader.onloadend = function () {
    callback(reader.result);
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    alert("Cannot load file.");
  }
}
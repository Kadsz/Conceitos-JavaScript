// Callback --> chamar de volta
// é uma função passada a outra função como argumento

function sayMyAge(callback) {
  callback();
}

sayMyAge(() => {
  console.log("Estou no CallBack");
});

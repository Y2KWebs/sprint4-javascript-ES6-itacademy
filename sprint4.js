function b() {
  // ...
}
async function a() {
  await b().then(() => {
    doMoreWork();
  });
}

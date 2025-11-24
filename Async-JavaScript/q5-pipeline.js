const stage = (name) => (cb) => {
  console.log(name, "...");
  setTimeout(() => cb(null, `${name} done`), 1000);
};

function runWithCallbacks() {
  console.log("Callback pipeline start");
  stage("design")((err1) => {
    if (err1) return console.error("Design failed");
    stage("build")((err2) => {
      if (err2) return console.error("Build failed");
      stage("test")((err3) => {
        if (err3) return console.error("Test failed");
        stage("deploy")((err4) => {
          if (err4) return console.error("Deploy failed");
          stage("celebrate")((err5) => {
            if (err5) return console.error("Celebrate failed");
            console.log("Callback pipeline complete!");
          });
        });
      });
    });
  });
}

function stagePromise(name) {
  return new Promise((resolve) => {
    console.log(name, "...");
    setTimeout(() => resolve(`${name} done`), 1000);
  });
}

async function runWithAsyncAwait() {
  console.log("Async/Await pipeline start");
  const s1 = await stagePromise("design");
  console.log(s1);
  const s2 = await stagePromise("build");
  console.log(s2);
  const s3 = await stagePromise("test");
  console.log(s3);
  const s4 = await stagePromise("deploy");
  console.log(s4);
  const s5 = await stagePromise("celebrate");
  console.log(s5);
  console.log("Async/Await pipeline complete!");
}

runWithCallbacks();
setTimeout(runWithAsyncAwait, 7000);

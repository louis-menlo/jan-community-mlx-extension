import path from "path";

const { spawn } = require("child_process");
import { log } from "@janhq/core/node";

var subprocess = undefined;

console.log = (data) => {
  log(data);
};

async function loadModel(params: any, _: any): Promise<void> {
  subprocess = spawn(path.join(__dirname, "../..", "run"), [params.model.id], {
    cwd: path.join(__dirname, "../.."),
    env: {
      ...process.env,
      PYTHONPATH: path.join(__dirname, "../..", "deps"),
    },
    stdout: "inherit",
  });

  // Handle subprocess output
  subprocess.stdout.on("data", (data: any) => {
    console.log(`[MLX]:: ${data}`);
  });

  subprocess.stderr.on("data", (data: any) => {
    console.log(`[MLX]::Error: ${data}`);
  });

  subprocess.on("close", (code: any) => {
    console.log(`[MLX]::Process exited with code: ${code}`);
    subprocess = undefined;
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 4000);
  });
  return fetch("http://127.0.0.1:3929/v1/models/start", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then();
}

function unloadModel(): Promise<void> {
  if (subprocess?.pid) {
    subprocess.kill("SIGINT");
  }
  return Promise.resolve();
}

export default {
  loadModel,
  unloadModel,
};

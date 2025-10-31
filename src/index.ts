import { writeFileSync } from "fs";
import os from "os";
import themes from "./themes";

const json = JSON.stringify(themes, null, 2);
// const path = `./themes/plato-themes.json`;
const paths = [
  `${os.homedir()}/.config/zed/themes/plato-themes.json`,
  `./themes/plato-themes.json`,
];

for (const path of paths) {
  console.log(`Writing themes to ${path}`);
  writeFileSync(path, json);
}

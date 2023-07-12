import path from "path";
import { fileURLToPath } from "url";

// __dirname and __filename are not defined in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Script path: ${__filename}`);

const builtInModulesPath = path.join(
    __dirname,
    "..",
    "..",
    "built-in-modules.txt",
);

console.log(builtInModulesPath);

console.log(path.basename(builtInModulesPath));
console.log(path.dirname(builtInModulesPath));
console.log(path.extname(builtInModulesPath));
console.log(path.isAbsolute(builtInModulesPath));
console.log(path.parse(builtInModulesPath));

console.log(path.relative(process.env.HOME ?? "/", __filename));

console.log(
    path.format({
        root: "/",
        dir: "/usr/bin",
        base: "node",
    }),
);

console.log(path.normalize("///home/mike/..//../home/mike/Projects/../Music"));

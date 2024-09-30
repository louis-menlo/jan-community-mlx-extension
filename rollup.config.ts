import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
const packageJson = require("./package.json");

export default [
  {
    input: `src/index.ts`,
    output: [{ file: packageJson.main, format: "es", sourcemap: true }],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
      include: "src/**",
    },
    plugins: [
      replace({
        preventAssignment: true,
        NODE: JSON.stringify(`${packageJson.name}/${packageJson.node}`),
      }),
      json(),
      typescript({
        useTsconfigDeclarationDir: true,
        exclude: ["**/__tests__", "**/*.test.ts"],
      }),
       commonjs(),
      resolve({
        extensions: [".js", ".ts"],
        browser: true,
      }),
      sourceMaps(),
    ],
  },
  {
    input: `src/node/index.ts`,
    output: [
      { file: "dist/node/index.cjs.js", format: "cjs", sourcemap: true },
    ],
    external: ["@janhq/core/node"],
    watch: {
      include: "src/node/**",
    },
    plugins: [
      json(),
      typescript({
        useTsconfigDeclarationDir: true,
        exclude: ["**/__tests__", "**/*.test.ts"],
      }),
      commonjs(),
      resolve({
        extensions: [".ts", ".js", ".json"],
      }),
      sourceMaps(),
    ],
  },
];

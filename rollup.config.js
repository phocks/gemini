import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from 'rollup-plugin-json';
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/main.js",
    output: {
      name: "Gemini",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      resolve(),
      commonjs(),
      json(),
      babel({
        exclude: ["node_modules/**"]
      })
    ]
  },

  // Other builds (just in case)
  // {
  //   input: "src/main.js",
  //   external: ["ms"],
  //   output: [
  //     { file: pkg.main, format: "cjs" },
  //     { file: pkg.module, format: "es" }
  //   ],
  //   plugins: [
  //     babel({
  //       exclude: ["node_modules/**"]
  //     })
  //   ]
  // }
];

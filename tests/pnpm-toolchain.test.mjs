import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8")
);
const nixpacksConfig = await readFile(new URL("../nixpacks.toml", import.meta.url), "utf8").catch((error) => {
  if (error.code === "ENOENT") return "";
  throw error;
});

test("project pins the pnpm version used by the Nixpacks build", () => {
  assert.equal(packageJson.packageManager, "pnpm@11.5.1");
});

test("Nixpacks installs a pnpm 11-compatible Corepack before dependencies", () => {
  assert.match(
    nixpacksConfig,
    /^\[phases\.install\]\r?\ncmds = \[\r?\n\s*"npm install -g corepack@0\.34\.7 && corepack enable",\r?\n\s*"pnpm i --frozen-lockfile",\r?\n\]\r?\n?$/m
  );
});

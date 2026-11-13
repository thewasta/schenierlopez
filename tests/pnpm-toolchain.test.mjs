import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8")
);

test("project pins the pnpm version used by the Nixpacks build", () => {
  assert.equal(packageJson.packageManager, "pnpm@11.5.1");
});

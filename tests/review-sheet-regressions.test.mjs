import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const distPath = new URL("../dist/", import.meta.url);
const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
const assetNames = await readdir(new URL("../dist/_astro/", import.meta.url));
const css = (
  await Promise.all(
    assetNames
      .filter((name) => name.endsWith(".css"))
      .map((name) => readFile(join(distPath.pathname, "_astro", name), "utf8"))
  )
).join("\n");

test("secondary links use pine rather than the hiring-action red", () => {
  assert.match(css, /\.review-text-link:hover\s*\{[^}]*text-decoration-color:\s*var\(--pine\)/);
  assert.match(css, /\.review-contact__links a:hover\s*\{[^}]*text-decoration-color:\s*var\(--pine\)/);
  assert.match(css, /#main-header \.nav-link:hover\s*\{[^}]*text-decoration-color:\s*var\(--pine\)/);
  assert.match(css, /body\.review-site footer a:hover\s*\{[^}]*color:\s*var\(--pine\)/);
});

test("footer brand uses the review-sheet display face and readable ink", () => {
  assert.match(html, /class="review-footer__brand[^\"]*"[^>]*>Schenier Lopez/);
  assert.match(css, /body\.review-site footer \.review-footer__brand\s*\{[^}]*color:\s*var\(--ink\)/);
  assert.match(css, /body\.review-site footer \.review-footer__brand\s*\{[^}]*font-family:\s*var\(--font-review-display\)/);
});

test("Person structured data omits unverified current employment", () => {
  const jsonLdScripts = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.ok(jsonLdScripts.length > 0, "expected JSON-LD in the built page");

  const graph = jsonLdScripts.flatMap((match) => JSON.parse(match[1])["@graph"] ?? []);
  const person = graph.find((entry) => entry["@type"] === "Person");
  assert.ok(person, "expected a Person entity in JSON-LD");
  assert.equal("worksFor" in person, false);
});

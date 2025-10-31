import { expect, test } from "bun:test";
import { readFileSync } from "fs";
import { deepEquals } from "bun";
import { validate } from "jsonschema";
import themes from "./themes.js";

test("themes in file are the same as generated", () => {
  const fromFile = JSON.parse(
    readFileSync("./themes/plato-themes.json").toString(),
  );

  expect(deepEquals(themes, fromFile)).toBeTrue();
});

test("themes satisfies its JSON schema", async () => {
  const resp = await fetch(themes.$schema);

  expect(resp.ok).toBeTrue();

  const schema = await resp.json();

  expect(validate(themes, schema).valid).toBeTrue();
});

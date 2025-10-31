import { expect, test } from "bun:test";
import { readFileSync } from "fs";
import { validate } from "jsonschema";
import themes from "./themes.js";

test("themes in file are the same as generated", () => {
  const fromFile = JSON.parse(
    readFileSync("./themes/plato-themes.json").toString(),
  );

  expect(themes).toEqual(fromFile);
});

test("themes satisfies its JSON schema", async () => {
  const resp = await fetch(themes.$schema);

  expect(resp.ok).toBeTrue();

  const schema = await resp.json();

  expect(validate(themes, schema).valid).toBeTrue();
});

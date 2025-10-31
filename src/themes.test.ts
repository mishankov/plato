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

test("themes satisfies JSON schema", async () => {
  const resp = await fetch("https://zed.dev/schema/themes/v0.2.0.json");

  expect(resp.ok).toBeTrue();

  const schema = await resp.json();

  expect(validate(themes, schema).valid).toBeTrue();
});

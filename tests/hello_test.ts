import { exampleHostApplication } from "../src/ExampleHostApplication.ts";

Deno.test("Invoke example host application", async () => {
  await exampleHostApplication();
});

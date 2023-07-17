import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const port = 8000;
console.log(`oakを動かすよ${port}`);
app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
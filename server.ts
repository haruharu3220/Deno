//DenoではURLから直接ライブラリをインポートできる
//インポートしたURLは以下
//https://deno.land/std@0.194.0/http/mod.ts?s=serve
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";
serve((_req) => new Response("Hello, world"), { port: 3000 });

//deno run --allow-net server.tsでサーバを起動する
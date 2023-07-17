//DenoではURLから直接ライブラリをインポートできる
import { server } from "https://deno.land/std/http/server.ts";
const s = server({ port:8000 });
console.log("http://localhost:8000/");
for await(const req of s){
    req.respond({ statusbody: "HEllo World¥n"});

}

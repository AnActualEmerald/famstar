import {serve} from "https://deno.land/std@0.134.0/http/server.ts"
import {Logger} from "https://deno.land/x/optic@1.3.5/mod.ts";

//setup logging
let logger = new Logger();

//handle incoming requests
async function handler(request: Request): Promise<Response> {
    const method = request.method;
    const url = new URL(request.url);

    return new Response(`You made a ${method} request to ${url.pathname}`);
}




//start the server
serve(handler, {port: 8800});

logger.info("Server started at http://localhost:8800");
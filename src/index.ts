import { App } from "./app";

const PORT = process.env.PORT 

async function main() {
    const app = new App(PORT);
    await app.listen();
}

main()
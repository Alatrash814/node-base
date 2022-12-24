import 'module-alias/register'
import 'dotenv/config';
import { server } from "@/core/server"
import server_config from "@/config/app"

const appPort = server_config.APP_PORT || 8001;

server.listen(appPort, () => {
    console.log(`Server is listening to ${appPort}`)
});
import 'dotenv/config';
import app from './app';
import SERVER from './utils/messages/serverMessages';

const PORT = process.env.SERVER_PORT || 3000;

if (!PORT) {
    throw new Error(SERVER.ERR.SERVER_PORT_NOT_SET);
}

app.listen(PORT, () => {
    console.log(`API Running on PORT ${PORT}`)
});
import "./styles.scss";
import App from "./controller/controller";

const app = new App();
app.init().catch(err => console.error(err));


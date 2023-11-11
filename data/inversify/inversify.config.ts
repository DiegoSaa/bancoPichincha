import { Container } from "inversify";
import { HttpManager, AxiosHttpManager } from "./../network/http";

const container = new Container();
container.bind<HttpManager>("HttpManager").to(AxiosHttpManager);

export { container };

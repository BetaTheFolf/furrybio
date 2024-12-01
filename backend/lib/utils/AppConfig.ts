import * as env from "env-var";
import { NodeEnv } from "../constants/environment";

export class AppConfig {
  private readonly NODE_ENV: NodeEnv;

  constructor() {
    this.NODE_ENV = env
      .get("NODE_ENV")
      .required()
      .asEnum([NodeEnv.DEV, NodeEnv.PROD]);
  }

  getEnvironment() {
    return this.NODE_ENV;
  }

  isDevelopment() {
    return this.NODE_ENV === NodeEnv.DEV;
  }

  isProduction() {
    return this.NODE_ENV === NodeEnv.PROD;
  }
}

export const appConfig = new AppConfig();

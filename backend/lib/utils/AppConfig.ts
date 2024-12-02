import * as env from "env-var";
import { RemovalPolicy } from "aws-cdk-lib";
import { NodeEnv } from "../constants/environment";

class AppConfig {
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

  getRemovalPolicy(): RemovalPolicy {
    if (this.isDevelopment()) {
      return RemovalPolicy.DESTROY;
    }

    return RemovalPolicy.RETAIN;
  }
}

export const appConfig = new AppConfig();

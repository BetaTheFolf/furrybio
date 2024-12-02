import { Construct } from "constructs";
import * as Cognito from "aws-cdk-lib/aws-cognito";
import { appConfig } from "../utils/AppConfig";

export class CognitoConstruct extends Construct {
  public cognitoClientId: string;
  public cognitoClientSecret: string = "";
  public cognitoIssuer: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const userPool = new Cognito.UserPool(this, "user-pool", {
      removalPolicy: appConfig.getRemovalPolicy(),
    });
    const userPoolClient = new Cognito.UserPoolClient(
      this,
      "user-pool-client",
      {
        userPool,
      }
    );

    this.cognitoClientId = userPoolClient.userPoolClientId;
    this.cognitoIssuer = userPool.userPoolProviderUrl;

    if (appConfig.isDevelopment()) {
      this.cognitoClientSecret = userPoolClient.userPoolClientSecret.toString();
    }
  }
}

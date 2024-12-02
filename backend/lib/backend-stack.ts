import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { DomainConstruct } from "./constructs/DomainConstruct";
import { CognitoConstruct } from "./constructs/CognitoConstruct";
import { DatabaseConstruct } from "./constructs/DatabaseConstruct";
import { AppConstruct } from "./constructs/AppConstruct";
import { MediaConstruct } from "./constructs/MediaConstruct";

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domain = new DomainConstruct(this, "domain");
    const cognito = new CognitoConstruct(this, "cognito");
    const database = new DatabaseConstruct(this, "database");
    const media = new MediaConstruct(this, "media");
    const app = new AppConstruct(this, "app");

    new cdk.CfnOutput(this, "cognito-client-id", {
      value: cognito.cognitoClientId,
    });
    new cdk.CfnOutput(this, "cognito-client-secret", {
      value: cognito.cognitoClientSecret,
    });
    new cdk.CfnOutput(this, "cognito-issuer", {
      value: cognito.cognitoIssuer,
    });
  }
}

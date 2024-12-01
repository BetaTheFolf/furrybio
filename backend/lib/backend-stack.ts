import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { DomainConstruct } from "./constructs/DomainConstruct";
import { CognitoConstruct } from "./constructs/CognitoConstruct";
import { DatabaseConstruct } from "./constructs/DatabaseConstruct";
import { APIConstruct } from "./constructs/APIConstruct";
import { FrontendConstruct } from "./constructs/FrontendConstruct";
import { MediaConstruct } from "./constructs/MediaConstruct";

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domain = new DomainConstruct(this, "domain");
    const cognito = new CognitoConstruct(this, "cognito");
    const database = new DatabaseConstruct(this, "database");
    const media = new MediaConstruct(this, "media");
    const api = new APIConstruct(this, "api");
    const frontend = new FrontendConstruct(this, "frontend");
  }
}

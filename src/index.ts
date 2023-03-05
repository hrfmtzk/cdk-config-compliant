import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

const RevokeSgFunctionCode = `
import boto3
import cfnresponse


def handler(event, context):
    if event["RequestType"] != "Create":
        return

    ec2 = boto3.resource("ec2")
    vpc = ec2.Vpc(event["ResourceProperties"]["VpcId"])
    sg = [
        sg for sg in vpc.security_groups.all()
        if sg.group_name == "default"
    ][0]
    revoke_egress = sg.revoke_egress(IpPermissions=sg.ip_permissions_egress)
    revoke_ingress = sg.revoke_ingress(IpPermissions=sg.ip_permissions)
    response = {
        "revoke_egress": revoke_egress,
        "revoke_ingress": revoke_ingress,
    }

    cfnresponse.send(event, context, cfnresponse.SUCCESS, response)
`;

export interface IVpcDefaultSecurityGroupClosedProps {
  vpc: ec2.Vpc;
}

export class VpcDefaultSecurityGroupClosed extends Construct {

  private static readonly REVOKE_SG_FUNCTION_UUID = '3bbe4390-9075-41de-bbd3-412c3df8a391';

  constructor(scope: Construct, id: string, props: IVpcDefaultSecurityGroupClosedProps) {
    super(scope, id);

    const revokeSgFunction = new lambda.SingletonFunction(this, 'RevokeSgFunction', {
      uuid: VpcDefaultSecurityGroupClosed.REVOKE_SG_FUNCTION_UUID,
      code: lambda.Code.fromInline(RevokeSgFunctionCode),
      handler: 'index.handler',
      runtime: lambda.Runtime.PYTHON_3_9,
      initialPolicy: [
        new iam.PolicyStatement({
          actions: [
            'ec2:AuthorizeSecurityGroupIngress',
            'ec2:AuthorizeSecurityGroupEgress',
            'ec2:RevokeSecurityGroupIngress',
            'ec2:RevokeSecurityGroupEgress',
            'ec2:DescribeSecurityGroups',
            'ec2:DescribeVpcs',
          ],
          resources: ['*'],
        }),
      ],
      timeout: cdk.Duration.seconds(5),
    });

    const provider = new cr.Provider(this, 'RevokeSgProvider', {
      onEventHandler: revokeSgFunction,
    });

    const customResource = new cdk.CustomResource(this, 'RevokeSg', {
      serviceToken: provider.serviceToken,
      properties: {
        VpcId: props.vpc.vpcId,
      },
    });

    customResource.node.addDependency(props.vpc);
  }
}
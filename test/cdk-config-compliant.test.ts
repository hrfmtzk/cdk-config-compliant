import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as CdkConfigCompliant from '../src/index';

test('VpcDefaultSecurityGroupClosed', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  const vpc = new ec2.Vpc(stack, 'Vpc', {});
  new CdkConfigCompliant.VpcDefaultSecurityGroupClosed(stack, 'VpcDefaultSecurityGroupClosed', {
    vpc: vpc,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Runtime: 'python3.9',
  });
});
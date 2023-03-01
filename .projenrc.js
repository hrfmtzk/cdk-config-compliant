const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Hirofumi Tsuzuki',
  authorAddress: 'hrfm.tsuzuki@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-config-compliant',
  repositoryUrl: 'https://github.com/hrfmtzk/cdk-config-compliant.git',
  description: 'AWS CDK Construct Library for compliant to Config',
  deps: [],
  devDeps: [],
  publishToPypi: {
    distName: 'cdk-config-compliant',
    module: 'cdk_sample_lib',
  },
  stability: 'experimental',
  github: false
});
project.synth();

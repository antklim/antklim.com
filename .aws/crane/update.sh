#!/bin/bash

PROJECT=antklim.com

aws cloudformation update-stack --stack-name antklim-dot-com-crane \
  --template-body file://main.yml \
  --parameters ParameterKey=CraneImage,ParameterValue=$CRANE_IMAGE \
  ParameterKey=ArchiveBucket,ParameterValue=$ARCHIVE_BUCKET \
  ParameterKey=DeployBucket,ParameterValue=$DEPLOY_BUCKET \
  ParameterKey=ProductionBucket,ParameterValue=$PROD_BUCKET \
  ParameterKey=StageBucket,ParameterValue=$STAGE_BUCKET \
  ParameterKey=ProjectName,ParameterValue=$PROJECT \
  --tags Key=project,Value=$PROJECT \
  --region ap-southeast-2 \
  --capabilities CAPABILITY_NAMED_IAM \
  --output yaml \
  --profile $PROFILE

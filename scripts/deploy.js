const paths = require('../config/paths')
require('dotenv').config({ path: `${paths.dotenv}.${process.env.DEPLOY_ENV}` })
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const chalk = require('chalk')

const AWS_PROFILE = process.env.AWS_PROFILE
const S3_BUCKET = process.env.S3_BUCKET
const AWS_REGION = process.env.AWS_REGION || 'us-west-1'

const configureAws = async () => {
  console.log('Configuring AWS')
  const { stdout, stderr } = await exec(`aws configure set region ${AWS_REGION} --profile ${AWS_PROFILE}`)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const uploadDist = async () => {
  console.log('Uploading dist folder')
  const { stdout, stderr } = await exec(`
    aws s3 sync ./dist s3://${S3_BUCKET} \
    --delete \
    --acl public-read \
    --metadata-directive REPLACE \
    --expires 2100-01-01T00:00:00Z \
    --cache-control max-age=31536000,public
  `)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const uploadIndex = async () => {
  console.log('Uploading index.html')
  const { stdout, stderr } = await exec(`
    aws s3 cp s3://${S3_BUCKET}/index.html s3://${S3_BUCKET}/index.html \
    --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate \
    --content-type "text/html; charset=utf-8" \
    --acl public-read
  `)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const deploy = async () => {
  const message = `Deploying to: ${process.env.DEPLOY_ENV}`
  const color = '#3D87C9'
  console.log(chalk.hex(color).bold(message))
  await configureAws()
  await uploadDist()
  await uploadIndex()
}

deploy()

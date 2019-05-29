const util = require('util');
const exec = util.promisify(require('child_process').exec)

const AWS_PROFILE = 'aws-profile'
const AWS_REGION = 'us-west-2'
const S3_BUCKET = 's3-bucket-name'

const configureAws = async () => {
  console.log('Configuring AWS')
  const { stdout, stderr } = await exec(`aws configure set region ${AWS_REGION} --profile ${AWS_PROFILE}`)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const uploadDist = async () => {
  console.log('Uploading dist folder')
  const { stdout, stderr } = await exec(`aws s3 sync --acl public-read --delete ./dist s3://${S3_BUCKET}`)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const uploadIndex = async () => {
  console.log('Uploading index.html')
  const { stdout, stderr } = await exec(`aws s3 cp s3://${S3_BUCKET}/index.html s3://${S3_BUCKET}/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read`)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const deploy = async () => {
  await configureAws()
  await uploadDist()
  await uploadIndex()
}

deploy()

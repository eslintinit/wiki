import S3 from 'react-aws-s3'

const config = {
  bucketName: 'wikieditor',
  region: 'eu-central-1',
  accessKeyId: 'AKIA2G5WKYQMU3LVI4S4',
  secretAccessKey: 'ZhLtw8EA3WSD95PmASOINlDMD2msIWiBUkG9j9hH',
  // dirName: 'media', /* optional */
  // s3Url: 'https:/your-custom-s3-url.com/', /* optional */
}

const ReactS3Client = new S3(config)

const file = 'kek'

ReactS3Client.uploadFile(file)
  .then((data) => console.log(data))
  .catch((err) => console.error(err))

/**
 * {
 *   Response: {
 *     bucket: "myBucket",
 *     key: "image/test-image.jpg",
 *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
 *   }
 * }
 */
// });

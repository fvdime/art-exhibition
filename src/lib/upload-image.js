import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  //@ts-ignore
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ACCEPTED_CONTENT_TYPES = ["png", "jpg", "svg", "jpeg"];

export async function uploadImage(file, fileName, fileContent, bucketName) {
  if (!file || !(file instanceof File)) {
    return null;
  }

  if (!fileName) fileName = file.name;
  if (!bucketName) bucketName = process.env.BUCKET_NAME;

  if (!fileContent) {
    const fileContentArray = fileName.split(".");
    fileContent = fileContentArray[fileContentArray.length - 1];
  }

  if (!ACCEPTED_CONTENT_TYPES.some((item) => item == fileContent)) return null;
  fileName = randomUUID() + fileName;
  fileName = fileName.replace(/\s/g, "");

  const fileBody = await file.arrayBuffer();

  const result = await s3.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: Buffer.from(fileBody),
      ContentType: `image/${fileContent}`,
    })
  );

  return {
    result: result,
    filePath: fileName,
  };
}

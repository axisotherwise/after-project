import multer from "multer";
import multerS3 from "multer-s3";
import { S3, S3Client } from "@aws-sdk/client-s3";
import { Container, Service} from "typedi";


const s3 = new S3Client({
    credentials: {
        accessKeyId: "process",
        secretAccessKey: "process",
    },
    region: "region",
});
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const cloudinaryv2 = cloudinary.v2;

cloudinaryv2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_APISECRET,
  enhance_image_tag: true,
  static_image_support: true
});

const storeImages = async images => {
  if (!images) {
    return null;
  }
  const promises = images.map(async image => {
    if (!image) {
      return Promise.resolve();
    }
    const { stream } = await image;
    const result = await CloudinaryPipe(stream);
    return result.url;
  });
  return await Promise.all(promises);
};

const CloudinaryPipe = stream => {
  return new Promise((resolve, reject) => {
    const cloud = cloudinaryv2.uploader.upload_stream(
      { preset: "helpmates" },
      function(error, result) {
        resolve(result);
      }
    );
    stream
      .pipe(cloud)
      .on("limit", () => {
        console.log("Error on uploading image.");
        reject("Error on uploading image.");
      })
      .on("finish", () => {
        console.log("End image uploading...");
      });
  });
};

export default storeImages;

import bcrypt from "bcryptjs";

export default function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash("B4c0//", salt, function(err, hash) {
        if (error) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
}

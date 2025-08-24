import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Sanitizes file names by replacing unsafe characters.
function safeName(name) {
  return name.replace(/[^\w.-]/g, "_");
}

// Uploads a single image file to Firebase Storage and returns its download URL.
export async function uploadImageAndGetUrl(file, uid) {
  if (!uid) throw new Error("Sign in first");
  const path = `posts/${uid}/${Date.now()}_${safeName(file.name)}`;
  const fileRef = ref(storage, path);

  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
  return { url, path };
}

// Uploads multiple image files to Firebase Storage and returns their download URLs.
export async function uploadManyAndGetUrls(files = [], uid) {
  const results = await Promise.all(files.map((f) => uploadImageAndGetUrl(f, uid)));
  return {
    urls: results.map((r) => r.url),
    paths: results.map((r) => r.path),
  };
}
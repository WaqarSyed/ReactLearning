const conf = {
  appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  rteAPI_KEY: String(import.meta.env.VITE_TINY_MCE_API_KEY),
};

export default conf;

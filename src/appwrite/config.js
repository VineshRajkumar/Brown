import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error")
            return  {
                success: false,
                message: error?.message,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };   
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error")
            return  {
                success: false,
                message: error?.message,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };   
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error")
            return  {
                success: false,
                message: error?.message ||false,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };   
            
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error")
            return  {
                success: false,
                message: error?.message,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };   
        }
    }
    //Query can only be used if you have 
    //made indexs/keys for it in appwrite database
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            //you can also give additional 
            //parameter like how many results 
            //to display in each page called as 
            //pagination 
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries

            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error")
            return  {
                success: false,
                message: error?.message,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };   
        }
    }

    //file upload method 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error")
            return  {
                success: false,
                message: error?.message,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };   
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error")
            return  {
                success: false,
                message: error?.message||false,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };   
            
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const serviceObj = new Service();
/*instead of exporting the class for which 
each time we would have had to write Service 
like that we directly export the service 
object so it would be easy to acess the variable 
inside it
*/
export default serviceObj;
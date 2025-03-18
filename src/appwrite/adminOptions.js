import conf from "../conf/conf.js";
import { Client, Users } from "node-appwrite";

//APPWRITES API KEY HAS BEEN USED FOR ADMIN RELATED OPTIONS 
export class AdminOptions {
  adminClient = new Client();
  users;

  constructor() {
    this.adminClient
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
      .setKey(conf.appwriteApiKey);
    this.users = new Users(this.adminClient);
  }

  async getUserfromUserID(userId) {
    try {
      return await this.users.get(userId);
    } catch (error) {
      console.log("Appwrite service :: getUserfromUserID:: error");
    }
    return {
      success: false,
      message: error?.message,
      type: error?.type || "unknown_error",
      code: error?.code || 500,
    };
  }
}

const adminOptions = new AdminOptions();

export default adminOptions;

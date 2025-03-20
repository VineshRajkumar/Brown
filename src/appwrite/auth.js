import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";


//This is same code as from documentation 
//just we are writing it like this for better
//code practises so that if in future we change 
//our backend as service platform then we have 
//just make some changes in this file
export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                //account created then proceed to login
                return this.login({email,password})
            }
            else return userAccount

        } catch (error) {
            console.log("Appwrite service :: createAccount :: error")
            return  {
                success: false,
                message: error?.message,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };   
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("Appwrite service :: login :: error" )
            return {
                success: false,
                message: error?.message,
                type: error?.type || "unknown_error",
                code: error?.code || 500
              };
        }
    }

    async getCurrentUser(){
        try {
            const sessions = await this.account.listSessions(); // Check if a session exists
            if (sessions.sessions.length === 0) return null; // No active session, return null

            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error")
            return null;
            // return  {
            //     success: false,
            //     message: error?.message,
            //     type: error?.type || "unknown_error",
            //     code: error?.code || 500
            //   };
        }
        
    }
    

    async logout(){
        try {
            //logouts from all devices/browsers
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error)
    
        }
    }
}

const authService = new AuthService();
/*instead of exporting the class for which 
each time we would have had to write AuthService 
like that we directly export the authService 
object so it would be easy to acess the variable 
inside it
*/
export default authService;

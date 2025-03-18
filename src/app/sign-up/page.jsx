import { GalleryVerticalEnd } from "lucide-react"
import { Link } from "react-router-dom";
import { LoginForm } from "@/components/ui/login-form"
import { SignUpForm } from "@/components/ui/signup-form";

export default function SignUpPage() {
  return (
    (<div
      className="bg-[#f7f4ed] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
          <Link 
          to="/"
          className="text-4xl font-extrabold font-cormorant-garamond flex items-center gap-2 self-center "
            >
              Join Brown
            </Link>
        
        <SignUpForm/>
      </div>
    </div>)
  );
}
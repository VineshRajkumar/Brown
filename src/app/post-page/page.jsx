import { GalleryVerticalEnd } from "lucide-react"
import { Link } from "react-router-dom";
import PostForm from "@/components/post-form/PostForm";

export default function PostPage() {
  return (
    (<div
      className="bg-[#f7f4ed] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-6xl flex-col gap-6">
        <PostForm/>
      </div>
    </div>)
  );
}

import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import serviceObj from "@/appwrite/config";
import { Button } from "@/components/ui/button";
import { Container } from "@/components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import adminOptions from "@/appwrite/adminOptions";
import { Toaster, toast } from "sonner";
import { FaLink } from "react-icons/fa";
import { TiTick } from "react-icons/ti";


export default function Post() {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState("");
  const [copied, setCopied] = useState(false);
  
  // const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);

  // console.log(userData)
  //IF CURRENT LOGGED IN USER IS THE SAME PERSON WHO AUTHORED THE ARTICLE
  // THEN HE CAN EDIT OR DELETE OR ELSE NOT
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      serviceObj.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          // console.log(post)
          adminOptions
            .getUserfromUserID(post.userId)
            .then((data) => data)
            .then((username) => setAuthor(username.name))
            .catch((error) => console.error("Error fetching user:", error));

          // setLoading(false);
          // console.log(window.location.href)
        } else {
          toast.error(`Post Not Found !! Navigating To Home Page`);
          // setLoading(false);
          setTimeout(() => {
            // /Brown
            navigate(`/`);
          }, 3000);
        }
      });
    } else {
      toast.error(`Post Not Found !! Navigating To Home Page`);
      // setLoading(false);
      setTimeout(() => {
        // /Brown
        navigate(`/`);
      }, 3000);
    }
  }, [slug, navigate]);

  const deletePost = () => {
    serviceObj.deletePost(post.$id).then((status) => {
      if (status) {
        serviceObj.deleteFile(post.featuredImage);
        // /Brown
        navigate("/");
      }
    });
  };

  //usecallback will remeber the function instead of again and again checking the copyToClipboard function -> Optimizing techinque
  const copytoClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast("Link copied", { position: "top-center" });

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  });

  /*
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={serviceObj.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="mr-3">Edit</Button>
              </Link>
              <Button variant="destructive" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          {author}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
   */
  // if (loading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-[83vh] bg-black text-white">
  //       <div className="relative w-16 h-16 border-4 border-gray-500 border-t-white rounded-full animate-spin"></div>
  //       <p className="mt-4 text-lg font-medium">Please wait...</p>
  //     </div>
  //   );
  // }

  return post ? (
    post.status == "active" || isAuthor == true ? (
      <div className="py-12 bg-gray-100 min-h-screen">
        <Container>
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6">
            <h1 className="text-3xl font-extrabold mb-4">{post.title}</h1>
            <div className="text-gray-500 ">Written By {author}</div>
            <div className="text-gray-500 mb-4">
              {new Date(post.$createdAt).toDateString()}
            </div>

            {/* Copy Button */}
            <div className="flex justify-end mb-7">
              <Button
                onClick={copytoClipboard}
              >
              <FaLink /> Copy Link
              </Button>
            </div>

            <div className="w-full flex justify-center mb-6">
              <img
                src={serviceObj.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div className="prose prose-lg text-gray-800">
              {parse(post.content)}
            </div>
            {isAuthor && (
              <div className="mt-6 flex justify-end gap-3">
                {/* /Brown */}
                <Link to={`/edit-post/${post.$id}`}>
                  <Button className="bg-blue-600 text-white">Edit</Button>
                </Link>
                <Button variant="destructive" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </Container>
        <Toaster richColors position="top-right" />
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          {/* Animated Loader */}
          <span className="w-3 h-3 bg-yellow-500 rounded-full animate-ping"></span>
          <p className="text-yellow-700 font-semibold text-lg">
            This post is under progress.
          </p>
        </div>
        <p className="text-yellow-600 text-sm mt-2">Please check back later.</p>
        <Toaster richColors position="top-right" />
      </div>
    )
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The post you're looking for might have been removed or is currently
          unavailable.
        </p>
        {/* /Brown */}
        <Link to="/">
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Go Back Home
          </Button>
        </Link>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}

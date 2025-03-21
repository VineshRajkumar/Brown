import React, { useEffect, useState } from "react";
import { Container } from "@/components";
import { Card, CardImage, CardTitle } from "@/components/ui/card";
import serviceObj from "@/appwrite/config";
import { FaRegComment } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { data, Link } from "react-router-dom";
import parse from "html-react-parser";
import { renderToStaticMarkup } from "react-dom/server";
import adminOptions from "@/appwrite/adminOptions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const session = useSelector((state) => state.status);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState({});

  useEffect(() => {
    if (session == true) {
      serviceObj.getPosts([]).then((posts) => {
        if (posts) {
          // console.log(posts);
          setPosts(posts.documents);

          //LOGIC FOR GETTING USERNAME
          const userIds = posts.documents.map((post) => post.userId);
          const usernameObject = {};
          //OBJECT WILL BE IN KEY : VALUE PAIR LIKE -> userId : username
          //HERE WE CANT USE FORLOOP DIRECTLY TO PUT THE USERNAME
          //THIS IS BECAUSE EACH USERNAME WILL BE IN A PROMISE
          //AND ALL THESE USERNAMES TOGETHER AGAIN WILL BE IN PROMISE
          //SO PROMISE.ALL WILL WAIT FOR EACH PROMISE TO GET RESOLOVED THEN
          //ONLY GOES TO NEXT PROMISE
          Promise.all(
            userIds.map((id) =>
              adminOptions
                .getUserfromUserID(id)
                .then((data) => ({ userId: id, userName: data.name }))
                .catch(() => ({ userId: id, userName: "Deleted_user" }))
            )
          ).then((data) => {
            data.forEach(({ userId, userName }) => {
              usernameObject[userId] = userName;
            });
            //if setUsername is written out of promise then it will require another reder
            //for values to go inside it
            // console.log(usernameObject)
            setUsername(usernameObject);
          });
        }
      });
    }
    else{
      ///Brown
      navigate(`/login`);
    }
  }, [session,navigate]);

  //For converting REACT JSX ELEMENT TO TEXT BY USING THE renderToStaticMarkup
  const convertReactElementToText = (postcontentElement) => {
    if (postcontentElement) {
      const output = document.createElement("div");
      const reactElement = parse(postcontentElement);
      const staticElement = renderToStaticMarkup(reactElement);
      output.innerHTML = staticElement;
      // console.log(output.innerText);
      return output.innerText;
    }
    return "";
  };

  return (
    (session==true) ? (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <Container>
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <Card
                  key={post?.$id}
                  $id={post?.$id}
                  className="flex flex-row items-start p-4 shadow-lg rounded-lg"
                >
                  <div className="flex-1 pr-4">
                    <div className="text-sm pb-2">
                      Post By {username[post.userId]}
                    </div>

                    <CardTitle className="text-2xl font-bold mb-2">
                      {post.title}
                    </CardTitle>

                    <p className="text-gray-800 text-base mb-2">
                      {convertReactElementToText(post.content)
                        .split(" ")
                        .slice(0, 8)
                        .join(" ") + "..."}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      {new Date(post.$createdAt).toDateString()}
                    </p>
                  </div>
                  <CardImage
                    featuredImage={post.featuredImage}
                    alt={post.title}
                    className="w-32 h-24 object-cover rounded-md"
                  />
                </Card>
              ))}
            </div>
          </Container>
        </div>

        {/* Sidebar */}
        <div className="bg-blue-100 max-h-50 p-4 rounded-lg shadow-md w-80 relative">
          <h2 className="text-lg font-bold mb-2">Writing on Brown</h2>
          <ul className="text-sm text-gray-800 space-y-1 mb-4">
            <li className="font-semibold">New writer FAQ</li>
            <li className="font-semibold">Expert writing advice</li>
            <li className="font-semibold">Grow your readership</li>
          </ul>

          <Button>
          {/* /Brown */}
            <Link to={"/post"}> Start writing </Link>
          </Button>
        </div>
      </div>
    </div>
    ) : (<div>Redirecting...</div>)
  );
};

export default Dashboard;

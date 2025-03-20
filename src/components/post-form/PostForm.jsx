import React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
// import { Select } from "../Select";
import { Controller } from "react-hook-form";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";

import { RTE } from "..";
import serviceObj from "@/appwrite/config";
import { useSelector } from "react-redux";
import { data, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";
const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  //For PostCreation/Updation
  const submit = async (data) => {
    try {
      if (!data) {
        throw new Error("Data not found ");
      }
      // console.log(data)

      if (post) {
        const file = data.image?.[0]
          ? await serviceObj.uploadFile(data.image[0])
          : null;
        //deleting the old image for the new image to replace it
        // console.log(file)
        if (!file) {
          throw new Error(
            "Error : Please Upload the New Image OR Reupload the same image"
          );
        }
        // console.log(post.featuredImage)
        const delFile = await serviceObj.deleteFile(post.featuredImage);
        if (delFile !== true) {
          throw new Error("Error : Old Image was not Deleted");
        }

        //To update the new image in appwrite
        const dbPost = await serviceObj.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : null,
        });
        if (!dbPost) {
          throw new Error("Failed to update the post. Please try again.");
        }

        toast.success("Post Updated Successfully !");

        setTimeout(() => {
          navigate(`/Brown/post/${dbPost.$id}`);
        }, 3000);
      } else {
        //If post not found then userwants to create new post
        const file = await serviceObj.uploadFile(data.image[0]);

        if (!file) {
          throw new Error("Error : File is not Uploaded");
        }
        // console.log(file)
        const fileId = file.$id;
        // console.log(fileId)
        if (!fileId) {
          throw new Error("Error : File Id not Received");
        }

        //once id is received from the new image uploaded
        //update that in the object data that we are
        //going to send to create the post
        data.featuredImage = fileId;

        //since id will not be given
        //with data object so add it
        //seperetly while sending data
        // console.log("USERID",userData.$id)
        const newpost = await serviceObj.createPost({
          ...data,
          userId: userData.$id,
        });
        // console.log(newpost)

        if (!newpost.$id) {
          throw new Error(newpost.message);
        }

        toast.success("Post Created Successfully !");
        // console.log(newpost)
        setTimeout(() => {
          navigate(`/Brown/post/${newpost?.$id}`);
        }, 3000);
      }
    } catch (error) {
      const errorObj = {
        message: error?.message || "An unknown error occurred",
        type: error?.type || "unknown_error",
        code: error?.code || 500,
      };
      toast.error(`${errorObj.message}`);
    }
  };

  const slugTranform = useCallback((value) => {
    try {
      if (value && typeof value === "string") {
        const slug = value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
          .replace(/\s+/g, "-") // Replace spaces with "-"
          .replace(/-+/g, "-"); // Remove multiple dashes

        if (!slug) {
          throw new Error(
            "Slug generation failed. Please provide a valid input."
          );
        }
        return slug;
      }
    } catch (error) {
      const errorObj = {
        message: error?.message || "An unknown error occurred",
        type: error?.type || "unknown_error",
        code: error?.code || 500,
      };
      toast.error(`${errorObj.message}`);
    }
  }, []);

  //How to change slug as user enters at realtime
  //This is how watch from reactHook Form should be used
  //Senior SDE level Interview Q also
  //LITTLE BIT COMPLEX :-
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      //value is an object here
      //name will be the label like Title
      //since slug will only be made for title
      //so in name only title will be passed
      if (name === "title") {
        //setValue alredy contains title,slug,control,status
        //tell the setValue that we need to put this
        //slug value to slug
        //Use the slugTranform method pass the title
        // to it from value object given
        //shouldValidate is like regex it will
        //check if slug is coming correctly
        // with '-' instead of space
        setValue("slug", slugTranform(value.title, { shouldValidate: true }));
      }
    });
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-full md:w-2/3 px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTranform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        <div className="w-full md:w-1/3 px-2 mt-4 md:mt-0">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-4">
              <img
                src={serviceObj.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <Controller
            name="status"
            control={control}
            defaultValue=""
            rules={{ required: "Status is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select the Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {/* <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
          /> */}
          <Button
            type="submit"
            // bgColor={post ? "bg-green-500" : undefined}
            className={`w-full mt-4 ${post ? "bg-green-500" : ""}`}
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
      <Toaster richColors position="top-right" />
    </div>
  );
};

export default PostForm;

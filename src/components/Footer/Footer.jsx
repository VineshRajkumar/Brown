import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Footer = () => {

  const navigate = useNavigate();
  const navItems = [
    {
      // /Brown
      name: "Help",
      slug: "/help",
      
      class: ""
    },
    {
      // /Brown
      name: "Status",
      slug: "/",
      
      class: "max-[903px]:hidden"
    },
    {
      // /Brown
      name: "About",
      slug: "/about",
     
      class: ""
    },
    {
      // /Brown
      name: "Carrer",
      slug: "/",
      
      class: "max-[903px]:hidden"
    },
    {
      // /Brown
      name: "Press",
      slug: "/",
      
      class: "max-[903px]:hidden"
    },
    {
      // /Brown
      name: "Blog",
      slug: "/",
      
      class: "max-[903px]:hidden"
    },
    {
      // /Brown
      name: "Privacy",
      slug: "/",
      
      class: ""
    },
    {
      // /Brown
      name: "Terms",
      slug: "/",
      
      class: ""
    },
    {
      // /Brown
      name: "Text To Speech",
      slug: "/",
      
      class: "max-[903px]:hidden"
    },
    {
      // /Brown
      name: "Teams",
      slug: "/",
      
      class: "max-[903px]:hidden"
    },
  ];
  return (
    <div>
      <div
        className="p-4  border-1 border-black bg-[#f7f4ed] max-[903px]:bg-black max-[903px]:text-white "
      >
        <div className="container  flex flex-row justify-center items-center max-[903px]:justify-start   ">
          <div className="flex justify-evenly gap-x-6 px-9 ">
            
            {navItems.map((item)=>(
              
                <div key={item.name} className={item.class}>
                  <div 
                  className={`my-auto font-roboto text-xs font-medium cursor-pointer `} 
                  onClick={()=>navigate(item.slug)}
                  >
                    {item.name}
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;

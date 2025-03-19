import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Footer = () => {

  const navigate = useNavigate();
  const navItems = [
    {
      name: "Help",
      slug: "/Brown/help",
      
      class: ""
    },
    {
      name: "Status",
      slug: "/Brown",
      
      class: "max-[903px]:hidden"
    },
    {
      name: "About",
      slug: "/Brown/about",
     
      class: ""
    },
    {
      name: "Carrer",
      slug: "/Brown",
      
      class: "max-[903px]:hidden"
    },
    {
      name: "Press",
      slug: "/Brown",
      
      class: "max-[903px]:hidden"
    },
    {
      name: "Blog",
      slug: "/Brown",
      
      class: "max-[903px]:hidden"
    },
    {
      name: "Privacy",
      slug: "/Brown",
      
      class: ""
    },
    {
      name: "Terms",
      slug: "/Brown",
      
      class: ""
    },
    {
      name: "Text To Speech",
      slug: "/Brown",
      
      class: "max-[903px]:hidden"
    },
    {
      name: "Teams",
      slug: "/Brown",
      
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

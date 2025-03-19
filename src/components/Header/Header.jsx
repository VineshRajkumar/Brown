import React from "react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, LogoutBtn } from "../index";
import { useNavigate } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";

const Header = () => {
  //check session once here
  const session = useSelector((state) => state.status);
  // console.log(session)
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Our Story",
      slug: "/Brown",
    },
    {
      name: "Membership",
      slug: "/Brown",
    },
    {
      name: "Write",
      slug: "/Brown/post",
    },
  ];

  return (
    <>
      <Container>
        <nav className="p-4  border-1 border-b-black bg-[#f7f4ed] ">
          <div className="container mx-auto flex flex-row justify-between items-center">
            <Link
              to="/Brown"
              className="text-4xl font-extrabold font-cormorant-garamond "
            >
              Brown
            </Link>

            {session ? (
              <div className="flex justify-evenly gap-x-6 px-9 cursor-pointer">
                <div className="flex flex-row items-center gap-x-2">
                  <Link
                    to="/Brown/dashboard"
                    className="my-auto font-roboto text-sm max-[547px]:hidden"
                  >
                    <Button className="  font-roboto text-sm font-medium  ">
                      Dashboard
                    </Button>
                  </Link>
                  <Link
                    to="/Brown/post"
                    className="my-auto font-roboto text-sm max-[547px]:hidden"
                  >
                    <Button className="font-roboto text-sm font-medium  ">
                      <FaRegPenToSquare />
                      Write
                    </Button>
                  </Link>
                </div>

                <LogoutBtn />
              </div>
            ) : (
              <>
                <div className="flex justify-evenly gap-x-6 px-9 cursor-pointer">
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="my-auto font-roboto text-sm max-[725px]:hidden"
                    >
                      <div
                        //you can also use Link
                        // navigate here is used just
                        //for teaching purposes
                        onClick={() => navigate(item.slug)}
                      >
                        {item.name}
                      </div>
                    </div>
                  ))}

                  <Link
                    to="/Brown/login"
                    className="my-auto font-roboto text-sm max-[547px]:hidden"
                  >
                    Sign in
                  </Link>
                  <Link to="/Brown/sign-up">
                    <Button className=" rounded-3xl font-roboto text-sm font-medium  ">
                      Get started
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Header;

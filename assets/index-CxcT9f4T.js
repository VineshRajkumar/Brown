var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { t as twMerge, g as clsx, j as jsxRuntimeExports, S as Slot, i as cva, u as useSelector, k as useNavigate, L as Link, F as FaRegPenToSquare, C as Client, A as Account, I as ID, m as createSlice, n as useDispatch, R as Root, p as Indicator, c as reactExports, q as Controller, E as Editor, v as configureStore, O as Outlet, D as Databases, w as Storage, Q as Query, x as Root$1, y as useForm, T as Toaster, z as toast, B as Root2, G as Trigger, H as Icon, J as ChevronDown, V as Value, P as Portal, K as Content2, M as Viewport, N as Group, U as Label$1, W as Item, X as ItemIndicator, Y as Check, Z as ItemText, _ as ScrollUpButton, $ as ChevronUp, a0 as ScrollDownButton, a1 as React, a2 as Client$1, a3 as Users, a4 as parse, a5 as useParams, a6 as createBrowserRouter, a7 as Provider_default, a8 as RouterProvider2 } from "./vendor-Bc5uPwhf.js";
import { c as clientExports } from "./react-dom-client-BoqczO20.js";
import { s as server_browserExports } from "./react-dom-server-DFtmGdOm.js";
import "./react-dom-J4YzPou7.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
const Header = () => {
  const session = useSelector((state) => state.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Our Story",
      slug: "/Brown"
    },
    {
      name: "Membership",
      slug: "/Brown"
    },
    {
      name: "Write",
      slug: "/Brown/post"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "p-4  border-1 border-b-black bg-[#f7f4ed] ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-row justify-between items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/Brown",
        className: "text-4xl font-extrabold font-cormorant-garamond ",
        children: "Brown"
      }
    ),
    session ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-evenly gap-x-6 px-9 cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/Brown/dashboard",
            className: "my-auto font-roboto text-sm max-[547px]:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "  font-roboto text-sm font-medium  ", children: "Dashboard" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/Brown/post",
            className: "my-auto font-roboto text-sm max-[547px]:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "font-roboto text-sm font-medium  ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegPenToSquare, {}),
              "Write"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogoutBtn, {})
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-evenly gap-x-6 px-9 cursor-pointer", children: [
      navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "my-auto font-roboto text-sm max-[725px]:hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              onClick: () => navigate(item.slug),
              children: item.name
            }
          )
        },
        item.name
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/Brown/login",
          className: "my-auto font-roboto text-sm max-[547px]:hidden",
          children: "Sign in"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/Brown/sign-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: " rounded-3xl font-roboto text-sm font-medium  ", children: "Get started" }) })
    ] }) })
  ] }) }) }) });
};
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
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "p-4  border-1 border-black bg-[#f7f4ed] max-[903px]:bg-black max-[903px]:text-white ",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container  flex flex-row justify-center items-center max-[903px]:justify-start   ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-evenly gap-x-6 px-9 ", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: item.class, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `my-auto font-roboto text-xs font-medium cursor-pointer `,
          onClick: () => navigate(item.slug),
          children: item.name
        }
      ) }, item.name)) }) })
    }
  ) });
};
const Container = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#f7f4ed]", children });
};
const conf = {
  appwriteUrl: String("https://cloud.appwrite.io/v1"),
  appwriteProjectId: String("67bea9dd0027041cae88"),
  appwriteDatabaseId: String("67beab91001bd1ccb940"),
  appwriteCollectionId: String("67beabb60000b4e9489e"),
  appwriteBucketId: String("67bead4f0029938642e9"),
  appwriteApiKey: String("standard_bc28567a5b119a2404dec9656a85f4f1517f2a71ab993feadff4bb771d2f33b4bd62c622a33a4bf8710dc12fa4054b2380c1948d167831f008a965363f683e884eee90ac730ffa702e61c5ca729488d144da03d52c90262a4c3bbdd97f84e9a6ae28f910c4f10bc8fe2011402379e81c5be218b566d53ce969ad664a0e194599"),
  tinymceApiKey: String("nbnl3lm5o8i1i7fbh1q5ytyyofu7q1w5gvj3bouk4502a10b")
};
class AuthService {
  constructor() {
    __publicField(this, "client", new Client());
    __publicField(this, "account");
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.login({ email, password });
      } else return userAccount;
    } catch (error2) {
      console.log("Appwrite service :: createAccount :: error");
      return {
        success: false,
        message: error2 == null ? void 0 : error2.message,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error2) {
      console.log("Appwrite service :: login :: error");
      return {
        success: false,
        message: error2 == null ? void 0 : error2.message,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error2) {
      console.log("Appwrite service :: getCurrentUser :: error");
    }
    return {
      success: false,
      message: error == null ? void 0 : error.message,
      type: (error == null ? void 0 : error.type) || "unknown_error",
      code: (error == null ? void 0 : error.code) || 500
    };
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error2) {
      console.log("Appwrite service :: logout :: error", error2);
    }
  }
}
const authService = new AuthService();
const initialState = {
  status: false,
  userData: null
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      if (!action.payload || !action.payload.userData) {
        console.log("login: Invalid action payload", action.payload);
        return;
      }
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    }
  }
});
const { login, logout } = authSlice.actions;
const reducer = authSlice.reducer;
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    }).catch((error2) => console.log("Error Logging Out User LogoutBtn.jsx :: LogoutBtn :: error", error2));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-x-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "rounded-3xl font-roboto text-sm font-medium ",
        onClick: logoutHandler,
        children: "Logout"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        className: "w-10 h-10 rounded-full",
        src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      }
    )
  ] }) });
};
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setloader] = reactExports.useState(true);
  const [progress, setProgress] = reactExports.useState(0);
  const authStatus = useSelector((state) => state.status);
  reactExports.useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/Brown/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/Brown/dashboard");
    }
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      setloader(false);
    }, 1e3);
    return () => clearInterval(interval);
  }, [authStatus, navigate, authentication]);
  return loader ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progress }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[83vh] bg-black text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-16 h-16 border-4 border-gray-500 border-t-white rounded-full animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg font-medium", children: "Please wait..." })
    ] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    " ",
    children,
    " "
  ] });
};
const RTE = ({
  name,
  //Here "control" will passed as a 
  // reference for some other page 
  // to use this form 
  //This is propety from react hook form
  control,
  label,
  defaultValue = ""
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "inline-block mb-1 pl-1", children: label }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name,
        control,
        render: ({ field: { onChange } }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Editor,
          {
            apiKey: conf.tinymceApiKey,
            initialValue: defaultValue,
            init: {
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount"
              ],
              toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            },
            onEditorChange: onChange
          }
        )
      }
    )
  ] });
};
const store = configureStore({
  reducer
});
const Layout = () => {
  const [loading, setLoading] = reactExports.useState(true);
  const [progress, setProgress] = reactExports.useState(0);
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) return dispatch(login({ userData }));
      else return dispatch(logout());
    }).catch((error2) => console.log("Error fetching user:", error2));
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 200);
    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 2e3);
    return () => clearInterval(interval);
  }, [dispatch]);
  return loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progress }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-black text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-16 h-16 border-4 border-gray-500 border-t-white rounded-full animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg font-medium", children: "Please wait..." })
    ] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "layout min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "content flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { className: "mt-auto" })
  ] }) });
};
class Service {
  constructor() {
    __publicField(this, "client", new Client());
    __publicField(this, "databases");
    __publicField(this, "bucket");
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      );
    } catch (error2) {
      console.log("Appwrite service :: createPost :: error");
      return {
        success: false,
        message: error2 == null ? void 0 : error2.message,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      );
    } catch (error2) {
      console.log("Appwrite service :: updatePost :: error");
      return {
        success: false,
        message: error2 == null ? void 0 : error2.message,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error2) {
      console.log("Appwrite service :: deletePost :: error");
      return {
        success: false,
        message: (error2 == null ? void 0 : error2.message) || false,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error2) {
      console.log("Appwrite service :: getPost :: error");
      return {
        success: false,
        message: error2 == null ? void 0 : error2.message,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  //Query can only be used if you have 
  //made indexs/keys for it in appwrite database
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error2) {
      console.log("Appwrite service :: getPosts :: error");
      return {
        success: false,
        message: error2 == null ? void 0 : error2.message,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  //file upload method 
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error2) {
      console.log("Appwrite service :: uploadFile :: error");
      return {
        success: false,
        message: error2 == null ? void 0 : error2.message,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      );
      return true;
    } catch (error2) {
      console.log("Appwrite service :: deleteFile :: error");
      return {
        success: false,
        message: (error2 == null ? void 0 : error2.message) || false,
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    );
  }
}
const serviceObj = new Service();
function Card({
  $id,
  className,
  ...props
}) {
  return $id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: `/Brown/post/${$id}`,
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm ",
        className
      ),
      ...props
    }
  );
}
function CardHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn("flex flex-col gap-1.5 px-6", className),
      ...props
    }
  );
}
function CardTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardImage({
  className,
  featuredImage = "",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: serviceObj.getFilePreview(featuredImage),
      alt: "Image Here",
      "data-slot": "card-image",
      className: cn("", className),
      ...props
    }
  );
}
function CardDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "card-content", className: cn("px-6", className), ...props });
}
const Input = reactExports.forwardRef(({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      ref,
      "data-slot": "input",
      className: cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
});
Input.displayName = "Input";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root$1,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function LoginForm({ className, ...props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  reactExports.useRef(null);
  reactExports.useRef(null);
  const { register, handleSubmit } = useForm();
  const [error2, setError] = reactExports.useState({});
  const loginSubmit = async (data) => {
    setError({});
    try {
      const session = await authService.login(data);
      if (session.success != false) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
          toast.success("Login successful!");
        }
        navigate("/Brown/dashboard");
      } else throw session;
    } catch (error22) {
      const errorObj = {
        message: (error22 == null ? void 0 : error22.message) || "An unknown error occurred",
        type: (error22 == null ? void 0 : error22.type) || "unknown_error",
        code: (error22 == null ? void 0 : error22.code) || 500
      };
      toast.error(`${errorObj.message}`);
      setError(errorObj);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-6", className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: "Welcome back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Login To Start Reading !!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
                fill: "currentColor"
              }
            ) }),
            "Login with Apple"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
                fill: "currentColor"
              }
            ) }),
            "Login with Google"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background text-muted-foreground relative z-10 px-2", children: "Or continue with" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(loginSubmit), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "email",
                type: "email",
                placeholder: "m@example.com",
                ...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                      value
                    ) || "Email address must be a valid address"
                  }
                })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#",
                  className: "ml-auto text-sm underline-offset-4 hover:underline",
                  children: "Forgot your password?"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "password",
                type: "password",
                ...register("password", {
                  required: true
                })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: "Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/Brown/sign-up", className: "underline underline-offset-4", children: "Sign up" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4", children: [
      "By clicking continue, you agree to our ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms of Service" }),
      " ",
      "and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Privacy Policy" }),
      "."
    ] })
  ] });
}
function LoginPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-[#f7f4ed] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full max-w-sm flex-col gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, {}) })
    }
  );
}
function SignUpForm({ className, ...props }) {
  useSelector((state) => state.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error2, setError] = reactExports.useState({});
  const create = async (data) => {
    setError({});
    try {
      const userData = await authService.createAccount(data);
      if (userData.success != false) {
        const currData = await authService.getCurrentUser();
        if (currData) {
          dispatch(login({ userData: currData }));
          toast.success("Account Created Successfully !");
        }
        setTimeout(() => {
          navigate("/Brown");
        }, 3e3);
      } else throw userData;
    } catch (error22) {
      const errorObj = {
        message: (error22 == null ? void 0 : error22.message) || "An unknown error occurred",
        type: (error22 == null ? void 0 : error22.type) || "unknown_error",
        code: (error22 == null ? void 0 : error22.code) || 500
      };
      toast.error(`${errorObj.message}`);
      setError(errorObj);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-6", className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(create), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "username", children: "Username" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "username",
            ...register("name", {
              required: true
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "email",
            type: "email",
            placeholder: "m@example.com",
            ...register("email", {
              required: true,
              validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                  value
                ) || "Email address must be a valid address"
              }
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "password",
            type: "password",
            ...register("password", {
              required: true
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: "SignUp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4", children: [
      "By clicking continue, you agree to our ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms of Service" }),
      " ",
      "and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Privacy Policy" }),
      "."
    ] })
  ] });
}
function SignUpPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-[#f7f4ed] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full max-w-sm flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/Brown",
            className: "text-4xl font-extrabold font-cormorant-garamond flex items-center gap-2 self-center ",
            children: "Join Brown"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignUpForm, {})
      ] })
    }
  );
}
const Select = reactExports.forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ref, "data-slot": "select", children }) });
});
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Viewport,
          {
            className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label$1,
    {
      "data-slot": "select-label",
      className: cn("px-2 py-1.5 text-sm font-medium", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
    }
  );
}
const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: (post == null ? void 0 : post.title) || "",
      slug: (post == null ? void 0 : post.slug) || "",
      content: (post == null ? void 0 : post.content) || "",
      status: (post == null ? void 0 : post.status) || "active"
    }
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const submit = async (data2) => {
    var _a;
    try {
      if (!data2) {
        throw new Error("Data not found ");
      }
      if (post) {
        const file = ((_a = data2.image) == null ? void 0 : _a[0]) ? await serviceObj.uploadFile(data2.image[0]) : null;
        if (!file) {
          throw new Error(
            "Error : Please Upload the New Image OR Reupload the same image"
          );
        }
        const delFile = await serviceObj.deleteFile(post.featuredImage);
        if (delFile !== true) {
          throw new Error("Error : Old Image was not Deleted");
        }
        const dbPost = await serviceObj.updatePost(post.$id, {
          ...data2,
          featuredImage: file ? file.$id : null
        });
        if (!dbPost) {
          throw new Error("Failed to update the post. Please try again.");
        }
        toast.success("Post Updated Successfully !");
        setTimeout(() => {
          navigate(`/Brown/post/${dbPost.$id}`);
        }, 3e3);
      } else {
        const file = await serviceObj.uploadFile(data2.image[0]);
        if (!file) {
          throw new Error("Error : File is not Uploaded");
        }
        const fileId = file.$id;
        if (!fileId) {
          throw new Error("Error : File Id not Received");
        }
        data2.featuredImage = fileId;
        const newpost = await serviceObj.createPost({
          ...data2,
          userId: userData.$id
        });
        if (!newpost.$id) {
          throw new Error(newpost.message);
        }
        toast.success("Post Created Successfully !");
        setTimeout(() => {
          navigate(`/Brown/post/${newpost == null ? void 0 : newpost.$id}`);
        }, 3e3);
      }
    } catch (error2) {
      const errorObj = {
        message: (error2 == null ? void 0 : error2.message) || "An unknown error occurred",
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
      toast.error(`${errorObj.message}`);
    }
  };
  const slugTranform = reactExports.useCallback((value) => {
    try {
      if (value && typeof value === "string") {
        const slug = value.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
        if (!slug) {
          throw new Error(
            "Slug generation failed. Please provide a valid input."
          );
        }
        return slug;
      }
    } catch (error2) {
      const errorObj = {
        message: (error2 == null ? void 0 : error2.message) || "An unknown error occurred",
        type: (error2 == null ? void 0 : error2.type) || "unknown_error",
        code: (error2 == null ? void 0 : error2.code) || 500
      };
      toast.error(`${errorObj.message}`);
    }
  }, []);
  React.useEffect(() => {
    watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTranform(value.title, { shouldValidate: true }));
      }
    });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(submit), className: "flex flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-2/3 px-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            label: "Title :",
            placeholder: "Title",
            className: "mb-4",
            ...register("title", { required: true })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            label: "Slug :",
            placeholder: "Slug",
            className: "mb-4",
            ...register("slug", { required: true }),
            onInput: (e) => {
              setValue("slug", slugTranform(e.currentTarget.value), {
                shouldValidate: true
              });
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RTE,
          {
            label: "Content :",
            name: "content",
            control,
            defaultValue: getValues("content")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/3 px-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            label: "Featured Image :",
            type: "file",
            className: "mb-4",
            accept: "image/png, image/jpg, image/jpeg, image/gif",
            ...register("image", { required: !post })
          }
        ),
        post && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: serviceObj.getFilePreview(post.featuredImage),
            alt: post.title,
            className: "rounded-lg"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "status",
            control,
            defaultValue: "",
            rules: { required: "Status is required" },
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select the Status" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectGroup, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabel, { children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inactive", children: "Inactive" })
              ] }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            className: `w-full mt-4 ${post ? "bg-green-500" : ""}`,
            children: post ? "Update" : "Submit"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] });
};
function PostPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-[#f7f4ed] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full max-w-6xl flex-col gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostForm, {}) })
    }
  );
}
class AdminOptions {
  constructor() {
    __publicField(this, "adminClient", new Client$1());
    __publicField(this, "users");
    this.adminClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId).setKey(conf.appwriteApiKey);
    this.users = new Users(this.adminClient);
  }
  async getUserfromUserID(userId) {
    try {
      return await this.users.get(userId);
    } catch (error2) {
      console.log("Appwrite service :: getUserfromUserID:: error");
    }
    return {
      success: false,
      message: error == null ? void 0 : error.message,
      type: (error == null ? void 0 : error.type) || "unknown_error",
      code: (error == null ? void 0 : error.code) || 500
    };
  }
}
const adminOptions = new AdminOptions();
const Dashboard = () => {
  const session = useSelector((state) => state.status);
  const navigate = useNavigate();
  const [posts, setPosts] = reactExports.useState([]);
  const [username, setUsername] = reactExports.useState({});
  reactExports.useEffect(() => {
    if (session == true) {
      serviceObj.getPosts([]).then((posts2) => {
        if (posts2) {
          setPosts(posts2.documents);
          const userIds = posts2.documents.map((post) => post.userId);
          const usernameObject = {};
          Promise.all(
            userIds.map(
              (id) => adminOptions.getUserfromUserID(id).then((data2) => ({ userId: id, userName: data2.name }))
            )
          ).then((data2) => {
            data2.forEach(({ userId, userName }) => {
              usernameObject[userId] = userName;
            });
            setUsername(usernameObject);
          });
        }
      });
    } else {
      navigate(`/Brown/login`);
    }
  }, [session, navigate]);
  const convertReactElementToText = (postcontentElement) => {
    if (postcontentElement) {
      const output = document.createElement("div");
      const reactElement = parse(postcontentElement);
      const staticElement = server_browserExports.renderToStaticMarkup(reactElement);
      output.innerHTML = staticElement;
      return output.innerText;
    }
    return "";
  };
  return session == true ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-5xl flex flex-col md:flex-row gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        $id: post.$id,
        className: "flex flex-row items-start p-4 shadow-lg rounded-lg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pr-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm pb-2", children: [
              "Post By ",
              username[post.userId]
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold mb-2", children: post.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 text-base mb-2", children: convertReactElementToText(post.content).split(" ").slice(0, 8).join(" ") + "..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm mb-2", children: new Date(post.$createdAt).toDateString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CardImage,
            {
              featuredImage: post.featuredImage,
              alt: post.title,
              className: "w-32 h-24 object-cover rounded-md"
            }
          )
        ]
      },
      post.$id
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 max-h-50 p-4 rounded-lg shadow-md w-80 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold mb-2", children: "Writing on Brown" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-gray-800 space-y-1 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold", children: "New writer FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold", children: "Expert writing advice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold", children: "Grow your readership" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/Brown/post", children: " Start writing " }) })
    ] })
  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Redirecting..." });
};
const EditPost = () => {
  const [post, setPost] = reactExports.useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (slug) {
      serviceObj.getPost(slug).then((post2) => {
        if (post2) {
          setPost(post2);
        }
      });
    } else {
      navigate("/Brown");
    }
  }, [slug, navigate]);
  return post ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8 mx-8 border-2 border-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostForm, { post }) }) }) : null;
};
function Post() {
  const [post, setPost] = reactExports.useState(null);
  const [author, setAuthor] = reactExports.useState("");
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  reactExports.useEffect(() => {
    if (slug) {
      serviceObj.getPost(slug).then((post2) => {
        if (post2) {
          setPost(post2);
          adminOptions.getUserfromUserID(post2.userId).then((data) => data).then((username) => setAuthor(username.name)).catch((error2) => console.error("Error fetching user:", error2));
        } else navigate("/Brown");
      });
    } else navigate("/Brown");
  }, [slug, navigate]);
  const deletePost = () => {
    serviceObj.deletePost(post.$id).then((status) => {
      if (status) {
        serviceObj.deleteFile(post.featuredImage);
        navigate("/Brown");
      }
    });
  };
  return post ? post.status == "active" || isAuthor == true ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 bg-gray-100 min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold mb-4", children: post.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-500 ", children: [
      "Written By ",
      author
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 mb-4", children: new Date(post.$createdAt).toDateString() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: serviceObj.getFilePreview(post.featuredImage),
        alt: post.title,
        className: "rounded-xl w-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg text-gray-800", children: parse(post.content) }),
    isAuthor && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/Brown/edit-post/${post.$id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-blue-600 text-white", children: "Edit" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: deletePost, children: "Delete" })
    ] })
  ] }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-6 bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 bg-yellow-500 rounded-full animate-ping" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-700 font-semibold text-lg", children: "This post is under progress." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-600 text-sm mt-2", children: "Please check back later." })
  ] }) : null;
}
const Home = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-start min-h-[83vh] bg-[#f7f4ed] text-black pl-30 max-[1024px]:pl-20 max-[768px]:pl-10 max-[409px]:pl-6 ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "flex flex-col items-start font-stix_two_test font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-8xl max-[768px]:text-6xl max-[409px]:text-5xl max-[332px]:text-4xl", children: "Human" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-8xl max-[768px]:text-6xl max-[409px]:text-5xl max-[332px]:text-4xl", children: "stories & ideas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl max-[768px]:text-lg max-[409px]:text-base max-[332px]:text-sm mt-4 text-gray-700 font-roboto", children: "A place to read, write, and deepen your understanding" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/Brown/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-6 px-8 py-4 text-lg font-medium bg-black text-white rounded-full hover:bg-gray-900 transition-all max-[768px]:bg-green-500 ", children: "Start reading" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/img2.jpg",
        alt: "Decorative Image",
        className: "fixed right-1 top-19 max-w-[610px] max-[1355px]:hidden "
      }
    )
  ] });
};
const NotFoundPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { class: "bg-indigo-900 relative overflow-hidden h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9",
        class: "absolute h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: "inset-0 bg-black opacity-25 absolute" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: "container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { class: "w-full font-mono flex flex-col items-center relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { class: "font-extrabold text-5xl text-center text-white leading-tight mt-4", children: "You are all alone here" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { class: "font-extrabold text-8xl my-44 text-white animate-bounce", children: "404" })
    ] }) })
  ] });
};
const router = createBrowserRouter([
  {
    path: "/Brown/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}),
    children: [
      {
        path: "/Brown/",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {})
      },
      {
        path: "login",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Protected, { authentication: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginPage, {}) })
      },
      {
        path: "sign-up",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Protected, { authentication: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SignUpPage, {}) })
      },
      {
        path: "post",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Protected, { authentication: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostPage, {}) })
      },
      {
        path: "dashboard",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Protected, { authentication: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) })
      },
      {
        path: "edit-post/:slug",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Protected, { authentication: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditPost, {}) })
      },
      {
        path: "post/:slug",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Post, {})
      },
      {
        /* 404 Page*/
      },
      {
        path: "*",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {})
      }
    ]
  }
]);
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(Provider_default, { store, children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }) }) })
);
//# sourceMappingURL=index-CxcT9f4T.js.map

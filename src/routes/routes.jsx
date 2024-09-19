import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Login from "../pages/login";
import ProductDetails from "../pages/productDetails";
import Store from "../pages/store";
import PrivateRoute from "./PrivateRoute";

export const routes = [
    {
        path :"/" ,
        element: <PrivateRoute children= {<Home />} />
    },
    {
        path :"/organic-shop-02" ,
        element: <PrivateRoute children= {<Home />} />
    },
    {
        path :"/everything" ,
        element: <PrivateRoute children= {<Store />} />
    },
    {
        path :"/groceries" ,
        element: <PrivateRoute children= {<Store />} />
    },
    {
        path : "/juice" ,
        element: <PrivateRoute children= {<Store />} />
    },
    {
        path : "/about" ,
        element: <PrivateRoute children= {<About />} />
    },
    {
        path : "/contact" ,
        element: <PrivateRoute children= {<Contact />} />
    },
    {
        path : "/product-details/:id" ,
        element: <PrivateRoute children= {<ProductDetails />} />
    },
    {
        path : "/login" ,
        element: <Login/>
    },
]
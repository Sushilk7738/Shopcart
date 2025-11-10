import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import NotFound from "./components/NotFound";
import Product from "./components/Admin/Product";
import Orders from "./components/Admin/Orders";
import Dashboard from "./components/Admin/Dashboard";
import Customers from "./components/Admin/Customers";
import Payments from "./components/Admin/Payments";
import Settings from "./components/Admin/Settings";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path="dashboard" element= {<Dashboard />} />
          <Route path="customers" element= {<Customers />} />
          <Route path="payments" element= {<Payments />} />
          <Route path="products" element= {<Product />}/>
          <Route path="settings" element= {<Settings />}/>
          <Route path="orders" element= {<Orders/>} />
        </Route>
        <Route path="*" element = {<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Catalogue } from "./components/Catalogue";
import { Contacts } from "./components/Contacts";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path:'/Catalogue',
    element: <Catalogue />
  },
  {
    path:'/Contacts',
    element: <Contacts />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;

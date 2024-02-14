import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ]
}])

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;

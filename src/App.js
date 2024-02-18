import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage.1";
const App = ()=>{


const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path: "/",
    element:<MainContainer/>
  },{
    path:"watch",
    element:<WatchPage/>,
  },
],

}])

    return(
      <Provider store={store}>
        <div>
           <Header/>
           <RouterProvider router={appRouter}/>

          {
            /**
             * 
             * Header
             * Body
             * sidebar
             *   menuItems
             * mainContainer
             * buttonList
             * videoContaiiner
             * videoCard
             * 
             */
          }
        </div>
        </Provider>
    
    
        )
}

export default App;
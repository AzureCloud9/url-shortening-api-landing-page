
import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>

      </Route>
    ),
    {
      basename: '/url-shortening-api-landing-page',
    }
  )

  return (
      <RouterProvider router={router}/>
  )
}

export default App

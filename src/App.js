import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "navigation/routes"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((routes, index) => (
          <Route
            key={index}
            path={routes.path}
            element={<routes.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

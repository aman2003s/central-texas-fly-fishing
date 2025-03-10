import "./App.css";
import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { mainNav } from "./assets/navLinksData";
import PageNotFound from "./components/PageNotFound";

const getComponent = (componentName) =>
  lazy(async () => {
    try {
      const module = await import(`./components/${componentName}`);
      return module;
    } catch (error) {
      console.log(error);
      return null;
    }
  });

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {mainNav.map((elem) => {
                const componentName = elem.name.split(" ")[0];
                const Component = getComponent(componentName);
                if (Component) {
                  return (
                    <Route
                      key={elem.url}
                      path={elem.url}
                      element={<Component />}
                    />
                  );
                } else {
                  <Route
                    key={elem.url}
                    path={elem.url}
                    element={<Navigate to="/404" replace />}
                  />;
                  console.error(`Component not found for: ${Component}`);
                  return null;
                }
              })}
              <Route path="/404" element={<PageNotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

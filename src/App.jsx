import "./App.css";
import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { mainNav, footerNav } from "./assets/navLinksData";
import PageNotFound from "./pages/PageNotFound";
import Loading from "./components/Loading";

const componentModules = import.meta.glob("./pages/*.jsx");

const routes = mainNav.concat(footerNav).map((navItem) => {
  const componentName = navItem.name.split(" ")[0];
  const componentPath = `./pages/${componentName}.jsx`;
  let lowerCasePath = `/${componentName.toLowerCase()}`;

  // Special case for "Home"
  if (componentName.toLowerCase() === "home") {
    lowerCasePath = "/"; // Override path to "/"
  }

  const Component = lazy(() => componentModules[componentPath]());

  return (
    <Route key={componentName} path={lowerCasePath} element={<Component />} />
  );
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes}
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

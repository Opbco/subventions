import React, { useEffect, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./../utils/i18n";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import IsAuthenticated from "../utils/IsAuthenticated";
import IsAuthorized from "../utils/IsAuthorized";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Loading from "../utils/Loading";
import Home from "./Pages/Home";
import ErrorPage from "../utils/ErrorPage";
import PageLayout from "./Pages/PageLayout";
import SignIn from "./Pages/SignIn";
import NewDemande from "./Pages/NewDemande";
import ImprimeEts from "./Components/demandes/ImprimeEts";
import MyCompteBancaire from "./Pages/MyCompteBancaire";

const Main = ({ page }) => {
  const { t } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <IsAuthenticated auth={true}>
          <PageLayout />
        </IsAuthenticated>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home title="MINESEC-SUBVENTIONS"  />,
          handle: {
            crumb: () => <Link to="/">{t("home")}</Link>,
          },
        },
        {
          path: "demande",
          element: <NewDemande title="Apply for this session"  />,
          handle: {
            crumb: () => <Link to="/">{t("home")}</Link>,
          },
        },
        {
          path: "compteBancaire",
          element: <MyCompteBancaire title="Update my bank account details"  />,
          handle: {
            crumb: () => <Link to="/">{t("home")}</Link>,
          },
        },
      ],
    },
    {
      path: "login",
      element: (
        <IsAuthenticated auth={false}>
          <SignIn title="let's log in" />
        </IsAuthenticated>
      ),
      handle: {
        crumb: () => <Link to="/login">{t("login")}</Link>,
      },
    },
  ]);

  return (
    <React.Suspense fallback={<Loading />}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loading />}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.Suspense>
  );
};

export default Main;

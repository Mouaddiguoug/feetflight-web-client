import "../styles/globals.scss";
import ContentLayout from "../shared/layout-components/layout/content-layout";
import Authenticationlayout from "../shared/layout-components/layout/authentication-layout";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/shared/providers/auth-provider";

const layouts: any = {
  Contentlayout: ContentLayout,
  Authenticationlayout: Authenticationlayout,
};
function MyApp({ Component, pageProps }: any) {
  const Layout =
    layouts[Component.layout] ||
    ((pageProps: any) => <Component>{pageProps}</Component>);

  return (
    <AuthProvider>
      <Layout>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#000",
              color: "#fff",
              border: "1px",
              borderColor: "white",
            },
          }}
          reverseOrder={false}
        />
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;

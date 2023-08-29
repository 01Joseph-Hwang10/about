import React, { Suspense, lazy } from "react";
import Layout from "@theme/Layout";
import HomepageHeader from "./Header";
import HomepageHead from "./Head";
import ContentWrapper from "./ContentWrapper";
import Shortcuts from "./Shortcuts";
import Spinner from "../../components/Spinner";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@site/src/utils/queryUtils";
import BrowserOnly from "@docusaurus/BrowserOnly";

// @ts-ignore
const HomepageContent = lazy(() => import("./Contents"));

const Home: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <HomepageHead />
        <HomepageHeader />
        <BrowserOnly fallback={<Spinner fill />}>
          {() => (
            <ContentWrapper>
              <Shortcuts />
              <Suspense fallback={<Spinner fill />}>
                <HomepageContent />
              </Suspense>
            </ContentWrapper>
          )}
        </BrowserOnly>
      </Layout>
    </QueryClientProvider>
  );
};

export default Home;

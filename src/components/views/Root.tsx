import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../layouts/NavBar/NavBar";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/queryClient";
import PageContainer from "../layouts/Container/PageContainer";

const Root = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <NavBar />
          <PageContainer>
            <Outlet />
          </PageContainer>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default Root;

import { ReactNode } from "react";
import { Box } from "@mui/system";
import Head from "next/head";
import { Navbar, Sidebar } from "../components/ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout = ({ children, title = "Open Jira App" }: Props) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box
        sx={{
          padding:
            "10px 20px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

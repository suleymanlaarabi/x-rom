import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageContainer = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      key={location.pathname}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        padding: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;

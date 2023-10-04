import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Transition from "./components/transition";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.route} className="h-[100vh]">
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default api.withTRPC(MyApp);

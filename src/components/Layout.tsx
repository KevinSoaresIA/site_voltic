import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text selection:bg-brand-blue selection:text-white">
      <Navbar />

      {/* Main content with page transition */}
      <main className="flex-grow pt-20 md:pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

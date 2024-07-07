import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <TracingBeam>
          <FloatingNavbar
            navItems={[
              { name: "Home", link: "", icon: <FaHome /> },
              { name: "About", link: "", icon: <FaHome /> },
              { name: "Projects", link: "", icon: <FaHome /> },
              { name: "Certificates", link: "", icon: <FaHome /> },
              { name: "Experiences", link: "", icon: <FaHome /> },
              { name: "Contact", link: "", icon: <FaHome /> },
            ]}
          />
          <Hero />
          <Grid />
          <Projects />
        </TracingBeam>
      </div>
    </div>
  );
}

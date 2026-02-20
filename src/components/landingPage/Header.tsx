"use client";
import Link from "next/link";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  GithubIcon,
  TwitterIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
function Header() {
  return (
    <motion.div
      layoutId="header"
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="w-full  border-b flex items-center justify-between px-12 py-2 "
    >
      <div className="flex gap-2 items-center justify-center">
        <span className="text-2xl font-funnel font-semibold text-primary dark:text-primary">
          Wryte.
        </span>
      </div>
      <div className="flex w-fit justify-center items-center gap-6 text-sm font-medium">
        <Link href={"/"}>Features</Link>
        <a href={"https://x.com/Gouravv_c"} target="_blank" rel="noreferrer">
          <Button variant={"outline"} size={"icon"}>
            <HugeiconsIcon icon={TwitterIcon} />
          </Button>
        </a>
        <a
          href={"https://github.com/GouravSittam"}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant={"outline"} size={"icon"}>
            <HugeiconsIcon icon={GithubIcon} />
          </Button>
        </a>
        <a
          href={"https://www.linkedin.com/in/gouravsittam/"}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant={"outline"} size={"icon"}>
            <HugeiconsIcon icon={Linkedin01Icon} />
          </Button>
        </a>
      </div>
      <div className="">
        <Link href={"/signin"}>
          <Button>Sign-in</Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Header;

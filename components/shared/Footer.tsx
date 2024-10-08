import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/event-logo-1.png"
            alt="logo"
            width={40}
            height={12}
          />
        </Link>
        <p>2024 Evently. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

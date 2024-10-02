import React from "react";

const Footer = () => {
    const footerNote = `${new Date().getFullYear()} WebShop`;
  return (
    <div className="py-6 mt-12 border-t border-gray-200 container mx-auto flex items-center flex-col">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
          &copy; {footerNote}
        </p>
      </div>
    </div>
  );
};

export default Footer;

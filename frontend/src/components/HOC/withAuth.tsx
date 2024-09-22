"use client";
import { useAuth } from "@/contexts/authenticationContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        // router.push("/login");
      }
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;

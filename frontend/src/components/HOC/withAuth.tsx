import { useAuth } from "@/contexts/authenticationContext";
import { useRouter } from "next/navigation";
import React, { useEffect, ComponentType } from "react";

type WithAuthProps = {};

function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const Wrapper: React.FC<P & WithAuthProps> = (props) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, [isLoggedIn]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}

export default withAuth;

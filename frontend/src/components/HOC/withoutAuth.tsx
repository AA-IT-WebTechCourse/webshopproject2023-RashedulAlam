import { useAuth } from "@/contexts/authenticationContext";
import { useRouter } from "next/navigation";
import React, { useEffect, ComponentType } from "react";

type WithoutAuthProps = {};

function withoutAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const Wrapper: React.FC<P & WithoutAuthProps> = (props) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn) {
        router.push("/");
      }
    }, [isLoggedIn, router]);

    if (isLoggedIn) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}

export default withoutAuth;

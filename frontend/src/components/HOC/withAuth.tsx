import { useAuth } from "@/contexts/authenticationContext";
import { useRouter } from "next/navigation";
import React, { useEffect, ComponentType } from "react";

type WithAuthProps = {};

function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const Wrapper: React.FC<P & WithAuthProps> = (props) => {
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
}

export default withAuth;

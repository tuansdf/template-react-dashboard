import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/core";
import { Head } from "~/components/helpers/head.tsx";
import { PERMISSION } from "~/features/auth/auth.constant.ts";
import { useAuthContext, useAuthorizeRoute } from "~/features/auth/auth.context.tsx";

export const Route = createLazyFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  useAuthorizeRoute("HOME", "/");

  const { authObj, setAuthObj } = useAuthContext();

  const handleClick = () => {
    const random = String(Math.floor(Math.random() * 1000));
    setAuthObj({
      userId: random,
      username: "test-username-" + random,
      token: "test-token-" + random,
      permissions: [PERMISSION.CREATE, PERMISSION.VIEW],
    });
  };

  return (
    <>
      <Head title="Home" />

      <div>
        <div>Home</div>
        <Button onClick={handleClick}>Set auth</Button>
        <pre>{JSON.stringify(authObj, null, 2)}</pre>
      </div>
    </>
  );
}

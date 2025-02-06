
import { Logo } from "@/components/shared/logo";
import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
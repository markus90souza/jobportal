import Image from "next/image";
import Link from "next/link";

import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
          <Image src={'/logo.png'} alt="Logo" width={40} height={40} className="size-10" />
          <h1 className="text-2xl font-bold">
            Job<span className="text-primary">Portal</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
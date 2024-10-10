import Image from "next/image";
import mushroomClipart from "../../../public/images/mushroom-clipart.webp";
import SignInForm from "@/components/auth/SignInForm";
import SignInWithFacebook from "@/components/auth/alternativeAuth/SignInWithFacebook";
import SignInWithTwitter from "@/components/auth/alternativeAuth/SignInWithTwitter";
import SignInWithGithub from "@/components/auth/alternativeAuth/SignInWithGithub";
import AlternativeAuthDivider from "@/components/auth/alternativeAuth/AlternativeAuthDivider";
import FormDetailsHeader from "@/components/auth/FormDetailsHeader";

export default function SignInPage() {
  return (
    <div className="flex flex-row-reverse h-screen">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="max-w-lg w-full space-y-8">
          <FormDetailsHeader
            title="Welcome Back"
            subtitle="Please sign in to your account"
          />
          <SignInForm />
          <div className="mt-6">
            <AlternativeAuthDivider />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <SignInWithTwitter />
              <SignInWithGithub />
              <SignInWithFacebook />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block relative w-0 flex-1 m-20">
        <FormDetailsHeader title="Mushroom App Store" />
        <Image
          className="absolute inset-0 h-full w-full object-scale-down"
          src={mushroomClipart}
          width={400}
          height={400}
          alt={"Background Image"}
        />
      </div>
    </div>
  );
}

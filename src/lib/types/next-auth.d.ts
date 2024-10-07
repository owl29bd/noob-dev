import { Role } from "@/lib/enums/role.enum.ts";
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { UserStatus } from "../enums/status.enum.ts";

export interface UserAuth extends DefaultUser {
  firstName: string;
  lastName: string;
  profileImage: string;
  role: Role;
  status: UserStatus[];
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

declare module "next-auth" {
  interface User {
    user: UserAuth;
    tokens: Tokens;
  }

  interface Session extends DefaultSession {
    user: UserAuth;
    tokens: Tokens;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: UserAuth;
    tokens: Tokens;
  }
}

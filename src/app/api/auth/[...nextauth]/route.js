import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [],
};

if (
  process.env.NODE_ENV === "development"
  && process.env.INSECURE_CREDENTIALS_PROVIDER_ON === "true"
) {
  authConfig.providers.push(
    CredentialsProvider({
      id: "password",
      name: "Password",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        if (credentials.password === "password") {
          return {
            email: "bob@alice.com",
            name: "Bob Alice",
            image: "https://avatars.githubusercontent.com/u/67470890?s=200&v=4",
          }
        }
      },
    })
  )
} else {
  authConfig.providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };

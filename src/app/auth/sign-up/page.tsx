import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitter } from "react-icons/io";
import Link from "next/link";

function SignUp() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="card w-full px-5">
        <div className="card-body">
          <h2 className="card-title">Rejoignez Chirpful !</h2>
          <button className="btn">
            <FcGoogle />S{"'"}inscrire avec Google
          </button>
          <button className="btn">
            <IoLogoTwitter />S{"'"}inscrire avec Twitter
          </button>
          <div className="divider">OU</div>
          <button className="btn">
            <Link href="/auth/create-account">Créer un compte</Link>
          </button>
          <p>
            Vous avez déjà un compte ?{" "}
            <Link href="/auth/sign-in" className="text-slate-900 font-bold">
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUp;

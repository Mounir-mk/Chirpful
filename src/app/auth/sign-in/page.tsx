import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitter } from "react-icons/io";
import Link from "next/link";
import InputControl from "../../components/InputControl";

function SignIn() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="card w-full px-5">
        <div className="card-body">
          <h2 className="card-title">Connectez-vous à Chirpful !</h2>
          <button className="btn">
            <FcGoogle />
            Se connecter avec Google
          </button>
          <button className="btn">
            <IoLogoTwitter />
            Se connecter avec Twitter
          </button>
          <div className="divider">OU</div>
          <form action="">
            <InputControl
              type="text"
              label="Adresse E-mail"
              placeholder="john.doe@mail.com"
            />
            <InputControl
              type="password"
              label="Mot de passe"
              placeholder="********"
              withIcon
            />
          </form>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary">Se connecter</button>
          </div>
          <p>Vous n{"'"}avez pas de compte ? </p>
          <Link href="/auth/sign-up" className="text-slate-900 font-bold">
            Créez-en un
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SignIn;

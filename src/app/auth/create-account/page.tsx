import React from "react";
import InputControl from "../../components/InputControl";

function CreateAccount() {
  return (
    <main className="h-screen flex justify-center">
      <div className="card w-full px-5">
        <div className="card-body">
          <h2 className="card-title">Créez votre compte !</h2>
          <InputControl type="text" label="Nom" placeholder="Doe" />
          <InputControl type="text" label="Prénom" placeholder="John" />
          <InputControl
            type="text"
            label="Adresse E-mail"
            placeholder="john.doe@mail.com"
          />
          <InputControl
            type="date"
            label="Date de naissance"
            placeholder="01/01/2000"
          />
          <InputControl
            type="password"
            label="Mot de passe"
            placeholder="********"
            withIcon
          />
          <InputControl
            type="password"
            label="Confirmez le mot de passe"
            placeholder="********"
            withIcon
          />
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary">Créer un compte</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateAccount;

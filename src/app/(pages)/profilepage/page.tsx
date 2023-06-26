import React from "react";

function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 mt-4 flex-1">
      <section className="card bg-base-100 shadow-none border-b-base-200 border-2 w-full">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;

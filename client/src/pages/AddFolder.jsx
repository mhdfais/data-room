import React from "react";
import Header from "../components/Header";
import AddFolderForm from "../components/AddFolderForm";

const AddFolder = () => {
  return (
    <>
      <Header isLoggedIn={true} />

      <main className="flex justify-center ">
        <AddFolderForm />
      </main>
    </>
  );
};

export default AddFolder;

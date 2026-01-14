import Header from "../components/Header";
import { TfiAngleLeft } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import StorageCard from "../components/StorageCard";
import FloatingActions from "../components/FloatingActions";
import TrashGrid from "../components/TrashGrid";

const trashData = [
  { id: 1, title: "invoice", date: "12/3/2025" },
  { id: 1, title: "invoice", date: "12/3/2025" },
  { id: 1, title: "invoice", date: "12/3/2025" },
  { id: 1, title: "invoice", date: "12/3/2025" },
];

const Trash = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header isLoggedIn={true} />
      <div
        onClick={() => navigate("/")}
        className="flex gap-3 items-center pl-8 cursor-pointer"
      >
        <TfiAngleLeft size={12} />
        Back
      </div>
      <div className="flex justify-between">
        <PageTitle
          title="Trash"
          subTitle="Items will be permanently deleted from the trash after 60 days."
        />
        <StorageCard />
      </div>
      <TrashGrid files={trashData} />
      <FloatingActions />
    </>
  );
};

export default Trash;

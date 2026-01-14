

const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="px-9 pt-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-gray-500 mt-1">{subTitle}</p>
    </div>
  );
};

export default PageTitle;

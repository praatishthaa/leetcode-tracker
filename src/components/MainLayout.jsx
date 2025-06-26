const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen items-center bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: "url(/src/assets/back.png)" }} // adjust if imported
    >
      <div className="w-full items-center max-w-3xl bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col gap-6 pb-60">

  {children}

      </div>
    </div>
  );
};

export default MainLayout;

import bugsy from "../assets/bugsy.png";

const BugsyCat = () => {
  return (
    <div className="fixed bottom-6 left-4 z-50 flex items-end gap-0 animate-fade-in">
      
      {/* Cat image */}
      <img
        src={bugsy}
        alt="Bugsy the Accountability Cat"
        className="w-auto h-60 drop-shadow-xl hover:scale-110 transition-transform duration-300"
      />

      {/* Speech bubble */}
      <div className="relative bottom-32 w-30 bg-white text-earthy font-medium text-base p-4 rounded-2xl shadow-lg max-w-[240px] ml-[-6px]">
        <p className="italic leading-snug">
          “No excuses. You 
          <p className="italic leading-snug"> owe it to your
           <p className="italic leading-snug"> future self 💻👀”</p>
</p>
        </p>
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45 shadow-md" />
      </div>
    </div>
  );
};

export default BugsyCat;

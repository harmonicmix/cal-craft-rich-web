import Image from "next/image";
import Select from "../../components/inputs/select";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24 ">
      <div className="mb-5">
        <p className="text-center text-3xl">ระบบคำนวณของประเทศ Rich Legacy</p>
      </div>

      <div className="items-center justify-center w-2/3 ">
        <hr />
        <Select />
      </div>
    </main>
  );
}

import { v4 as uuidv4 } from "uuid";
import ListRakyat from "./ListRakyat";
import Header from "./Header";
import { useState } from "react";

const initialValue = [
  {
    id: uuidv4(),
    nama: "Yoga",
    nik: 321384924000001,
    ket: "Sudah Vaksin",
  },
  {
    id: uuidv4(),
    nama: "Ria",
    nik: 19,
    ket: "Belum Vaksin",
  },
];

function Home() {
  const [data] = useState(initialValue);

  return (
    <div>
      <Header />
      <ListRakyat data={data} />
    </div>
  );
}

export default Home;

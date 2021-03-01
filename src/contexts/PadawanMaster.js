import { createContext, useContext, useEffect, useState } from "react";
import getPadawanMaster from "../services/StarWarsService";

const PadawanMasterContext = createContext();

export default function PadawanMasterProvider({ children }) {
  const placeholder = {
    name: "Obi-Wan Kenobi",
    side: "JEDI",
    pictureUrl:
      "http://especiais.ne10.uol.com.br/starwars/wp-content/uploads/2015/12/obi_wan_kenobi-300x300.png",
  };
  const [padawanMaster, setPadawanMaster] = useState(placeholder);

  useEffect(() => {
    updatePadawanMaster();
  }, []);

  const updatePadawanMaster = async () => {
    const master = await getPadawanMaster();
    setPadawanMaster(master);
  };

  return (
    <PadawanMasterContext.Provider
      value={{ padawanMaster, updatePadawanMaster }}
    >
      {children}
    </PadawanMasterContext.Provider>
  );
}

export function usePadawanMasterContext() {
  const context = useContext(PadawanMasterContext);
  if (!context) throw new Error("PadawanMasterContext outside Provider");
  
  const { padawanMaster, updatePadawanMaster } = context;
  return { padawanMaster, updatePadawanMaster };
}

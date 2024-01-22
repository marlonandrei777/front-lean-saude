import { Metadata } from "next";
import { Header } from "../components/Header"
import { PatientTable } from "../components/PatientTable"

export const metadata: Metadata = {
  title: "Tabela de Usuários | Lean Saude",
  description: "Gerencie sua lista de usuários",
};

export default async function Page() {
  return (
    <div>
      <Header />

      <div className="mt-24 max-w-[1270px] mx-auto">
        <h2 className="font-roboto text-2xl text-gray-900">Usuários</h2>
        <PatientTable />
      </div>
    </div>
  )
}
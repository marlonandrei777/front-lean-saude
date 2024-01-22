'use client'
import { produce } from "immer";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react"

interface userData {
  id: number;
  name: string;
  phone: string;
  registrationDate: string;
  status: string;
  action?: null;
}

interface PatientTableContextType {
  users: userData[];
  filterUsers: (user: userData, search: String) => boolean
  updateStatus: (id: number, newStatus: string) => void
}

interface RepositoriesContextProviderProps {
  children: ReactNode
}

export const PatientTableContext = createContext({} as PatientTableContextType)

export function PatientTableContextProvider({ children }: RepositoriesContextProviderProps) {
  const [users, setUsers] = useState<userData[]>([]);

  // chamada api
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://38375370-103e-44f9-ba50-67c60bff12f7.mock.pstmn.io/users"
      )

      if (!res.ok) {
        throw new Error("Flaha ao carregar os Usuários")
      }

      const data: userData[] = await res.json();

      setUsers(data)
    }

    getData()
  }, [])

  // Função de filtro com useMemo
  const filterUsers = useMemo(() => {
    return (user: userData, search: String) => {
      const normalizedSearch = search.toLowerCase();

      return normalizedSearch === '' ||
        user.name.toLowerCase().includes(normalizedSearch) ||
        user.phone.toLowerCase().includes(normalizedSearch);
    };
  }, []);

  // Função para atualizar o status de uma linha
  const updateStatus = (id: number, newStatus: string) => {
    const newStatusUpdate = produce(users, draft => {
      const userIndex = draft.findIndex(user => user.id === id);

      if (userIndex !== -1) {
        draft[userIndex].status = newStatus === 'Ativar' ? 'Ativo' : 'Inativo';
      }
    });

    setUsers(newStatusUpdate);
  };

  return (
    <PatientTableContext.Provider
      value={{
        users,
        filterUsers,
        updateStatus,
      }}
    >
      {children}
    </PatientTableContext.Provider>
  )
}

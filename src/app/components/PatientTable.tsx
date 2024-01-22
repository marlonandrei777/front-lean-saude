'use client'
import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
import LongMenu from './ButtonMenu';
import { usePatientTable } from '@/hooks/usePatientTable';
interface Column {
  id: 'id' | 'name' | 'phone' | 'registrationDate' | 'status' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'name', label: 'Nome', minWidth: 100 },
  {
    id: 'phone',
    label: 'Telefone',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'registrationDate',
    label: 'Data de cadastro',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'action',
    label: '',
    minWidth: 17,
    align: 'center',
  }
];

export function PatientTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const { users, filterUsers, updateStatus } = usePatientTable()

  // mudanca de pagina
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  //mudanca de linha de paginas
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='mt-8'>
      <TextField
        onChange={(e) =>
          setSearch(e.target.value)
        }
        label="Pesquisar ID ou nome ou telefone..."
        variant="outlined" size="small"
        sx={{ width: "18rem" }}
      />

      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          marginTop: "1rem",
          height: "100%"
        }}
        elevation={0}
      >
        <TableContainer sx={{ maxHeight: 630 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .filter((user) => filterUsers(user, search))
                .map((user) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                      {columns.map((column) => {
                        const value = user[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'status' ? (
                              <span
                                style={{
                                  color: value === 'Ativo' ? 'green' : 'red',
                                  background: value === 'Ativo' ? '#daf4e3' : '#fdecec',
                                  borderRadius: '6.25rem',
                                  padding: '3px 11.5px',
                                }}
                              >
                                {value}
                              </span>
                            ) : column.id === 'action' ? (
                              <LongMenu
                                onUpdateStatus={
                                  (newStatus) => updateStatus(user.id, newStatus)
                                }
                              />
                            ) : (
                              column.format && typeof value === 'number'
                                ? column.format(value)
                                : value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

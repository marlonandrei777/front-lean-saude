import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from '../../assets/logo.png';
import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

export function Header() {
  return (
    <AppBar elevation={0} sx={{ borderBottom: 2, borderColor: "#EBEBEB", backgroundColor: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between", margin: "0 292px" }} className="max-[1015px]:ml-14 max-[1015px]:items-center">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src={Logo} alt="Logo Lean Saúde" height={40} />

          <nav className="ml-12">
            <ul className="flex gap-12 text-gray-800 max-[1015px]:gap-4">
              <li className="hover:text-primary-purple"><ActiveLink href="/userList">Clientes</ActiveLink></li>
              <li className="hover:text-primary-purple"><Link href="#">Endereços</Link></li>
              <li className="hover:text-primary-purple"><Link href="#">Entregas</Link></li>
            </ul>
          </nav>
        </Box>

        <Box sx={{
          borderRadius: '100%',
          width: "32px",
          height: "32px",
          color: "white",
          backgroundColor: "#9747FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
          className="max-[1015px]:hidden"
        >
          M
        </Box>
      </Toolbar>
    </AppBar>
  )
}

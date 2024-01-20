import Image from "next/image";
import Logo from '../assets/logo.png';
import { Button, Grid, TextField } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Grid container className="min-h-screen">
        <Grid container item xs={12} sm={6} direction={"column"} className="p-[10px]" justifyContent={"space-between"}>
          <div />
          <div className="flex flex-col w-[387px] ml-[96px] max-[1015px]:ml-6 max-[414px]:w-[300px]">
            <Grid container justifyContent={"center"} direction={"column"}>
              <Image src={Logo} alt="Logo Lean Saúde" width={80} />

              <span className="text-xl text-gray-900 mt-8">Bem-vindo(a)</span>
              <p className="mt-2 text-gray-800">Acesse sua conta para iniciar a sessão</p>

            </Grid>

            <TextField label="Email" type="email" margin="normal" className="mt-10" />
            <TextField label="Senha" type="password" margin="normal" />

            <p className="text-primary-purple mt-4">Esqueceu sua senha?</p>

            <Button className="bg-primary-purple h-[2.625rem] w-[11.375rem] normal-case mt-8 hover:bg-purple-900" variant="contained">
              Acessar plataforma
            </Button>
          </div>
          <div />
        </Grid>


        <Grid item xs={12} sm={6} className="bg-primary-purple max-[1015px]:hidden" />
      </Grid>
    </main>
  );
}

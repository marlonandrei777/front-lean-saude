/* run JS client */
"use client"
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { Grid, TextField } from "@mui/material";
import Image from "next/image";
import Logo from '../../assets/logo.png';
import { useSearchParams } from "next/navigation";

export function LoginForm() {
  const searchParams = useSearchParams()

  const error = searchParams.get("error")

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    }

    signIn("credentials", {
      ...data,
      callbackUrl: "/userList"
    })
  }

  return (
    <form
      onSubmit={login}
      className="
        flex 
        flex-col 
        w-[387px] 
        ml-[96px] 
        max-[1015px]:ml-6 
        max-[414px]:w-[300px]
      "
    >
      <Grid container justifyContent={"center"} direction={"column"}>
        <Image src={Logo} alt="Logo Lean Saúde" priority width={80} height={80} />

        <span className="text-xl text-gray-900 mt-8">Bem-vindo(a)</span>
        <p className="mt-2 text-gray-800">Acesse sua conta para iniciar a sessão</p>
      </Grid>

      <TextField
        error={error === "CredentialsSignin"}
        name="email"
        label="Email"
        type="email"
        sx={{ marginTop: "2.56rem" }}
        margin="normal"
      />
      {error === "CredentialsSignin" && (
        <p
          style={{
            color: '#d32f2f',
            fontSize: '0.75rem',
            fontFamily: "sans-serif",
            letterSpacing: "0.03333em",
            marginLeft: "0.88rem",
            marginTop: "-6px",
            marginBottom: "1.56rem"
          }}
        >
          Email não encontrado. Confira e tente novamente.
        </p>
      )}

      <TextField
        error={error === "CredentialsSignin"}
        name="password"
        label="Senha"
        type="password"
        sx={{ marginTop: "0.2rem" }}
        margin="normal"

      />
      {error === "CredentialsSignin" && (
        <p
          style={{
            color: '#d32f2f',
            fontSize: '0.75rem',
            fontFamily: "sans-serif",
            letterSpacing: "0.03333em",
            marginLeft: "0.88rem",
            marginTop: "-6px",
            marginBottom: "1rem"
          }}
        >
          Senha incorreta.Por favor, verifique e tente novamente.
        </p>
      )}

      <small className="text-primary-purple mt-1">Esqueceu sua senha?</small>

      <button
        type="submit"
        className="
          bg-primary-purple 
          h-[2.625rem] 
          w-[11.375rem] 
          normal-case 
          mt-8 
          hover:bg-purple-900
          text-white
          rounded-[0.25rem]
        "
      >
        Acessar plataforma
      </button>
    </form>
  )
}
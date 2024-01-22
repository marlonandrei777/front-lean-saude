
import { Grid } from "@mui/material";
import { LoginForm } from "./components/LoginForm";

export default function Home() {
  return (
    <main>
      <Grid container className="min-h-screen">
        <Grid container item xs={12} sm={6} direction={"column"} sx={{ padding: "10px" }} justifyContent={"space-between"}>
          <div />
          <LoginForm />
          <div />
        </Grid>

        <Grid item xs={12} sm={6} className="bg-primary-purple max-[1015px]:hidden" />
      </Grid>
    </main>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Menu } from "../components/molecules/menu";
import { Welcom } from "../components/molecules/welcom";
import { Center } from "../components/templates/center";
import { api } from "../server/apiFetch";
import { UserData } from "../components/templates/userData";
import { Grid } from "@mui/material";
import { CustomizedSteppers } from "../components/molecules/stepper";

export const Home = () => {
  const params = useParams();
    const [user, setUser] = useState(null);
    const [confirm, setConfirm] = useState(false);
    useEffect(() => {
      api.get(`/users/${params.id}`).then((res) => setUser(res.data));
    }, [params]);

  return (
    <div>
      <Menu />
      <Center className="portada" height="160px">
        <Grid container spacing={2}>
          <Grid size={ confirm ? 6 : 12}>
            <Welcom name={user?.name} confirm={confirm} />
          </Grid>
          {confirm && <Grid size={6} >
            <CustomizedSteppers />
          </Grid>}
        </Grid>
      </Center>
      <UserData onSubmit={() => setConfirm(true)} />
    </div>
  );
};

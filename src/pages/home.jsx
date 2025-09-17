import { useParams } from "react-router";
import { Grid } from "@mui/material";

import { Menu, Welcom, CustomizedSteppers } from "../components/molecules";

import { UserDataForm, ErrorComponent, Steps } from "../components/templates";

import { Loading } from "../components/atoms";

import { useUser } from "../components/hooks/useUser";
import { useForm } from "../components/hooks/useForm";

export const Home = () => {
  const params = useParams();
  const { userData, loading, error } = useUser(params.id);
  const { confirm, setConfirmData, step, setSteps } = useForm();

  const validateStep = () => {
    if (step < 1) {
      setSteps(step+1);
    }
  }

  return (
    <div>
      <Menu />
      <div className="portada center">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid size={confirm ? 6 : 12}>
            <Welcom name={userData?.name} confirm={confirm} />
          </Grid>
          {confirm && (
            <Grid size={6}>
              <CustomizedSteppers step={step} />
            </Grid>
          )}
        </Grid>
      </div>
      {loading && <Loading />}
      {error && <ErrorComponent />}
      {!loading && !error && !confirm && (
        <UserDataForm
          user={userData}
          id={params.id}
          onSubmit={() => setConfirmData(true)}
        />
      )}
      {!loading && !error && confirm && (
        <Steps id={params.id} onSubmit={validateStep} step={step} />
      )}
    </div>
  );
};

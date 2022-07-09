import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { fetchItems, setButton } from "../redux/itemActions";
import Cars from "./Cars";

const Card = () => {
  const btn = useSelector((state) => state.buttonText.buttonText);
  const cars = useSelector((state) => state.cars.items);
  console.log(cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setButton("Pilih Mobil"));
    dispatch(fetchItems());
  });

  return (
    <div>
      <Grid container justifyContent="center">
        {/* {cars ? ( */}
        {typeof cars !== "undefined" ? (
          cars.map((item) => {
            return (
              <Grid elevation={0} spacing={1} item key={item.id}>
                <Cars item={item} />
              </Grid>
            );
          })
        ) : (
          <Typography>Empty List</Typography>
        )}
      </Grid>
    </div>
  );
};

export default Card;

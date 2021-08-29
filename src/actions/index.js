import axios from "axios";

export const getCurrentStatistical = () => async (dispatch) => {
  await axios
    .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
    .then((res) => {
      dispatch({
        type: "STATICS",
        payload: res.data.data,
      });
    })
    .catch((error) => {
      console.log("Api error", error);
    });
};

const initialState = {
  update_date_time: null,
  local_new_cases: null,
  local_total_cases: null,
  local_total_number_of_individuals_in_hospitals: null,
  local_deaths: null,
  local_new_deaths: null,
  local_recovered: null,
  local_active_cases: null,
  global_new_cases: null,
  global_total_cases: null,
  global_deaths: null,
  global_new_deaths: null,
  global_recovered: null,
  total_pcr_testing_count: null,
  daily_pcr_testing_data: [],
  total_antigen_testing_count: null,
  daily_antigen_testing_data: [],
  hospital_data: [],
};

const staticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STATICS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default staticsReducer;

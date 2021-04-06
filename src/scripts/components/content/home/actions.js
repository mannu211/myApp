export const SET_DATA = "SET_DATA";
export const setData = (data) => ({
  type: SET_DATA,
  data,
});

export const LOAD_DATA = "LOAD_DATA";
export const loadData = (request) => ({
  type: LOAD_DATA,
  request,
});

export const SET_FILTER_DATA = "SET_FILTER_DATA";
export const setFilterData = (filterData) => ({
  type: SET_FILTER_DATA,
  filterData,
});

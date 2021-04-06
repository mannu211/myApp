export const customStyles = {
  rows: {
    style: {
      minHeight: "35px",
    },
  },
};
export const payloadColumns = [
  {
    name: "Id",
    selector: "payload_id",
    width: "200px",
    sortable: true,
  },
  {
    name: "Type",
    selector: "payload_type",
    width: "140px",
    sortable: true,
  },
  {
    name: "Company",
    selector: "manufacturer",
    width: "100px",
    sortable: true,
  },
  {
    name: "Origin",
    selector: "nationality",
    width: "120px",
    sortable: true,
  },
  {
    name: "Mass(kg)",
    selector: "payload_mass_kg",
    width: "80px",
    sortable: true,
  },
  {
    name: "Mass(lbs)",
    selector: "payload_mass_lbs",
    width: "100px",
    sortable: true,
  },
  {
    name: "No Rad",
    selector: "norad_id",
    width: "40px",
    sortable: true,
  },
  {
    name: "Customers",
    selector: "customers",
    width: "120px",
    sortable: true,
  },
  {
    name: "Orbit Details",
    selector: "orbit_params",
  },
];

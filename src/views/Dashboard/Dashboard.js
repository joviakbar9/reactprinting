import React from "react";
// react plugin for creating charts
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Karyawan</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["No.", "Nama", "Email", "Bagian", "Tanggal"]}
              tableData={[
                ["1", "Reza Ramadhan", "rezaramadhan@gmail.com", "Kasir", "19/01/2018"],
                ["1", "Reza Ramadhan", "rezaramadhan@gmail.com", "Kasir", "19/01/2018"],
                ["1", "Reza Ramadhan", "rezaramadhan@gmail.com", "Kasir", "19/01/2018"],
                ["1", "Reza Ramadhan", "rezaramadhan@gmail.com", "Kasir", "19/01/2018"],
                ["1", "Reza Ramadhan", "rezaramadhan@gmail.com", "Kasir", "19/01/2018"],
                ["1", "Reza Ramadhan", "rezaramadhan@gmail.com", "Kasir", "19/01/2018"],
                ["1", "Reza Ramadhan", "rezaramadhan@gmail.com", "Kasir", "19/01/2018"],
                ["1", "Reza Ramadhan", "rezaramadhan@gmail.com", "Kasir", "19/01/2018"]
              ]}
            />
          </CardBody>
          <CardFooter>
            <Button color="info">Tambah Data</Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Box,
  Grid,
  IconButton,
  withStyles,
  Typography,
  Button as MuiButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const menuRoutes = [
  {
    route: "Products",
    children: [
      {
        route: "Hair",
        path: ``,
      },
      {
        route: "Sex",
        path: ``,
      },
      {
        route: "Skin",
        path: ``,
      },
    ],
  },
  {
    route: "Company",

    children: [
      {
        route: "About us",
        path: "",
      },
      {
        route: "Blog",
        path: "",
        externalUrl: true,
      },
      {
        route: "Testimonials",
        path: "",
      },
      {
        route: "Contact us",
        path: "",
      },
      {
        route: "Support",
        path: "",
      },
      {
        route: "Doctor Directory",
        path: "",
      },
      {
        route: "Clinician Login",
        path: "",
        externalUrl: true,
      },
    ],
  },
];

const Accordion = withStyles({
  root: {
    border: "none",
    boxShadow: "none",
    width: "100%",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    width: "100%",
    borderBottom: "none",
    paddingLeft: "2.5rem",
    marginBottom: -1,

    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingLeft: "2.5rem",
  },
}))(MuiAccordionDetails);

const BlackButton = withStyles({
  root: {
    color: "black",
  },
})(MuiButton);

export function Button({
  onClose = () => {},
  isOpen = true,
  routes = menuRoutes,
  childOnClick = () => {},
  parentOnClick = () => {},
  drawerWidth = "90vw",
}) {
  return (
    <Drawer anchor={"left"} open={isOpen} onClose={onClose}>
      <Box>
        <Box className="w-full flex justify-end my-6 pr-4" id="headernote">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Grid container direction="row" style={{ width: drawerWidth }}>
          {routes.map(({ route, path, children }, index) =>
            children ? (
              <Accordion key={`route-${index}`}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="bodylarge">{route}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className="flex flex-col w-full">
                    {children.map((child, childIndex) => (
                      <Typography
                        className="py-2 w-full cursor-pointer"
                        key={`route-${childIndex}-child`}
                        onClick={() =>
                          childOnClick(child.path, child.externalUrl)
                        }
                      >
                        {child.route}
                      </Typography>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ) : (
              <GridItem item xs={12} key={`route-${index}`} id="headernote">
                <BlackButton variant="text" onClick={() => parentOnClick(path)}>
                  <Typography variant="bodylarge">{route}</Typography>
                </BlackButton>
              </GridItem>
            )
          )}
        </Grid>

        <Box
          style={{ width: drawerWidth }}
          className="fixed bg-white bottom-0 p-6 flex flex-auto space-x-3 flex-wrap "
        >
          <Typography>Facebook </Typography>
          <Typography>Twitter </Typography>
          <Typography>Linkedin </Typography>
          <Typography>Youtube </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

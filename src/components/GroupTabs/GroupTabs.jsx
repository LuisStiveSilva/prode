import * as React from "react";
import PropTypes from "prop-types";
import { Box, Paper, Typography, Tabs, Tab } from "@mui/material";
import { groupTable } from "../../utils/groupTable";
import GroupTable from "../GroupTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function GroupTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} component={Paper} my={2}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {groupTable.map((group, index) => (
            <Tab key={index} label={group.group} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {groupTable.map((group, index) => (
        <TabPanel key={index} value={value} index={index}>
          <div>
            <GroupTable members={group.members} title={group.group} />
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}

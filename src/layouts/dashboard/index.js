/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MixedChart from "examples/Charts/MixedChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Projects from "layouts/dashboard/components/Projects";

// Data
import ReportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import GradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useEffect, useState } from "react";

import Header from './components/Header'

function Dashboard() {
  const { size } = typography;
  const { chart, items } = ReportsBarChartData();
  const [humidityData, setHumidityData] = useState([]);
  const [temperatureData, settemperatureData] = useState([]);
  
  const fetchData = () => {
      fetch('http://127.0.0.1:8000/humidity/all')
        .then(response => response.json())
        .then(data => setHumidityData(data));

      fetch('http://127.0.0.1:8000/temperature/all')
        .then(response => response.json())
        .then(data => settemperatureData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [CurrentSelectedTab, setCurrentSelectedTab] = useState(0)
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <Header setCurrentSelectedTab={setCurrentSelectedTab} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <MixedChart
                title="Today's report"
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Overview"
                height="26.25rem"
                chart={GradientLineChartData()}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Projects title="Temperature" data={humidityData}/>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Projects title="Humidity" data={temperatureData}/>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;

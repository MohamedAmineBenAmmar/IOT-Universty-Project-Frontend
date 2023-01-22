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
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import SensorConfiguration from "layouts/profile/components/SensorConfiguration";
import EmailConfiguration from "layouts/profile/components/EmailConfiguration";
import ListenerConfiguration from "layouts/profile/components/ListenerConfiguration";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { useState } from "react";

function Overview() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState(0);

  return (
    <DashboardLayout>
      <Header setCurrentSelectedTab={setCurrentSelectedTab} />
      <SoftBox mt={5} mb={2}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Description
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                {currentSelectedTab === 0 && (
                  <p>
                    The sensor confifuration panel will allow to mange your ESP32 configuration, by
                    creating, updating, visualizing and deleting your configuration
                  </p>
                )}

                {currentSelectedTab === 1 && (
                  <p>
                    Listener configuration panel will allow you to configure your data collection
                    system.
                    <br /> When creating a sensor configuration the system will launch a listener
                    that is going to listn for the data gathered from the ESP32. By default the
                    system will not write the data to the database until you configure it. <br />
                    The goal is to have an optimized storage system that easy to manage. <br />
                    Also our listener will notiy you by email if threshold is hit so you can react
                    any urgence case
                  </p>
                )}

                {currentSelectedTab === 2 && <p>Our system requires that you provide an email that is going to be used in case of urgence cases</p>}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </Card>
      </SoftBox>
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <EmailConfiguration />
          </Grid>
          <Grid item xs={12} xl={4}>
            <SensorConfiguration  />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ListenerConfiguration  />
          </Grid>       
        </Grid>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;

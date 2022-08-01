import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  return (
    <div >
      
      <Grid container >
        <Grid item xs={6}>
          <Card >
            <CardContent className="footer">
              <h3>Contact us with below mentioned mobile number</h3>
              <LocalPhoneIcon /> <br />
              <label>Phone NO:- +91 9934354643</label>
              <br/>
            
              

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent className="footer" id="1">
              <h3>Social Media</h3>
              <Grid container>
                <Grid item xs={6}>
                  <TwitterIcon />
                  <br /> <label>www.Twitter.com</label>
                </Grid>
                <Grid item xs={6}>
                 
                  <FacebookIcon/>
                  <label>www.facebook.com</label>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
       
      </Grid>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const PolicySecurity = () => {

    

    //var policy = document.getElementById('policy');

    //var storedPolicy = localStorage.getItem('securityPolicy');

    //document.getElementById('policy').innerHTML = localStorage.getItem('securityPolicy');

    

    // function to write the policy
    function writePolicy(){
        var textBox = document.getElementById('newPolicyText');
        var policy = document.getElementById('policy');
        
        localStorage.setItem('securityPolicy', textBox.value);

        var newPolicy = localStorage.getItem('securityPolicy');

        policy.innerHTML = newPolicy;
    }

    
    window.onload = function showPolicy(){
        
        var policy = document.getElementById('policy');

        var storedPolicy = localStorage.getItem('securityPolicy');

        policy.innerHTML = storedPolicy;
        
    }
    
    

  

  return (
    <body>
      <div id="securityAndPrivacy">
        <div>
          <div>
            <br />
            <Link to="/dashboard" style={{ marginLeft: "20px" }}>
              Dashboard
            </Link>
          </div>
          <center>
            <span style={{ fontSize: "60px", fontFamily: "Impact" }}>
              SECURITY & PRIVACY POLICY
            </span>
            <br />
          </center>
        </div>
        <center>
        <br />
        <br />
        <div id="policy" style={{ fontSize: "25px", fontFamily: "Copperplate" }}>
            
        </div>
        </center>
      </div>
      <center>
        <div id="editDiv" style={{marginTop: '200px'}}>
            Create New Policy:
            <br />
            <br />
            <input type="text" id="newPolicyText" style={{height: '300px', width: '1000px'}}></input>
            <br />
            <br />
            <input type="button" id="saveBtn" value="Save" onClick={() => writePolicy()}></input>
        </div>
      </center>
    </body>
      );
};
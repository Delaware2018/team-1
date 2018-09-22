import React from "react";
import Wrap from "../../hoc/wrap";
// import { Grid, Row, Col } from "";
const analytics = props => {
  return (
    <Wrap>
      <div class="tableauPlaceholder" style={styles.s1}>
        <object
          class="tableauViz" style={styles.s2}>
          <param
            name="host_url"
            value="https%3A%2F%2Fus-east-1.online.tableau.com%2F"
          />{" "}
          <param name="embed_code_version" value="3" />{" "}
          <param name="site_root" value="&#47;t&#47;bpositive" />
          <param name="name" value="BePositiveTest&#47;Dashboard1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param name="showAppBanner" value="false" />
          <param name="filter" value="iframeSizedToWindow=true" />
        </object>
      </div>
    </Wrap>
  );
};


const styles={
    s1:{
        width: '1000px', 
        height: '827px'
    },
    s2:{
        width:"1000",
          height:"827",
          display:'none',
          backgroundColor: 'red'
    }
}
export default analytics;

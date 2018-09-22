import React, { Component } from "react";
import Wrap from "../../hoc/wrap";
import tableau from 'tableau-api';
// import { Grid, Row, Col } from "";

class analytics extends Component {
  //   componentWillMount() {
  //     this.initViz();
  //   }

  // initTableau() {
  //     const vizUrl ="https://us-east-1.online.tableau.com/t/bpositive/views/BePositiveTest/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no";

  //     const options = {
  //         hideTabs: true,
  //         width: "700px",
  //         height: "800px",
  //         onFirstInteractive: () => {
  //             const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
  //             const options = {
  //                 ignoreAliases: false,
  //                 ignoreSelection: false,
  //                 includeAllColumns: false
  //             };
  //             sheet.getUnderlyingDataAsync(options).then((t) => {
  //                 const tableauData = t.getData();
  //                 let data = [];
  //                 const pointCount = tableauData.length;
  //                 for(let a = 0; a < pointCount; a++ ) {
  //                     data = data.concat({
  //                         x: tableauData[a][0].value,
  //                         y: Math.round(tableauData[a][3].value,2)
  //                     })
  //                 };
  //             })
  //         }
  //     };
  // }

  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const vizUrl = "https://us-east-1.online.tableau.com/t/bpositive/views/BePositiveTest/Dashboard1/cody.bisram79@qmail.cuny.edu/BePositive?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no";
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl);
  }

  render() {
    // let viz = new window.tableau.Viz(this.container, vizUrl, options);
    return (
      <Wrap>
        {/* {viz} */}
        <div
          ref={div => {
            this.vizContainer = div;
          }}
        />
        {/* <div class="tableauPlaceholder" style={styles.s1}> */}
        {/* <object
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
        </object> */}
        {/* </div> */}
        <div
          ref={div => {
            this.vizContainer = div;
          }}
        />
      </Wrap>
    );
  }
}

export default analytics;

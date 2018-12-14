import React from "react";
import Router from "next/router";

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) { // ssr
      res.writeHead(302, {
        Location: "/profile",
      });
      res.end();
    } else { // client
      Router.push("/profile");
    }
    return {};
  }
}

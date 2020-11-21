import React, {Component} from "react";
import Header from "./Page/Header";
import Footer from "./Page/Footer.js";
import MenuUtama from "./Page/MenuUtama";
import MenuMakanan from "./Page/MenuMakanan";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";

class App extends Component{

  render(){
    return(
      <div>
        <Header />
        <MenuUtama />
        <MenuMakanan />
        <MenuTentangKami />
        <MenuKontak />

        <Footer text_footer="Tugas 2 ReactJS" />

      </div>
    );

  }
}

export default App;

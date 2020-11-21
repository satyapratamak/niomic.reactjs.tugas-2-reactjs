import React, {Component} from "react";
import LinkMenuUtama from "../ListData/ListMenuUtama";


class MenuUtama extends Component{
  render(){
    return(
      <div>
        <LinkMenuUtama linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
      </div>
    );
  }
}

export default MenuUtama;

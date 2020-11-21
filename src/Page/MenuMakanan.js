import React, {Component} from "react";
import LinkMakanan from "../ListData/ListMakanan";


class MenuMakanan extends Component{
  render(){
    return(
      <div>
        <h3> Daftar Makanan yang Kami sediakan </h3>
        <td>
        <LinkMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
        </td>
        <td>
        <LinkMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
        </td>
        <td>
        <LinkMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
        </td>
        <td>
        <LinkMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
        </td>
        <td>
        <LinkMakanan datalist="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
        </td>
      </div>
    );
  }
}

export default MenuMakanan;

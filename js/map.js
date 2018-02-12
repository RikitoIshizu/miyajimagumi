function mapInit() {
    var centerPosition = new google.maps.LatLng(35.656956, 139.695518);
    var option = {
      zoom : 18,  //縮尺(0に近いほど広範囲を表示)
      center : centerPosition,  //地図の中心座標
      mapTypeId : goggle.maps.MapTypeId.ROADMAP //地図の種類を指定
    };
    //地図本体を描写
    var googleap = new google.maps.Map(document.getElementById("mapField"), option);
    var markerOption = {
      position : centerPosition,  //マーカーを表示させる座標
      map : googlemap,  //マーカーを表示させる地図
      title : "宮島組" //マウスオーバーしたときに表示させる文字列
    };
    //マーカー追加
    var marker = new google.maps.Marker(markerOption);
    //情報ウインドウオプションの指定
    var infoWindowOption = {
      position : centerPosition,  //中心座標
      content : "宮島組"  //ウィンドウに表示する文字列
    };
    //情報ウィンドウ追加
    var infoWindow = new google.maps.infoWindow(infoWindowOption);
    infoWindow.open(googlemap);
}

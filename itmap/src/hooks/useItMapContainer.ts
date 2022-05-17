declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

export class MapSingleton {
  // 클래스의 사용이유? : reRender 방지
  static instance: MapSingleton;

  public map: any;

  public async initMap() {
    const mapContainer = document.getElementById("map");

    let lat = 36.5;
    let long = 127.5;

    const options = {
      center: new kakao.maps.LatLng(lat, long),
      level: 12,
    };

    const map = new kakao.maps.Map(mapContainer, options);

    let markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    let marker = new kakao.maps.Marker({
      map: this.map,
      position: markerPosition,
    });

    const content = "<div>hello</div>";

    const overlay = new kakao.maps.CustomOverlay({
      content,
      map: this.map,
      position: marker.getPosition(),
      yAnchor: 2.1,
    });

    kakao.maps.event.addListener(marker, "click", () => {
      overlay.setMap(this.map);
    });

    marker.setMap(map);
  }

  static getInstance() {
    if (MapSingleton.instance === undefined) {
      MapSingleton.instance = new MapSingleton();
    }

    return MapSingleton.instance;
  }
}

const useItMapContainer = () => {
  return { MapSingleton };
};

export default useItMapContainer;

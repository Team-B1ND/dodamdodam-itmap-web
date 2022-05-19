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

    this.map = new kakao.maps.Map(mapContainer, options);
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

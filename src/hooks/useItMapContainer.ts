import { ItMapData } from "../types/itmap/itmap.type";
import useData from "./useData";

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
    let lng = 127.5;
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 12,
    };
    const DATA = [
      {
        id: "1",
        name: "정우재",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)북한 인민군",
        companyLocation: "미국",
        position: { lat: 36.5, lng: 127 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "2",
        name: "박병관",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)태평양 하와이안",
        companyLocation: "미국",
        position: { lat: 36.7, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "3",
        name: "임동현",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "원티드랩",
        companyLocation: "미국",
        position: { lat: 36.6, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "4",
        name: "김상은",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "FLO",
        companyLocation: "미국",
        position: { lat: 36.5, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "5",
        name: "기준",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)페르소나",
        companyLocation: "미국",
        position: { lat: 36.6, lng: 127 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "6",
        name: "금현호",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "i'm big",
        companyName: "Google",
        companyLocation: "미국",
        position: { lat: 35.7, lng: 126.4 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "7",
        name: "정우재",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)북한 인민군",
        companyLocation: "미국",
        position: { lat: 35.8, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "8",
        name: "박병관",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)태평양 하와이안",
        companyLocation: "미국",
        position: { lat: 35.7, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "9",
        name: "임동현",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "원티드랩",
        companyLocation: "미국",
        position: { lat: 35.6, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "10",
        name: "김상은",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "FLO",
        companyLocation: "미국",
        position: { lat: 35.5, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "11",
        name: "기준",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)페르소나",
        companyLocation: "미국",
        position: { lat: 35.6, lng: 127 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "12",
        name: "금현호",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "i'm big",
        companyName: "Google",
        companyLocation: "미국",
        position: { lat: 35.7, lng: 126.4 },
        devPosition: "FE",
        isOpen: false,
      },
    ];
    const map = new kakao.maps.Map(mapContainer, options);
    let marker;
    let zoomControl = new kakao.maps.ZoomControl();
    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.RIGHT);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    for (let i = 0; i < DATA.length; i++) {
      const markerPosition = new kakao.maps.LatLng(
        DATA[i].position.lat,
        DATA[i].position.lng
      );

      marker = new kakao.maps.Marker({
        position: markerPosition,
        title: DATA[i].companyName,
      });
      marker.setMap(map);
      const content = `<h1>Hello</h1>`;

      var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
      });
    }

    console.log(marker);

    console.log(overlay);
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

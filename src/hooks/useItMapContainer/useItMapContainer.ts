// import useData from "./useData";
// import itMapRepository from "repository/itmap.repository";

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
  public Data: any;
  public markerTemp = [] as any;

  public async initMap() {
    const mapContainer = document.getElementById("map");
    let lat = 36.5;
    let lng = 127.5;
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 12,
    };

    const imageSrc = "",
      imageSize = new kakao.maps.Size(64, 69),
      imageOption = { offset: new kakao.maps.Point(27, 69) };

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

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
        companyLocation: "경기도",
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
        companyLocation: "대구",
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
        companyLocation: "전라남도 광주",
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
        companyLocation: "서울",
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
        companyLocation: "울산",
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
        companyLocation: "창원",
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
        companyLocation: "경기도 광주",
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
        companyLocation: "제주도",
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
        companyLocation: "포항",
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
        companyLocation: "인천",
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
        companyLocation: "파주",
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
        companyLocation: "부산",
        position: { lat: 35.7, lng: 126.4 },
        devPosition: "FE",
        isOpen: false,
      },
    ];

    let geocoder = new kakao.maps.services.Geocoder();

    this.map = new kakao.maps.Map(mapContainer, options);
    let zoomControl = new kakao.maps.ZoomControl();
    let mapTypeControl = new kakao.maps.MapTypeControl();
    this.map.addControl(mapTypeControl, kakao.maps.ControlPosition.RIGHT);
    this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // const getItMapUserData = async () => {
    //   try {
    //     const { data } = await itMapRepository.itMap();
    //     this.Data = data;
    //   } catch (error) {
    //     // window.alert(
    //     //   "데이터를 불러오는데 실패하였습니다. 다시 시도하여 주십시요."
    //     // );
    //     this.Data = 1;
    //   }
    // };

    DATA.map((item) => {
      geocoder.addressSearch(
        item.companyLocation,
        (result: number[] | any, status: number) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            let marker = new kakao.maps.Marker({
              map: this.map,
              position: coords,
              // image: markerImage,
            });

            this.markerTemp.push(marker);

            const content = `<div style="
            border-radius: 20px;
            background-color: #0068c3;
            padding:12px;
            color: #fff;
            
            
            
            " 
            class="markerOverlayContent">
              ${item.companyName}
              <div style="
              position: absolute;
              width: 15px;
              height: 15px;
            
              background-color: #0068c3;
              z-index: -1;
              left: 50%;
              transform: translate(-50%) rotate(45deg);
              bottom: -5px;
              "></div>
              </div>
            `;

            let overlay = new kakao.maps.CustomOverlay({
              content: content,
              map: this.map,
              position: marker.getPosition(),
              yAnchor: 2.1,
            });

            kakao.maps.event.addListener(marker, "click", () => {
              overlay.setMap(this.map);
              marker.getPosition().setCenter();
            });

            kakao.maps.event.addListener(this.map, "zoom_changed", () => {
              let level = this.map.getLevel();
              if (level < 6) {
                overlay.setMap(this.map);
              } else {
                overlay.setMap(null);
              }
            });

            overlay.setMap(null);
          }
        }
      );
    });
    // const clusterer = new kakao.maps.MarkerClusterer({
    //   map: this.map,
    //   averageCenter: true,
    //   minLevel: 10,
    //   disableClickZoom: true,
    //   calculator: [1, 3, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    // });
    // console.log(this.markerTemp);

    // clusterer.addMarkers(this.markerTemp);
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

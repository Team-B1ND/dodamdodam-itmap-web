import { useMap } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { nav } from "store/nav";
import useCoord from "./companyCoords/useCoord";

const usePanTo = (companyLocation: string) => {
  const map = useMap();
  const dispatch = useDispatch();
  const [lat, lng] = useCoord(map, companyLocation);

  /** 클릭을 하면 화면이 마커로 부드럽게 이동해요! */
  const movePanTo = () => {
    if (lat && lng) {
      map.setLevel(4);
      map.panTo(new kakao.maps.LatLng(lat, lng));
      dispatch(nav({ isNavToggle: true, isSubNavToggle: true }));
    }
  };
  return { movePanTo };
};

export default usePanTo;

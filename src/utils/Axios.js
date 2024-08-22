import axios from "axios";

// 사용방법
// request : 'GET', 'POST', 'PUT', 'DELETE'
// url : (ex. auth/kakao-login) REACT_APP_WEB_URL은 생략
// payload :
// ex. {
//    name: 'jinkyeong',
//    code: 'abcde',
//    ...
// }
function Axios(request, url, payload = "") {
  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });
  return axiosInstance.request({
    method: request,
    url: `http://localhost:8080/${url}`,
    data: JSON.stringify(payload),
  });
}
export default { Axios };

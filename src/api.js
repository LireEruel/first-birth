import axios from "axios";
//axios.defaults.withCredentials = true;

const axiosAPI = axios.create({
    baseURL : "https://commentsrv.sytes.net:8000/" , // it's not recommended to have this info here.
    headers : {
        "Access-Control-Allow-Headers" : "https://baby-shower-b2c89.web.app/"
    }
  });

  const  dummy = {datas: [
    { name: "서희", content: "리현이 귀여워어!!" },
    { name: "선호", content: "리현이 ㄱㅇㅇ" },
  ]}

  const apiRequest = (method, url, param) => {
    const headers = {
        "Access-Control-Allow-Headers" : "https://baby-shower-b2c89.web.app/"
    };
    //using the axios instance to perform the request that received from each http method
    return axiosAPI({
        method,
        url,
        data: param,
        headers
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        
        return Promise.resolve(dummy);
      });
};

export const getComments = async() => {
    try {
        const res = await apiRequest("get", "comments/");
        return Promise.resolve(res.datas);
    }catch (e){
        return Promise.resolve(dummy);
        console.log(e);
    }
}

export const postComment = async(param) => {
    try {
        const res = await apiRequest("post", "comments/", param);
        return Promise.resolve(res.datas);
    }catch (e){
        return Promise.resolve(dummy);
        console.log(e);
    }
}
export default getComments;
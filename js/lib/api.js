import querystring from "querystring";
import EventEmitter from "EventEmitter";
import { getAuthToken } from "./storage";

const BASE_URL = 'http://192.168.1.5:3000';

let events = new EventEmitter();

function makeMethod(method, hasBody = false, insecure = false) {
  return function(
    urlTemplate,
    params,
    transformResponse = (o) => o
  ) {
    if (typeof params === "function") {
      transformResponse = params;
      params = {};
    }
    return async function(
      data,
      options = {}
    ) {
      let url = urlTemplate;
      data = { ...data };

      for (let tag of (url.match(/:\w+/g) || [])) {
        let value = data[tag.slice(1)];
        if (value === undefined) {
          console.warn("Warning: calling", method, "without", tag);
          value = "";
        }
        url = url.replace(tag, encodeURIComponent(data[tag.slice(1)]))
        delete data[tag.slice(1)];
      }

      let headers = {
        "Accept": "application/json",
      };

      if(!insecure) {
        try {
          let token = await getAuthToken();
          headers["Authorization"] = `Token token=${token}`;
        } catch (errors) { }
      }

      let body;
      if (hasBody) {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(data);
      } else {
        let qs = querystring.stringify(data);
        if (qs) {
          url += (url.indexOf("?") >= 0 ? "&" : "?") + qs;
        }
      }

      return await new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        console.log(method, BASE_URL + url);
        xhr.open(method, BASE_URL + url);
        for (let headerName in headers) {
          xhr.setRequestHeader(headerName, headers[headerName])
        }
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            let body = xhr.responseText;
            try { body = JSON.parse(body); } catch (e) {}
            if (xhr.status >= 200 && xhr.status <= 299) {
              resolve(transformResponse(body, { data }));
            } else {
              reject({
                status: xhr.status,
                data: body
              });
            }
            events.emit(xhr.status, url);
          }
        }
        xhr.send(body);

        if (options.cancelled) {
          options.cancelled.then(() => xhr.abort());
        }
      })

    }
  }
}

export const GET = makeMethod("GET");
export const DELETE = makeMethod("DELETE");
export const POST = makeMethod("POST", true);
export const INSECURE_POST = makeMethod("POST", true, true);
export const PUT = makeMethod("PUT", true);

export default events;

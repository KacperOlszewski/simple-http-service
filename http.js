// window.fetch in the future - IE not supporting yet

export class Http {
  GET(url) {
    return this._request('get', url)
  }

  _request(method, url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.onload = () => resolve(request.response);
      request.onerror = (error) => reject(error);
      request.responseType = 'json';
      request.open(method, url, true);
      request.send();
    })
  }
}
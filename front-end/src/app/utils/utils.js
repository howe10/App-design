// front-end/src/app/utils/utils.js
export function parseUrl() {
    const url = window.location;
    const query = url.href.split('?')[1] || '';
    const delimiter = '&'; //  var result = {};
    let result ={};
    var parts = query.split(delimiter); 
    //console.log(parts);
    // TODO Step 3.3: Use Array.map() & Array.reduce()
    //for (var i in parts) {
    // var item = parts[i];
    //var kv = item.split('=');
    // result[kv[0]] = kv[1];
    //  }

    // var result = parts.map(function (item) {
    //   return item.split("=");
    // }).reduce(function (before, currenrt) {
    //   before[currenrt[0]] = currenrt[1];
    //   return before;
    // }, {});

  console.log(parts.map(item =>item.split("=")).reduce((prev,next)=>{prev[next[0]]=next[1] 
      return prev;} ,result));
    
    // ... parseUrl implementation
    return result;
  }

  
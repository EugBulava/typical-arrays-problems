
exports.min = function min (array) {
  if(!array || array.length == 0){
    return 0;
  }else{
    var min = array[0];
    for(var i = 0; i<=array.length-1; i++){
      if(array[i]<min){
        min = array[i];
      }
    }
    return min;
  }
}

exports.max = function max (array) {
  if(!array || array.length == 0){
    return 0;
  }else{
    var max = array[0];
  for(var i = 0; i<=array.length-1; i++){
    if(array[i]>max){
      max = array[i];
    }
  }
  return max;
  }
}

exports.avg = function avg (array) {
  if(!array || array.length == 0){
    return 0;
  }else{
    var middle = 0; 
    for(var i = 0; i<=array.length-1; i++){
      middle += array[i];
    }
  return middle/array.length;
  }
}


function findScreenHeight(width, ratio) {
  let arr = ratio.split(':');
  
  return `${width}x${(width*parseInt(arr[1]))/parseInt(arr[0])}`;
}

findScreenHeight(1024,"4:3")
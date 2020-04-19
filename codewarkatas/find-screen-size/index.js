function findScreenHeight(width, ratio) {
  let arr = ratio.split(':');
  return `${width}x${(width*arr[1])/arr[0]}`;
}

findScreenHeight(1024,"4:3")
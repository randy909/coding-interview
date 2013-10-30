// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees Can you do this in place?

// Here is what I used to work out how to rotate the numbers.
// It was too hard to just look at and calculate so writing it out
// to see how each index needed to change over time worked.
// swap = [0,0]
// [0][0] = [3,0];
// [3][0] = [3,3];
// [3][3] = [0,3];
// [0][3] = swap;

// swap = [0,1];
// [0,1] = [2,0];
// [2,0] = [3,2];
// [3,2] = [1,3];
// [1,3] = swap;

// swap = [0,2];
// [0,2] = [1,0];
// [1,0] = [3,1];
// [3,1] = [2,3];
// [2,3] = swap;

function withCopy(image) {
  var out = [];
  for (var ii = 0; ii < image.length; ++ii) {
    out.push([]);
  }
  for (var outer = 0; outer < image.length; ++outer) {
    for (var inner = 0; inner < image.length; ++inner) {
      out[inner][image.length - outer - 1] = image[outer][inner];
    }
  }
  return out;
}

// TODO: the book does this algo just a little bit differently.
// Maybe try it out their way next time.
function inPlace(image) {
  for (var outer = 0; outer < Math.ceil(image.length / 2); ++outer) {
    var topLeft = outer;
    var bottomRight = image.length - outer - 1;
    for (var inner = 0; inner < bottomRight - topLeft; ++inner) {
      var swap = image[topLeft][topLeft + inner];
      image[topLeft][topLeft + inner] = image[bottomRight - inner][topLeft];
      image[bottomRight - inner][topLeft] = image[bottomRight][bottomRight - inner];
      image[bottomRight][bottomRight - inner] = image[topLeft + inner][bottomRight];
      image[topLeft + inner][bottomRight] = swap;
      // console.log('\n');
      // image.forEach(function (item) {
      //   console.log(item);
      // });
    }
  }
  return image;
}

module.exports = function (image) {
  // return withCopy(image);
  return inPlace(image);
}

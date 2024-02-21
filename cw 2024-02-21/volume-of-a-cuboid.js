//DESCRIPTION
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }
  
  //p: length, width, height. Are they integers - volume of cube = length * width * height
  //r: the volume of the cuboid
  //ex: (1,2,2) should equal 4
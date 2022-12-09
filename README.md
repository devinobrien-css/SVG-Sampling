# SVG-Sampling


## 1. Introduction to SVGs

#### 1.1 Overall

- Scalable and clear res on any display
- Small filesize, enhanced performance
- Easy to animate (navigable DOM)
- Optimizable/minimizable

#### 1.2 Positioning & Transitioning

Utilizing SVGs to position/transition

#### 1.3 Overview of SVG DOM

Break down SVG to graph paper viewed through viewport

General metadata of tags
* elements like rect carry x, y, width, height data
* width, height can be specified as viewBox="0"
* elements like circle take center x, y and radius
* elements like polygon take a list of x, y points
    * won't close unless z specified at end (signifies pentultimate)
* elements like polyline take a list of x, y points

#### 1.4 Preserve aspect ratio 

how the ojbect scales (similar to toggling bg-cover)

* can be positioned on y or x
* can be squeezed with (none)
* can be split

#### 1.5 Paths

Drawing unique shapes in a g tag

* specify 'd' for drawing d="M# #"
* 'M' stands for move to
* 'L' stands for line to
* 'H' stands for horizontal line
* 'V' stands for vertical line
* 'Z' stands for path end 
* uppercase is absolute, lowercase is relative
    * relative is better for scaling

#### 1.6 Groups

Group 'g' tags are similar to divs

* can apply specifications/classes directly to nested children
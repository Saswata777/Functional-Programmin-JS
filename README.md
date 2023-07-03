# Functional-Programmin-JS



1. The code begins by defining an array called `radius` with four values: [3, 4, 5, 6].

2. Next, there are three functions defined: `CalculateArea`, `CalculateCircumfarence`, and `Calculatediameter`. These functions calculate the area, circumference, and diameter of a circle, respectively, for each value in the `radius` array. They use a loop to iterate over the `radius` array and perform the calculations.

3. The code then logs the results of calling each of these functions to the console using `console.log`.

4. The code continues with an optimized version of the previous code. Instead of using separate functions for area, circumference, and diameter, it defines three functions: `area`, `Circumfarence`, and `Diameter`, each of which calculates the corresponding value for a single radius.

5. After that, a new function called `Calculate` is defined. This function takes an array of radii and a logic function as parameters. It iterates over the array of radii and applies the logic function to each radius. The results are stored in an array and returned.

6. The optimized code then uses the `Calculate` function to calculate and log the areas, circumferences, and diameters of the circles using the new functions `area`, `Circumfarence`, and `Diameter`.

7. Next, the code introduces the concept of the `map` function. It explains that the `Calculate` function is similar to the `map` function because they both apply a given logic function to each element of an array. Instead of using the `Calculate` function, the code shows how to use the `map` function directly on the `radius` array, passing in the logic functions `area`, `Circumfarence`, and `Diameter` as arguments.

8. The code then shows how to create a custom `Calculate` function using `Array.prototype`. It adds a new method called `Calculate` to the `Array` prototype, which behaves similarly to the `map` function. This allows you to call `Calculate` directly on the `radius` array, passing in the logic functions as arguments.

9. Finally, the code refactors the custom `Calculate` function to use the `this` keyword instead of the `radius` parameter. This modification makes the `Calculate` function more flexible and reusable with any array, not just the `radius` array.


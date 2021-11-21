var _; //globals

describe("About Applying What We Have Learnt", function () {
  var products;

  beforeEach(function () {
    products = [
      {
        name: "Sonoma",
        ingredients: ["artichoke", "sundried tomatoes", "mushrooms"],
        containsNuts: false
      },
      {
        name: "Pizza Primavera",
        ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"],
        containsNuts: false
      },
      {
        name: "South Of The Border",
        ingredients: ["black beans", "jalapenos", "mushrooms"],
        containsNuts: false
      },
      {
        name: "Blue Moon",
        ingredients: ["blue cheese", "garlic", "walnuts"],
        containsNuts: true
      },
      {
        name: "Taste Of Athens",
        ingredients: ["spinach", "kalamata olives", "sesame seeds"],
        containsNuts: true
      }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,
      j,
      hasMushrooms,
      productsICanEat = [];

    for (i = 0; i < products.length; i += 1) {
      if (products[i].containsNuts === false) {
        hasMushrooms = false;
        for (j = 0; j < products[i].ingredients.length; j += 1) {
          if (products[i].ingredients[j] === "mushrooms") {
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) productsICanEat.push(products[i]);
      }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
    var productsICanEat = [];

    productsICanEat = products.filter(function callback1(elementF) {
      return (
        elementF.containsNuts === false &&
        elementF.ingredients.every(function callback2(elementS) {
          return elementS !== "mushrooms";
        })
      );
    });

    /* solve using filter() & all() / any() */

    expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;
    for (var i = 1; i < 1000; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    // var sum = FILL_ME_IN; /* try chaining range() and reduce() */
    let FILL_ME_IN = [...Array(1000).keys()]
      .filter(function divOn3Or5(el) {
        return el % 3 === 0 || el % 5 === 0;
      })
      .reduce(function callbc(a, b) {
        return a + b;
      });
    expect(233168).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
  it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    let i, j;
    for (i = 0; i < products.length; i += 1) {
      for (j = 0; j < products[i].ingredients.length; j += 1) {
        ingredientCount[products[i].ingredients[j]] =
          (ingredientCount[products[i].ingredients[j]] || 0) + 1;
      }
    }

    expect(ingredientCount["mushrooms"]).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    _(products).chain()
    .map(function (el) { return el.ingredients })
    .flatten()
    .reduce(function (accum, ingredient) {
    ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
    })
    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount["mushrooms"]).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  it("should find the largest prime factor of a composite number", function () {
    function largestPrimeFactor(val, divisor = 2) {
      let square = (val) => Math.pow(val, 2);

      while (val % divisor !== 0 && square(divisor) <= val) {
        divisor++;
      }

      return square(divisor) <= val
        ? largestPrimeFactor(val / divisor, divisor)
        : val;
    }
    expect(largestPrimeFactor(55)).toBe(11);
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    let product;
    function pal() {
      for (let i = 999; i > 99; i--) {
        for (let j = 999; j > 99; j--) {
          product = String(i * j);
          let checkPal = Number(product.split("").reverse().join("")) === i * j;
          if (checkPal) {
            return product;
          }
        }
      }
    }
    expect(pal()).toBe("580085");
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    function minDev() {
      let consFrom0To20 = [...Array(21).keys()].slice(2);
      let dev;
      let val = 20;
      for (let i = 0; i < consFrom0To20.length - 1; i++) {
        let check = consFrom0To20.every(function (el) {
          dev = el;
          return val % el === 0;
        });
        if (check) {
          return val;
        } else {
          val = val * dev;
        }
      }
    }
    expect(minDev()).toBe(1396755360);
  });
  it("should find the difference between the sum of the squares and the square of the sums", function () {
    function squardiff(a, b) {
      let res = a ** 2 + b ** 2 - (a ** 2 + 2 * a * b + b ** 2);
      return res;
    }
    expect(squardiff(2, 3)).toBe(-12);
  });

  it("should find the 10001st prime", function () {});
});
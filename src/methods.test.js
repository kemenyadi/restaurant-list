import { Capitalize, processJSON } from "./methods";
import data from "./constants/Sample - Restaurant list - technical assignment (PHP Javascript).json";

test("Capitalize function", () => {
  expect(Capitalize("word")).toStrictEqual("Word");
  expect(Capitalize("Word")).toStrictEqual("Word");
});

test("Searching, Sorting by ascending & descending criteria, Sorting by OpeningState, Sorting by Liked, Calculation of TopRestaurants", () => {
  const searchField = "",
    searchField1 = "sushi",
    sortField = "distance", //should sort ascending
    sortField1 = "ratingAverage", //should sort descending
    likedRestaurants = [
      "Tanoshii Sushi",
      "Lunchpakketdienst",
      "Roti Shop",
      "Mama Mia",
      "Yvonne's Vispaleis",
      "Daily Sushi",
      "Zenzai Sushi"
    ],
    expectation = [
      {
        liked: 1,
        name: "Tanoshii Sushi",
        sortingValues: {
          averageProductPrice: 1536,
          bestMatch: 0,
          deliveryCosts: 200,
          distance: 1190,
          minCost: 1000,
          newest: 96,
          popularity: 17,
          ratingAverage: 4.5,
          topRestaurants: 20234.5
        },
        status: "open"
      },
      {
        liked: 1,
        name: "Roti Shop",
        sortingValues: {
          averageProductPrice: 915,
          bestMatch: 4,
          deliveryCosts: 0,
          distance: 2308,
          minCost: 2000,
          newest: 247,
          popularity: 81,
          ratingAverage: 4.5,
          topRestaurants: 186952.5
        },
        status: "open"
      },
      {
        liked: 1,
        name: "Lunchpakketdienst",
        sortingValues: {
          averageProductPrice: 4465,
          bestMatch: 306,
          deliveryCosts: 500,
          distance: 14201,
          minCost: 5000,
          newest: 259,
          popularity: 0,
          ratingAverage: 3.5,
          topRestaurants: 3.5
        },
        status: "open"
      },
      {
        liked: 1,
        name: "Mama Mia",
        sortingValues: {
          averageProductPrice: 912,
          bestMatch: 7,
          deliveryCosts: 0,
          distance: 1396,
          minCost: 1000,
          newest: 250,
          popularity: 6,
          ratingAverage: 4,
          topRestaurants: 8380
        },
        status: "order ahead"
      },
      {
        liked: 1,
        name: "Yvonne's Vispaleis",
        sortingValues: {
          averageProductPrice: 2557,
          bestMatch: 15,
          deliveryCosts: 150,
          distance: 2909,
          minCost: 1750,
          newest: 150,
          popularity: 3,
          ratingAverage: 5,
          topRestaurants: 8732
        },
        status: "order ahead"
      },
      {
        liked: 1,
        name: "Zenzai Sushi",
        sortingValues: {
          averageProductPrice: 1579,
          bestMatch: 13,
          deliveryCosts: 0,
          distance: 2911,
          minCost: 2000,
          newest: 155,
          popularity: 36,
          ratingAverage: 4,
          topRestaurants: 104800
        },
        status: "closed"
      },
      {
        liked: 1,
        name: "Daily Sushi",
        sortingValues: {
          averageProductPrice: 1327,
          bestMatch: 9,
          deliveryCosts: 200,
          distance: 1911,
          minCost: 1000,
          newest: 221,
          popularity: 6,
          ratingAverage: 4,
          topRestaurants: 11470
        },
        status: "closed"
      },
      {
        liked: 0,
        name: "Indian Kitchen",
        sortingValues: {
          averageProductPrice: 1189,
          bestMatch: 11,
          deliveryCosts: 150,
          distance: 2308,
          minCost: 1300,
          newest: 272,
          popularity: 5,
          ratingAverage: 4.5,
          topRestaurants: 11544.5
        },
        status: "open"
      },
      {
        liked: 0,
        name: "Fes Patisserie",
        sortingValues: {
          averageProductPrice: 1214,
          bestMatch: 14,
          deliveryCosts: 150,
          distance: 2302,
          minCost: 1250,
          newest: 77,
          popularity: 3,
          ratingAverage: 4,
          topRestaurants: 6910
        },
        status: "order ahead"
      },
      {
        liked: 0,
        name: "Aarti 2",
        sortingValues: {
          averageProductPrice: 922,
          bestMatch: 5,
          deliveryCosts: 250,
          distance: 1605,
          minCost: 500,
          newest: 153,
          popularity: 44,
          ratingAverage: 4.5,
          topRestaurants: 70624.5
        },
        status: "open"
      },
      {
        liked: 0,
        name: "Royal Thai",
        sortingValues: {
          averageProductPrice: 1492,
          bestMatch: 2,
          deliveryCosts: 150,
          distance: 2639,
          minCost: 2500,
          newest: 133,
          popularity: 44,
          ratingAverage: 4.5,
          topRestaurants: 116120.5
        },
        status: "order ahead"
      },
      {
        liked: 0,
        name: "Feelfood",
        sortingValues: {
          averageProductPrice: 902,
          bestMatch: 8,
          deliveryCosts: 150,
          distance: 2732,
          minCost: 1500,
          newest: 163,
          popularity: 31,
          ratingAverage: 4.5,
          topRestaurants: 84696.5
        },
        status: "order ahead"
      },
      {
        liked: 0,
        name: "Sushi One",
        sortingValues: {
          averageProductPrice: 1285,
          bestMatch: 3,
          deliveryCosts: 0,
          distance: 1618,
          minCost: 1200,
          newest: 238,
          popularity: 23,
          ratingAverage: 4,
          topRestaurants: 37218
        },
        status: "open"
      },
      {
        liked: 0,
        name: "Lale Restaurant & Snackbar",
        sortingValues: {
          averageProductPrice: 838,
          bestMatch: 305,
          deliveryCosts: 0,
          distance: 2880,
          minCost: 0,
          newest: 73,
          popularity: 0,
          ratingAverage: 0,
          topRestaurants: 0
        },
        status: "order ahead"
      },
      {
        liked: 0,
        name: "CIRO 1939",
        sortingValues: {
          averageProductPrice: 1762,
          bestMatch: 12,
          deliveryCosts: 99,
          distance: 3957,
          minCost: 1300,
          newest: 231,
          popularity: 79,
          ratingAverage: 4.5,
          topRestaurants: 312607.5
        },
        status: "open"
      },
      {
        liked: 0,
        name: "Tandoori Express",
        sortingValues: {
          averageProductPrice: 1146,
          bestMatch: 1,
          deliveryCosts: 150,
          distance: 2308,
          minCost: 1300,
          newest: 266,
          popularity: 123,
          ratingAverage: 4.5,
          topRestaurants: 283888.5
        },
        status: "closed"
      },
      {
        liked: 0,
        name: "De Amsterdamsche Tram",
        sortingValues: {
          averageProductPrice: 892,
          bestMatch: 304,
          deliveryCosts: 0,
          distance: 2792,
          minCost: 0,
          newest: 131,
          popularity: 0,
          ratingAverage: 0,
          topRestaurants: 0
        },
        status: "open"
      },
      {
        liked: 0,
        name: "Pamukkale",
        sortingValues: {
          averageProductPrice: 968,
          bestMatch: 10,
          deliveryCosts: 0,
          distance: 2353,
          minCost: 2000,
          newest: 201,
          popularity: 25,
          ratingAverage: 4,
          topRestaurants: 58829
        },
        status: "closed"
      },
      {
        liked: 0,
        name: "Pizza Heart",
        sortingValues: {
          averageProductPrice: 1103,
          bestMatch: 6,
          deliveryCosts: 150,
          distance: 2453,
          minCost: 1500,
          newest: 118,
          popularity: 9,
          ratingAverage: 4,
          topRestaurants: 22081
        },
        status: "order ahead"
      }
    ],
    expectation1 = [
      {
        liked: 1,
        name: "Tanoshii Sushi",
        sortingValues: {
          averageProductPrice: 1536,
          bestMatch: 0,
          deliveryCosts: 200,
          distance: 1190,
          minCost: 1000,
          newest: 96,
          popularity: 17,
          ratingAverage: 4.5,
          topRestaurants: 20234.5
        },
        status: "open"
      },
      {
        liked: 1,
        name: "Zenzai Sushi",
        sortingValues: {
          averageProductPrice: 1579,
          bestMatch: 13,
          deliveryCosts: 0,
          distance: 2911,
          minCost: 2000,
          newest: 155,
          popularity: 36,
          ratingAverage: 4,
          topRestaurants: 104800
        },
        status: "closed"
      },
      {
        liked: 1,
        name: "Daily Sushi",
        sortingValues: {
          averageProductPrice: 1327,
          bestMatch: 9,
          deliveryCosts: 200,
          distance: 1911,
          minCost: 1000,
          newest: 221,
          popularity: 6,
          ratingAverage: 4,
          topRestaurants: 11470
        },
        status: "closed"
      },
      {
        liked: 0,
        name: "Sushi One",
        sortingValues: {
          averageProductPrice: 1285,
          bestMatch: 3,
          deliveryCosts: 0,
          distance: 1618,
          minCost: 1200,
          newest: 238,
          popularity: 23,
          ratingAverage: 4,
          topRestaurants: 37218
        },
        status: "open"
      }
    ];
  expect(
    processJSON(data, searchField, sortField, likedRestaurants)
  ).toStrictEqual(expectation);
  expect(
    processJSON(data, searchField1, sortField1, likedRestaurants)
  ).toStrictEqual(expectation1);
});

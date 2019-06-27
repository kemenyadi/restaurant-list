export function Capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function processJSON(data, searchField, sortField, likedRestaurants) {
  let matches = [],
    //define case insensitive query
    searchMatchREGEX = new RegExp(searchField, "i");

  data.restaurants.forEach((restaurant, key) => {
    //Calculate Top Restaurants according to formula
    let sValues = restaurant.sortingValues;
    sValues.topRestaurants =
      sValues.distance * sValues.popularity + sValues.ratingAverage;
    likedRestaurants.includes(restaurant.name)
      ? (restaurant.liked = 1)
      : (restaurant.liked = 0);
    //Filter for search query
    if (restaurant.name.search(searchMatchREGEX) === -1) {
      //no match
    } else {
      //on match push
      matches.push(restaurant);
    }
  });

  //Sort according to Sorting selection
  if (sortField) {
    let temp = matches.slice(), //non mutating copy
      sortDescending = ["ratingAverage", "popularity", "topRestaurants"];
    temp.sort(
      (a, b) => a.sortingValues[sortField] - b.sortingValues[sortField]
    );
    //these sorting values need to be sorted descending
    if (sortDescending.includes(sortField)) {
      temp.reverse();
    }

    matches = temp;
  }

  //Sort according to Openings state
  //ordering map for efficient lookup of sortIndex
  let ordering = {},
    sortOrder = ["open", "order ahead", "closed"];
  for (let i = 0; i < sortOrder.length; i++) ordering[sortOrder[i]] = i;

  matches.sort((a, b) => ordering[a.status] - ordering[b.status]);

  //Sort according to Favourites
  if (likedRestaurants) {
    matches.sort((a, b) => {
      return b.liked - a.liked;
    });
  }
  return matches;
}

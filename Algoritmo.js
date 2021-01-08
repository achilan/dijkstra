//algoritma dijkstra
function dijkstra(nodes, search, destiny) {
  var fin = Number.POSITIVE_INFINITY;
  var distance = {};
  var doing = {};
  var prosL = {};
  for (var i in nodes) {
    
    distance[i] = fin;
    prosL[i] = 0;
    doing[i] = false;
  }
  distance[search] = 0;

  for (i in nodes) {
    var minDist = fin,
      closest;
    for (var j in nodes) {
      if (!doing[j]) {
        if (distance[j] <= minDist) {
          minDist = distance[j];
          closest = j;
        }
      }
    }
    doing[closest] = true;
    if (closest === destiny) {
      break;
    }

    var neigbord = nodeFrom(closest);
    for (var nb in neigbord) {
      var w = neigbord[nb];
      if (!doing[nb]) {
        if (distance[closest] + w < distance[nb]) {
          distance[nb] = distance[closest] + w;
          prosL[nb] = closest;
        }
      }
    }
  }
  i = destiny;
  if (distance[i] < fin) {
    var thePath = i;
    var place = i;
    while (place !== search) {
      place = prosL[place];
      if (place !== search) {
        thePath = place + "->" + thePath;
      }
    }
    thePath = place + "->" + thePath;
    //console.log("Distance from " + search + "-->" + destiny + " : "+distance[i]);
    //return distance, search and destiny
    return [distance[i], search, destiny];
  } else {
    console.log("no found");
  }
}

var roads = {};
function makeNode(from, to, length) {
  function addRoad(from, to) {
    if (!(from in roads)) {
      roads[from] = {};
    }
    roads[from][to] = length;
  }
  addRoad(from, to);
  addRoad(to, from);
}

function makeNodes(start) {
  for (var i = 1; i < arguments.length; i += 2) {
    makeNode(start, arguments[i], arguments[i + 1]);
  }
}

function nodeFrom(place) {
  var found = roads[place];
  if (found === undefined) {
    console.log("No place '" + place + "' found.");
  } else {
    return found;
  }
}

//use

var a = 10,
  b = 15,
  c = 13,
  d = 5;
//u can make any nodes
makeNodes("USERA", "USERB", a, "USERC", b);
makeNodes("USERB", "USERRC", c, "D",d);
var hasil = dijkstra(roads, "USERB", "USERC");
console.log(hasil);

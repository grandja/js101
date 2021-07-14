function lightsOn(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum++) {
    lights = toggleLights(lights, switchNum);
  }

  let result = [];
  for (let i = 0; i < count; i++) {
    if (lights[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

function initializeLights(count) {
  let lights = [];
  
  for (let i = 0; i < count; i++) {
    lights.push(false);
  }

  return lights;
}

function toggleLights(lights, round) {
  return lights.map((light, index) => {
    return (index + 1) % round === 0 ? !light : light;
  });
}

// Tests
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
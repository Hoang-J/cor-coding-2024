/* 
1). Get the current temperature(F), UV index, wind speed, rain chance, and wind direction of Newark, NJ 
and store it within an object. Print the object to the terminal

2). Retrieve the temperature of Newark 4 hours from now and add it to the previously created object

3). Do the same for the following cities:
Los Angeles
Miami
Charlotte
Houston
Seattle

4). Add each city to an array

5). Print out the city that will be the warmest in 4 hours */

// Newark, NJ 

let weatherNJ = 
{
    "data": {
        "time": "2024-03-08T16:19:00Z",
        "values": {
            "cloudBase": 0.77,
            "cloudCeiling": 0.77,
            "cloudCover": 100,
            "dewPoint": 35.26,
            "freezingRainIntensity": 0,
            "humidity": 49,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 30.25,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 47.86,
            "temperatureApparent": 47.86,
            "uvHealthConcern": 1,
            "uvIndex": 3,
            "visibility": 9.94,
            "weatherCode": 1001,
            'windDirection': 37.19,
            "windGust": 6.29,
            "windSpeed": 2.24
        }
    },
    location: {
        "lat": 40.73565673828125,
        "lon": -74.17236328125,
        "name": "Newark, Essex County, New Jersey, United States",
        "type": "administrative"
    }
}


let timelineNJ = 
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-08T21:00:00Z",
                "startTime": "2024-03-08T15:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T15:00:00Z",
                        "values": {
                            "temperature": 45.5
                        }
                    },
                    {
                        "startTime": "2024-03-08T16:00:00Z",
                        "values": {
                            "temperature": 45.94
                        }
                    },
                    {
                        "startTime": "2024-03-08T17:00:00Z",
                        "values": {
                            "temperature": 47.43
                        }
                    },
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 49.12
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 50.15
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 50.31
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 49.53
                        }
                    }
                ]
            }
        ]
    }
}

// Los Angelos, California

let weatherCA = 
{
    "data": {
        "time": "2024-03-08T19:58:00Z",
        "values": {
            "cloudBase": null,
            "cloudCeiling": null,
            "cloudCover": 5,
            "dewPoint": 51.58,
            "freezingRainIntensity": 0,
            "humidity": 64,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.69,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 64.18,
            "temperatureApparent": 64.18,
            "uvHealthConcern": 2,
            "uvIndex": 6,
            "visibility": 9.94,
            "weatherCode": 1000,
            "windDirection": 234.31,
            "windGust": 4.89,
            "windSpeed": 4.19
        }
    },
    "location": {
        "lat": 34.05369186401367,
        "lon": -118.24276733398438,
        "name": "Los Angeles, California, United States",
        "type": "administrative"
    }
}

let timelineCA =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T01:00:00Z",
                "startTime": "2024-03-08T19:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 61.36
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 63.03
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 65.04
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 66
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 64.8
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 63.07
                        }
                    },
                    {
                        "startTime": "2024-03-09T01:00:00Z",
                        "values": {
                            "temperature": 61.13
                        }
                    }
                ]
            }
        ]
    }
}

// Miami, Florida

let weatherFL =
{
    "data": {
        "time": "2024-03-08T18:49:00Z",
        "values": {
            "cloudBase": 0.23,
            "cloudCeiling": 0.23,
            "cloudCover": 60,
            "dewPoint": 74.97,
            "freezingRainIntensity": 0,
            "humidity": 85,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.94,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 80.04,
            "temperatureApparent": 85.01,
            "uvHealthConcern": 2,
            "uvIndex": 6,
            "visibility": 9.94,
            "weatherCode": 1101,
            "windDirection": 146.13,
            "windGust": 14.26,
            "windSpeed": 4.75
        }
    },
    "location": {
        "lat": 25.774173736572266,
        "lon": -80.19361877441406,
        "name": "Miami, Miami-Dade County, Florida, United States",
        "type": "city"
    }
}

let timelineFL = 
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T00:00:00Z",
                "startTime": "2024-03-08T18:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 79.47
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 82.54
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 82.37
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 81.8
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 81.1
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 79.74
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 77.88
                        }
                    }
                ]
            }
        ]
    }
}

// Charlotte, NC

let weatherNC = 
{
    "data": {
        "time": "2024-03-08T18:51:00Z",
        "values": {
            "cloudBase": 0.27,
            "cloudCeiling": 0.27,
            "cloudCover": 100,
            "dewPoint": 53.38,
            "freezingRainIntensity": 0,
            "humidity": 80,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.38,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 59.68,
            "temperatureApparent": 59.68,
            "uvHealthConcern": 0,
            "uvIndex": 1,
            "visibility": 9.83,
            "weatherCode": 1001,
            "windDirection": 131.31,
            "windGust": 13.14,
            "windSpeed": 8.25
        }
    },
    "location": {
        "lat": 35.22720718383789,
        "lon": -80.84308624267578,
        "name": "Charlotte, Mecklenburg County, North Carolina, United States",
        "type": "administrative"
    }
}

let timelineNC =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T00:00:00Z",
                "startTime": "2024-03-08T18:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 57.2
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 60.36
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 62.7
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 63.71
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 62.92
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 61.15
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 58.64
                        }
                    }
                ]
            }
        ]
    }
}

// Houston, TX

let weatherTX =
{
    "data": {
        "time": "2024-03-08T18:53:00Z",
        "values": {
            "cloudBase": 0.28,
            "cloudCeiling": 0.28,
            "cloudCover": 91,
            "dewPoint": 74.3,
            "freezingRainIntensity": 0,
            "humidity": 81,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.65,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 81.28,
            "temperatureApparent": 87.28,
            "uvHealthConcern": 0,
            "uvIndex": 1,
            "visibility": 9.36,
            "weatherCode": 1001,
            "windDirection": 278.63,
            "windGust": 7.55,
            "windSpeed": 3.36
        }
    },
    "location": {
        "lat": 29.75893783569336,
        "lon": -95.3676986694336,
        "name": "Houston, Harris County, Texas, United States",
        "type": "administrative"
    }
}

let timelineTX =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T00:00:00Z",
                "startTime": "2024-03-08T18:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 77.68
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 74.61
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 76.88
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 77.55
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 77.57
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 76.61
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 72.55
                        }
                    }
                ]
            }
        ]
    }
}

// Seattle, Washington State

let weatherWA =
{
    "data": {
        "time": "2024-03-08T18:57:00Z",
        "values": {
            "cloudBase": 0.48,
            "cloudCeiling": 0.48,
            "cloudCover": 100,
            "dewPoint": 36.84,
            "freezingRainIntensity": 0,
            "humidity": 65,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 30.06,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 46.96,
            "temperatureApparent": 46.96,
            "uvHealthConcern": 0,
            "uvIndex": 1,
            "visibility": 9.94,
            "weatherCode": 1001,
            "windDirection": 178.38,
            "windGust": 3.78,
            "windSpeed": 1.82
        }
    },
    "location": {
        "lat": 47.60383224487305,
        "lon": -122.33006286621094,
        "name": "Seattle, King County, Washington, United States",
        "type": "administrative"
    }
}

let timelineWA =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T00:00:00Z",
                "startTime": "2024-03-08T18:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 45.28
                        }
                    },
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 45.16
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 46.39
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 47.56
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 48.76
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 48.74
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 48.58
                        }
                    }
                ]
            }
        ]
    }
}


// Step 1: make Newark, NJ into object and pull items
// Step 2: Get the current temperature(F), UV index, wind speed, rain chance, and wind direction

let newark = {};
newark.Temperature = weatherNJ.data.values.temperature;
newark.UVIndex = weatherNJ.data.values.uvIndex;
newark.WindSpeed = weatherNJ.data.values.windSpeed;
newark.RainChance = weatherNJ.data.values.precipitationProbability;

// Retrieve the temperature of Newark 4 hours from now and add it to the previously created object

newark.Temp4Hours = timelineNJ.data.timelines[0].intervals[4].values.temperature;


console.log("Newark, NJ: ", newark);


/* 3). Do the same for the following cities:
Los Angeles
Miami
Charlotte
Houston
Seattle */

// Los Angelos Function

let losAngelos = {};
function city1(city, weather, timeline) {
    city.Temperature = weather.data.values.temperature;
    city.UVIndex = weather.data.values.uvIndex;
    city.WindSpeed = weather.data.values.windSpeed;
    city.RainChance = weather.data.values.precipitationProbability;
    city.Temp4Hours = timeline.data.timelines[0].intervals[4].values.temperature;
    console.log("Los Angelos, CA: ", losAngelos);
}

city1(losAngelos, weatherCA, timelineCA);

// Miami Function

let miami = {};
function city2(city, weather, timeline) {
    city.Temperature = weather.data.values.temperature;
    city.UVIndex = weather.data.values.uvIndex;
    city.WindSpeed = weather.data.values.windSpeed;
    city.RainChance = weather.data.values.precipitationProbability;
    city.Temp4Hours = timeline.data.timelines[0].intervals[4].values.temperature;
    console.log("Miami, FL: ", miami);
}

city2(miami, weatherFL, timelineFL);

// Charlotte Function

let charlotte = {};
function city3(city, weather, timeline) {
    city.Temperature = weather.data.values.temperature;
    city.UVIndex = weather.data.values.uvIndex;
    city.WindSpeed = weather.data.values.windSpeed;
    city.RainChance = weather.data.values.precipitationProbability;
    city.Temp4Hours = timeline.data.timelines[0].intervals[4].values.temperature;
    console.log("Charlotte, NC: ", charlotte);
}

city3(charlotte, weatherNC, timelineNC);

// Houston Function

let houston = {};
function city4(city, weather, timeline) {
    city.Temperature = weather.data.values.temperature;
    city.UVIndex = weather.data.values.uvIndex;
    city.WindSpeed = weather.data.values.windSpeed;
    city.RainChance = weather.data.values.precipitationProbability;
    city.Temp4Hours = timeline.data.timelines[0].intervals[4].values.temperature;
    console.log("Houston, TX: ", houston);
}

city4(houston, weatherTX, timelineTX);

// Seattle Function

let seattle = {};
function city5(city, weather, timeline) {
    city.Temperature = weather.data.values.temperature;
    city.UVIndex = weather.data.values.uvIndex;
    city.WindSpeed = weather.data.values.windSpeed;
    city.RainChance = weather.data.values.precipitationProbability;
    city.Temp4Hours = timeline.data.timelines[0].intervals[4].values.temperature;
    console.log("Seattle, WA ", seattle);
}

city5(seattle, weatherWA, timelineWA);

// 4). Add each city to an array

let cityArray = [];

cityArray.push(newark, losAngelos, miami, charlotte, houston, seattle);
console.log(cityArray);
// CELEBRITY FUNCTIONS

import { celebrityList } from './CelebrityList.js'
import { useCelebrity } from './CelebritiesDataProvider.js'

const allTheCelebrities = useCelebrity()

for (const celebrity of allTheLandmarks) {}

celebrityList()

// CITY FUNCTIONS

import { useCity} from './CityDataProvider.js'
import { cityList } from './CityList.js'

const allTheCities = useCity()

for (const city of allTheCities) {}

cityList()

// LANDMARK FUNCTIONS

import { useLandmark } from './LandmarkDataProvider.js'
import { landmarkList } from './LandmarkList.js'

const allTheLandmarks = useLandmark()

for (const landmark of allTheLandmarks) {}

landmarkList()
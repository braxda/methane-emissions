this project is to analyze relation of methane levels to the traditionally highest producing
forms of methane production (LMAO). we started out with a  baseline by looking into the global average
for methane levels in ppb (Parts per Billion), which according to NOAA at https://gml.noaa.gov/ccgg/trends_ch4/
hovers around about 1900 ppb. we used this number as a baseline, when considering whether a place was considered high methane.
we then took the most apparent reasons for methane emissions and overlayed them on a US map
to see how things compared, and whether areas of high density of these high emissions things, also equated to it being a high emissions
hotspot. to access the international methane data, i searched on google eaarth engine, using the 
Copernicus Sentinel-5P offline methane dataset. i used this code to get the bands for the US:
imported data from google drive into qgis for analysis and styling

## Overview
- This project explores the relationship between methane concentrations and major methane emission sources in the U.S. 
- Using Sentinel-5P satellite data, I identified areas with elevated methane levels (≥1900 ppb) and 
- overlaid them with key emission sources like wetlands, landfills, and fossil fuel infrastructure to analyze potential correlations.

## Process
1. Established a Baseline for High Methane
- NOAA reports that the global average methane concentration hovers around 1900 ppb. (https://gml.noaa.gov/ccgg/trends_ch4/)
- Used this threshold to classify areas with elevated methane emissions.

2. Acquired Methane Data
- Accessed global methane concentration data from the Copernicus Sentinel-5P (TROPOMI) dataset on Google Earth Engine.
- Extracted methane values for the U.S. and exported as a GeoTIFF.
- Downloaded datasets on the major contributors of methane emissions (wetlands, landfills, oil & gas processing plants)

3. Mapped High Methane Areas & Emission Sources
- Imported the GeoTIFF into QGIS for analysis.
- Overlaid methane data with landfills, wetlands, and fossil fuel infrastructure to compare their spatial relationships.
- Styled and exported maps.

## Data Sources
- Methane Concentrations: [Sentinel-5P / TROPOMI](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_CH4)
- Wetlands Data: [WWF Global Lakes & Wetlands Database](https://www.worldwildlife.org/pages/global-lakes-and-wetlands-database)
- Oil & Gas Infrastructure: [US Energy Information Administration](https://atlas.eia.gov/search?source=u.s.%2520energy%2520information%2520administration)_
- -Landfills: [US Environmental Protection Agency](https://www.epa.gov/lmop/lmop-landfill-and-project-database)




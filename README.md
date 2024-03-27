# Flood Mapping and Prediction
Project Proposal: Somanshu Rath (2022A7PS0032G) <br>
Hackenza 2024 Problem Statement 1 under Prof. Neena Goveas. <br> <br>
Links to project’s demo: <br>
https://somanshurath.github.io/flood-mapping/ <br>
https://github.com/somanshurath/flood-mapping/ <br> <br>
## Problem Statement
You've got a map of a city and you want to make a digital version of it. Imagine drawing
lines for streets and marking where they meet as dots. These dots are like intersections
or junctions, where roads cross. The lines between these dots represent the roads
themselves.<br> <br>
Now, you want to add something extra to this map: water levels on each road. Imagine
it's raining. and some roads might flood with water. You need a way to record how deep
the water gets on each road.<br> <br>
To make things easier, use your own data source (mock data or open source). Once we
have the water levels, we want to see this on our map. We could make something like
Google Maps to show our map with the water levels marked on each road.
But what if we don't have data for every road? Well, we can estimate the missing water
levels by looking at the water levels of nearby roads and taking an average. This way,
even if we don't have data for every single road, we can still have a good idea of how
flooded the area might be.<br> <br>
## Plan of Approach
So far, a dummy webpage has been made by me, to display what the end result might
look like. Instead of the regular map, we will display the Flooded Roads and areas with
prominent flooding during the monsoon season.
For working on this problem, I chose to start with the city of Mumbai, because <br> <br>
A) I am from Mumbai and have myself experiences flooded roads and cut off transport
lines during monsoon and<br>
B) Rains and monsoon road flooding is very synonymous with Mumbai and various data
and studies have been done which can be utilized to make early versions of the project
in the city.<br> <br>
Areas like Matunga and Dadar get filled first to get water-logged, followed by some
other parts of the city. This problem occurs also because of high tides on some days in
Mumbai, owing to which drainage to the sea does not take place. <br> <hr> <br>
Starting off with the problem, our entire solution will be based on QGIS, which stands
for Quantum Geographic Information System, is a free and open-source Geographic
Information System (GIS) software application.<br> <br>
Using this software, we will create a custom layer on top of the Standard OSM (Open
Street Map) layer which we can pull out using QuickMapServices. Once a similar
rendition is made, we can use the data available to put it in our custom layer.
I plan to look into the following data categories:<br>
1. Observed station based daily accumulated rainfall information. <br>
2. Volunteered geographic information (one of the most reliable among the other
crowdsourced information).
3. Height Above the Nearest Drainage (HAND) map data values across Mumbai. <br>

(These data sources were gathered mainly from these research papers and articles. Link
here, here, and here) <br> <br>
Also by looking at active participation of Mumbaikars during historically significant
rainy days, i would like to look at the Ward-wise Tweets received. These data are all
available on the internet using which I will incorporate in our newly made map layer.
This layer of map will contain the following information:

1. Estimated amount of rainfall received in that vicinity.
2. Estimated quality of drainage
3. Overall “road-waterlog-ability”

<br>
This project would be useful in many avenues.<br> 
- Helping administratives plant water pump motors and/or temporary water
storage trucks so as to keep the city that never stops from stopping… <br>
- Planning out travel routes during monsoon. <br>
- Study the overall geography of Mumbai.<br> <br>

This project can with time be expanded to include other major cities and river bed areas
to help with preventing water flooding during Monsoons and planning construction of
structures along river banks…

## Conclusion
Given the opportunity, I will try my level best to carry out the tasks required and
mentioned above, to create a model to predict and display the water-logged levels in a
city, which here has been taken as Mumbai. I will adapt to the challenges and carry out
the project even if an approach may fail to come to practicality and might need to be
solved by a different method.

<br>
Thank You.
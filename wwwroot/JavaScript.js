﻿


function start()
{
    // Your access token can be found at: https://cesium.com/ion/tokens.
    // This is the default access token from your ion account

    Cesium.Ion.defaultAccessToken = 'add your token';

    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain()
    });
    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-15.0),
        }
    });
}
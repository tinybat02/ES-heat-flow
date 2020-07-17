declare module '*.png';
declare module '*.svg';

declare module 'geojson-path-finder';

declare module '@turf/centroid' {
  interface FeatureGeojson {
    type: string;
    properties: {
      [key: string]: string;
      name: string;
    };
    geometry: {
      type: string;
      coordinates: number[][][];
    };
  }

  interface PointGeojson {
    type: string;
    properties: {
      [key: string]: string;
      name: string;
    };
    geometry: {
      type: string;
      coordinates: number[];
    };
  }
  function centroid(feature: FeatureGeojson): PointGeojson;
  export = centroid;
}

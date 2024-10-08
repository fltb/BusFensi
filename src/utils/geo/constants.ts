import { convertWGS84ToWebMercator } from "./mapProjection"
import { PointWebMercator, PointWGS84 } from "./types";

/**
 * Set San Francisco as default
 */
export const DEFAULT_VIEWPOINT_WGS84 : PointWGS84 = {
    lon: -122.431297,
    lat: 37.773972,
}

/**
 * Set San Francisco as default
 */
export const DEFAULT_VIEWPOINT_WEB_MERCATOR : PointWebMercator = convertWGS84ToWebMercator(DEFAULT_VIEWPOINT_WGS84);
export const DEFAULT_TILE_SIZE = 256;
export const DEFAULT_ZOOM = 17;
export const WEB_MERCATOR_BOUNDS = {
    XMIN: -20037508.34,
    YMIN: -20048966.1,
    XMAX: 20037508.34,
    YMAX: 20048966.1,
    EQUATOR: 40075016.68, // use x, not y. y is limited
}

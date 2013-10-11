// Mercator.js (node module)

// Convert longitude to x world coordinate
exports.lngToXWorld = function(lon, projectionSize) {
    var radius = projectionSize / (2 * Math.PI);
    var falseEasting = -1.0 * projectionSize / 2.0;
    return (radius * lon * Math.PI / 180) - falseEasting;
};

// Convert latitude to y world coordinate
exports.latToYWorld = function(lat, projectionSize) {
    var radius = projectionSize / (2 * Math.PI);
    var falseNorthing = projectionSize / 2;
    return ((radius / 2 * Math.log((1 + Math.sin(lat * Math.PI / 180)) / (1 - Math.sin(lat * Math.PI / 180)))) - falseNorthing) * -1;
};



goog.require('olcs.AbstractSynchronizer');
goog.require('olcs.Camera');
goog.require('olcs.DragBox');
goog.require('olcs.DragBoxEventType');
goog.require('olcs.FeatureConverter');
goog.require('olcs.OLCesium');
goog.require('olcs.RasterSynchronizer');
goog.require('olcs.VectorSynchronizer');
goog.require('olcs.core');


goog.exportSymbol(
    'olcs.AbstractSynchronizer',
    olcs.AbstractSynchronizer);

goog.exportProperty(
    olcs.AbstractSynchronizer.prototype,
    'synchronize',
    olcs.AbstractSynchronizer.prototype.synchronize);

goog.exportSymbol(
    'olcs.Camera',
    olcs.Camera);

goog.exportProperty(
    olcs.Camera.prototype,
    'setHeading',
    olcs.Camera.prototype.setHeading);

goog.exportProperty(
    olcs.Camera.prototype,
    'getHeading',
    olcs.Camera.prototype.getHeading);

goog.exportProperty(
    olcs.Camera.prototype,
    'setTilt',
    olcs.Camera.prototype.setTilt);

goog.exportProperty(
    olcs.Camera.prototype,
    'getTilt',
    olcs.Camera.prototype.getTilt);

goog.exportProperty(
    olcs.Camera.prototype,
    'setDistance',
    olcs.Camera.prototype.setDistance);

goog.exportProperty(
    olcs.Camera.prototype,
    'getDistance',
    olcs.Camera.prototype.getDistance);

goog.exportProperty(
    olcs.Camera.prototype,
    'setCenter',
    olcs.Camera.prototype.setCenter);

goog.exportProperty(
    olcs.Camera.prototype,
    'getCenter',
    olcs.Camera.prototype.getCenter);

goog.exportProperty(
    olcs.Camera.prototype,
    'setPosition',
    olcs.Camera.prototype.setPosition);

goog.exportProperty(
    olcs.Camera.prototype,
    'getPosition',
    olcs.Camera.prototype.getPosition);

goog.exportProperty(
    olcs.Camera.prototype,
    'setAltitude',
    olcs.Camera.prototype.setAltitude);

goog.exportProperty(
    olcs.Camera.prototype,
    'getAltitude',
    olcs.Camera.prototype.getAltitude);

goog.exportProperty(
    olcs.Camera.prototype,
    'lookAt',
    olcs.Camera.prototype.lookAt);

goog.exportProperty(
    olcs.Camera.prototype,
    'updateView',
    olcs.Camera.prototype.updateView);

goog.exportSymbol(
    'olcs.core.computePixelSizeAtCoordinate',
    olcs.core.computePixelSizeAtCoordinate);

goog.exportSymbol(
    'olcs.core.applyHeightOffsetToGeometry',
    olcs.core.applyHeightOffsetToGeometry);

goog.exportSymbol(
    'olcs.core.rotateAroundAxis',
    olcs.core.rotateAroundAxis);

goog.exportSymbol(
    'olcs.core.setHeadingUsingBottomCenter',
    olcs.core.setHeadingUsingBottomCenter);

goog.exportSymbol(
    'olcs.core.pickOnTerrainOrEllipsoid',
    olcs.core.pickOnTerrainOrEllipsoid);

goog.exportSymbol(
    'olcs.core.pickBottomPoint',
    olcs.core.pickBottomPoint);

goog.exportSymbol(
    'olcs.core.pickCenterPoint',
    olcs.core.pickCenterPoint);

goog.exportSymbol(
    'olcs.core.computeSignedTiltAngleOnGlobe',
    olcs.core.computeSignedTiltAngleOnGlobe);

goog.exportSymbol(
    'olcs.core.computeAngleToZenith',
    olcs.core.computeAngleToZenith);

goog.exportSymbol(
    'olcs.core.lookAt',
    olcs.core.lookAt);

goog.exportSymbol(
    'olcs.core.extentToRectangle',
    olcs.core.extentToRectangle);

goog.exportSymbol(
    'olcs.core.tileLayerToImageryLayer',
    olcs.core.tileLayerToImageryLayer);

goog.exportSymbol(
    'olcs.core.updateCesiumLayerProperties',
    olcs.core.updateCesiumLayerProperties);

goog.exportSymbol(
    'olcs.core.ol4326CoordinateToCesiumCartesian',
    olcs.core.ol4326CoordinateToCesiumCartesian);

goog.exportSymbol(
    'olcs.core.ol4326CoordinateArrayToCsCartesians',
    olcs.core.ol4326CoordinateArrayToCsCartesians);

goog.exportSymbol(
    'olcs.core.olGeometryCloneTo4326',
    olcs.core.olGeometryCloneTo4326);

goog.exportSymbol(
    'olcs.core.convertColorToCesium',
    olcs.core.convertColorToCesium);

goog.exportSymbol(
    'olcs.DragBox',
    olcs.DragBox);

goog.exportProperty(
    olcs.DragBox.prototype,
    'setScene',
    olcs.DragBox.prototype.setScene);

goog.exportProperty(
    olcs.DragBox.prototype,
    'listen',
    olcs.DragBox.prototype.listen);

goog.exportSymbol(
    'olcs.FeatureConverter',
    olcs.FeatureConverter);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'csAddBillboard',
    olcs.FeatureConverter.prototype.csAddBillboard);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olCircleGeometryToCesium',
    olcs.FeatureConverter.prototype.olCircleGeometryToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olLineStringGeometryToCesium',
    olcs.FeatureConverter.prototype.olLineStringGeometryToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olPolygonGeometryToCesium',
    olcs.FeatureConverter.prototype.olPolygonGeometryToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'getHeightReference',
    olcs.FeatureConverter.prototype.getHeightReference);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olPointGeometryToCesium',
    olcs.FeatureConverter.prototype.olPointGeometryToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olMultiGeometryToCesium',
    olcs.FeatureConverter.prototype.olMultiGeometryToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olGeometry4326TextPartToCesium',
    olcs.FeatureConverter.prototype.olGeometry4326TextPartToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olStyleToCesium',
    olcs.FeatureConverter.prototype.olStyleToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'computePlainStyle',
    olcs.FeatureConverter.prototype.computePlainStyle);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olFeatureToCesium',
    olcs.FeatureConverter.prototype.olFeatureToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'olVectorLayerToCesium',
    olcs.FeatureConverter.prototype.olVectorLayerToCesium);

goog.exportProperty(
    olcs.FeatureConverter.prototype,
    'convert',
    olcs.FeatureConverter.prototype.convert);

goog.exportSymbol(
    'olcs.OLCesium',
    olcs.OLCesium);

goog.exportProperty(
    olcs.OLCesium.prototype,
    'getCamera',
    olcs.OLCesium.prototype.getCamera);

goog.exportProperty(
    olcs.OLCesium.prototype,
    'getOlMap',
    olcs.OLCesium.prototype.getOlMap);

goog.exportProperty(
    olcs.OLCesium.prototype,
    'getCesiumScene',
    olcs.OLCesium.prototype.getCesiumScene);

goog.exportProperty(
    olcs.OLCesium.prototype,
    'getEnabled',
    olcs.OLCesium.prototype.getEnabled);

goog.exportProperty(
    olcs.OLCesium.prototype,
    'setEnabled',
    olcs.OLCesium.prototype.setEnabled);

goog.exportProperty(
    olcs.OLCesium.prototype,
    'warmUp',
    olcs.OLCesium.prototype.warmUp);

goog.exportSymbol(
    'olcs.RasterSynchronizer',
    olcs.RasterSynchronizer);

goog.exportSymbol(
    'olcs.VectorSynchronizer',
    olcs.VectorSynchronizer);

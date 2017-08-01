(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    map: {
     
      'd3-array': 'npm:d3-array',
      'd3-brush': 'npm:d3-brush',
      'd3-shape': 'npm:d3-shape',
      'd3-selection': 'npm:d3-selection',
      'd3-color': 'npm:d3-color',
      'd3-drag': 'npm:d3-drag',
      'd3-transition': 'npm:d3-transition',
      'd3-format': 'npm:d3-format',
      'd3-force': 'npm:d3-force',
      'd3-dispatch': 'npm:d3-dispatch',
      'd3-path': 'npm:d3-path',
      'd3-ease': 'npm:d3-ease',
      'd3-timer': 'npm:d3-timer',
      'd3-quadtree': 'npm:d3-quadtree',
      'd3-interpolate': 'npm:d3-interpolate',
      'd3-scale': 'npm:d3-scale',
      'd3-time': 'npm:d3-time',
      'd3-collection': 'npm:d3-collection',
      'd3-time-format': 'npm:d3-time-format',
      'd3-hierarchy': 'npm:d3-hierarchy',
      '@swimlane/ngx-charts': 'npm:@swimlane/ngx-charts',
    },
    packages: {
   
      '@swimlane/ngx-charts': { main: 'release/index.js', defaultExtension: 'js' },
      'd3-array': { main: 'build/d3-array.js', defaultExtension: 'js' },
      'd3-format': { main: 'build/d3-format.js', defaultExtension: 'js' },
      'd3-brush': { main: 'build/d3-brush.js', defaultExtension: 'js' },
      'd3-color': { main: 'build/d3-color.js', defaultExtension: 'js' },
      'd3-force': { main: 'build/d3-force.js', defaultExtension: 'js' },
      'd3-hierarchy': { main: 'build/d3-hierarchy.js', defaultExtension: 'js' },
      'd3-interpolate': { main: 'build/d3-interpolate.js', defaultExtension: 'js' },
      'd3-scale': { main: 'build/d3-scale.js', defaultExtension: 'js' },
      'd3-selection': { main: 'build/d3-selection.js', defaultExtension: 'js' },
      'd3-shape': { main: 'build/d3-shape.js', defaultExtension: 'js' },
      'd3-time-format': { main: 'build/d3-time-format.js', defaultExtension: 'js' },
      'd3-drag': { main: 'build/d3-drag.js', defaultExtension: 'js' },
      'd3-transition': { main: 'build/d3-transition.js', defaultExtension: 'js' },
      'd3-dispatch': { main: 'build/d3-dispatch.js', defaultExtension: 'js' },
      'd3-path': { main: 'build/d3-path.js', defaultExtension: 'js' },
      'd3-ease': { main: 'build/d3-ease.js', defaultExtension: 'js' },
      'd3-timer': { main: 'build/d3-timer.js', defaultExtension: 'js' },
      'd3-quadtree': { main: 'build/d3-quadtree.js', defaultExtension: 'js' },
      'd3-time': { main: 'build/d3-time.js', defaultExtension: 'js' },
      'd3-collection': { main: 'build/d3-collection.js', defaultExtension: 'js' },
    },
  });
})(this);
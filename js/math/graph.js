class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  addPoint(point) {
    this.points.push(point);
  }

  addSegment(segment) {
    this.segments.push(segment);
  }

  containsPoint(point) {
    return this.points.find((p) => p.equals(point));
  }

  containsSegment(segment) {
    return this.segments.find((s) => s.equals(segment));
  }

  tryAddPoint(point) {
    if (this.containsPoint(point)) {
      return false;
    }

    this.addPoint(point);
    return true;
  }

  tryAddSegment(segment) {
    if (
      this.containsSegment(segment) &&
      segment.point1.equals(segment.point2)
    ) {
      return false;
    }

    this.addSegment(segment);
    return true;
  }

  removeSegment(segment) {
    this.segments.splice(this.segments.indexOf(segment), 1);
  }

  draw(ctx) {
    for (const segment of this.segments) {
      segment.draw(ctx);
    }

    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}

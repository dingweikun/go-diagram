import * as go from "../../lib/gojs/go";

const $ = go.GraphObject.make;

export function makeLinkTemplate() {
  return $(
    go.Link,
    {
      routing: go.Link.Orthogonal,
      // curve: go.Link.JumpOver
      curve: go.Link.JumpGap,
      // routing: go.Link.AvoidsNodes
      // fromEndSegmentLength: 1,
      // toEndSegmentLength:
    },

    $(go.Shape, {
      isPanelMain: true,
      stroke: "transparent",
      strokeWidth: 8,
    }),

    $(go.Shape, { isPanelMain: true, stroke: "black", strokeWidth: 1 }), // thick undrawn path
    $(go.Shape, { toArrow: "Standard" }),
    {
      // a mouse-over highlights the link by changing the first main path shape's stroke:
      mouseEnter: (e: go.InputEvent, link: go.GraphObject) => {
        const shape = (link as go.Panel).elt(0) as go.Shape;
        shape.stroke = "rgba(0,90,156,0.3)";
      },
      mouseLeave: (e: go.InputEvent, link: go.GraphObject) => {
        const shape = (link as go.Panel).elt(0) as go.Shape;
        shape.stroke = "transparent";
      },
    }
  );
}

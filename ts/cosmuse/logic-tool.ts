import * as go from "../globalReference";
import { ILogicNodeTempDefine } from "./logic-interface";

const $ = go.GraphObject.make;

const w = 50;
const h = 50;
const borderColor = "black";
const backColor = "lightblue";
const foreColor = "black";
const textColor = "black"
const portColor = "gray";
const portSize = 8;


function makePort(portId: string, isInport: boolean) {
  var port = $(go.Shape, "Rectangle",
    {
      fill: portColor, stroke: null,
      desiredSize: new go.Size(portSize, portSize),
      portId: portId,   // declare this object to be a "port"
      toMaxLinks: 1,    // don't allow more than one link into a port
      cursor: "pointer" // show a different cursor to indicate potential link point
    });

  var lab = $(go.TextBlock, portId,  // the name of the port
    { font: "7pt sans-serif" });

  var panel = $(go.Panel, "Horizontal",
    { margin: new go.Margin(portSize / 2, 0) });

  // set up the port/panel based on which side of the node it will be on
  if (isInport) {
    port.toSpot = go.Spot.Left;
    port.toLinkable = true;
    lab.margin = new go.Margin(2, 0, 0, 2);
    panel.alignment = go.Spot.TopLeft;
    panel.add(port);
    panel.add(lab);
  } else {
    port.fromSpot = go.Spot.Right;
    port.fromLinkable = true;
    lab.margin = new go.Margin(2, 2, 0, 0);
    panel.alignment = go.Spot.TopRight;
    panel.add(lab);
    panel.add(port);
  }
  return panel;
}



export function buildNodeTempBasic(def: ILogicNodeTempDefine) {

  const inports = $(go.Panel, "Vertical", {
    alignment: go.Spot.Left,
    alignmentFocus: new go.Spot(0, 0.5, 8, 0)
  });

  const outports = $(go.Panel, "Vertical", {
    alignment: go.Spot.Right,
    alignmentFocus: new go.Spot(0, 0.5, 8, 0)
  });

  def.ports.forEach(p => {
    const port = makePort(p.portId, p.isIn);
    if (p.isIn)
      inports.add(port);
    else
      outports.add(port);
  });

  const template = $(go.Node, go.Panel.Vertical,

    $(go.Panel, go.Panel.Spot,
      { width: def.wide ?? w, height: def.tall ?? h },

      $(go.Shape, "Rectangle",
        {
          fill: def.bColor ?? backColor,
          stroke: borderColor, strokeWidth: 1,
          spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight
        }),

      $(go.TextBlock, def.category,
        {
          margin: 5,
          stroke: def.fColor ?? foreColor,
          font: "bold 8pt sans-serif"
        }),

      inports, outports,
    ),

    $(go.TextBlock, def.category,
      {
        margin: new go.Margin(5, 0, 0, 0),
        stroke: textColor,
      })

    // $(go.Panel, "Auto",
    //   { width: def.wide ?? w, height: def.tall ?? h },

    //   $(go.Shape, "Rectangle", {
    //     fill: def.color ?? clr,
    //     stroke: strokeColor, strokeWidth: 1,
    //     spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight
    //   }),
    // ),


    // $(go.TextBlock, def.category,
    //   {
    //     alignment: go.Spot.BottomCenter,
    //     alignmentFocus: go.Spot.TopCenter,
    //     margin: 3,
    //     maxSize: new go.Size(80, NaN),
    //     stroke: "white",
    //     font: "bold 11pt sans-serif"
    //   }),
  );

  return template;
}

export const nodeTempBasicSample: ILogicNodeTempDefine = {
  category: "CAT",
  descr: "this is a semple",
  ports: [],

};

// function makeTemplate(typename, icon, background, inports, outports) {
//   var node = $(go.Node, "Spot",
//     $(go.Panel, "Auto",
//       { width: 100, height: 120 },
//       $(go.Shape, "Rectangle",
//         {
//           fill: background, stroke: null, strokeWidth: 0,
//           spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight
//         }),
//       $(go.Panel, "Table",
//         $(go.TextBlock, typename,
//           {
//             row: 0,
//             margin: 3,
//             maxSize: new go.Size(80, NaN),
//             stroke: "white",
//             font: "bold 11pt sans-serif"
//           }),
//         $(go.Picture, icon,
//           { row: 1, width: 16, height: 16, scale: 3.0 }),
//         $(go.TextBlock,
//           {
//             row: 2,
//             margin: 3,
//             editable: true,
//             maxSize: new go.Size(80, 40),
//             stroke: "white",
//             font: "bold 9pt sans-serif"
//           },
//           new go.Binding("text", "name").makeTwoWay())
//       )
//     ),
//     $(go.Panel, "Vertical",
//       {
//         alignment: go.Spot.Left,
//         alignmentFocus: new go.Spot(0, 0.5, 8, 0)
//       },
//       inports),
//     $(go.Panel, "Vertical",
//       {
//         alignment: go.Spot.Right,
//         alignmentFocus: new go.Spot(1, 0.5, -8, 0)
//       },
//       outports)
//   );
//   myDiagram.nodeTemplateMap.set(typename, node);
// }

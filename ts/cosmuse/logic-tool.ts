import * as go from "../globalReference";
import { ILogicNodeTempDefine } from "./logic-interface";
import * as cfg from "./config";

const $ = go.GraphObject.make;

export function makePort(portId: string, isInport: boolean, labelColor: string) {
  var port = $(go.Shape, "Rectangle",
    {
      fill: cfg.portColor, stroke: null,
      desiredSize: new go.Size(8, 8),
      portId: portId,  // declare this object to be a "port"
      toMaxLinks: 1,  // don't allow more than one link into a port
      cursor: "pointer"  // show a different cursor to indicate potential link point
    });

  var lab = $(go.TextBlock, portId,  // the name of the port
    { font: "7pt sans-serif", stroke: labelColor });

  var panel = $(go.Panel, "Horizontal",
    { margin: new go.Margin(2, 0) });

  // set up the port/panel based on which side of the node it will be on
  if (isInport) {
    port.toSpot = go.Spot.Left;
    port.toLinkable = true;
    lab.margin = new go.Margin(1, 0, 0, 1);
    panel.alignment = go.Spot.TopLeft;
    panel.add(port);
    panel.add(lab);
  } else {
    port.fromSpot = go.Spot.Right;
    port.fromLinkable = true;
    lab.margin = new go.Margin(1, 1, 0, 0);
    panel.alignment = go.Spot.TopRight;
    panel.add(lab);
    panel.add(port);
  }
  return panel;
}



export function buildNodeTempBasic(def: ILogicNodeTempDefine) {

  const inports: go.Panel[] = [];
  const outports: go.Panel[] = [];

  const foreColor = def.fColor ?? cfg.foreColor;
  const backColor = def.bColor ?? cfg.backColor;

  def.ports.forEach(p => {
    const port = makePort(p.portId, p.isIn, foreColor);
    if (p.isIn)
      inports.push(port);
    else
      outports.push(port);
  });


  var node = $(go.Node, "Spot",
    $(go.Panel, "Auto",
      { width: def.wide ?? cfg.wide, height: def.tall ?? cfg.tall },
      $(go.Shape, "Rectangle",
        {
          fill: backColor, stroke: cfg.borderColor, strokeWidth: 1,
          spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight
        }),
      $(go.TextBlock, def.category,
        {
          margin: new go.Margin(5, 5, 0, 5),
          stroke: foreColor,
          font: "bold 9pt sans-serif",
          alignment: go.Spot.TopCenter,
          alignmentFocus: new go.Spot(0, 0.5, 0, 0)
        })

      // $(go.Panel, "Table",
      //   $(go.TextBlock, def.category,
      //     {
      //       row: 0,
      //       margin: 3,
      //       // maxSize: new go.Size(80, NaN),
      //       stroke: foreColor,
      //       font: "bold 9pt sans-serif"
      //     }),


      // $(go.TextBlock,
      //   {
      //     row: 2,
      //     margin: 3,
      //     editable: true,
      //     maxSize: new go.Size(80, 40),
      //     stroke: "white",
      //     font: "bold 9pt sans-serif"
      //   },
      //   new go.Binding("text", "tag").makeTwoWay())

    ),
    $(go.Panel, "Vertical",
      {
        alignment: go.Spot.Left,
        alignmentFocus: new go.Spot(0, 0.5, 8, 0)
      },
      inports),
    $(go.Panel, "Vertical",
      {
        alignment: go.Spot.Right,
        alignmentFocus: new go.Spot(1, 0.5, -8, 0)
      },
      outports)
  );


  return node;
}

export const nodeTempBasicSample: ILogicNodeTempDefine = {
  category: "CAT",
  descr: "this is a semple",
  ports: [
    { portId: "X", isIn: true, type: "Digital" },
    { portId: "Y", isIn: true, type: "Digital" },
    { portId: "OUT", isIn: false, type: "Digital" },
  ],

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

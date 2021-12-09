import * as go from "../globalReference";
import { nodeTemps } from "../mock/dat1";
import * as cfg from "./config";
import { ILogicNodeTempDefine } from "./logic-interface";

const $ = go.GraphObject.make;

export function makePort(portId: string, isInport: boolean, labelColor: string) {
  var port = $(go.Shape, "Rectangle",
    {
      fill: cfg.portColor, stroke: null, strokeWidth: 0,
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
    lab.margin = new go.Margin(1, 0, 0, 2);
    panel.alignment = go.Spot.TopLeft;
    panel.add(port);
    panel.add(lab);
  } else {
    port.fromSpot = go.Spot.Right;
    port.fromLinkable = true;
    lab.margin = new go.Margin(1, 2, 0, 0);
    panel.alignment = go.Spot.TopRight;
    panel.add(lab);
    panel.add(port);
  }
  return panel;
}

export function buildNodeTempBasic(def: ILogicNodeTempDefine) {

  const foreColor = def.fColor ?? cfg.foreColor;
  const backColor = def.bColor ?? cfg.backColor;

  const inports: go.Panel[] = [];
  const outports: go.Panel[] = [];

  def.ports.forEach(p => {
    const port = makePort(p.portId, p.isIn, foreColor);
    if (p.isIn)
      inports.push(port);
    else
      outports.push(port);
  });

  const w = def.wide ? Math.min(def.wide, cfg.wide) : cfg.wide;
  const h = def.tall ? Math.min(def.tall, cfg.tall) : cfg.tall;

  var node = $(go.Node, "Spot",

    $(go.Shape, "Rectangle",
      {
        isPanelMain: true,
        fill: backColor, stroke: cfg.borderColor, strokeWidth: 1,
        width: w, height: h
      }),

    $(go.TextBlock, def.title ?? def.category,
      {
        stroke: foreColor,
        font: "bold 9pt sans-serif",
        alignment: go.Spot.TopCenter,
        alignmentFocus: new go.Spot(0.5, 0, 0, -4)
      }),

    $(go.TextBlock,
      {
        editable: true, stroke: cfg.textColor,
        alignment: go.Spot.BottomCenter,
        alignmentFocus: new go.Spot(0.5, 0, 0, -4)
      },
      new go.Binding("text", "tag").makeTwoWay()),

    $(go.Panel, "Vertical",
      { alignment: go.Spot.Left, alignmentFocus: new go.Spot(0, 0.3, 8, 0) },
      inports),

    $(go.Panel, "Vertical",
      { alignment: go.Spot.Right, alignmentFocus: new go.Spot(1, 0.3, -8, 0) },
      outports),

  )

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
  // tall: 90
};




function makeBasicNodeTempMap(defs: ILogicNodeTempDefine[]) {
  const map = new go.Map<string, go.Part>();
  defs.forEach(def => map.add(def.category, buildNodeTempBasic(def)));
  return map;
}

export const basicNodeTempMap = makeBasicNodeTempMap(nodeTemps);
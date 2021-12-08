import * as go from "./globalReference";
import { logicPortStyle, logicNodeTemp } from "./config";

const $ = go.GraphObject.make;

interface ILogicPortInfo {
  readonly nam: string;
  readonly inp: boolean;
  readonly pos: number;
}

interface ILogicNodeInfo {
  readonly key: string;
  readonly svg: string;
  readonly width: number;
  readonly height: number;
  readonly ports: ILogicPortInfo[];
}

function makeSvgNodeTemplate(info: ILogicNodeInfo) {
  const nodeTemplate = $(
    go.Node,
    go.Panel.Spot,
    $(
      go.Picture,
      { isPanelMain: true },
      {
        source: info.svg,
        desiredSize: new go.Size(info.width, info.height),
      }
    )
  );

  info.ports.forEach((p) => nodeTemplate.add(makeLinePort(p)));

  return nodeTemplate;
}

function makeLinePort(info: ILogicPortInfo) {
  if (info.pos < 0 || info.pos > 1)
    throw new Error(
      `position value should be between "0" and "1" (current value: "${info.pos}")`
    );

  const initializer = {
    portId: info.nam,

    // connecting behavior

    fromLinkable: !info.inp,
    toLinkable: info.inp,

    fromLinkableDuplicates: false,
    toLinkableDuplicates: false,

    fromLinkableSelfNode: false,
    toLinkableSelfNode: false,

    fromMaxLinks: 1,
    toMaxLinks: 1,

    //GraphObject.fromEndSegmentLength, GraphObject.toEndSegmentLength
    //GraphObject.fromShortLength, GraphObject.toShortLength

    fill: "transparent",
    strokeWidth: 0,
    cursor: logicPortStyle.cursor,
    desiredSize: new go.Size(logicPortStyle.size, logicPortStyle.size),

    mouseEnter: function (e: go.InputEvent, port: go.GraphObject) {
      if (!e.diagram.isReadOnly) (port as go.Shape).fill = logicPortStyle.focus;
    },
    mouseLeave: function (e: go.InputEvent, port: go.GraphObject) {
      (port as go.Shape).fill = "transparent";
    },
  };

  const others = info.inp
    ? {
        alignment: new go.Spot(0, info.pos),
        alignmentFocus: go.Spot.LeftCenter,

        fromSpot: go.Spot.LeftCenter,
        toSpot: go.Spot.LeftCenter,
      }
    : {
        alignment: new go.Spot(1, info.pos),
        alignmentFocus: go.Spot.RightCenter,

        fromSpot: go.Spot.RightCenter,
        toSpot: go.Spot.RightCenter,
      };

  Object.assign(initializer, others);

  return $(go.Shape, initializer);
}

export function makeSvgNodeTemplateMap() {
  const map = new go.Map<string, go.Part>();

  logicNodeTemp.forEach((tmp) => {
    if (map.has(tmp.key)) throw new Error(`map key "${tmp.key}" is existed`);
    const node = makeSvgNodeTemplate(tmp);
    map.add(tmp.key, node);
  });

  return map;
}

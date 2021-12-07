import * as go from '../lib/gojs/go';
import { logicPortStyle, logicNodeTemp } from './config';

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
    fromLinkable: !info.inp,
    toLinkable: info.inp,

    cursor: logicPortStyle.cursor,
    strokeWidth: 0,
    desiredSize: new go.Size(logicPortStyle.size, logicPortStyle.size),
    fill: logicPortStyle.fill,

    // mouseEnter: function (e, port) {  // the PORT argument will be this Shape
    //     if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
    // },
    // mouseLeave: function (e, port) {
    //     port.fill = "transparent";
    // }
  };

  const others = info.inp
    ? {
        alignment: new go.Spot(0, info.pos),
        alignmentFocus: go.Spot.LeftCenter,
        // alignmentFocus: new go.Spot(1, 0.5, info.oft, 0),
        fromSpot: go.Spot.LeftCenter,
        toSpot: go.Spot.LeftCenter,
      }
    : {
        alignment: new go.Spot(1, info.pos),
        alignmentFocus: go.Spot.RightCenter,
        // alignmentFocus: new go.Spot(0, 0.5, info.oft, 0),
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

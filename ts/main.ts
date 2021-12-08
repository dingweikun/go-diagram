// import * as go from "../lib/gojs/go";
import * as go from "./globalReference";
import { setEnviroment } from "./config";
import { makeLinkTemplate } from "./logic/makeLinkTemplate";
// import * as GO from '../lib/gojs/go-debug'
import { makeSvgNodeTemplateMap } from "./makeSvgNodeTemplateMap";
import { buildNodeTempBasic, nodeTempBasicSample } from "./cosmuse/logic-tool";

const $ = go.GraphObject.make;

export function main(elementId: string, env: "local" | "remote") {
  setEnviroment(env);

  const diagram = $(go.Diagram, elementId);

  diagram.nodeTemplateMap = makeSvgNodeTemplateMap();

  // diagram.nodeTemplate = buildDefaultNodeTemplate();
  diagram.nodeTemplate = buildNodeTempBasic(nodeTempBasicSample);

  diagram.linkTemplate = makeLinkTemplate();

  const modeString = createGraphLinksModel().toJson();

  let mode = LoadMode(modeString);

  // mode.setCategoryForNodeData(mode.nodeDataArray[0], "circle");
  // mode.setCategoryForNodeData(mode.nodeDataArray[2], "draw");
  // mode.setCategoryForNodeData(mode.nodeDataArray[0], "not");
  // mode.setCategoryForNodeData(mode.nodeDataArray[1], "and");
  // mode.setCategoryForNodeData(mode.nodeDataArray[2], "nand");
  // mode.setCategoryForNodeData(mode.nodeDataArray[3], "or");

  diagram.model = mode;

  return diagram;
}

export function buildDefaultNodeTemplate(): go.Part {
  const shape = $(
    go.Shape,
    {
      figure: "RoundedRectangle",
      strokeWidth: 0,
      fill: "white",
    },
    new go.Binding("fill", "color")
  );

  const text = $(
    go.TextBlock,
    {
      margin: 8,
      font: "bold 14px sans-serif",
      stroke: "#333",
    },
    new go.Binding("text", "category")
  );

  return $(go.Node, go.Panel.Auto, shape, text);
}

function createGraphLinksModel(): go.GraphLinksModel {
  const mode = new go.GraphLinksModel();

  mode.linkFromPortIdProperty = "fromPort";
  mode.linkToPortIdProperty = "toPort";

  mode.nodeDataArray = [
    { key: "Alpha", color: "lightblue", category: "??" },
    { key: "Beta", color: "orange", category: "nand" },
    { key: "Gamma", color: "lightgreen", category: "xor" },
    { key: "Delta", color: "pink", category: "xnor" },
  ];

  mode.linkDataArray = [];
  // mode.linkDataArray = [
  //   { from: 'Alpha', to: 'Beta' },
  //   { from: 'Alpha', to: 'Gamma' },
  //   { from: 'Beta', to: 'Beta' },
  //   { from: 'Gamma', to: 'Delta' },
  //   { from: 'Delta', to: 'Alpha' },
  // ];

  return mode;
}

function LoadMode(modeJsonText: string): go.GraphLinksModel {
  const mode = go.GraphLinksModel.fromJson(modeJsonText);
  return mode as go.GraphLinksModel;
}

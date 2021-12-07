import * as go from "../lib/gojs/go";
import { setEnviroment } from "./config";
import { makeLinkTemplate } from "./logic/makeLinkTemplate";
// import * as GO from '../lib/gojs/go-debug'
import { makeSvgNodeTemplateMap } from "./makeSvgNodeTemplateMap";

const $ = go.GraphObject.make;

export function main(elementId: string, env: "local" | "remote") {
  setEnviroment(env);

  const diagram = $(go.Diagram, elementId);

  diagram.nodeTemplateMap = makeSvgNodeTemplateMap();
  diagram.nodeTemplate = buildDefaultNodeTemplate();

  diagram.linkTemplate = makeLinkTemplate();

  const modeString = createGraphLinksModel().toJson();

  let mode = LoadMode(modeString);

  // mode.setCategoryForNodeData(mode.nodeDataArray[0], "circle");
  // mode.setCategoryForNodeData(mode.nodeDataArray[2], "draw");
  mode.setCategoryForNodeData(mode.nodeDataArray[0], "not");
  mode.setCategoryForNodeData(mode.nodeDataArray[1], "and");
  mode.setCategoryForNodeData(mode.nodeDataArray[2], "nand");
  mode.setCategoryForNodeData(mode.nodeDataArray[3], "or");

  diagram.model = mode;

  return diagram;
}

function buildDefaultNodeTemplate(): go.Part {
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
    new go.Binding("text", "key")
  );

  return $(go.Node, go.Panel.Auto, shape, text);
}

function createGraphLinksModel(): go.GraphLinksModel {
  const mode = new go.GraphLinksModel();

  mode.linkFromPortIdProperty = "fromPort";
  mode.linkToPortIdProperty = "toPort";

  mode.nodeDataArray = [
    { key: "Alpha", color: "lightblue" },
    { key: "Beta", color: "orange" },
    { key: "Gamma", color: "lightgreen" },
    { key: "Delta", color: "pink" },
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

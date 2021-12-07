import * as GO from '../lib/gojs/go';
import { setEnviroment } from './config';
// import * as GO from '../lib/gojs/go-debug'
import { makeSvgNodeTemplateMap } from './makeSvgNodeTemplateMap';

const $ = GO.GraphObject.make;

export function main(elementId: string, env: "local" | "remote"): void {

  setEnviroment(env);

  const diagram = $(GO.Diagram, elementId);

  diagram.nodeTemplateMap = makeSvgNodeTemplateMap();
  diagram.nodeTemplate = buildDefaultNodeTemplate();

  const modeString = createGraphLinksModel().toJson();

  let mode = LoadMode(modeString);

  // mode.setCategoryForNodeData(mode.nodeDataArray[0], "circle");
  // mode.setCategoryForNodeData(mode.nodeDataArray[2], "draw");
  mode.setCategoryForNodeData(mode.nodeDataArray[0], 'not');
  mode.setCategoryForNodeData(mode.nodeDataArray[1], 'xnor');
  mode.setCategoryForNodeData(mode.nodeDataArray[2], 'nand');
  mode.setCategoryForNodeData(mode.nodeDataArray[3], 'or');

  diagram.model = mode;
}

function buildDefaultNodeTemplate(): GO.Part {
  const shape = $(
    GO.Shape,
    {
      figure: 'RoundedRectangle',
      strokeWidth: 0,
      fill: 'white',
    },
    new GO.Binding('fill', 'color')
  );

  const text = $(
    GO.TextBlock,
    {
      margin: 8,
      font: 'bold 14px sans-serif',
      stroke: '#333',
    },
    new GO.Binding('text', 'key')
  );

  return $(GO.Node, GO.Panel.Auto, shape, text);
}

function createGraphLinksModel(): GO.GraphLinksModel {
  const mode = new GO.GraphLinksModel();

  mode.nodeDataArray = [
    { key: 'Alpha', color: 'lightblue' },
    { key: 'Beta', color: 'orange' },
    { key: 'Gamma', color: 'lightgreen' },
    { key: 'Delta', color: 'pink' },
  ];

  mode.linkDataArray = [
    { from: 'Alpha', to: 'Beta' },
    { from: 'Alpha', to: 'Gamma' },
    { from: 'Beta', to: 'Beta' },
    { from: 'Gamma', to: 'Delta' },
    { from: 'Delta', to: 'Alpha' },
  ];

  return mode;
}

function LoadMode(modeJsonText: string): GO.GraphLinksModel {
  const mode = GO.GraphLinksModel.fromJson(modeJsonText);
  return mode as GO.GraphLinksModel;
}

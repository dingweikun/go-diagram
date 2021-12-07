export const logicPortStyle = {
  size: 8,
  fill: 'transparent',
  cursor: 'pointer',
};

const suffix = `.svg`;
const local = `img/IEC-Tag/`;
const remote = `https://raw.githubusercontent.com/dingweikun/go-diagram/master/img/IEC-Tag/`;

let path = local;
export function setEnviroment(env: "local" | "remote") {
  path = local
  path = env === "local" ? local : remote;
  console.log(filePath('fileName'));
}

const filePath = (name: string) => path + name + suffix;
export const logicNodeTemp = [
  {
    key: 'not',
    svg: filePath('not'),
    width: 45,
    height: 20,
    ports: [
      { pos: 0.5, inp: true, nam: 'in' },
      { pos: 0.5, inp: false, nam: 'out' },
    ],
  },
  {
    key: 'and',
    svg: filePath('and'),
    width: 65,
    height: 30,
    ports: [],
  },
  {
    key: 'nand',
    svg: filePath('nand'),
    width: 65,
    height: 30,
    ports: [],
  },
  {
    key: 'or',
    svg: filePath('or'),
    width: 65,
    height: 30,
    ports: [],
  },
  {
    key: 'nor',
    svg: filePath('nor'),
    width: 65,
    height: 30,
    ports: [],
  },
  {
    key: 'xor',
    svg: filePath('xor'),
    width: 65,
    height: 30,
    ports: [],
  },
  {
    key: 'xnor',
    svg: filePath('xnor'),
    width: 65,
    height: 30,
    ports: [],
  },
];

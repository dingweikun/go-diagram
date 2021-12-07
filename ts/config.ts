export const logicPortStyle = {
  size: 9,
  focus: "rgba(100,0,100,0.3)",
  cursor: "pointer",
};

const suffix = `.svg`;
const local = `img/IEC-Tag/`;
const remote = `https://raw.githubusercontent.com/dingweikun/go-diagram/master/img/IEC-Tag/`;

let path = local;
export function setEnviroment(env: "local" | "remote") {
  path = local;
  path = env === "local" ? local : remote;
}

const filePath = (name: string) => path + name + suffix;
export const logicNodeTemp = [
  {
    key: "not",
    svg: filePath("not"),
    width: 45,
    height: 20,
    ports: [
      { pos: 0.5, inp: true, nam: "in" },
      { pos: 0.5, inp: false, nam: "out" },
    ],
  },
  {
    key: "and",
    svg: filePath("and"),
    width: 65,
    height: 30,
    ports: [
      { pos: 0.2, inp: true, nam: "a" },
      { pos: 0.8, inp: true, nam: "b" },
      { pos: 0.5, inp: false, nam: "out" },
    ],
  },
  {
    key: "nand",
    svg: filePath("nand"),
    width: 65,
    height: 30,
    ports: [
      { pos: 0.2, inp: true, nam: "a" },
      { pos: 0.8, inp: true, nam: "b" },
      { pos: 0.5, inp: false, nam: "out" },
    ],
  },
  {
    key: "or",
    svg: filePath("or"),
    width: 65,
    height: 30,
    ports: [
      { pos: 0.2, inp: true, nam: "a" },
      { pos: 0.8, inp: true, nam: "b" },
      { pos: 0.5, inp: false, nam: "out" },
    ],
  },
  {
    key: "nor",
    svg: filePath("nor"),
    width: 65,
    height: 30,
    ports: [
      { pos: 0.2, inp: true, nam: "a" },
      { pos: 0.8, inp: true, nam: "b" },
      { pos: 0.5, inp: false, nam: "out" },
    ],
  },
  {
    key: "xor",
    svg: filePath("xor"),
    width: 65,
    height: 30,
    ports: [
      { pos: 0.2, inp: true, nam: "a" },
      { pos: 0.8, inp: true, nam: "b" },
      { pos: 0.5, inp: false, nam: "out" },
    ],
  },
  {
    key: "xnor",
    svg: filePath("xnor"),
    width: 65,
    height: 30,
    ports: [
      { pos: 0.2, inp: true, nam: "a" },
      { pos: 0.8, inp: true, nam: "b" },
      { pos: 0.5, inp: false, nam: "out" },
    ],
  },
];

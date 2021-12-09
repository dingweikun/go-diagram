import { ILogicNodeTempDefine } from "../cosmuse/logic-interface";

export const nodeTemps: ILogicNodeTempDefine[] = [
    {
        "category": "X_ADD",
        "title": "Add",
        "descr": "模拟函数:输出 Y = K1X1 + K2X2 + C",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_MUL",
        "title": "Mul",
        "descr": "模拟函数:输出 Y = (K1X1(n) + C1)(K2X2(n)+C2)",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_DIV",
        "title": "Div",
        "descr": "模拟函数:对2个浮点变量除，输出一个浮点变量",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_SQRT",
        "title": "Sqrt",
        "descr": "模拟函数:对输入浮点变量开方，输出一个浮点变量",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_ABS",
        "title": "Abs",
        "descr": "模拟函数:对输入浮点变量取绝对值，输出一个浮点变量",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_POLYNOM",
        "title": "Polynom",
        "descr": "模拟函数:Y(n)=C0+C1X(n)+C2X(n)**2+C3X(n)**3+C4X(n)**4+C5X(n)**5",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_SUM8",
        "title": "Sum8",
        "descr": "模拟函数:对8个浮点变量加或减，输出一个浮点变量",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X3",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X4",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X5",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X6",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X7",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X8",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "BITDIS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "CNT",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_FX",
        "title": "f(x)",
        "descr": "模拟函数:F(X)由12个坐标点(X1,Y1)...(X12,Y12)确定",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_POW_LOG",
        "title": "Pow/Log",
        "descr": "模拟函数:Mode=0: Y(n)=(k1*B(n)+C1)**(K2*X(n)+C2) Mode!=0: Y(n)=LOG(k1*B(n)+C1) (K2*X(n)+C2)",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "B",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_TRIANG",
        "title": "TriAng",
        "descr": "模拟函数:Y(n)=sin(k*X(n)+C), Y(n)=asin(k*X(n)+C",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_PTCAL",
        "title": "PTCal",
        "descr": "模拟函数:热力性质计算",
        "ports": [
            {
                "portId": "P_S_H",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "T_S_H",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_IPROP",
        "title": "iProp",
        "descr": "模拟函数:区间代数基本性质",
        "ports": [
            {
                "portId": "IVAL1L",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "IVAL1U",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TRIM",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "M",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "W",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "SS",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "LX",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "UX",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_LVLCOMP",
        "title": "LvlComp",
        "descr": "模拟函数:汽包水位补偿模块",
        "ports": [
            {
                "portId": "LV",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "P",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "T",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "LVOUT",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "HH",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "LL",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "H",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "L",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TWOSEL",
        "title": "TwoSel",
        "descr": "控制算法:二选一选择器",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "MD",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "LDB",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "QM",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_THRSEL",
        "title": "ThrSel",
        "descr": "控制算法:三选一选择器",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X3",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_SFT",
        "title": "SFT",
        "descr": "控制算法:按输入开关量的值选择二个模拟量之一作为输出，存放在Y中",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Z",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "DY",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DY1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_HLLMT",
        "title": "HLLmt",
        "descr": "控制算法:将输入限幅在高低限之内。",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "H",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "L",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_HLALM",
        "title": "HLAlm",
        "descr": "控制算法:按输入高低限检查，置位相应的开关指示位",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "H",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "L",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D2",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_RATLMT",
        "title": "RatLmt",
        "descr": "控制算法:输出的速率被限于PL和NL之间，PL和NL以每分钟的变化量为单位",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "PL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "NL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_RATALM",
        "title": "RatAlm",
        "descr": "控制算法:对输入的速率限检查，置位相应的开关指示位",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "PL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "NL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D2",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_DEV",
        "title": "Dev",
        "descr": "控制算法:偏差运算",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D2",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_EPID",
        "title": "EPid",
        "descr": "控制算法:差值输入 PID",
        "ports": [
            {
                "portId": "E",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FF",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "KP",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TI",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TD",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_EPID2",
        "title": "EPid2",
        "descr": "控制算法:带闭锁差值输入 PID",
        "ports": [
            {
                "portId": "E",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "LI",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "LD",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FF",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "KP",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TI",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TD",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "KD",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "DH",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "DL",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_BALAN2",
        "title": "Balan2",
        "descr": "控制算法:二输入平衡模块",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DB",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TR2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y1",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "Y2",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_BALAN8",
        "title": "Balan8",
        "descr": "控制算法:八输入平衡模块",
        "ports": [
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR3",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR4",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR5",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR6",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR7",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR8",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TS2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TS3",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TS4",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TS5",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TS6",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TS7",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TS8",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "S",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_DDS",
        "title": "DDS",
        "descr": "控制算法:数字驱动伺服模块DDS",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "AI",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DIS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "INC",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "DEC",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_SAIPRO",
        "title": "SAIPro",
        "descr": "控制算法:慢信号保护模块SAIPro",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "ACK",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D2",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_SMITH",
        "title": "Smith",
        "descr": "控制算法:史密斯预测器Smith",
        "ports": [
            {
                "portId": "SP",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "PV",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "C",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "K",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "L",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "T",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_DEVSWH",
        "title": "DevSwh",
        "descr": "控制算法:设备切换算法",
        "ports": [
            {
                "portId": "ON",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "OFF",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "START",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "CRIT",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TRIP1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TRIP2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "VC",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D2",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "MODE",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "MDEV",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "FAIL",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_MSFT",
        "title": "MSFT",
        "descr": "控制算法:多切换器，当Z4=1时,Y=X4;当Z3=1时,Y=X3;当Z2=1时,Y=X2;当Z1=1时,Y=X1;当无Z输入时,Y=X0;优先级Z4>Z3>Z2>Z1;D=Z1^Z2^Z3^Z4;",
        "ports": [
            {
                "portId": "X0",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X3",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X4",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Z1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z3",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z4",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "DY0",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DY1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DY2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DY3",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DY4",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_XNETAI",
        "title": "XNetAI",
        "descr": "I/O模块:将其它DPU上的模拟点取下，供其它功能块读取。",
        "ports": [
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_XNETDI",
        "title": "XNetDI",
        "descr": "I/O模块:将其它DPU上的开关点取下，供其它功能块读取。",
        "ports": [
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_XNETAO",
        "title": "XNetAO",
        "descr": "I/O模块:将模拟实时数据在XDPS实时网上广播。",
        "ports": [
            {
                "portId": "IN",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_XNETDO",
        "title": "XNetDO",
        "descr": "I/O模块:将开关实时数据在XDPS实时网上广播。",
        "ports": [
            {
                "portId": "IN",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_XAI",
        "title": "XAI",
        "descr": "I/O模块:输出Y(n)=转换(AD of Addr), AD值为WORD",
        "ports": [
            {
                "portId": "IN",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_XDI",
        "title": "XDI",
        "descr": "I/O模块:输出 Z(n)=转换(bit of Addr)",
        "ports": [
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_XAO",
        "title": "XAO",
        "descr": "I/O模块:输出AD(n)=X(n)*(MaxAD-MinAD)/(MaxX-MinAD)",
        "ports": [
            {
                "portId": "IN",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_XDO",
        "title": "XDO",
        "descr": "I/O模块:输出经转换(求反或不求反)后送端子",
        "ports": [
            {
                "portId": "IN",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_XPI",
        "title": "XPI",
        "descr": "I/O模块:从I/O通道取得脉冲计数",
        "ports": [
            {
                "portId": "IN",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_XPGAI",
        "title": "XPgAI",
        "descr": "I/O模块:将其它Page上的模拟点取下，供本页功能块读取。",
        "ports": [
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_XPGDI",
        "title": "XPgDI",
        "descr": "I/O模块:将其它Page上的开关点取下，供本页功能块读取。",
        "ports": [
            {
                "portId": "OUT",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_XPGAO",
        "title": "XPgAO",
        "descr": "I/O模块:将本页模拟点共享出去，供其它页的XPgAI功能块读取",
        "ports": [
            {
                "portId": "IN",
                "isIn": true,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_XPGDO",
        "title": "XPgDO",
        "descr": "I/O模块:将本页开关点共享出去，供其它页的XPgDO功能块读取",
        "ports": [
            {
                "portId": "IN",
                "isIn": true,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_AND",
        "title": "And",
        "descr": "逻辑运算:2输入与",
        "ports": [
            {
                "portId": "Z1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_OR",
        "title": "Or",
        "descr": "逻辑运算:2输入或",
        "ports": [
            {
                "portId": "Z1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_NOT",
        "title": "Not",
        "descr": "逻辑运算:对一个布尔变量取反操作，输出一个布尔量",
        "ports": [
            {
                "portId": "D",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_XOR",
        "title": "Xor",
        "descr": "逻辑运算:2输入异或",
        "ports": [
            {
                "portId": "Z1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_QOR8",
        "title": "Qor8",
        "descr": "逻辑运算:对8个布尔量QOR操作，输出一个布尔量",
        "ports": [
            {
                "portId": "Z1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z3",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z4",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z5",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z6",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z7",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z8",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_RSFLP",
        "title": "Rsflp",
        "descr": "逻辑运算:构成一个电平型RS触发器，输出2个布尔量",
        "ports": [
            {
                "portId": "S",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "R",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D1",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TIMER",
        "title": "Timer",
        "descr": "逻辑运算:定时器",
        "ports": [
            {
                "portId": "SET",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "RST",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "T",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DT",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_CNT",
        "title": "Cnt",
        "descr": "逻辑运算:用于对开关信号的累计",
        "ports": [
            {
                "portId": "Z",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "RST",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_CMP",
        "title": "Cmp",
        "descr": "逻辑运算:对输入X1，X2进行MODE指定的比较运算",
        "ports": [
            {
                "portId": "X1",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "X2",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_CYCTIME",
        "title": "CycTime",
        "descr": "逻辑运算:对将当前时间与设定时间比较，首次达到或超过设定时间时，输出一个单脉冲宽度为计算周期?",
        "ports": [
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_STEP",
        "title": "Step",
        "descr": "逻辑运算:提供了组级顺控和子组级顺控逻辑的实现方法",
        "ports": [
            {
                "portId": "START",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "PAUSE",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TRACK",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TMODE",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB3",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB4",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB5",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB6",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB7",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB8",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "BITDIS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "RST",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "SEN",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "VC",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "STEP",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "TRUN",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "TRST",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "RUN",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "FAIL",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "END",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STEP1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STEP2",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STEP3",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STEP4",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STEP5",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STEP6",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STEP7",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STEP8",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "MANU",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_SPO",
        "title": "SPO",
        "descr": "逻辑运算:软件脉冲列输出模块SPO",
        "ports": [
            {
                "portId": "Z",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_DSFT",
        "title": "DSFT",
        "descr": "逻辑运算:开关量选择模块DSFT",
        "ports": [
            {
                "portId": "Z1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_FIRST",
        "title": "First",
        "descr": "逻辑运算:找出16个输入中第一个变为1的量，输出其序号",
        "ports": [
            {
                "portId": "Z1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z3",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z4",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z5",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z6",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z7",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z8",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z9",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z10",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z11",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z12",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z13",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z14",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z15",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z16",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "R",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "YP",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D1",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_S_MA",
        "title": "S/MA",
        "descr": "操作器:实现回路的软手操，接收操作指令",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOM",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOA",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "SPH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "SPL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YB",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "SP",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "YBO",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "S",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_KBML",
        "title": "KBML",
        "descr": "操作器:输出一个可被操作的浮点变量，接收增减输出操作指令",
        "ports": [
            {
                "portId": "TR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_DEVICE",
        "title": "DEVICE",
        "descr": "操作器:设备控制算法完成与设备输入，输出和其它联锁信号的接口",
        "ports": [
            {
                "portId": "EMD1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "EMD2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D1P",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D2P",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOM",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "REQA",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "DMD1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "DMD2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "DMD3",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FB2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "LOC",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "LPWR",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FAULT",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOTP",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "VC",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "OUT1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "OUT2",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "OUT3",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "M",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "A",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STAT",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "FL",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "TRIP",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "OPFL",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "FORBID",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_D_MA",
        "title": "D/MA",
        "descr": "操作器:输出一个可被操作的布尔变量，接收操作指令，Set,Rset,Toggle",
        "ports": [
            {
                "portId": "TR",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_ADS_MA",
        "title": "ADS/MA",
        "descr": "操作器:实现回路的软手操，接收操作指令",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOM",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOA",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "SPH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "SPL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YB",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "SP",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "YBO",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "SS",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "INC",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "DEC",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_EDEVICE",
        "title": "EDEVICE",
        "descr": "操作器:电气设备控制算法完成与设备输入，输出和其它联锁信号的接口",
        "ports": [
            {
                "portId": "AH",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "AF",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "HP",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FP",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOM",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "REQA",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOACK",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "HF",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FF",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "HW",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "FW",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "LOCAL",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "EVC",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "H1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "F1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "H2",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "F2",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "MOD",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "STAT",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "FL",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "TRIP",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "BS",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_ES_MA",
        "title": "ES/MA",
        "descr": "操作器:实现回路的软手操，接收操作指令",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "OV",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "OS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOM",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TOA",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "SPH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "SPL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YH",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YL",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "YB",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "SPTR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "FB",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TOL",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "APSTR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "APSTS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "SP",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "YBO",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "SS",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "INC",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "DEC",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "L",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TQ",
        "title": "TQ",
        "descr": "特殊模块:取输入测点所属功能块的状态，并转换为布尔量输出，在输入指针为NULL时，输出全1",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Q",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "EN",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "OFW",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "IOB",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "TOUT",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_B16TOL",
        "title": "B16ToL",
        "descr": "特殊模块:将16个布尔变量转换为长整形变量，Z1到Z16依次转存到Y的b0到b15位，若某个Z为空脚，其Y中的对应位置0，且不影响Y的品质",
        "ports": [
            {
                "portId": "Z1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z3",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z4",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z5",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z6",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z7",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z8",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z9",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z10",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z11",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z12",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z13",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z14",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z15",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z16",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_LTOB16",
        "title": "LToB16",
        "descr": "特殊模块:将长整形变量转换为16个布尔变量，X的b0到b15依次转存到Z1到Z16",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z2",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z3",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z4",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z5",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z6",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z7",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z8",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z9",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z10",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z11",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z12",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z13",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z14",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z15",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Z16",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_LTOF",
        "title": "LTOF",
        "descr": "特殊模块:将长整型模拟变量值以定义的方式转换为浮点值。",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_TDPU",
        "title": "TDPU",
        "descr": "特殊模块:取指定节点的状态",
        "ports": [
            {
                "portId": "N",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "CPUA",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "ANET",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "BNET",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "AIO",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "BIO",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "FIRST",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "CPUB",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TCARD",
        "title": "TCard",
        "descr": "特殊模块:取指定I/O站中I/O卡件的品质",
        "ports": [
            {
                "portId": "Q",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TNODE",
        "title": "TNode",
        "descr": "特殊模块:取指定I/O站的品质",
        "ports": [
            {
                "portId": "Q",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TPRO",
        "title": "TPRO",
        "descr": "特殊模块:XDPS时间处理模块TPRO",
        "ports": [
            {
                "portId": "TDAY1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TMS1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TDAY2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TMS2",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TDAY",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "TMS",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TREC",
        "title": "TREC",
        "descr": "特殊模块:时间记录模块TREC",
        "ports": [
            {
                "portId": "TDAY1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TMS1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Z",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TDAY",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "TMS",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TTOS",
        "title": "TtoS",
        "descr": "特殊模块:时间转换模块TtoS",
        "ports": [
            {
                "portId": "TDAY1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "TMS1",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "YEAR",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "MON",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "DAY",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "HOUR",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "MIN",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "SEC",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "MSEC",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_STOT",
        "title": "StoT",
        "descr": "特殊模块:时间转换模块StoT",
        "ports": [
            {
                "portId": "YEAR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "MON",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DAY",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "HOUR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "MIN",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "SEC",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "MSEC",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TDAY1",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "TMS1",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_AXSEL",
        "title": "AxSel",
        "descr": "特殊模块:模拟量隐式选择器",
        "ports": [
            {
                "portId": "P",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "B",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "I",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_TNODE2",
        "title": "TNode2",
        "descr": "特殊模块:取指定I/O站的品质",
        "ports": [
            {
                "portId": "Q",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "Q1",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_CHGPARA",
        "title": "ChgPara",
        "descr": "特殊模块:修改功能块参数",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "AXB",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "DXB",
                "isIn": true,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_LEADLAG",
        "title": "LeadLag",
        "descr": "时间过程函数:超前滞后模块",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_DELAY",
        "title": "Delay",
        "descr": "时间过程函数:滞后模块",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TR",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "TS",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_DIFF",
        "title": "Diff",
        "descr": "时间过程函数:微分模块",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_TSUM",
        "title": "TSum",
        "descr": "时间过程函数:对输入模拟变量在Set指定的一段内进行累加，平均，或取最大，最小值，并记录前次统计值",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "SET",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "YJ",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_FILTER",
        "title": "Filter",
        "descr": "时间过程函数:对输入模拟变量进行8阶数字滤波",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_RMP",
        "title": "Rmp",
        "descr": "时间过程函数:斜坡信号发生器",
        "ports": [
            {
                "portId": "BASE",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "END",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "HOLD",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "RST",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_FT",
        "title": "f(t)",
        "descr": "时间过程函数:段信号发生器",
        "ports": [
            {
                "portId": "HOLD",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "RST",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_FT12",
        "title": "F(t12)",
        "descr": "时间过程函数:12段信号发生器",
        "ports": [
            {
                "portId": "X",
                "isIn": true,
                "type": "Analog"
            },
            {
                "portId": "SX",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "HOLD",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "SET",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "SY",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "SD",
                "isIn": false,
                "type": "Digital"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    },
    {
        "category": "X_TSUMD",
        "title": "TSumD",
        "descr": "时间过程函数:对输入开关量在On指定的一段时间内对0或1计时，并记录前次统计值",
        "ports": [
            {
                "portId": "Z",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "SET",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "YJ",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            }
        ]
    },
    {
        "category": "X_SIGNAL",
        "title": "Signal",
        "descr": "时间过程函数:信号发生器",
        "ports": [
            {
                "portId": "PAUSE",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "RST",
                "isIn": true,
                "type": "Digital"
            },
            {
                "portId": "Y",
                "isIn": false,
                "type": "Analog"
            },
            {
                "portId": "D",
                "isIn": false,
                "type": "Digital"
            }
        ]
    }
];

export function mokeNodeDatas(): any[] {
    const nodeDatas: any[] = [];
    nodeTemps.forEach(tp => {
        const dat = {
            category: tp.category,
            tag: tp.category
        }
        nodeDatas.push(dat);
    });
    return nodeDatas;
}


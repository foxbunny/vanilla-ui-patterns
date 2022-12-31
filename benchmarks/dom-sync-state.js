{
  'use strict'

  let
    // Raw data that is never modified
    data = [
      {
        id: 'rlworew78m',
        price: 8.87,
        date: 1669721460963,
      },
      {
        id: '7fodvdwn09n',
        price: 17.95,
        date: 1668745177715,
      },
      {
        id: 'ngxrtix0cr',
        price: 12.15,
        date: 1668177194120,
      },
      {
        id: '7178dgwy7zw',
        price: 15.21,
        date: 1667980731681,
      },
      {
        id: '8pj7ye0y68p',
        price: 16.95,
        date: 1667856661642,
      },
      {
        id: 'v5ngdzkonl8',
        price: 8.35,
        date: 1667560206212,
      },
      {
        id: 'ydhuuc9cr9q',
        price: 5.42,
        date: 1667250823728,
      },
      {
        id: '0uq86863mizi',
        price: 4.65,
        date: 1667066183275,
      },
      {
        id: 'cz8twezjhn5',
        price: 8.03,
        date: 1666876022681,
      },
      {
        id: 'caxii3pkfuf',
        price: 16.59,
        date: 1666623805520,
      },
      {
        id: 'k6pi8ldzd6',
        price: 15.37,
        date: 1665560617029,
      },
      {
        id: 'f7mwmr70kh',
        price: 3.57,
        date: 1665293944855,
      },
      {
        id: 'zm8o2y0jvj',
        price: 9.92,
        date: 1665290457005,
      },
      {
        id: '2lw0uach0gc',
        price: 12.35,
        date: 1665268611870,
      },
      {
        id: 'a1axeklmp3q',
        price: 7.5,
        date: 1665214616833,
      },
      {
        id: 'xe04j7lvk2l',
        price: 19.35,
        date: 1664831441477,
      },
      {
        id: '7m651omcm9c',
        price: 10.14,
        date: 1664764949605,
      },
      {
        id: 'p11nnq2kso',
        price: 9.91,
        date: 1664676889451,
      },
      {
        id: '51na9vwnfxt',
        price: 2.03,
        date: 1664579644033,
      },
      {
        id: 'x7mghv61clk',
        price: 19.36,
        date: 1664264161810,
      },
      {
        id: '4bt9w0cdywl',
        price: 6.81,
        date: 1664080531717,
      },
      {
        id: 'ln12xuow1f',
        price: 0.93,
        date: 1664073026122,
      },
      {
        id: 'osdglykbpfa',
        price: 15.36,
        date: 1663958012832,
      },
      {
        id: 'dmfrt0a2p2c',
        price: 8.91,
        date: 1663745198432,
      },
      {
        id: 'cphh0kc0y5m',
        price: 0.65,
        date: 1663302629718,
      },
      {
        id: 'ru2szpubrun',
        price: 3.97,
        date: 1663152983898,
      },
      {
        id: 'bvzcoeh4fgv',
        price: 11.05,
        date: 1662872734274,
      },
      {
        id: 'ycwmr2mems',
        price: 3.46,
        date: 1662609490861,
      },
      {
        id: 'l0pu0443g0o',
        price: 17.12,
        date: 1662373500508,
      },
      {
        id: 'ru6qqrc2q3',
        price: 9.74,
        date: 1662313519647,
      },
      {
        id: 'nx5h42rv3vb',
        price: 11.77,
        date: 1661634840059,
      },
      {
        id: 'kfrstl8ii09',
        price: 8,
        date: 1661409471996,
      },
      {
        id: 'hqmqhosi7ll',
        price: 8.99,
        date: 1660695404760,
      },
      {
        id: '2c5pc34vjix',
        price: 8.18,
        date: 1660632793912,
      },
      {
        id: '32qfja0whc8',
        price: 12,
        date: 1660125378613,
      },
      {
        id: '1688m51gstl',
        price: 2.57,
        date: 1659942744592,
      },
      {
        id: '25u9chuhm2y',
        price: 16.18,
        date: 1659904414046,
      },
      {
        id: 'ogpyzhqnvq',
        price: 14.43,
        date: 1659770269433,
      },
      {
        id: '2kehrn6vs2e',
        price: 7.58,
        date: 1659698220632,
      },
      {
        id: 'pvzpt18yx9k',
        price: 15.31,
        date: 1659086369675,
      },
      {
        id: 'd99yb8pu6he',
        price: 7.51,
        date: 1659030793877,
      },
      {
        id: 'uv1cqrbxowa',
        price: 7.37,
        date: 1658258088569,
      },
      {
        id: 'o58fs6okz6',
        price: 8.9,
        date: 1657846589681,
      },
      {
        id: '6tjnzeqeklr',
        price: 6.83,
        date: 1657792845924,
      },
      {
        id: '5navmbuahvw',
        price: 8.86,
        date: 1655551953538,
      },
      {
        id: '7ncc9rzog2e',
        price: 12.38,
        date: 1655382250423,
      },
      {
        id: 'oq2o8iuckl',
        price: 16.13,
        date: 1654779582909,
      },
      {
        id: 'be8ionwwm6s',
        price: 6.06,
        date: 1654611921511,
      },
      {
        id: 'm839ft8g5if',
        price: 10.49,
        date: 1654343062995,
      },
      {
        id: 'r40i9svt57',
        price: 18.8,
        date: 1654122925787,
      },
      {
        id: 'qxyt3kjahab',
        price: 4.23,
        date: 1654097622903,
      },
      {
        id: 'br5pn811x0c',
        price: 8.98,
        date: 1653433745006,
      },
      {
        id: 'vf6djv9wohc',
        price: 9.76,
        date: 1653069811923,
      },
      {
        id: 'oefy9h0n6',
        price: 5.31,
        date: 1652129266881,
      },
      {
        id: 'hzqqmiyc5g9',
        price: 7.49,
        date: 1652023791373,
      },
      {
        id: 'h30eesbh5c4',
        price: 0.19,
        date: 1651544320714,
      },
      {
        id: 'sndnbs9g3h',
        price: 18.96,
        date: 1651459940385,
      },
      {
        id: '732tjqpudlr',
        price: 2.15,
        date: 1651303432747,
      },
      {
        id: 'fludjvdf0x5',
        price: 11.58,
        date: 1650691066291,
      },
      {
        id: 'swggrizj86n',
        price: 11.32,
        date: 1650126745862,
      },
      {
        id: 'dz1qbvxj1y9',
        price: 3.37,
        date: 1650017944570,
      },
      {
        id: 'bv1d3t4p4y5',
        price: 16.52,
        date: 1649377647792,
      },
      {
        id: 'gaz7vmda3d6',
        price: 12.23,
        date: 1649288052448,
      },
      {
        id: '52dmrdchgqf',
        price: 0.05,
        date: 1649003569295,
      },
      {
        id: 'ttfnxsh0r7k',
        price: 18.57,
        date: 1648892424323,
      },
      {
        id: 'o416r50bm4s',
        price: 13.68,
        date: 1648369611544,
      },
      {
        id: 'yjjbkwmymn',
        price: 0.48,
        date: 1648182117477,
      },
      {
        id: 'n4qe69sgxyc',
        price: 13.47,
        date: 1648008011919,
      },
      {
        id: '9ca2kc3i6a8',
        price: 15.24,
        date: 1647667078593,
      },
      {
        id: 'tg3tqjanl3',
        price: 2.74,
        date: 1647115858076,
      },
      {
        id: 'lcpcgf4hcg',
        price: 17.9,
        date: 1646978834297,
      },
      {
        id: 'us90ft8r3oh',
        price: 2.56,
        date: 1646495921023,
      },
      {
        id: '8xw7dk40fv',
        price: 0.54,
        date: 1646305537897,
      },
      {
        id: '448muid7l8n',
        price: 4.51,
        date: 1646067795373,
      },
      {
        id: '9j8fqds4pp9',
        price: 5.72,
        date: 1645876282150,
      },
      {
        id: 'gy11p568rt6',
        price: 11.48,
        date: 1645782714398,
      },
      {
        id: '4glus67vnuu',
        price: 4.72,
        date: 1645765462021,
      },
      {
        id: '2fsoyu2gx2m',
        price: 11.06,
        date: 1645315041000,
      },
      {
        id: 'eliuoxlx7ig',
        price: 3.26,
        date: 1645267670709,
      },
      {
        id: '8lnega50h2s',
        price: 3.95,
        date: 1644818357621,
      },
      {
        id: 'bwjh4bkxchi',
        price: 1.4,
        date: 1644722811682,
      },
      {
        id: 'c47xv6y6psv',
        price: 11.32,
        date: 1644630855918,
      },
      {
        id: 'e8yidjglnrc',
        price: 12.36,
        date: 1644236241980,
      },
      {
        id: 'hs4mwy8ss9u',
        price: 12.56,
        date: 1643833512143,
      },
      {
        id: '8h0mintgzbi',
        price: 12.88,
        date: 1643509521522,
      },
      {
        id: 'pupsfxxlml9',
        price: 18.86,
        date: 1643486106586,
      },
      {
        id: 'he71p2y8da',
        price: 12.26,
        date: 1642973563315,
      },
      {
        id: 'kviz9o370jr',
        price: 0.55,
        date: 1642813343913,
      },
      {
        id: 'k23vn7lqyxs',
        price: 6.67,
        date: 1642703497915,
      },
      {
        id: '0r2crers2l1o',
        price: 11.75,
        date: 1642433597299,
      },
      {
        id: 'vnv6fudcqo',
        price: 2.56,
        date: 1641787644462,
      },
      {
        id: '3glhmgh2zeb',
        price: 0.77,
        date: 1641641064428,
      },
      {
        id: 'm70n3sfjlpk',
        price: 1.03,
        date: 1641604438695,
      },
      {
        id: 'u8ryfxrupa8',
        price: 7.25,
        date: 1641095783719,
      },
      {
        id: 'xhjtvzu5log',
        price: 10.03,
        date: 1640818855967,
      },
      {
        id: 'dehxnaicszh',
        price: 15.25,
        date: 1640414402596,
      },
      {
        id: 'x0uo8smjbg',
        price: 9.69,
        date: 1639036390627,
      },
      {
        id: 'f3vfeulcvhd',
        price: 2.58,
        date: 1638977664057,
      },
      {
        id: 'i2jnqy2fn4h',
        price: 3,
        date: 1638814730299,
      },
      {
        id: 'nj9jpkjaje',
        price: 6.99,
        date: 1638344885604,
      },
      {
        id: 'sdczunmwk6i',
        price: 13.99,
        date: 1638039952510,
      },
      {
        id: '1pxll13aysh',
        price: 1.43,
        date: 1637904715415,
      },
      {
        id: 'rgbyw9i70p',
        price: 6.82,
        date: 1637043712394,
      },
      {
        id: 'g1koxkmc2d',
        price: 13.18,
        date: 1636406263322,
      },
      {
        id: 'xb4nx628kxd',
        price: 7.9,
        date: 1635577191334,
      },
      {
        id: 'bfk86ldq7jg',
        price: 0.16,
        date: 1635493651538,
      },
      {
        id: 'x82kp2q0by',
        price: 1.2,
        date: 1635088521299,
      },
      {
        id: 'jyhhhtz35ul',
        price: 10.54,
        date: 1635081657487,
      },
      {
        id: 'a3io76hervq',
        price: 6.29,
        date: 1634786136648,
      },
      {
        id: '6vz3zvwo64q',
        price: 5.94,
        date: 1634783882619,
      },
      {
        id: 'xqknv0jzolm',
        price: 14,
        date: 1634273500015,
      },
      {
        id: 'uktm8v1q8cq',
        price: 10.11,
        date: 1634207613211,
      },
      {
        id: '3iabwy8n8xi',
        price: 13.85,
        date: 1633918852359,
      },
      {
        id: 'g3vkub949f6',
        price: 17.94,
        date: 1633908925537,
      },
      {
        id: '2m0uft5kka3',
        price: 0.4,
        date: 1633904307155,
      },
      {
        id: '9ui9l4jy904',
        price: 13.12,
        date: 1633819788238,
      },
      {
        id: '1xa6vjotibk',
        price: 16.78,
        date: 1633811530055,
      },
      {
        id: 'etdj33x3p0u',
        price: 6.8,
        date: 1633302866943,
      },
      {
        id: 'luduss5w1df',
        price: 19.99,
        date: 1633242543854,
      },
      {
        id: 'blgc01uyksp',
        price: 4.12,
        date: 1632986969877,
      },
      {
        id: 'fh33xtrw98n',
        price: 11.53,
        date: 1632694701188,
      },
      {
        id: 'xeegwoe5lqg',
        price: 17.1,
        date: 1632563843926,
      },
      {
        id: 'j9ouf7yg7x',
        price: 12.55,
        date: 1632133018604,
      },
      {
        id: '82kvcqrhozh',
        price: 3.17,
        date: 1632086798989,
      },
      {
        id: '81oza89lmsu',
        price: 18.13,
        date: 1632019973098,
      },
      {
        id: '7agadrtyc0u',
        price: 1.34,
        date: 1631854809573,
      },
      {
        id: 'ld2u4261wed',
        price: 0.12,
        date: 1631778381275,
      },
      {
        id: 'zo183fzc1rn',
        price: 3.84,
        date: 1631488694016,
      },
      {
        id: 'a84kai76jhh',
        price: 15.54,
        date: 1631268158123,
      },
      {
        id: 'tegfwc0qruk',
        price: 16.36,
        date: 1630805387158,
      },
      {
        id: 'xge64b1ybas',
        price: 16.1,
        date: 1630659629765,
      },
      {
        id: 'od85anmjh2',
        price: 4.29,
        date: 1630210255716,
      },
      {
        id: '8ph7dtldq5v',
        price: 19.36,
        date: 1630061579093,
      },
      {
        id: 'pbvfw6wd0gj',
        price: 16.26,
        date: 1629840500409,
      },
      {
        id: 'wasc1qypnvm',
        price: 12.48,
        date: 1628963928020,
      },
      {
        id: 'j85mkv38fr',
        price: 2.45,
        date: 1628002163072,
      },
      {
        id: 'c4niz6z96cg',
        price: 7.29,
        date: 1627637026390,
      },
      {
        id: 'd03svp8micf',
        price: 10.34,
        date: 1627593366507,
      },
      {
        id: 'nzvldrcspc',
        price: 13.4,
        date: 1627521046816,
      },
      {
        id: 'oy6v66qnfb',
        price: 2.89,
        date: 1627347714413,
      },
      {
        id: 'wap25g1g5u',
        price: 15.15,
        date: 1627310423870,
      },
      {
        id: '9644e9o9nvs',
        price: 18.85,
        date: 1626989273706,
      },
      {
        id: 'hkupkwo98r6',
        price: 9.56,
        date: 1626504226502,
      },
      {
        id: '42e87dll8cu',
        price: 13.09,
        date: 1625626376681,
      },
      {
        id: 'obytfhgier',
        price: 1.08,
        date: 1625605217923,
      },
      {
        id: 'zafq4t03ybq',
        price: 15.81,
        date: 1625519668203,
      },
      {
        id: 'xf7un471h2n',
        price: 4.51,
        date: 1625135856962,
      },
      {
        id: '9uv77cgqtw9',
        price: 1,
        date: 1625104057928,
      },
      {
        id: '0eas57cgim5',
        price: 0,
        date: 1624900811304,
      },
      {
        id: 'q64ys2yahci',
        price: 6.4,
        date: 1624813855653,
      },
      {
        id: 'p0kkb19u9yn',
        price: 4.11,
        date: 1624697663272,
      },
      {
        id: '7jtdbho2pzu',
        price: 12.08,
        date: 1624067645079,
      },
      {
        id: 'nu5hlki07dl',
        price: 0.21,
        date: 1623838393877,
      },
      {
        id: '2w01nn1hf4t',
        price: 10.42,
        date: 1623069053683,
      },
      {
        id: '3hu5006j7s7',
        price: 17.07,
        date: 1622771876554,
      },
      {
        id: '78rxjpv011y',
        price: 15.37,
        date: 1622767108206,
      },
      {
        id: 'q7taagdqub',
        price: 18.64,
        date: 1622487406708,
      },
      {
        id: 'xjr63f79ncs',
        price: 15.41,
        date: 1622469070242,
      },
      {
        id: 'w0yumztv2d',
        price: 11.54,
        date: 1622301496373,
      },
      {
        id: 'uo9dhah4d9d',
        price: 12.35,
        date: 1621968567221,
      },
      {
        id: 'mmeifqo39bc',
        price: 0.98,
        date: 1621279490002,
      },
      {
        id: 'rf4a83afmu',
        price: 4.07,
        date: 1620688602042,
      },
      {
        id: 'hv2925g6ema',
        price: 10.34,
        date: 1620438598799,
      },
      {
        id: 'hoa35y8j0m',
        price: 7.66,
        date: 1620429123912,
      },
      {
        id: 'jtagvb43l2',
        price: 9.85,
        date: 1620102882369,
      },
      {
        id: 'asr023vldo7',
        price: 7.7,
        date: 1619430488052,
      },
      {
        id: 'qudkbwa3r7p',
        price: 5.26,
        date: 1618168510241,
      },
      {
        id: 'q6jlb4t8sn',
        price: 12.18,
        date: 1617164740682,
      },
      {
        id: 'megdutou29b',
        price: 6.95,
        date: 1616991760882,
      },
      {
        id: 'v7bihve2ke',
        price: 13.66,
        date: 1616655078668,
      },
      {
        id: '8nhu5zmzta3',
        price: 0.44,
        date: 1616576043960,
      },
      {
        id: 'afhdpo7kjc',
        price: 17.11,
        date: 1616383172421,
      },
      {
        id: 'vsxt89vz0t',
        price: 11.34,
        date: 1616247441172,
      },
      {
        id: 'hufadj1is6',
        price: 11.46,
        date: 1615769951128,
      },
      {
        id: 'dxr0kelmzr',
        price: 3.19,
        date: 1615435831920,
      },
      {
        id: 'fmk5ew6g95g',
        price: 18.22,
        date: 1613906838980,
      },
      {
        id: 'knh69xypsra',
        price: 7.57,
        date: 1613639159398,
      },
      {
        id: 'sa609b0osxk',
        price: 13.93,
        date: 1613439891733,
      },
      {
        id: 'bi85t1kbuvs',
        price: 6.24,
        date: 1612547275165,
      },
      {
        id: 'smhxm27d68s',
        price: 4.75,
        date: 1611564396698,
      },
      {
        id: 'mqyzngvz76',
        price: 14.68,
        date: 1611506279185,
      },
      {
        id: '6mpr1vqh317',
        price: 9.01,
        date: 1611466317970,
      },
      {
        id: 'yvubz1q889',
        price: 9.64,
        date: 1611338803141,
      },
      {
        id: 'fj572x7w14',
        price: 10.28,
        date: 1611131428012,
      },
      {
        id: 'w13r7s0b6ap',
        price: 2.84,
        date: 1610742242004,
      },
      {
        id: 'ujb7v9wlso',
        price: 1.44,
        date: 1610649806088,
      },
      {
        id: 'y7pnit46de',
        price: 13.37,
        date: 1610528221400,
      },
      {
        id: 'u466p1esusf',
        price: 19.29,
        date: 1610408644384,
      },
      {
        id: 'v8je7qa2nqm',
        price: 12.59,
        date: 1610166701361,
      },
      {
        id: '0p5ihpqjn7i',
        price: 0.42,
        date: 1610109523736,
      },
      {
        id: '72abwv3gy0v',
        price: 12.9,
        date: 1609993938806,
      },
      {
        id: 'el3n5e306vi',
        price: 15.64,
        date: 1609849083984,
      },
      {
        id: '6s9tttntlsm',
        price: 11.06,
        date: 1609493753758,
      },
      {
        id: '2wvsqxbs9m6',
        price: 8.41,
        date: 1609432978687,
      },
      {
        id: 'klzdj1odoz8',
        price: 18.85,
        date: 1609131187546,
      },
      {
        id: 'hyf1g8ha9as',
        price: 0.98,
        date: 1609130995108,
      },
      {
        id: 'g080pb32xk',
        price: 19.52,
        date: 1609038420270,
      },
      {
        id: 'uqoc1qcu8q8',
        price: 4.87,
        date: 1608571018827,
      },
      {
        id: 'v4bd1ubflh',
        price: 14.1,
        date: 1608375584811,
      },
      {
        id: 'z5kpftegwan',
        price: 0.3,
        date: 1608025290410,
      },
      {
        id: '5oyk1cl8bjm',
        price: 12.64,
        date: 1607773948134,
      },
      {
        id: '60gswdpoykr',
        price: 7.46,
        date: 1606765097805,
      },
      {
        id: 'z7yqpya75o',
        price: 5.37,
        date: 1606733663157,
      },
      {
        id: 'ga27t2pw514',
        price: 16.78,
        date: 1606143602039,
      },
      {
        id: 'btav1d5pfmt',
        price: 1.09,
        date: 1605932701511,
      },
      {
        id: 'b0yzzkg3drg',
        price: 19.66,
        date: 1605901245160,
      },
      {
        id: 'meorlrza35q',
        price: 10.37,
        date: 1605839197094,
      },
      {
        id: 'h4cahanoxr',
        price: 19.69,
        date: 1605819816225,
      },
      {
        id: 'iuupmayede',
        price: 13.45,
        date: 1605746222056,
      },
      {
        id: 'xm0lptsnoxd',
        price: 2.55,
        date: 1605417206209,
      },
      {
        id: 'c0qoem84gqu',
        price: 6.68,
        date: 1605409917116,
      },
      {
        id: '4h6wy8m6ab8',
        price: 13.99,
        date: 1605169609782,
      },
      {
        id: 'wsiwszvw1qp',
        price: 2.94,
        date: 1604785515682,
      },
      {
        id: '6yit173qcrg',
        price: 0.61,
        date: 1604711812551,
      },
      {
        id: 'o3a0aykotvr',
        price: 17.93,
        date: 1604146997477,
      },
      {
        id: 'sr9ypagexw',
        price: 15.99,
        date: 1603566908919,
      },
      {
        id: 'riuysjlsnsp',
        price: 15.75,
        date: 1603299595304,
      },
      {
        id: 'vjbjd68cjnr',
        price: 7.42,
        date: 1603124158583,
      },
      {
        id: '06eifdz77oly',
        price: 15.59,
        date: 1602820286765,
      },
      {
        id: 'yza0iwbfuyr',
        price: 2.91,
        date: 1602773798691,
      },
      {
        id: '9ynmcrol1yv',
        price: 1.68,
        date: 1602514294158,
      },
      {
        id: 'nxemxtw2ed',
        price: 0.92,
        date: 1602357435448,
      },
      {
        id: 't0fwbyc5oro',
        price: 13.86,
        date: 1602093011338,
      },
      {
        id: 'fht35i7v4f7',
        price: 7.33,
        date: 1601741146955,
      },
      {
        id: 'g8y8n2gdt0n',
        price: 0.88,
        date: 1601166996319,
      },
      {
        id: '5qhaludc1um',
        price: 12.35,
        date: 1600491352874,
      },
      {
        id: 's4unfratd8',
        price: 19.17,
        date: 1600485561960,
      },
      {
        id: 'fymcoxmwc5w',
        price: 18.29,
        date: 1600431464616,
      },
      {
        id: 'luvrhpg7cc',
        price: 8.61,
        date: 1600006333223,
      },
      {
        id: '5vaun16d9r',
        price: 12.94,
        date: 1599671057267,
      },
      {
        id: '6o04lc7k9c8',
        price: 14.04,
        date: 1599668565490,
      },
      {
        id: '60cts7mb8co',
        price: 18.99,
        date: 1599296800743,
      },
      {
        id: 'l9xkmz3o57s',
        price: 15.36,
        date: 1598407651846,
      },
      {
        id: 'a9d0cykd3m5',
        price: 4.73,
        date: 1598102632640,
      },
      {
        id: 'uhl615af27',
        price: 17.13,
        date: 1597715284053,
      },
      {
        id: '8hmezlscdmg',
        price: 6.93,
        date: 1597691634855,
      },
      {
        id: 'th74toct01',
        price: 15.71,
        date: 1597216968910,
      },
      {
        id: 'qdpeermctkd',
        price: 13.21,
        date: 1596777245370,
      },
      {
        id: 'phbz1kxl7xb',
        price: 8.19,
        date: 1596131049290,
      },
      {
        id: '1pnw1dgb81i',
        price: 5.61,
        date: 1595776042252,
      },
      {
        id: '4uu4gwr3a3c',
        price: 14.14,
        date: 1595153636534,
      },
      {
        id: '73rfmuc9cch',
        price: 17,
        date: 1594991256301,
      },
      {
        id: 'xj5sffz83u',
        price: 0.77,
        date: 1594919447832,
      },
      {
        id: 't757llwecd9',
        price: 14.43,
        date: 1594464447034,
      },
      {
        id: '802pprahzfe',
        price: 9.81,
        date: 1593777756284,
      },
      {
        id: 'onn99ms0ioj',
        price: 4.85,
        date: 1593776055218,
      },
      {
        id: 'uvxe7thryk',
        price: 0.83,
        date: 1593669885504,
      },
      {
        id: 'e30xkmxcowf',
        price: 9.01,
        date: 1593393088951,
      },
      {
        id: 'bp614sieaa9',
        price: 13.4,
        date: 1593364675064,
      },
      {
        id: 'yu6u40ttx6',
        price: 13,
        date: 1593296110662,
      },
      {
        id: 'fghj1l83kln',
        price: 12.38,
        date: 1592746103178,
      },
      {
        id: 'mzg7mju4ufe',
        price: 2.21,
        date: 1592486217366,
      },
      {
        id: '4d17wdz2cwl',
        price: 7.15,
        date: 1592280693846,
      },
      {
        id: '2saulhiduxk',
        price: 0.28,
        date: 1592189959141,
      },
      {
        id: 'i27ddlsujjm',
        price: 1.03,
        date: 1592061674525,
      },
      {
        id: '15okyk8s019',
        price: 9.29,
        date: 1592013513375,
      },
      {
        id: 'yu1eodgumy',
        price: 8.58,
        date: 1591988266010,
      },
      {
        id: 'swkyd2ixm9',
        price: 17.5,
        date: 1591816302710,
      },
      {
        id: 'dybnqlbc5yq',
        price: 16.8,
        date: 1591795521052,
      },
      {
        id: 'vwscjzr5qgo',
        price: 16.63,
        date: 1590981311925,
      },
      {
        id: 'yjh3v0zs97p',
        price: 8.16,
        date: 1590216479512,
      },
      {
        id: 'lnmya9bybuf',
        price: 9.28,
        date: 1590009244399,
      },
      {
        id: 'nklksr7tckh',
        price: 8.14,
        date: 1589642874939,
      },
      {
        id: 'di37mhom6w7',
        price: 4.17,
        date: 1589559309897,
      },
      {
        id: 'm9ufcdpecvm',
        price: 8.58,
        date: 1589397957744,
      },
      {
        id: '71b500ykivu',
        price: 9.65,
        date: 1589360272765,
      },
      {
        id: 'j04co9stsw',
        price: 0.31,
        date: 1588596885510,
      },
      {
        id: 't8415wyud5g',
        price: 12.12,
        date: 1587950571769,
      },
      {
        id: 'm8c4btcdlm',
        price: 19.39,
        date: 1587487454937,
      },
      {
        id: '1irhjkvkzoa',
        price: 14.8,
        date: 1586635891133,
      },
      {
        id: '5ev5vhk5518',
        price: 6.05,
        date: 1585899177433,
      },
      {
        id: 'vnrjyln3td',
        price: 11.66,
        date: 1585805850057,
      },
      {
        id: 'gcb64ck1r9g',
        price: 1.12,
        date: 1585667590892,
      },
      {
        id: 'adah7zyt995',
        price: 13.55,
        date: 1585428737879,
      },
      {
        id: '1dm6me3ni1n',
        price: 13.96,
        date: 1585413778838,
      },
      {
        id: 'ij7b3feb2rs',
        price: 5.85,
        date: 1585349991872,
      },
      {
        id: 'h8nhz11vml7',
        price: 17.32,
        date: 1585307686557,
      },
      {
        id: '88tq528xi3e',
        price: 17.2,
        date: 1584515895415,
      },
      {
        id: '2z2h5bk1nex',
        price: 1.83,
        date: 1583173909161,
      },
      {
        id: 'dggdof71y3k',
        price: 8.91,
        date: 1582333135943,
      },
      {
        id: 'e6p6yaua75n',
        price: 8.89,
        date: 1582126461314,
      },
      {
        id: '7k21mwwnz1e',
        price: 2.36,
        date: 1581927584624,
      },
      {
        id: '58828xobc6m',
        price: 19,
        date: 1581788294382,
      },
      {
        id: 'dwxr9rm7rks',
        price: 2.59,
        date: 1581780744155,
      },
      {
        id: 'wzo2ehl6xnl',
        price: 13.4,
        date: 1581754623849,
      },
      {
        id: 'j56oa14yped',
        price: 15.99,
        date: 1581464110122,
      },
      {
        id: '1gtk9ifiyj3h',
        price: 2.9,
        date: 1581417733401,
      },
      {
        id: 'lwp174xq7xd',
        price: 16.66,
        date: 1580980096096,
      },
      {
        id: '5fryf1wej1q',
        price: 5.84,
        date: 1580492294856,
      },
      {
        id: 'ao1e0uy3yv',
        price: 9.72,
        date: 1580448060190,
      },
      {
        id: 'olic6za0f1a',
        price: 19.23,
        date: 1578543406788,
      },
      {
        id: 'wh7niy6nd9',
        price: 19.06,
        date: 1577545219821,
      },
      {
        id: '6j8xmubv8jj',
        price: 18.49,
        date: 1577306334059,
      },
      {
        id: '411zi20p08a',
        price: 8.88,
        date: 1577282047977,
      },
      {
        id: 'mbd063p0oyp',
        price: 16.23,
        date: 1577177397198,
      },
      {
        id: 'txgpxe3h0ce',
        price: 11.88,
        date: 1577127727622,
      },
      {
        id: 'hzhmn51zntv',
        price: 3.16,
        date: 1577085333516,
      },
      {
        id: '92ajgu6co8f',
        price: 13.91,
        date: 1577040340867,
      },
      {
        id: 'iqqac8alnwm',
        price: 18.5,
        date: 1576367378671,
      },
      {
        id: 'cnxsq2k6xkk',
        price: 9.15,
        date: 1576149978271,
      },
    ],
    // We keep an in-memory copy of the live data, as that's why we normally do this type of architecture
    liveData = data.slice(0),
    $tableBody = document.querySelector('tbody'),
    originalHTML = $tableBody.innerHTML,
    // by price ascending
    sort = data => data.sort((a, b) => a.price - b.price),
    // only purchases made in march any year
    filter = data => data.filter(x => new Date(x.date).getMonth() === 2),
    syncToDOM = data => {
      let ids = Array.from(data, x => x.id)
      // Identify nodes that are not in the data object and hide them
      for (let $tr of $tableBody.children) if (!ids.includes($tr.id)) $tr.hidden = true
      // Append the data in correct order
      for (let id of ids) $tableBody.append(document.getElementById(id))
    },
    teardown = () => new Promise(res => {
      $tableBody.innerHTML = originalHTML
      setTimeout(res, 1)
    })

  __BENCHMARK(() => new Promise(res => {
    let copy = data.slice(0)
    syncToDOM(liveData = sort(filter(copy)))
    setTimeout(res, 1, teardown) // allow for repaint
  }))
}

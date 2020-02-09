import { Component, OnInit } from '@angular/core';
import style from './scrolling-hints.component.less'

@Component({
  selector: 'app-scrolling-hints',
  templateUrl: './scrolling-hints.component.html',
  styleUrls: ['./scrolling-hints.component.less']
})
export class ScrollingHintsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    '第一卷 坟 呐喊 野草',
    '第二卷 热风 彷徨 朝花夕拾 故事新编',
    '第三卷 华盖集 华盖集续编 而已集',
    '第四卷 三闲集 二心集 伪自由书',
    '第五卷 南腔北调集 准风月谈 花边文学',
    '第六卷 且介亭杂文 且介亭杂文二编 且介亭杂文续编',
    '第七卷 致许广平书信集 集外集 集外集拾遗',
    '第八卷 會稽郡故書雜集 古小说钩沉',
    '第九卷 嵇康集 中国小说史略',
    '第十卷 小说旧闻钞 唐宋传奇集 汉文学史纲要',
    '第十一卷 月界旅行 地底旅行 域外小说集 现代小说译丛 现代日本小说集 工人绥惠略夫',
    '第十二卷 一个青年的梦 爱罗先珂童话集 桃色的云',
    '第十三卷 苦闷的象征 出了象牙之塔 思想·山水·人物',
    '第十四卷 小约翰 表 俄罗斯的童话 附：药用植物',
    '第十五卷 近代美术史潮论 艺术论',
    '第十六卷 壁下译丛 译丛补',
    '第十七卷 艺术论 现代新兴文学的诸问题 文艺与批评 文艺政策',
    '第十八卷 十月 毁灭 山民牧唱 坏孩子和别的奇闻',
    '第十九卷 竖琴 一天的工作',
    '第二十卷 死魂灵 附录：自传 鲁迅先生年谱 鲁迅译著书目续编 鲁迅先生的名·号·笔名录',
  ]

  code = style
}

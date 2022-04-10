<template>
  <div id="canvas-parent">
    <div id="clibdiv" class="tooldiv" @paste="getClipboardFiles($event)" @copy="getCopyData($event)" >
      <div class="svgdiv col-1" :class="{'active':drawType=='text'}">
        <svg class="icon" viewBox="0 0 1024 1024" p-id="1332" width="200" height="200" data-toolbar-style="common" aria-hidden="true" @click="Draw('text')">
          <path class="svg-text-color" fill="#FF0000" p-id="1333" d="M560.54518557 220.72888889v728.17777778h-97.09037114V220.72888889H172.18370333V123.6385189h679.63259334v97.09036999z"></path>
        </svg>
      </div>
      <div class="svgdiv col-1" :class="{'active':drawType=='line'}">
        <svg class="icon" viewBox="0 0 1024 1024" p-id="1622" width="200" height="200" data-toolbar-style="common" aria-hidden="true" @click="Draw('line')">
          <path class="svg-border-color" fill="#FF0000" p-id="1623" d="M989.86666667 468.11428587H34.13333333c-5.36380907 0-9.7523808 4.38857173-9.7523808 9.7523808v68.26666666c0 5.36380907 4.38857173 9.7523808 9.7523808 9.7523808h955.73333334c5.36380907 0 9.7523808-4.38857173 9.7523808-9.7523808v-68.26666666c0-5.36380907-4.38857173-9.7523808-9.7523808-9.7523808z"></path>
        </svg>
      </div>
      <div class="svgdiv col-1" :class="{'active':drawType=='dotted-line'}">
        <svg class="icon" viewBox="0 0 1024 1024" p-id="1187" width="200" height="200" data-toolbar-style="common" aria-hidden="true" @click="Draw('dotted-line')">
          <path class="svg-border-color" d="M84.8 468.8H43.2C17.6 468.8 0 486.4 0 512s17.6 43.2 43.2 43.2h43.2C110.4 555.2 128 537.6 128 512s-17.6-43.2-43.2-43.2zM384 468.8h-43.2c-25.6 0-43.2 17.6-43.2 43.2s17.6 43.2 43.2 43.2H384c25.6 0 43.2-17.6 43.2-43.2s-17.6-43.2-43.2-43.2zM683.2 468.8H640c-25.6 0-43.2 17.6-43.2 43.2s17.6 43.2 43.2 43.2h43.2c25.6 0 43.2-17.6 43.2-43.2-1.6-25.6-17.6-43.2-43.2-43.2zM980.8 468.8h-43.2c-25.6 0-43.2 17.6-43.2 43.2s17.6 43.2 43.2 43.2h43.2c25.6 0 43.2-17.6 43.2-43.2s-17.6-43.2-43.2-43.2z" fill="#FF0000" p-id="1188"></path>
        </svg>
      </div>
        <div class="svgdiv col-1" :class="{'active':drawType=='arrow'}">
          <svg class="icon" viewBox="0 0 1024 1024" p-id="1477" width="200" height="200" data-toolbar-style="common" aria-hidden="true" @click="Draw('arrow')">
            <path class="svg-border-color" d="M780.40082603 338.65221341l-576.95452402 576.95452402-94.78490623-94.7849078L685.54888611 243.86730561H177.10226483V109.8009592h737.36490919v737.36490762h-134.06634799V338.65221341z" fill="#FF0000" p-id="1478"></path>
          </svg>
        </div>
      <div class="svgdiv col-1" :class="{'active':drawType=='circle'}">
        <svg class="icon" viewBox="0 0 1024 1024" p-id="2387" width="200" height="200" data-toolbar-style="common" aria-hidden="true" @click="Draw('circle')">
          <path class="svg-border-color" d="M512 990.4c-64.53333333 0-127.25333333-12.69333333-186.24-37.65333333-56.96-24.10666667-108.16-58.56-152-102.50666667-43.94666667-43.84-78.4-95.04-102.50666667-152C46.29333333 639.25333333 33.6 576.53333333 33.6 512s12.69333333-127.25333333 37.65333333-186.24c24.10666667-56.96 58.56-108.16 102.50666667-152.10666667s95.04-78.4 152.10666667-102.50666666c58.88-24.85333333 121.6-37.54666667 186.13333333-37.54666667s127.25333333 12.69333333 186.24 37.65333333c56.96 24.10666667 108.16 58.56 152.10666667 102.50666667 43.94666667 43.94666667 78.4 95.04 102.50666666 152.10666667 24.96 58.98666667 37.65333333 121.70666667 37.65333334 186.24s-12.69333333 127.25333333-37.65333334 186.24c-24.21333333 56.85333333-58.66666667 108.05333333-102.61333333 151.89333333-43.94666667 43.94666667-95.04 78.4-152.10666667 102.50666667-58.88 24.96-121.6 37.65333333-186.13333333 37.65333333z m0-887.46666667c-225.6 0-409.06666667 183.46666667-409.06666667 409.06666667s183.46666667 409.06666667 409.06666667 409.06666667 409.06666667-183.46666667 409.06666667-409.06666667-183.46666667-409.06666667-409.06666667-409.06666667z" fill="#FF0000" p-id="2388"></path>
          <path class="svg-fill-color" d="M512 512m-416.52964091 0a416.52964091 416.52964091 0 1 0 833.05928182 0 416.52964091 416.52964091 0 1 0-833.05928182 0Z" fill="none" p-id="2389"></path>
        </svg>
      </div>
      <div class="svgdiv col-1" :class="{'active':drawType=='rect'}">
        <svg class="icon" viewBox="0 0 1024 1024" p-id="3126" width="200" height="200" data-toolbar-style="common" aria-hidden="true" @click="Draw('rect')">
          <path class="svg-border-color" d="M926.25224691 180.59820247a82.85044939 82.85044939 0 0 1 82.85044939 82.85044938v497.1026963a82.85044939 82.85044939 0 0 1-82.85044939 82.85044938H97.74775309a82.85044939 82.85044939 0 0 1-82.85044939-82.85044938V263.44865185a82.85044939 82.85044939 0 0 1 82.85044939-82.85044938h828.50449382zM97.74775309 263.44865185v497.1026963h828.50449382V263.44865185H97.74775309z" fill="#FF0000" p-id="3127"></path>
          <path class="svg-fill-color" d="M97.74775309 263.44865185h828.50449382v497.1026963H97.74775309z" fill="none" p-id="3128"></path>
        </svg>
      </div>
        <div class="svgdiv col-1" :class="{'active':drawType=='dialog'}">
          <svg class="icon" id="dialog" aria-hidden="true" @click="Draw('dialog')"><use xlink:href="#icon-ali-dialog"></use></svg>
      </div>
        <div class="svgdiv col-1" :class="{'active':drawType=='spacearrow-right'}">
          <svg class="icon" id="spacearrow-right" aria-hidden="true" @click="Draw('spacearrow-right')"><use xlink:href="#icon-ali-spacearrow-up"></use></svg>
        </div>
        <div class="svgdiv col-1" :class="{'active':drawType=='spacearrow-up'}">
          <svg class="icon" id="spacearrow-up" aria-hidden="true" @click="Draw('spacearrow-up')"><use xlink:href="#icon-ali-spacearrow-right"></use></svg>
      </div>
        <div class="svgdiv col-1" :class="{'active':drawType=='color-1'}">
          <svg class="icon" viewBox="0 0 1024 1024" p-id=" 1337" width="200" height="200" aria-hidden="true" @click="colorInputClick($event, 1,0)">
            <path d="M860.8 785.06666667H750.18666667l-79.04-205.54666667H348.37333333L273.81333333 785.06666667H163.2L458.45333333 34.13333333h107.09333334L860.8 785.06666667zM640.10666667 494.72L522.98666667 182.50666667c-3.62666667-10.02666667-7.68-27.41333333-12.05333334-52.37333334h-2.45333333c-3.62666667 22.61333333-7.89333333 40.10666667-12.48 52.37333334L379.84 494.72h260.26666667z" fill="#000000" p-id="1338"></path>
            <path class="svg-text-color" d="M2.27555555 876.08888889h1019.4488889v145.63555556H2.27555555z" fill="#000000" p-id="1339"></path>
          </svg>
        </div>
      <div class="svgdiv col-1" :class="{'active':drawType=='color-0'}">
        <svg class="icon" viewBox="0 0 1024 1024" p-id="1187" width="200" height="200" id="color-0" aria-hidden="true" @click="colorInputClick($event, 0,0)">
          <path class="svg-fill-color" d="M7.13007408 822.68918518h1009.73985184v194.18074074H7.13007408z" fill="#2C2C2C" p-id="1188"></path>
          <path d="M485.96423111 236.59747555l154.4704 154.4704q51.49013333 51.49013333 0 102.98026667L485.96423111 648.51626667q-51.48899555 51.49013333-102.98026666 0L228.51584 494.04700445q-51.49013333-51.48899555 0-102.98026667l154.4704-154.46926223q51.49013333-51.49013333 102.98026667 0z" fill="#FFFFFF" p-id="1189"></path>
          <path d="M373.85982103 163.7950957l-96.11946666-96.08063052 54.91431348-54.95314963 143.5772397 143.53840356a89.60713008 89.60713008 0 0 1 8.00024653 6.99050667l219.69609007 219.69609007a77.6722963 77.6722963 0 0 1 0 109.82862697L484.23215408 712.51103289a77.6722963 77.6722963 0 0 1-109.86746311 0L154.70743703 492.81494282a77.6722963 77.6722963 0 0 1 0-109.82862697l219.152384-219.19122015z m206.49179972 205.44322371l-0.54370608 0.50486992-150.994944-150.994944L216.26273185 431.259648h426.11021748l-62.02132858-62.02132859zM803.27111111 745.01688889a97.09037037 97.09037037 0 0 1-97.09037036-97.09037037c0-53.59388445 82.13845333-151.30563318 97.09037036-151.30563319 14.95191703 0 97.09037037 97.67291259 97.09037037 151.30563319a97.09037037 97.09037037 0 0 1-97.09037037 97.09037037z" fill="#2C2C2C" p-id="1190"></path>
        </svg>
      </div>
      <div class="svgdiv col-1" :class="{'active':drawType=='color-2'}">
        <svg class="icon" viewBox="0 0 1028 1024" p-id="1334" width="200" height="200" aria-hidden="true" @click="colorInputClick($event, 2,0)">
          <path d="M320 768H0V0h834v64H64v640h256z" fill="#2C2C2C" p-id="1335"></path>
          <path class="svg-border-color" d="M0 832h1024v192H0z" fill="#2C2C2C" p-id="1336"></path>
          <path d="M1004.3 83.8c-26.4-26.4-68.9-26.4-95.2 0l-47.6 47.8 95.2 95.5 47.6-47.7c26.3-26.5 26.3-69.2 0-95.6z m-191.9 95L526.8 465.2l95.2 95.5 285.6-286.4zM384 704l190.4-95.5-95.2-95.5z" fill="#2C2C2C" p-id="1337"></path>
        </svg>
      </div>
      <div class="svgdiv" @click="NumShow()">
        <svg class="icon fz-26" viewBox="0 0 1026 1024" p-id="2273" width="200" height="200">
          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#f4ea2a" p-id="2274"></path>
          <path d="M512 732.16m-48.128 0a48.128 48.128 0 1 0 96.256 0 48.128 48.128 0 1 0-96.256 0Z" fill="#2c2c2c" p-id="2275"></path>
          <path d="M512 646.144c22.528 0 39.936-17.408 39.936-39.936V284.672c0-22.528-17.408-39.936-39.936-39.936s-39.936 17.408-39.936 39.936v322.56c0 21.504 17.408 38.912 39.936 38.912z" fill="#2c2c2c" p-id="2276"></path>
        </svg>
      </div>
      <div class="numsdiv" v-show="numshow">
        <div class="svgdiv" :class="{'active':drawType=='round-1'}">
          <svg class="icon fz-26" id="round-1" aria-hidden="true" @click="Draw('round-1')"><use xlink:href="#icon-ali-round_1"></use></svg>
        </div>
        <div class="svgdiv" :class="{'active':drawType=='round-2'}">
          <svg class="icon fz-26" id="round-2" aria-hidden="true" @click="Draw('round-2')"><use xlink:href="#icon-ali-round_2"></use></svg>
        </div>
        <div class="svgdiv" :class="{'active':drawType=='round-3'}">
          <svg class="icon fz-26" id="round-3" aria-hidden="true" @click="Draw('round-3')"><use xlink:href="#icon-ali-round_3"></use></svg>
        </div>
        <div class="svgdiv" :class="{'active':drawType=='round-4'}">
          <svg class="icon fz-26" id="round-4" aria-hidden="true" @click="Draw('round-4')"><use xlink:href="#icon-ali-round_4"></use></svg>
        </div>
        <div class="svgdiv" :class="{'active':drawType=='round-5'}">
          <svg class="icon fz-26" id="round-5" aria-hidden="true" @click="Draw('round-5')"><use xlink:href="#icon-ali-round_5"></use></svg>
        </div>
        <div class="svgdiv" :class="{'active':drawType=='round-6'}">
          <svg class="icon fz-26" id="round-6" aria-hidden="true" @click="Draw('round-6')"><use xlink:href="#icon-ali-round_6"></use></svg>
        </div>
        <div class="svgdiv" :class="{'active':drawType=='round-7'}">
          <svg class="icon fz-26" id="round-7" aria-hidden="true" @click="Draw('round-7')"><use xlink:href="#icon-ali-round_7"></use></svg>
        </div>
        <div class="svgdiv" :class="{'active':drawType=='round-8'}">
          <svg class="icon fz-26" id="round-8" aria-hidden="true" @click="Draw('round-8')"><use xlink:href="#icon-ali-round_8"></use></svg>
        </div>
        <div class="svgdiv" :class="{'active':drawType=='round-9'}">
          <svg class="icon fz-26" id="round-9" aria-hidden="true" @click="Draw('round-9')"><use xlink:href="#icon-ali-round_9"></use></svg>
        </div>
      </div>
      <div class="svgdiv">
        <select v-model="BZSelected" @change="SelectBorderSize($event)">
          <option value="1">边框:1px</option>
          <option value="2">边框:2px</option>
          <option value="4">边框:4px</option>
        </select>
      </div>
      <div class="svgdiv">
        <select v-model="FZSelected" @change="SelectTextSize($event)">
          <option value="16">字体:16px</option>
          <option value="24">字体:24px</option>
          <option value="36">字体:36px</option>
        </select>
      </div>
      <span style="float: right;">复制图片后点击此处，按Ctrl+V复制图片</span>
    </div>
    <input type="hidden" id="hiddenImg" :value="src"/>
    <div id="box" class="canvas-box" :style="canvasDivStyle" @contextmenu.stop.prevent="onContextmenu"></div>
    <a-modal :title="colorType" style="top: calc(50%);" width="400px" :visible="colorSelectShow" :mask="false" @ok="confirmColor" @cancel="colorSelectShow=false;drawType=null">
      <div>
        <div style="float:left">
          <input :key="color" 
            type="button" 
            class="color-input" 
            v-for="color in colors" 
            :style="{backgroundColor: color,backgroundImage:color == '' ? 'url(/images/NoColor.svg)' : ''}" 
            @click="changeColor(color)" />
        </div>
        <div class="manage-mid-wrap" style="float:right">
          <span class="color-picker-wrap">
            <input class="input pick-input" v-model="colorTmp" type="text" />
            <span id="J_color_pick_icon" class="color-picker-item" :style="{backgroundColor: colorTmp}"></span>
          </span>
        </div>
        <div style="clear:both"></div>
      </div>
    </a-modal>
  </div>
</template>

<script>
  // A4:794×1123 A3:1123x1588
  import { fabric } from 'fabric'
  import ImageCompressor from 'image-compressor.js'
  const width = window.innerWidth
  const height = window.innerHeight
  HTMLElement.prototype.pressKey = function (code) {
    var evt = document.createEvent('UIEvents')
    evt.keyCode = code
    evt.initEvent('keydown', true, true)
    this.dispatchEvent(evt)
  }
  export default {
    name: 'ComplexTable',
    components: {
    },
    props: {
      height: {
        type: Number,
        default: 600
      },
      width: {
        type: Number,
        default: 1200
      }
    },
    watch: {
      'bcolor': function (n, o) {
        console.log(this.nowFabricItem)
        if (this.nowFabricItem.type === 'textbox') {
          this.nowFabricItem.set({ backgroundColor: n })
        } else {
          this.nowFabricItem.set({ fill: n })
        }

        this.canvas.renderAll()
      },
      'fcolor': function (n, o) {
        // console.log(this.nowFabricItem.type)
        if (this.nowFabricItem.type === 'textbox') {
          this.nowFabricItem.set({ fill: n })
          this.canvas.renderAll()
        }
      },
      'scolor': function (n, o) {
        // console.log(this.nowFabricItem.type)
        this.nowFabricItem.set({ stroke: n })
        this.canvas.renderAll()
      },
      'drawType':function(n,o){
        // console.log(n)
        if(n!=null){
          this.canvas.skipTargetFind = true
          this.canvas.selection = false
        }else{
          this.canvas.skipTargetFind = false
          this.canvas.selection = true
        }
      },
    },
    data () {
      return {
        numshow:false,
        colorSetIndex: 0,
        colorTmp: '',
        colors:['#000000','#0000FF','#FFC000', '#FFFF00','#00FF00','#FF66CC', '#9900FF','#FF0000','#FFFFFF',''],
        colorSelectShow: false,
        colorSelectTop: '50%',
        colorSelectLeft: '50%',
        colorRange:0,//颜色的范围，默认为0，表示全局，1为选中的组件
        sizeRange:0,//大小的范围，默认为0，表示全局，1为选中的组件
        stageSize: {
          width: width,
          height: height
        },
        src: null,
        animation: null,
        canvas: null,
        bcolor: '#409EFF',
        fcolor: '#409EFF',
        scolor: '#409EFF',
        nowFabricItem: null,
        canvasDivStyle: {
          height: this.Height + 'px',
          width: this.Width + 'px',
          border: '0px solid #001100'
        },
        colorSelect: {
          zIndex: 1000,
          position: 'fixed',
          top: this.colorSelectTop,
          left: this.colorSelectLeft,
          width: '40px',
          height: '30px'
        },
        mouseFrom:{x:0,y:0},
        mouseTo:{x:0,y:0},
        zoom:1,
        drawingObject:null,
        drawType:null,
        doDrawing:false,//绘制状态
        step:0,//默认0，表示初始化，不用绘制
        // items:[]
        selectedItem:null,//默认选中的icon
        colorType:null,//调色板名称
        jsonData: require('../src/test.json'),//Json对象，测试用
        //各种默认颜色以及大小
        defaultBorderColor:'#000000',//默认边框线颜色
        defaultFillColor:'',//默认填充色
        defaultFontColor:'#000000',//默认字体颜色
        defaultBackgroundColor:'',//默认背景填充色(文本框)
        defaultSize:24,//默认字体大小
        defaultBorderSize:2,//默认边线大小
        selectedTextSize:24,//选中的字体大小
        selectedBorderSize:2,//选中的边线大小
        deletetips:"确认删除吗？删除后不可恢复！",//删除提示
      }
    },
    created () {
      //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
      this.BZSelected = this.defaultBorderSize;
      this.FZSelected = this.defaultSize;
    },
    mounted () {
      console.log(this.$route.query)//接收参数
      setInterval(()=>{
        this.jsonData =JSON.stringify(this.canvas.toJSON().objects)
        this.src = this.canvas.toDataURL({format: 'png'})
      },1000)
      $(".svg-border-color").attr("fill", this.SetIconColor(this.defaultBorderColor));
      $(".svg-text-color").attr("fill", this.SetIconColor(this.defaultFontColor));
      $(".svg-fill-color").attr("fill",  this.SetIconColor(this.defaultFillColor));
      // console.log(document.getElementById('tr1'))
      // 画布初始化s
      const el=document.getElementById('box')
      const tt = document.createElement('canvas') // 创建canvas元素
      tt.id="c"
      tt.style="border:1px solid #999;"
      el.appendChild(tt) // 把canvas元素节点添加在el元素下
      tt.setAttribute('width', el.offsetWidth) // 将canvas元素设置与父元素同宽
      tt.setAttribute('height', this.height) //将canvas元素设置与父元素同高
      this.canvas = new fabric.Canvas('c',{ preserveObjectStacking: true})
      const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E"
      const cloneIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A"
      const deleteImg = document.createElement('img')
      deleteImg.src = deleteIcon
      const cloneImg = document.createElement('img')
      cloneImg.src = cloneIcon

      fabric.Object.prototype.transparentCorners = true
      fabric.Object.prototype.cornerColor = '#304156'
      fabric.Object.prototype.cornerStyle = 'circle'

      fabric.Object.prototype.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -16,
        offsetX: 16,
        cursorStyle: 'pointer',
        mouseUpHandler: this.deleteObject,
        render: this.renderIcon(deleteImg),
        cornerSize: 24
      })

      fabric.Object.prototype.controls.clone = new fabric.Control({
        x: -0.5,
        y: -0.5,
        offsetY: -16,
        offsetX: -16,
        cursorStyle: 'pointer',
        mouseUpHandler: this.cloneObject,
        render: this.renderIcon(cloneImg),
        cornerSize: 24
      })
      const that = this

      this.canvas.on('selection:updated', function (options) {
        that.nowFabricItem = options.target
        // console.log(that.nowFabricItem+"----update")
      })
      this.canvas.on('selection:created', function (options) {
        that.nowFabricItem = options.target
        // console.log(that.nowFabricItem)
      })
      let moveCount=1//移动次数
      this.canvas.on('mouse:down',function (options) {
        if(that.drawType!=null){
          that.mouseFrom.x=options.e.offsetX/that.zoom
          that.mouseFrom.y=options.e.offsetY/that.zoom
          that.doDrawing=true
          that.step=1
        }
      })
      this.canvas.on('mouse:up',function (options) {
        if(that.drawType!=null){
          that.mouseTo.x=options.e.offsetX/that.zoom
          that.mouseTo.y=options.e.offsetY/that.zoom
          that.drawingObject=null
          that.doDrawing=false
          moveCount=1
          if(that.drawType=="text"){
            that.Draw(that.drawType)
          }
          if(that.drawType.startsWith("round-")){
            that.DrawRound(that.drawType)
          }
          that.step=0
          that.drawType=null
          that.selectedItem=null
        }
      })
      this.canvas.on('mouse:move',function (options) {
        if(that.drawType!=null){
          if(moveCount%2&&!that.doDrawing){
            return
          }
          moveCount++
          that.mouseTo.x=options.e.offsetX/that.zoom
          that.mouseTo.y=options.e.offsetY/that.zoom
          if(that.drawType!="text"){
            that.Draw(that.drawType)
          }
        }
      })
      this.canvas.on('object:moving', function (e) {
        //设置移动不允许超出canvas范围
        const obj = e.target;
         // if object is too big ignore
        if(obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width){
            return;
        }        
        obj.setCoords();
        // top-left  corner
        if(obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0){
            obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top);
            obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left);
        }
        // bot-right corner
        if(obj.getBoundingRect().top+obj.getBoundingRect().height  > obj.canvas.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > obj.canvas.width){
            obj.top = Math.min(obj.top, obj.canvas.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top);
            obj.left = Math.min(obj.left, obj.canvas.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left);
        }
      });
      // this.canvas.on('object:scaling', (e) => { 
      //   //拉伸不变形的设置
      //   var o = e.target
      //   if (!o.strokeWidthUnscaled && o.strokeWidth) { 
      //      o.strokeWidthUnscaled = o.strokeWidth
      //   } 
      //   if (o.strokeWidthUnscaled) {
      //     switch(o.type){
      //       case "rect":
      //         o.width=o.width* Math.abs(o.scaleX)
      //         o.height=o.height*Math.abs(o.scaleY)  
      //         o.scaleX=1
      //         o.scaleY=1
      //         o.cacheWidth=o.width
      //         o.cacheHeight=o.height
      //         break
      //       case "circle":
      //         o.width=o.width* Math.abs(o.scaleX)
      //         o.height=o.height*Math.abs(o.scaleY)
      //         o.radius=o.height/2
      //         o.scaleX=1
      //         o.scaleY=1
      //         //以下属性不设置会出现选中边框和圆形边框不匹配的问题
      //         o.cacheWidth=o.width
      //         o.cacheHeight=o.height
      //         break
      //       case "Dialog":
      //         console.log(o.points)
      //         break
      //       default:
      //         console.log(o.type,"yuan.gao")
      //         // console.log(this.mouseFrom,this.mouseTo)
      //         // o.strokeWidth = o.strokeWidthUnscaled / o.scaleY;
      //         break;
      //     }
      //   } 
      // })
      // this.canvas.on('mouse:dblclick',function(options){
      //   console.log(that.nowFabricItem)
      //   console.log('double-click')
      //   //
      // })
      // window.onresize = ()=>{
      //   //调用methods中的事件
      //   console.log(el.offsetWidth)
      // }
      document.body.onkeydown = function (e) {
        console.log('key pressed, code=' + e.keyCode)
        if (e.keyCode == 46) {
          const type = that.nowFabricItem.type
          if(type=="group"||type=="activeSelection"){
            let result = confirm(that.deletetips)
            if(result){
              if(type=="activeSelection"){
                that.canvas.remove(that.nowFabricItem.toGroup())
              }else{
                that.canvas.remove(that.nowFabricItem)
              }
            }
          }else{
            that.canvas.remove(that.nowFabricItem)
          }
          that.canvas.requestRenderAll()
        }
      }
      // 水平及其垂直缩放锁定，中心点确定
      // fabric.Image.fromURL('/images/1.gif', function (img) {
      //     const oImg = img.set({ left: 150, top: 0 }).scale(0.4)
      //     canvas.add(oImg)
      //   })
      // fabric.Image.fromURL('/images/1.png', function(img) {
      //     let oImg = img.set({ left: 150, top: 0}).scale(0.4);
      //     canvas.add(oImg);
      //     console.log(oImg)
      //   });
      this.$nextTick(() => {
      })
    },
    computed: {
    },
    methods: {
      Getbase64Data(){
        return this.canvas.toDataURL()
      },
      SetIconColor(value){
        let setcolor = value;
        if (setcolor == "") {setcolor = "none";}
        return setcolor;
      },
      SelectBorderSize(e){
        this.sizeRange=0
        this.selectedBorderSize=parseInt(e.target.value)
        this.EditBorderSize()
      },
      SelectTextSize(e){
        this.sizeRange=0
        this.selectedTextSize=parseInt(e.target.value)
        this.EditTextSize()
      },
      NumShow(){
        //numshow
        this.numshow=!this.numshow;
      },
      Draw(drawType){
        if(this.drawingObject){
          this.canvas.remove(this.drawingObject)
        }
        this.selectedItem=drawType
        this.drawType=drawType
		
		
        // let logtext=drawType+":"+this.doDrawing+"mouseFrom.x:"+this.mouseFrom.x+",mouseFrom.y"+this.mouseFrom.y+",mouseTo.x"+this.mouseTo.x+",mouseTo.y"+this.mouseTo.y;
        if(this.step!=0){
          // console.log(logtext)
          switch (drawType) {
            case "line"://直线
              this.addLine(this.mouseFrom,this.mouseTo)
              break
            case "dotted-line":
              this.addDottedLine(this.mouseFrom,this.mouseTo)
              break
            case "text"://文本
              this.addText(this.mouseFrom)
              this.doDrawing=false
              break
            case "arrow"://单箭头
              this.addArrow(this.mouseFrom,this.mouseTo)
              break
            case "circle"://正圆
              this.addCircle(this.mouseFrom,this.mouseTo)
              break
            case "ellipse"://椭圆
              this.addEllipse(this.mouseFrom,this.mouseTo)
              break
            case "rect"://长方形
              this.addRect(this.mouseFrom,this.mouseTo)
              break
            case "dialog"://对话框
              this.addDialog(this.mouseFrom,this.mouseTo)
              break
            case "spacearrow-right"://横向箭头
              this.addSpaceArrow(this.mouseFrom,this.mouseTo,"right")
              break
            case "spacearrow-up"://横向箭头
              this.addSpaceArrow(this.mouseFrom,this.mouseTo,"up")
              break
            default:
              break
          }
        }
        this.canvas.renderAll()
      },
      DrawRound(drawType){
        if(this.drawingObject){
          this.canvas.remove(this.drawingObject)
        }
        this.selectedItem=drawType
        this.drawType=drawType
        if(this.step!=0){
          const round=drawType.split('-')[1]
          // console.log(round)
          this.addRound(this.mouseFrom,round)    
        }
        this.numshow=false;
      },
      //绘制箭头的方法
      //theta:角度，headlen:长度
      drawArrow(fromX,fromY,toX,toY,theta,headlen){
        theta = typeof theta != "undefined" ? theta : 20;
        headlen = typeof theta != "undefined" ? headlen : 10;
        // 计算各角度和对应的P2,P3坐标
        let angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
                angle1 = (angle + theta) * Math.PI / 180,
                angle2 = (angle - theta) * Math.PI / 180,
                topX = headlen * Math.cos(angle1),
                topY = headlen * Math.sin(angle1),
                botX = headlen * Math.cos(angle2),
                botY = headlen * Math.sin(angle2);
        let arrowX = fromX - topX,
                arrowY = fromY - topY;
        let path = " M " + fromX + " " + fromY;
        path += " L " + toX + " " + toY;
        arrowX = toX + topX;
        arrowY = toY + topY;
        path += " M " + arrowX + " " + arrowY;
        path += " L " + toX + " " + toY;
        arrowX = toX + botX;
        arrowY = toY + botY;
        path += " L " + arrowX + " " + arrowY;
        return path;
      },
      //len:对话框下面的两个点间距 对话框，M是起点坐标 L是相邻点坐标 Z让路径构成闭合回路
      drawDialog(fromX,fromY,toX,toY,len){
        let array=[];
        array.push({x:fromX,y:fromY});
        array.push({x:toX,y:toY});
        array.push({x:(toX + 2*len),y:toY});
        if(toY>fromY){
          array.push({x:(toX + 2*len),y:(toY + len)});
          array.push({x:(toX -2*len),y:(toY + len)});
        }else{
          array.push({x:(toX + 2*len),y:(toY - len)});
          array.push({x:(toX -2*len),y:(toY - len)});
        }
        array.push({x:(toX -2*len),y:toY});
        array.push({x:(toX - len),y:toY});
        return array
      },
      DrawSpaceArrowRight(fromX,fromY,toX,num){
        let array=[];
        array.push({x:fromX,y:fromY+num});
        if(toX>fromX){
          if((toX-fromX)<=4*num){
            array.push({x:(toX+fromX)/2,y:fromY+num});
            array.push({x:(toX+fromX)/2,y:fromY+2*num});
          }else{
            array.push({x:toX-2*num,y:fromY+num});
            array.push({x:toX-2*num,y:fromY+2*num});
          }
          array.push({x:toX,y:fromY});
          if((toX-fromX)<=4*num){
            array.push({x:(toX+fromX)/2,y:fromY-2*num});
            array.push({x:(toX+fromX)/2,y:fromY-num});
          }else{
            array.push({x:toX-2*num,y:fromY-2*num});
            array.push({x:toX-2*num,y:fromY-num});
          } 
        }else{
          if(Math.abs((toX-fromX))<=4*num){
            array.push({x:(fromX+toX)/2,y:fromY+num});
            array.push({x:(fromX+toX)/2,y:fromY+2*num});
          }else{
            array.push({x:toX+2*num,y:fromY+num});
            array.push({x:toX+2*num,y:fromY+2*num});
          }
          array.push({x:toX,y:fromY});
          if(Math.abs((toX-fromX))<=4*num){
            array.push({x:(fromX+toX)/2,y:fromY-2*num});
            array.push({x:(fromX+toX)/2,y:fromY-num});
          }else{
            array.push({x:toX+2*num,y:fromY-2*num});
            array.push({x:toX+2*num,y:fromY-num});
          } 
        }
        array.push({x:fromX,y:fromY-num});
        return array
      },
      DrawSpaceArrowUp(fromX,fromY,toY,num){
        let array=[];
        array.push({x:fromX+num,y:fromY});
        if(toY<fromY){
          if(Math.abs((fromY-toY))<=4*num){
            array.push({x:fromX+num,y:(fromY+toY)/2});
            array.push({x:fromX+2*num,y:(fromY+toY)/2});
          }else{
            array.push({x:fromX+num,y:toY+2*num});
            array.push({x:fromX+2*num,y:toY+2*num});
          }
          array.push({x:fromX,y:toY});
          if(Math.abs((fromY-toY))<=4*num){
            array.push({x:fromX-2*num,y:(fromY+toY)/2});
            array.push({x:fromX-num,y:(fromY+toY)/2});
          }else{
            array.push({x:fromX-2*num,y:toY+2*num});
            array.push({x:fromX-num,y:toY+2*num});
          }
        }else{
          if((toY-fromY)<=4*num){
            array.push({x:fromX+num,y:(toY+fromY)/2});
            array.push({x:fromX+2*num,y:(toY+fromY)/2});
          }else{
            array.push({x:fromX+num,y:toY-2*num});
            array.push({x:fromX+2*num,y:toY-2*num});
          }
          array.push({x:fromX,y:toY});
          if((toY-fromY)<=4*num){
            array.push({x:fromX-2*num,y:(toY+fromY)/2});
            array.push({x:fromX-num,y:(toY+fromY)/2});
          }else{
            array.push({x:fromX-2*num,y:toY-2*num});
            array.push({x:fromX-num,y:toY-2*num});
          }
        }
        array.push({x:fromX-num,y:fromY});
        return array
      },
      drawSpaceArrow(fromX,fromY,toX,toY,type){
        let array=[];
        switch(type){
          case "right":
            array=this.DrawSpaceArrowRight(fromX,fromY,toX,12)
            break;
          case "up":
            array=this.DrawSpaceArrowUp(fromX,fromY,toY,12)
            break;
          default:
            break;
        }
        return array
      },
      confirmColor () {	
        let setcolor = this.SetIconColor(this.colorTmp);
        switch (this.colorSetIndex) {
          case 0:
            //填充颜色
            if(this.colorRange==0){
              this.defaultFillColor=this.colorTmp;
              $(".svg-fill-color").attr("fill", setcolor);
            }else{
              if(this.nowFabricItem!=null){
                switch(this.nowFabricItem.type){
                  case "activeSelection":
                  case "group":
                    for(let item of this.nowFabricItem._objects){
                      if(item.type!="textbox"){
                        item.set({fill:this.colorTmp})
                      }
                    }
                    break
                  case "textbox":
                    this.nowFabricItem.set({ backgroundColor: this.colorTmp })
                    break;
                  default:
                    this.nowFabricItem.set({ fill: this.colorTmp })
                    break
                }
                this.canvas.renderAll()      
              }
            }
            break
          case 1:
            //文本颜色
            if(this.colorRange==0){
              this.defaultFontColor=this.colorTmp;
              $(".svg-text-color").attr("fill", setcolor);
            }else{
              if(this.nowFabricItem!=null){
                switch(this.nowFabricItem.type){
                  case "activeSelection":
                  case "group":
                    for(let item of this.nowFabricItem._objects){
                      if(item.type=="textbox"){
                        item.set({fill:this.colorTmp})
                      }
                    }
                    break
                  case "textbox":
                    this.nowFabricItem.set({ fill: this.colorTmp })
                    break;
                  default:
                    break
                }
                this.canvas.renderAll()      
              }
            }
            break
          case 2:
            //边框颜色
            if(this.colorRange==0){
              this.defaultBorderColor=this.colorTmp;
              $(".svg-border-color").attr("fill", setcolor);
            }else{
              if(this.nowFabricItem!=null){
                switch(this.nowFabricItem.type){
                  case "activeSelection":
                  case "group":
                    for(let item of this.nowFabricItem._objects){
                      if(item.type!="textbox"){
                        item.set({stroke:this.colorTmp})
                      }
                    }
                    break
                  case "textbox":
                    break;
                  default:
                    this.nowFabricItem.set({ stroke: this.colorTmp })
                    break
                }
                this.canvas.renderAll()
              }
            }
            break
        }
        this.drawType=null
        this.colorSelectShow = false
      },
      EditBorderSize(){
        if(this.sizeRange==0){
          this.defaultBorderSize=this.selectedBorderSize
        }else{
          this.nowFabricItem.set({strokeWidth:this.selectedBorderSize})
          this.canvas.renderAll()
        }
      },
      EditTextSize(){
        if(this.sizeRange==0){
          this.defaultSize=this.selectedTextSize
        }else{
          this.nowFabricItem.set({fontSize:this.selectedTextSize})
          this.canvas.renderAll()
        }
      },
      // 颜色输入框点击事件处理
      colorInputClick (event, type,range) {
        this.colorSetIndex = type
        // console.log('------------------')
        const colorDrawType = 'color-'+type
        this.drawType=colorDrawType
        this.colorSelectShow = true
        switch(type){
          case 0:
            this.colorType="填充调色板"
            break;
          case 1:
            this.colorType="字体调色板"
            break;
          case 2:
            this.colorType="边框调色板"
            break
        }
        this.colorRange=range
        // 获取节点距离浏览器视口的高度
        let top = event.currentTarget.getBoundingClientRect().top
        // 获取节点距离浏览器视口的宽度
        let left = event.currentTarget.getBoundingClientRect().left
        // 获取滚动条滚动距离
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
        // 两个top相加就是节点真正的top值
        top = top + scrollTop
        left = left + scrollLeft
        this.colorSelectTop = top
        this.colorSelectLeft = left
        // console.log(top, left)
      },
      //#region 具体实现画布方法
      deleteItem () {
        const type = this.nowFabricItem.type
        if(type=="group"||type=="activeSelection"){
          let result = confirm(this.deletetips)
          if(result){
            if(type=="activeSelection"){
              this.canvas.remove(this.nowFabricItem.toGroup())
            }else{
              this.canvas.remove(this.nowFabricItem)
            }
          }
        }else{
          this.canvas.remove(this.nowFabricItem)
        }
        this.canvas.requestRenderAll()
      },
      getCopyData(event){
        const target = this.canvas.getActiveObject()
        const canvas = target.canvas
        // console.log(target.type,"yuan.gao")
        if(target.type!="activeSelection"){
          target.clone(function (cloned) {
            cloned.left += 10
            cloned.top += 10
            canvas.add(cloned)
            canvas.setActiveObject(cloned)
          })   
        }else{
          // target.toGroup().clone(function (cloned) {
          //   cloned.left += 10
          //   cloned.top += 10
          //   canvas.add(cloned)
          //   canvas.setActiveObject(cloned)
          // })
          this.$message.error('只能复制单个元素')
        }
      },
      getClipboardFiles (event) {
        const items = event.clipboardData && event.clipboardData.items
        let file = null
        if (items && items.length) {
          // 检索剪切板items
          for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
              file = items[i].getAsFile()
            }
          }
        }
        if (!file) {
          const text = (event.clipboardData || window.clipboardData).getData('text')
          if (text.indexOf('data:') != 0) {
            this.$message.error('粘贴内容不是图片')
            return
          }
        }
        // 压缩的算法 
        // 图片压缩，系数0.6
        const that = this
        new ImageCompressor(file, {
          //压缩比例，1为不压缩
          quality: 0.6,
          convertSize:100,
          mimeType:'image/jpeg',
          success(result) {
            // console.log(result)
            let url = ''
            let reader = new FileReader()
            reader.readAsDataURL(result)
            reader.onload = function (e) {
              url = 'data:image/jpg;base64,' + this.result.substring(this.result.indexOf(',') + 1)
              fabric.Image.fromURL(url, function (img) {
                //.scale(0.4)缩放比例
                const oImg = img.set({ left: 200, top: 200 })
                that.canvas.add(oImg)
              })
            }
          },
          error(e) {
            console.log(e.message);
          },
        });
        // 不压缩的写法
        // let url = ''
        // let reader = new FileReader()
        // reader.readAsDataURL(file)
        // const that = this
        // reader.onload = function (e) {
        //   // console.log(url, "-----------")
        //   url = 'data:image/png;base64,' + this.result.substring(this.result.indexOf(',') + 1)
        //   fabric.Image.fromURL(url, function (img) {
        //     const oImg = img.set({ left: 200, top: 200 }).scale(0.4)
        //     that.canvas.add(oImg)
        //   })
        // }
      },
      compressImage(file){
        let newfile=null
        //图片压缩
        new ImageCompressor(file, {
          quality: .6,
          success(result) {
            // console.log(result)
            newfile=result
          },
          error(e) {
            console.log(e.message);
          },
        });
        return newfile
      },
      changeColor (color) {
        this.colorTmp = color
      },
      renderIcon (icon) {
        return function renderIcon (ctx, left, top, styleOverride, fabricObject) {
          const size = this.cornerSize
          ctx.save()
          ctx.translate(left, top)
          ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle))
          ctx.drawImage(icon, -size / 2, -size / 2, size, size)
          ctx.restore()
        }
      },
      deleteObject (eventData, transform) {
        //删除，先group再删除
        const target = transform.target
        const type = target.type
        const canvas =target.canvas
        if(type=="group"||type=="activeSelection"){
          let result = confirm(this.deletetips)
          if(result){
            if(type=="activeSelection"){
              canvas.remove(target.toGroup())
            }else{
              canvas.remove(target)
            }
          }
        }else{
          canvas.remove(target)     
        }
        canvas.requestRenderAll()
      },
      cloneObject (eventData, transform) {
        //复制
        const target = transform.target
        const canvas = target.canvas
        if(target.type!="activeSelection"){
          target.clone(function (cloned) {
            cloned.left += 10
            cloned.top += 10
            canvas.add(cloned)
            canvas.setActiveObject(cloned)
          })
        }else{
          // target.toGroup().clone(function (cloned) {
          //   cloned.left += 10
          //   cloned.top += 10
          //   canvas.add(cloned)
          //   canvas.setActiveObject(cloned)
          // })
          this.$message.error('只能复制单个元素')
        }
      },
      boldText () {
        //字体加粗
        if (this.nowFabricItem.type === 'textbox') {
          if (this.nowFabricItem.fontWeight !== 'bold') {
            this.nowFabricItem.set({ fontWeight: 'bold' })
            this.canvas.renderAll()
          } else {
            this.nowFabricItem.set({ fontWeight: 'normal' })
            this.canvas.renderAll()
          }
        }
      },
      freeDrawingBrush(){
        this.canvas.isDrawingMode = true
        this.canvas.freeDrawingBrush.color=this.defaultBorderSize
        this.canvas.freeDrawingBrush.width=this.defaultBorderSize
      },
      addRound(mouseFrom,value){
        const circle=new fabric.Circle({
          radius:15,
          fill:'yellow',
          strokeWidth:2,
          stroke:'black',
          originX:'center',
          originY:'center',
          strokeUniform:true//拉伸不改变宽度strokewidth
        })
        const text=new fabric.Text(value,{
          fontSize:24,
          originX:'center',
          originY:'center'
        })
        const group=new fabric.Group([circle,text],{
          left:mouseFrom.x-15,
          top:mouseFrom.y-15,
          //hasControls:false
          centeredScaling:true,
          lockScalingFlip:true
        })
        group.setControlsVisibility({mtr: false,ml:false,mb:false,mr:false,mt:false})
        this.canvas.add(group)
        this.canvas.setActiveObject(group)
      },
      addText (mouseFrom) {
        //文本框
        const textBox = new fabric.Textbox('点此编辑',{
          left: mouseFrom.x,
          top: mouseFrom.y,
          width: 150,
          fontSize: this.defaultSize,
          hasControls: false,
          includeDefaultValues:true,
          centeredScaling:false,
          fontFamily:'楷体',
          backgroundColor:this.defaultBackgroundColor,
          fill:this.defaultFontColor,
          strokeUniform:true
          // splitByGrapheme: true, // 拆分中文，可以实现自动换行
        })
        this.canvas.add(textBox)
        textBox.selectAll()
        textBox.enterEditing()
        this.canvas.setActiveObject(textBox)
      },
      addLine (mouseFrom,mouseTo) {
        //实线
        this.drawingObject = new fabric.Line([mouseFrom.x, mouseFrom.y, mouseTo.x, mouseTo.y], { 
          fill: this.defaultBorderColor,
          stroke: this.defaultBorderColor,
          strokeWidth: this.defaultBorderSize, // 笔触宽度
          perPixelTargetFind:true//默认false。当设置为true，对象的检测会以像互点为基础，而不是以边界的盒模型为基础
        })
        this.canvas.add(this.drawingObject)
        this.canvas.setActiveObject(this.drawingObject)
      },
      addDottedLine (mouseFrom,mouseTo) {
        //虚线
        this.drawingObject = new fabric.Line([mouseFrom.x, mouseFrom.y, mouseTo.x, mouseTo.y], { 
          strokeDashArray: [10],
          fill: this.defaultBorderColor,
          stroke: this.defaultBorderColor,
          strokeWidth: this.defaultBorderSize, // 笔触宽度
          perPixelTargetFind:true//默认false。当设置为true，对象的检测会以像互点为基础，而不是以边界的盒模型为基础
        })
        this.canvas.add(this.drawingObject)
        this.canvas.setActiveObject(this.drawingObject)
      },
      addArrow (mouseFrom,mouseTo) {
        //箭头
        this.drawingObject = new fabric.Path(this.drawArrow(mouseFrom.x, mouseFrom.y, mouseTo.x, mouseTo.y, 20, 10),{
          fill: this.defaultBorderColor,
          stroke: this.defaultBorderColor,
          strokeWidth: this.defaultBorderSize, // 笔触宽度
          perPixelTargetFind:true
        })
        this.canvas.add(this.drawingObject)
        this.canvas.setActiveObject(this.drawingObject)
      },
      addSpaceArrow(mouseFrom,mouseTo,type){
        // /drawSpaceArrow
        this.drawingObject = new fabric.Polygon(this.drawSpaceArrow(mouseFrom.x, mouseFrom.y, mouseTo.x, mouseTo.y,type),{
          fill:'yellow',
          stroke:'black',
          strokeWidth: 2,
          strokeUniform:true
        })
        switch(type){
          case "right":
            this.drawingObject.setControlsVisibility({mtr: false})
            break;
          case "up":
            this.drawingObject.setControlsVisibility({mtr: false})
            break;
        }
        // this.drawingObject.type=type
        this.canvas.add(this.drawingObject)
        this.canvas.setActiveObject(this.drawingObject)
      },
      addDialog(mouseFrom,mouseTo){
        //对话框
        this.drawingObject = new fabric.Polygon(this.drawDialog(mouseFrom.x, mouseFrom.y, mouseTo.x, mouseTo.y, 30),{
          fill:'yellow',
          stroke:'black',
          strokeWidth: 2,
          strokeUniform:true//拉伸不改变宽度strokewidth
        })
        this.drawingObject.type="Dialog"
        this.canvas.add(this.drawingObject)
        this.canvas.setActiveObject(this.drawingObject)
      },
      addCircle (mouseFrom,mouseTo) {
        //圆形
        const left = mouseFrom.x
        const top = mouseFrom.y
        const radius = Math.sqrt(Math.pow((mouseTo.x - left),2) + Math.pow((mouseTo.y - top),2)) / 2
        this.drawingObject = new fabric.Circle({
          left:left,
          top:top,
          radius:radius,
          stroke: this.defaultBorderColor,
          strokeWidth: this.defaultBorderSize,
          fill: this.defaultFillColor,
          noScaleCache: false,
          lockScalingFlip:true,
          strokeUniform:true//拉伸不改变宽度strokewidth
        })
        this.drawingObject.setControlsVisibility({mtr: false,ml:false,mb:false,mr:false,mt:false})
        this.canvas.add(this.drawingObject)
        this.canvas.setActiveObject(this.drawingObject)
      },
      addEllipse (mouseFrom,mouseTo) {
        //椭圆
        const left = mouseFrom.x
        const top = mouseFrom.y
        this.drawingObject = new fabric.Ellipse({
          left:left,
          top:top,
          stroke: this.defaultBorderColor,
          strokeWidth: this.defaultBorderSize,
          fill: this.defaultFillColor,
          originX: "center",
          originY: "center",
          rx: Math.abs(left - mouseTo.x),
          ry: Math.abs(top - mouseTo.y),
          strokeUniform:true//拉伸不改变宽度strokewidth
        })
        this.canvas.add(this.drawingObject)
        this.canvas.setActiveObject(this.drawingObject)
      },
      addRect (mouseFrom,mouseTo) {
        //长方形
        let left = mouseFrom.x
        let top = mouseFrom.y
        let width=mouseTo.x > mouseFrom.x?(mouseTo.x - mouseFrom.x):0
        let height=mouseTo.y > mouseFrom.y?(mouseTo.y - mouseFrom.y):0
        this.drawingObject = new fabric.Rect({
          left:left,
          top:top,
          width:width,
          height:height,
          stroke: this.defaultBorderColor,
          strokeWidth: this.defaultBorderSize,
          fill: this.defaultFillColor,
          noScaleCache: false,
          lockScalingFlip:true,
          strokeUniform:true//拉伸不改变宽度strokewidth
        })
        this.drawingObject.setControlsVisibility({mtr: false})
        this.canvas.add(this.drawingObject)
        this.canvas.setActiveObject(this.drawingObject)
      },
      group(){
        //元素合并
        if (this.canvas.getActiveObject().type !== 'activeSelection') {
          return;
        }
        this.canvas.getActiveObject().toGroup();
        this.nowFabricItem=this.canvas.getActiveObject();
        this.canvas.requestRenderAll();
      },
      ungroup(){
        //元素拆解
        if (this.canvas.getActiveObject().type !== 'group') {
          return;
        }
        this.canvas.getActiveObject().toActiveSelection();
        this.canvas.discardActiveObject();
        this.canvas.requestRenderAll();
      },
      createJsonFile(){
        //画布内容存成Json文件
      },
      createImg(){
        //画布内容存成图片
      },
      ObjToJson(){
        //canvas对象转Json数据
        this.jsonData = this.canvas.toJSON().objects
        console.log(this.jsonData)
      },
      JsonToObj(){
        //Json数据转canvas对象
        console.log(this.jsonData)
        fabric.util.enlivenObjects(this.jsonData, (objects) => {
          var origRenderOnAddRemove = this.canvas.renderOnAddRemove
          this.canvas.renderOnAddRemove = false

          objects.forEach((o) => {
            this.canvas.add(o)
          })
          this.canvas.renderOnAddRemove = origRenderOnAddRemove
          this.canvas.renderAll()
        })
        // this.canvas.loadFromJSON(this.jsonData, this.canvas.renderAll.bind(this.canvas));
      },
      //#endregion
      onContextmenu (event) {
        //右键菜单
        if (!this.nowFabricItem) return
        this.$contextmenu({
          items: [
            { label: '编辑文本',
              onClick: () => {
                //编辑文本优解
                this.HandleForAddText()
              },
            },
            { label: '边框大小',
              children:[
                {
                  label:"1",
                  onClick: () => {
                    this.selectedBorderSize=1
                    this.sizeRange=1
                    this.EditBorderSize()
                  },
                },
                {
                  label:"2",
                  onClick: () => {
                    this.selectedBorderSize=2
                    this.sizeRange=1
                    this.EditBorderSize()
                  },
                },
                {
                  label:"4",
                  onClick: () => {
                    this.selectedBorderSize=4
                    this.sizeRange=1
                    this.EditBorderSize()
                  },
                },
              ]
            },
            { label: '文本大小',
              children:[
                {
                  label:"16",
                  onClick: () => {
                    this.selectedTextSize=16
                    this.sizeRange=1
                    this.EditTextSize()
                  },
                },
                {
                  label:"24",
                  onClick: () => {
                    this.selectedTextSize=24
                    this.sizeRange=1
                    this.EditTextSize()
                  },
                },
                {
                  label:"36",
                  onClick: () => {
                    this.selectedTextSize=36
                    this.sizeRange=1
                    this.EditTextSize()
                  },
                },
              ]
            },
            { label: '字体调色板',
              onClick: () => {
                this.colorSetIndex = 1,
                this.colorSelectShow = true,
                this.colorRange=1
              }
            },
            { label: '填充调色板',
              onClick: () => {
                this.colorSetIndex = 0,
                this.colorSelectShow = true,
                this.colorRange=1
              }
            },
            { label: '边框调色板',
              onClick: () => {
                this.colorSetIndex = 2,
                this.colorSelectShow = true,
                this.colorRange=1
              }
            },
            { label: '元素合并',
              onClick: () => {
                this.group()
              }
            },
            { label: '元素拆解',
              onClick: () => {
                this.ungroup()
              }
            },
            // { label: '置于顶层',
            //   onClick: () => {
            //     console.log(this.nowFabricItem)
            //     this.nowFabricItem.bringToFront()
            //   }
            // },
            // { label: '置于底层',
            //   onClick: () => {
            //     this.nowFabricItem.sendToBack()
            //   }
            // },
            // { label: '置于上一层',
            //   onClick: () => {
            //     this.nowFabricItem.bringForward()
            //   }
            // },
            // { label: '置于下一层',
            //   onClick: () => {
            //     this.nowFabricItem.sendBackwards()
            //   }
            // }
          ],
          event,
          customClass: 'class-a',
          zIndex: 3,
          minWidth: 200
        })
        return false
      },
      HandleForAddText(){
        const target=this.canvas.getActiveObject()
        if(!target){
          return
        }
        const type=target.type
        let left,top
        switch(type){
          case "rect":
          case "polygon":
            left = target.left
            top=target.top
            break
          case "circle":
            // console.log(target)
            left = target.left+target.radius-this.defaultSize/2
            top = target.top+target.radius-this.defaultSize/2
            break
          }
          const text = new fabric.Textbox('点此编辑',{
            left: left,
            top: top,
            width:target.width,
            fontSize: this.defaultSize,
            hasControls: false,
            includeDefaultValues:true,
            centeredScaling:false,
            fontFamily:'楷体',
            splitByGrapheme: true, // 拆分中文，可以实现自动换行
            strokeUniform:true
          })
          this.canvas.add(text)
          this.canvas.setActiveObject(text)
          //进入编辑状态
          text.selectAll();
          // console.log(text.selectAll())
          text.enterEditing();
        // 自动group新增文本
        // let left,top
        // switch(type){
        //   case "rect":
        //   case "polygon":
        //     left = target.left
        //     top=target.top
        //     break
        //   case "group":
        //     left = target.left
        //     top=target.top
        //     for(let item of target._objects){
        //       if(item.type=="group"){
        //         return
        //       }
        //     }
        //     break
        //   default:
        //     return
        // }
        // let group
        // let origintext="点此编辑"
        // let tempText//临时文本框
        // if(target.type!="group"){
        //   const options={
        //     left: left,
        //     top: top,
        //     width:target.width,
        //     fontSize: this.defaultSize,
        //     hasControls: false,
        //     includeDefaultValues:true,
        //     centeredScaling:false,
        //     fontFamily:'楷体',
        //     splitByGrapheme: true, // 拆分中文，可以实现自动换行
        //     fill:this.defaultFontColor,
        //   }
        //   // 内部文字
        //   let text = new fabric.Textbox('',options);
        //   group = new fabric.Group([ target, text ], {
        //     left: left,
        //     top: top,
        //     width:target.width,
        //   });
        //   this.canvas.add(group);
        //   tempText = new fabric.Textbox(origintext, options);
        // }else{
        //   origintext=target._objects[1].text
        //   target._objects[1].set({
        //     text: "",
        //   });
        //   this.canvas.requestRenderAll()
        //   group = target
        //   tempText = new fabric.Textbox(origintext, {
        //     left: left,
        //     top: top,
        //     width:target._objects[1].width,
        //     fontSize: target._objects[1].fontSize,
        //     fill:target._objects[1].fill,
        //     stroke:target._objects[1].stroke,
        //     strokeWidth:target._objects[1].strokeWidth,
        //     backgroundColor:target._objects[1].backgroundColor,
        //     hasControls: false,
        //     includeDefaultValues:true,
        //     centeredScaling:false,
        //     fontFamily:'楷体',
        //     splitByGrapheme: true, // 拆分中文，可以实现自动换行
        //   });
        // }
        // //创建临时对象
        // // let tempText = new fabric.Textbox(origintext, options);
        // this.canvas.add(tempText)
        // this.canvas.setActiveObject(tempText)
        // tempText.selectAll();
        // tempText.enterEditing();
        // tempText.on("editing:exited", () => {
        //   // 退出编辑态处理，
        //   // 将 text value 赋值给原始文本对象 this.item(1)
        //   group._objects[1].set({
        //     text: tempText.text,
        //     fontSize:tempText.fontSize,
        //     backgroundColor:tempText.backgroundColor,
        //     fill:tempText.fill,
        //     stroke:tempText.stroke
        //   });
        //   // 将临时文本对象干掉
        //   this.canvas.remove(tempText)
        //   if(target.type!="group"){
        //     //非组合对象，把原本的对象也干掉
        //     this.canvas.remove(target)    
        //   }
        //   this.canvas.setActiveObject(group)
        //   this.canvas.requestRenderAll()
        // });
      }
    }
  }
</script>

<style>
	.numsdiv{
		z-index: 999;
	}
	.fz-26{
		font-size: 26px;
	}
	.col-4 {
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 40%;
		-ms-flex: 0 0 40%;
		flex: 0 0 40%;
		max-width: 40%;
	}
	
	.col-1 {
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 28px;
		-ms-flex: 0 0 28px;
		flex: 0 0 28px;
		max-width: 28px;
	}
	
	.row {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	
	button,
	select {
		text-transform: none;
		border: none;
		background-color: #fff;
	}
	
	.color-input {
		width: 24px;
		height: 24px;
		border: none;
	}
	
	.manage-mid-wrap .color-picker-wrap {
		position: relative;
		margin-right: 8px;
	}
	
	.manage-mid-wrap .color-picker-wrap .pick-input {
		width: 100px;
		padding-left: 15px;
		border: none;
		vertical-align: middle;
	}
	
	input.pick-input {
		font-size: 12px;
		height: 24px;
		line-height: 32px !important;
		padding: 6px 9px;
		padding-left: 9px;
		border-width: 1px;
		border-style: solid;
		border-color: #e6e6e6;
		background-color: #fff;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		-ms-border-radius: 4px;
		-o-border-radius: 4px;
		border-radius: 4px;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.color-picker-item {
		position: absolute;
		right: 10px;
		top: 2px;
		width: 20px;
		height: 20px;
		cursor: pointer;
		border: 1px solid #eaeaea;
	}
	
	
	.tooldiv {
		height: 40px;
		padding: 5px;
		border-bottom: 2px solid rgb(0, 17, 0);
	}
	
	.svgdiv {
		float: left;
		font-size: 18px;
		padding: 0px 5px;
	}
	
	.svgdiv:focus {
		background-color: #d9d9d9;
	}
	
  .color-div{
    height: 20px;
    width: 20px;
    float: left;
    margin-left: 10px;
  }
  .icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  }
  .active{
    background-color: rgba(70, 88, 88, 0.37);
  }
</style>
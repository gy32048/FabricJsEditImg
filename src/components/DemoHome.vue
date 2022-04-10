<template>
  <div class="app-container">
    <button @click="test">测试</button>
    <div style="width: 100%" class="chassis-div">
      <table
        style="width: 100%;"
        align="center"
        cellpadding="1"
        cellspacing="0"
        border="1"
        bordercolor="#000000">
        <tbody style="font-size: 18px;">
          <tr >
            <td colspan="12" style="padding: 5px;">
              <div class="pdf-container pdf-save" id="pdfDom">
                <table
                  align="center"
                  style="width: 100%; font-size: 16px;"
                  cellpadding="1"
                  cellspacing="0"
                  border="1"
                  bordercolor="#000000">
                  <tbody>
                    <tr>
                      <td colspan="12">
                        <div>
                          <img :src="base64data">
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import layer from "layui-layer";
export default {
  name: 'Demo',
  components: {
  },
  computed: {

  },
  data () {
    return {
      base64data:null
    }
  },
  created () {
  },
  methods: {
    test(){
      const that=this
      layer.open({
        type: 2,
        anim: 2,
        title: '点击传参，获取新页面。',
        shadeClose: true,
        shade: false,
        cache: false,
        moveOut: true,
        area: ['100%', '100%'],
        content: this.$router.resolve({ path: '/part', query: {  id: 1 } }).href,
        success: function(layero,index){
          layer.full(index);
        },
        btn: ['确定', '关闭'],
        yes: function (index,layero) {
          //当点击‘确定’按钮的时候，获取弹出层返回的值
          // 1.先获取vue对象，再通过vue对象的方法获取图像
          // console.log(layero.find("iframe").contents().find("#canvas-parent")[0]["__vue__"].Getbase64Data())
          // 2.直接获取新开页面中隐藏的图像
          that.base64data=layero.find("iframe").contents().find("#hiddenImg")[0]._value
          layer.close(index);
        },
        cancel: function (index) {
          //右上角关闭回调
          layer.close(index);
        }
      });
    },
  }
}
</script>
<style>
  .pdf-container{
    font-family: "楷体", Helvetica, sans-serif;
    color: black;
    font-weight: bold;
    margin: 0 auto;
    border-collapse: collapse;
    text-align: center;
    width: 100%;
  }
  .content-p{
    margin: 0px;
    word-wrap:break-word;
    word-break:normal;
  }
  .chassis-div{
    background-color: white;
  }
  .chassis-div table{
    margin: 0 auto;
    border-collapse: collapse;
    text-align: center;
    width: 100%;

  }
  .chassis-div input{
    width: 100%;
    height: 100%;
    border: none;
  }
  .chassis-div .table-btn{
    width: 100%;
    height: 100%;
    border: none;
    margin: 0px;
  }
  td{
    padding: 0px;
    text-align: center;
  }
  .fill-select{
    margin: 0px;
    width: 100%;
  }
  .company-title{
    font-size: 36px;
  }
</style>

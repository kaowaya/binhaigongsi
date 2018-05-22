Page({



  /**

   * 页面的初始数据

   */

  data: {
    moren1: 3,
    moren2: 3,
    moren3: 0.76,
    moren4: 0.97,
    moren5: 0.8

  },


  // 检测是否为零

  check0: function () {

    wx.showModal({

      title: "被除数不能为零!",

      showCancel: "ture",

      confirmText: "重新输入",

      confirmcolor: "#ccc",

    })

  },



  // 表单计算

  formSubmit: function (e) {

    var that = this;

    //获取输入值
    var gfn_input1 = e.detail.value.gfn_input1;
    var gfn_input2 = e.detail.value.gfn_input2;
    var gfn_input3 = e.detail.value.gfn_input3;
    var gfn_input4 = e.detail.value.gfn_input4;
    var gfn_input5 = e.detail.value.gfn_input5;
    var gfn_input6 = e.detail.value.gfn_input6;
    var gfn_input7 = e.detail.value.gfn_input7;
    var gfn_input8 = e.detail.value.gfn_input8;
    var gfn_input9 = e.detail.value.gfn_input9;
    var gfn_input10 = e.detail.value.gfn_input10;
    var gfn_input11 = e.detail.value.gfn_input11;
    var gfn_input12 = e.detail.value.gfn_input12;
    var gfn_input13 = e.detail.value.gfn_input13;
    var gfn_input14 = e.detail.value.gfn_input14;
    var gfn_input15 = e.detail.value.gfn_input15;
    var gfn_input16 = e.detail.value.gfn_input16;

    gfn_input1 = parseFloat(gfn_input1);
    gfn_input2 = parseFloat(gfn_input2);
    gfn_input3 = parseFloat(gfn_input3);
    gfn_input4 = parseFloat(gfn_input4);
    gfn_input5 = parseFloat(gfn_input5);
    gfn_input6 = parseFloat(gfn_input6);
    gfn_input7 = parseFloat(gfn_input7);
    gfn_input8 = parseFloat(gfn_input8);
    gfn_input9 = parseFloat(gfn_input9);
    gfn_input10 = parseFloat(gfn_input10);
    gfn_input11 = parseFloat(gfn_input11);
    gfn_input12 = parseFloat(gfn_input12);
    gfn_input13 = parseFloat(gfn_input13);
    gfn_input14 = parseFloat(gfn_input14);
    gfn_input15 = parseFloat(gfn_input15);
    gfn_input16 = parseFloat(gfn_input16);


    if (isNaN(gfn_input6)) {
      gfn_input6 = this.data.moren1;
    }
    if (isNaN(gfn_input7)) {
      gfn_input7 = this.data.moren2;
    }
    if (isNaN(gfn_input8)) {
      gfn_input8 = this.data.moren3;
    }
    if (isNaN(gfn_input13)) {
      gfn_input13 = this.data.moren4;
    }
    if (isNaN(gfn_input14)) {
      gfn_input14 = this.data.moren5;
    }


    var gfn_output1 = 0.0;
    var gfn_output2 = 0.0;
    var gfn_output3 = 0.0;
    var gfn_output4 = 0.0;
    var gfn_output5 = 0.0;
    var gfn_output6 = 0.0;
    var gfn_output7 = 0.0;
    var gfn_output8 = 0.0;
    var gfn_output9 = 0.0;
    var gfn_output10 = 0.0;
    gfn_output1 = parseFloat(gfn_output1);
    gfn_output2 = parseFloat(gfn_output2);
    gfn_output3 = parseFloat(gfn_output3);
    gfn_output4 = parseFloat(gfn_output4);
    gfn_output5 = parseFloat(gfn_output5);
    gfn_output6 = parseFloat(gfn_output6);
    gfn_output7 = parseFloat(gfn_output7);
    gfn_output8 = parseFloat(gfn_output8);
    gfn_output9 = parseFloat(gfn_output9);
    gfn_output10 = parseFloat(gfn_output10);

    gfn_output1 = gfn_input8 * (gfn_input9 * (gfn_input1 - 1) + 1) / (gfn_input10 * (gfn_input1 - 1) + 1);
    gfn_output2 = 9550 * gfn_input11 / gfn_input12;
    gfn_output3 = 1020 * gfn_input2 * gfn_input14 * gfn_input14 / 4 * 3.14 * ((gfn_input4 - gfn_input3) * 10 + gfn_input6) / 102;
    gfn_output4 = 1020 * gfn_input2 * gfn_input14 * gfn_input14 / 4 * 3.14 * ((gfn_input5 - gfn_input4) * 10 + gfn_input7) / 102;
    gfn_output5 = gfn_output3 / gfn_output1 / gfn_input13 / 0.95;
    gfn_output6 = gfn_output4 / gfn_output1 / gfn_input13 / 0.95;
    gfn_output7 = 9550 * gfn_output5 / gfn_input15;
    gfn_output8 = 9550 * gfn_output6 / gfn_input16;
    gfn_output9 = gfn_output7 / gfn_output2 * 100;
    gfn_output10 = gfn_output8 / gfn_output2 * 100;

    console.log("5sk_output:" + gfn_output5);

    this.setData({
      gfn_output1: gfn_output1 + "",
      gfn_output2: gfn_output2 + "",
      gfn_output3: gfn_output3 + "",
      gfn_output4: gfn_output4 + "",
      gfn_output5: gfn_output5 + "",
      gfn_output6: gfn_output6 + "",
      gfn_output7: gfn_output7 + "",
      gfn_output8: gfn_output8 + "",
      gfn_output9: gfn_output9 + "",
      gfn_output10: gfn_output10 + "",
    });

  },


  /**

   * 用户点击右上角分享

   */

  onShareAppMessage: function () {



  }

})
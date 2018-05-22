Page({



  /**

   * 页面的初始数据

   */

  data: {

        theta: 0.9,
    lambda: 0.0125,
    diameter: 0.8,

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

    var sk_input1 = e.detail.value.sk_input1;
    var sk_input2 = e.detail.value.sk_input2;
    var sk_input3 = e.detail.value.sk_input3;
    var sk_input4 = e.detail.value.sk_input4;


    sk_input1 = parseFloat(sk_input1);
    sk_input2 = parseFloat(sk_input2);
    sk_input3 = parseFloat(sk_input3);
    sk_input4 = parseFloat(sk_input4);

    if (isNaN(sk_input1)) {
      sk_input1 = this.data.theta;
    }
    if (isNaN(sk_input2)) {
      sk_input2 = this.data.diameter;
    }
    if (isNaN(sk_input3)) {
      sk_input3 = this.data.lambda;
    }

    console.log("5sk_output:" + sk_input1);


    var sk_output = 0.0;//
    sk_output = parseFloat(sk_output);



    sk_output = sk_input1 * sk_input2 / sk_input3 / (sk_input4 / 2.0) / (sk_input4 / 2.0) / (sk_input4 / 2.0) / (sk_input4 / 2.0) * (sk_input2 / 2.0) * (sk_input2 / 2.0) * (sk_input2 / 2.0) * (sk_input2 / 2.0);



    console.log("5sk_output:" + this.data.theta);




    this.setData({


      sk_output: sk_output + ""

    });

  },



  /**

   * 用户点击右上角分享

   */

  onShareAppMessage: function () {



  }

})
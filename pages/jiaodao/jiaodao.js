Page({



  /**

   * 页面的初始数据

   */

  data: {
bishu:6
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

    var jd_input1 = e.detail.value.jd_input1;
    var jd_input2 = e.detail.value.jd_input2;
    var jd_input3 = e.detail.value.jd_input3;
    var sk_input4 = e.detail.value.sk_input4;


    jd_input1 = parseFloat(jd_input1);
    jd_input2 = parseFloat(jd_input2);
    jd_input3 = parseFloat(jd_input3);
    sk_input4 = parseFloat(sk_input4);


    if (isNaN(jd_input3)) {
      jd_input3 = this.data.bishu;
    }

    console.log("5sk_output:" + jd_input1);


    var jd_output = 0.0;//
    jd_output = parseFloat(jd_output);



    jd_output = jd_input1 / jd_input2 / jd_input3;




    this.setData({


      jd_output: jd_output + ""

    });

  },



  /**

   * 用户点击右上角分享

   */

  onShareAppMessage: function () {



  }

})
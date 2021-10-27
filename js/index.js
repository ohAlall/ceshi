$(function(){
          //搜索框 
          $(".el-icon-search").click(function(){
            $(".so").toggleClass('ami').focus() 
           })
        //模式选择块  
          $(".box2 li").mousemove(function(){
            $(".box2 li").removeClass('cor');
             $(this).addClass('cor');
            })
            //图像模式
            $(".imageM").click(function(){
            //修改 删除 显示的内容  显示图片
             $(".ls").removeClass("lb").find(".imggss").fadeIn();
             $(".caption").removeClass("lbb").parents(".thumbnail").addClass("col-sm-2 col-md-4 ")
            })
            //列表模式  隐藏图片
            $(".listM").click(function(){
            //修改 删除 显示的内容
            $(".caption").addClass("lbb").parents().removeClass("col-sm-2 col-md-4 ls_t ")
            $(".ls").addClass("lb").find(".imggss").hide(500);
            })
        //添加
          var ul3 = document.querySelector(".ul3");
          $(".ul3").on("click",".bt2",function(){
          //var lis = $(this).parents(".ls")[0].cloneNode(true);//这里转换为dom元素 使用原生js 的拷贝
           $(this).parents(".ls").clone(true).appendTo(ul3)//$的拷贝，添加元素  推荐
          })
        //删除
          $(".ul3").on("click",".bt3",function(){
            $(this).parents(".ls").slideUp(2000).remove()
          })
        //修改
            $(".ul3").on("click",".bt0",function(){
              $(this).parents('.thumbnail').siblings().css('display',"block")
          })
        //修改 内提交按钮
          $(".ul3").on("click",".bot_bom",function(){//动态添加的需要添加 事件委托才能操作   并且只操作当前的，要从自身出发
            $(this).parents(".ls").find(".tit").text($(this).parents(".box3_boom").find(".in0").val())//标题
            $(this).parents(".ls").find(".lang").text($(this).parents(".box3_boom").find(".in1").val())//语言
            $(this).parents(".ls").find(".imggss").attr("src",$(this).parents(".box3_boom").find(".in2").val())//图片路径
           // $(this).parents(".ls").find(".div").text($(this).parents(".box3_boom").find(".in3").val())//代码
            // $(".box3_t").css('backgroundColor','#0743a4d9')//
            $(this).parents(".box3_boom").css('display',"none") 
          })


          //侧边栏固定在可视区
         // var ft = $(".flex").scrollTop();
        // $(window).scroll(function(){
        //   console.log($(document).scrollTop());
        //   if($(document).scrollTop() >= ft ){
        //     $(".flex").scrollTop($(document).scrollTop()).css("backgroundColor","#010107d5") 
        //   }
        // })

        //点击回到顶部
        $(".back").click(function(){
            $("body,html").stop().animate({
                scrollTop:0
            });
        })

})
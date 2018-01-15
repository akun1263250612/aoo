(function($){
	$.fn.slider = function(options){
		var that = this;//这里的this指向方法的调用者，例如DIV调用该方法，则指向div，不是指向函数；
		//默认参数
		var defults = {
			index:0,//初始图片索引
			timer:null,//计时器
			speed:1000,//动画间隔时间
			num:4//图片轮播的张数，0表示第一张，4表示为五张
		}
		
		var opt = $.extend({},defults,options);
		
		//轮播动画函数
		var animate = function(){
			if(opt.index>opt.num){
				opt.index = 0;
			}else if(opt.index<0){
				opt.index = opt.num;
			}
			that.children('ul').eq(0).children().eq(opt.index).fadeIn(400).siblings('li').fadeOut(400);
			that.children('ul').eq(1).children().eq(opt.index).addClass('btn_ls').siblings('li').removeClass('btn_ls');
		}
		
		that.children('div').eq(0).click(function(){//左边按钮点击事件
			--opt.index;
			animate()
			console.log('s')
		})
		
		that.children('div').eq(1).click(function(){//右边按钮点击事件
			++opt.index;
			animate()
		})
		
		that.on('click','li',function(){
			//这里的this指向当前点击的li
			opt.index = $(this).index();
			animate()
		})
		
		var st = function(){
			clearInterval(opt.timer);
			opt.timer = setInterval(function(){
				++opt.index;
				animate()
			},opt.speed)
		}
		st()
		
		that.hover(function(){
			console.log('s')
			clearInterval(opt.timer);
		},function(){
			st()
		})
		
		
		
		
		
		
	}
	
	
	
})($)

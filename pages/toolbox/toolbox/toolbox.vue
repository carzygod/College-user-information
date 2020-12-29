<template>
	<view>
	<!-- 🔥选择框 -->
	<view class="">
		<u-dropdown ref="uDropdown" @open="open" @close="close">
			<u-dropdown-item v-model="selection" :title="options1[0].label" :options="options1"></u-dropdown-item>
			
		</u-dropdown>
	</view>
		<!-- 🔥搜索框 -->
		<u-search placeholder="你想搜的内容" v-model="keyword"></u-search>
		<!-- 🔥获取数据 -->
		<!-- 🔥数据种类判断 -->
		<block v-if="selection==0">
			
		
		<!-- 🔥循环数据  🚀卡片开始 -->
		<block v-for="(card,index) in cards" :key="index">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
						<view class="content">
							<view class="text-grey">承包单位：{{card.施工总承包单位名称}}</view>
							<view class="text-gray text-content text-df">工程造价 ：{{card.工程造价}}</view>
							<view class="text-gray text-content text-df">施工单位 ：{{card.施工总承包单位名称}}</view>
							
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>工程名称：</view>
									<view class="flex-sub">{{card.工程项目名称}}</view>
									</view>
									<view class="flex">
									<view>项目许可号：</view>
									<view class="flex-sub">{{card.施工许可证号}}</view>
								</view>
							</view>

							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">开工日期:{{card.开工日期}}</view>
							</view>
						</view>
					</view>
				</view>
		</block>
		  <!-- 🔥循环结束	 🚀卡片结束-->
		</block>
		
		<!-- 🔥数据种类判断 -->
		<block v-if="selection==0">
			
		
		<!-- 🔥循环数据  🚀卡片开始 -->
		<block v-for="(card,index) in cards" :key="index">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
						<view class="content">
							<view class="text-grey">承包单位：{{card.施工总承包单位名称}}</view>
							<view class="text-gray text-content text-df">工程造价 ：{{card.工程造价}}</view>
							<view class="text-gray text-content text-df">施工单位 ：{{card.施工总承包单位名称}}</view>
							
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>工程名称：</view>
									<view class="flex-sub">{{card.工程项目名称}}</view>
									</view>
									<view class="flex">
									<view>项目许可号：</view>
									<view class="flex-sub">{{card.施工许可证号}}</view>
								</view>
							</view>
		
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">开工日期:{{card.开工日期}}</view>
							</view>
						</view>
					</view>
				</view>
		</block>
		  <!-- 🔥循环结束	 🚀卡片结束-->
		</block>
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				//🔥基础URL
				baseUrl:"https://test-server.build-dream.cn",
				//选择
			    selection: 1,
				options1: [{
						label: '浙江在建工地信息',
						value: 1,
					},
					{
						label: '浙江在建工程信息',
						value: 2,
					},
					{
						label: '最新招标信息',
						value: 3,
					}
				],
				//搜索
				keyword: '',
				//卡片
				cardTittle: '卡片内容',
				
				cards: [
				{
                    "mID": 1,
                    "工程造价(万元)": "暂无数据",
                    "工程项目名称": "暂无数据",
                    "建设单位名称": "暂无数据",
                    "建设单位统一社会信用代码": "暂无数据",
                    "开工日期":"暂无数据",
                    "所属区县": "暂无数据",
                    "所属市": "暂无数据",
                    "施工总承包单位名称": "暂无数据",
                    "施工总承包单位统一社会信用代码": "暂无数据",
                    "施工许可证号": "暂无数据",
                    "项目地址": "暂无数据",
                    "项目经理": "暂无数据",
                    "项目基本信息主键ID": "暂无数据",
                    "发证时间": "暂无数据"
                },
				],
				rowData:null,
				
			}
		},
		methods: {
			
			/**
			 * 🚀获取接口列表
			 */
			getList(){
				var _this=this;
				return new Promise((resolve) => {
				uni.request({
				    url: this.baseUrl+'/api/select/list', 
				    data: {
				        text: 'uni.request'
				    },
				    header: {
				        //'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
							var i = 0 ;
				        for(var key in res.data.data){
								
							var tmp = {
								label: key,
								value: i+1,
							}
							_this.options1[i]=tmp,
							i++;
						}
						_this.rowData=res.data.data;
						console.log(_this.options1)
						resolve('suc');
					    _this.$forceUpdate();
						_this.selection=0;
						
				    }
				});
				})
			},
			/**
			 * 🔥异步调用
			 */
					async getrequest(){
						await this.getList();
					},
					
					
						open(index) {
							// 展开某个下来菜单时，先关闭原来的其他菜单的高亮
							// 同时内部会自动给当前展开项进行高亮
							this.$refs.uDropdown.highlight();
						},
						close(index) {
							// 关闭的时候，给当前项加上高亮
							// 当然，您也可以通过监听dropdown-item的@change事件进行处理
							this.$refs.uDropdown.highlight(index);
							var key=this.options1[this.selection-1].label;
							console.log(key);
							
							//🔥比对
							console.log(this.rowData[key])
							
						},
						change() {
						
						},
						
		getdata(url){
			uni.request({
			    url:  url, //仅为示例，并非真实接口地址。
			    data: {
			        text: 'uni.request'
			    },
			    header: {
			        //'custom-header': 'hello' //自定义请求头信息
			    },
			    success: (res) => {
			        
			        console.log(res.data.data.items.data);
					this.cards=res.data.data.items.data;
			    }
			});
		}
			
		},
		
		onLoad: function(options) {
			
			
			this.getdata("http://test-server.build-dream.cn/api/project/information");

		},
		onShow() {
			
console.log(this.getrequest())
		},
	}
</script>

<style>

</style>

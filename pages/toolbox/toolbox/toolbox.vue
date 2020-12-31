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
						<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.施工总承包单位名称});`"></view>
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
						<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.施工总承包单位名称});`"></view>
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
		<block v-if="selection==1">
			
		
		<!-- 🔥循环数据  🚀卡片开始 -->
		<block v-for="(card,index) in cards" :key="index">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.服务点名称});`"></view>
						<view class="content">
							<view class="text-grey">服务点名称：{{card.服务点名称}}</view>
							<view class="text-gray text-content text-df">服务点编号：{{card.序号}}</view>						
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>经度：</view>
									<view class="flex-sub">{{card.经度}}</view>
									</view>
									<view class="flex">
									<view>纬度：</view>
									<view class="flex-sub">{{card.纬度}}</view>
								</view>
							</view>
		

						</view>
					</view>
				</view>
		</block>
		  <!-- 🔥循环结束	 🚀卡片结束-->
		</block>
	
	
	<!-- 🔥数据种类判断 -->
	<block v-if="selection==2">
		
	
	<!-- 🔥循环数据  🚀卡片开始 -->
	<block v-for="(card,index) in cards" :key="index">
			<view class="cu-list menu-avatar comment solids-top">
				<view class="cu-item">
					<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.单位名称});`"></view>
					<view class="content">
						<view class="text-grey">单位名称：{{card.单位名称}}</view>
						<view class="text-gray text-content text-df">单位负责人：{{card.主要负责人}}</view>			
						<view class="text-gray text-content text-df">单位地址：{{card.单位地址}}</view>		
						<view class="text-gray text-content text-df">社会信用代码：{{card.序号}}</view>		
						<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
							<view class="flex">
								<view>许可范围：</view>
								<view class="flex-sub">{{card.许可范围}}</view>
								</view>
								<view class="flex">
								<view>签发机关：</view>
								<view class="flex-sub">{{card.发证机关}}</view>
								</view>
								<view class="flex">
								<view>签发时间：</view>
								<view class="flex-sub">{{card.发证时间}}</view>
								</view>
								<view class="flex">
								<view>到期时间：</view>
								<view class="flex-sub">{{card.有效期至}}</view>
								</view>
							
						</view>
	
	
					</view>
				</view>
			</view>
	</block>
	  <!-- 🔥循环结束	 🚀卡片结束-->
	</block>
	
	<!-- 🔥数据种类判断 -->
	<block v-if="selection==3">
		
	
	<!-- 🔥循环数据  🚀卡片开始 -->
	<block v-for="(card,index) in cards" :key="index">
			<view class="cu-list menu-avatar comment solids-top">
				<view class="cu-item">
					<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.施工总承包单位名称});`"></view>
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
		
		
		<block v-if="selection==4">
			
		
		<!-- 🔥循环数据  🚀卡片开始 -->
		<block v-for="(card,index) in cards" :key="index">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.姓名});`"></view>
						<view class="content">
							<view class="text-grey">人员姓名：{{card.姓名}}</view>
							<view class="text-gray text-content text-df">人员类型 ：{{card.人员类型}}</view>
							<view class="text-gray text-content text-df">所在企业 ：{{card.所在企业名称}}</view>
							
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>工程名称：</view>
									<view class="flex-sub">{{card.工程名称}}</view>
									</view>
									<view class="flex">
									<view>不良行为内容：</view>
									<view class="flex-sub">{{card.不良行为内容}}</view>
								</view>
							</view>
		
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">处罚部门:{{card.处罚部门}}</view>
							</view>
						</view>
					</view>
				</view>
		</block>
		  <!-- 🔥循环结束	 🚀卡片结束-->
		</block>
		
		
		<block v-if="selection==5">
			
		
		<!-- 🔥循环数据  🚀卡片开始 -->
		<block v-for="(card,index) in cards" :key="index">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.企业名称});`"></view>
						<view class="content">
							<view class="text-grey">{{card.企业名称}}</view>
							<view class="text-gray text-content text-df">技术负责人 ：{{card.技术负责人}}</view>

							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>证书类型：</view>
									<view class="flex-sub">{{card.证书类型}}</view>
									</view>
									<view class="flex">
									<view>证书等级：</view>
									<view class="flex-sub">{{card.证书等级}}</view>
								</view>
							</view>
		
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">证书有效期:{{card.证书有效期}}</view>
							</view>
						</view>
					</view>
				</view>
		</block>
		  <!-- 🔥循环结束	 🚀卡片结束-->
		</block>
		
		
		<block v-if="selection==6">
			
		
		<!-- 🔥循环数据  🚀卡片开始 -->
		<block v-for="(card,index) in cards" :key="index">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.施工单位名称});`"></view>
						<view class="content">
							<view class="text-grey">{{card.施工单位名称}}</view>
							<view class="text-gray text-content text-df">项目许可证 ：{{card.许可证号}}</view>
		
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>项目名称：</view>
									<view class="flex-sub">{{card.工程项目名称}}</view>
									</view>
									<view class="flex">
									<view>合同开工时间：</view>
									<view class="flex-sub">{{card.合同开工日期}}</view>
								</view>
								<view class="flex">
									<view>合同竣工时间：</view>
									<view class="flex-sub">{{card.合同竣工日期}}</view>
								</view>
								<view class="flex">
									<view>建设地址：</view>
									<view class="flex-sub">{{card.建设地址}}</view>
								</view>
							</view>
		
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">签发时间:{{card.发证日期}}</view>
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
				nextPage:null,
				rowData:null,
				
			}
		},
		methods: {
			/**
			 * 🔥下拉监听
			 */
			onReachBottom(){
			
				
			if(this.nextPage==null){
				console.log("🚀到底了")
			}else{
				this.updataList();
			}
			
			},
			
			/**
			 * 🚀更新数据接口
			 */
			updataList(){
				uni.request({
				    url:  this.nextPage, //仅为示例，并非真实接口地址。
				    data: {
				        text: 'uni.request'
				    },
				    header: {
				        //'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
						for(var i =0 ;i < res.data.data.items.data.length;i++){
							
							this.cards.push(res.data.data.items.data[i]);
							console.log(res.data.data.items.data[i])
						}
						
						
				    }
				});
			},
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
							this.$refs.uDropdown.highlight(index);
							var key=this.options1[this.selection-1].label;
							console.log(this.selection);
							
							//🔥比对
							this.getdata(this.rowData[key])
							
						},
						change() {
						
						},
	/**
	 * 🚀获取数据接口
	 */
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
			        
			        console.log(res.data.data.items);
					this.cards=res.data.data.items.data;
					this.nextPage=res.data.data.items.next_page_url;
			    }
			});
		}
			
		},
		
		onLoad: function(options) {
			
			
			this.getdata("https://test-server.build-dream.cn/api/project/information");

		},
		onShow() {
			this.getrequest();
		},
	}
</script>

<style>

</style>

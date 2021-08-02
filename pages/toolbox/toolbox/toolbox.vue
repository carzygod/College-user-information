<template>
	<view>
	<!-- 🔥选择框 -->
	<view class="">
		<u-dropdown ref="uDropdown" @open="open" @close="close">
			<u-dropdown-item v-model="selection" :title="options1[0].label" :options="options1"></u-dropdown-item>
			
		</u-dropdown>
	</view>
		<!-- 🔥搜索框 -->
		
		<u-search placeholder="模糊搜索" v-model="keyword" :show-action="true" action-text="搜索" :animation="true" @custom="search" @search="search"></u-search>
		<!-- 🔥获取数据 -->
		<!-- 🔥数据种类判断 -->

			
		
		<!-- 🔥循环数据  🚀卡片开始 -->
		<block v-for="(card,index) in cards" :key="index" @click="search()">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" :style="`background-image:url(https://ui-avatars.com/api/${card.userName});`"></view>
						<view class="content">
							<view class="text-grey">学号：{{card.classNo}}</view>
							<view class="text-gray text-content text-df">年级 ：{{card.grade}}</view>
							<view class="text-gray text-content text-df">专业 ：{{card.major}}</view>
							
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>姓名：</view>
									<view class="flex-sub">{{card.userName}}</view>
									</view>
									<view class="flex">
									<view>性别：</view>
									<view class="flex-sub">{{card.sex}}</view>
								</view>
							</view>

							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">学院:{{card.unitName}}</view>
							</view>
						</view>
					</view>
				</view>
		</block>
		  <!-- 🔥循环结束	 🚀卡片结束-->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				//🔥基础URL
				baseUrl:"https://skl.hdu.edu.cn/jpi/user-byUnit?",
				//选择
			    selection: 1,
				options1: [{
						label: '杭州电子科技大学',
						value: 1,
					}
				],
				//搜索
				keyword: '',
				//卡片
				cardTittle: '卡片内容',
				
				cards: [
				{
                    "mID": 1,
                    "userName": "暂无数据",
                    "unitName": "暂无数据",
                    "grade": "暂无数据",
                    "sex": "暂无数据",
                    "major":"暂无数据",
                    "classNo": "暂无数据"
                },
				],
				nextPage:null,
				rowData:null,
				
			}
		},
		methods: {
			/**
			 * 🔥搜索查询
			 */
			
			search(){

				
				uni.request({
				    url: this.baseUrl,
					
				    data: {
				        keyword: this.keyword,
						
				    },
				    header: {
				    },
				    success: (res) => {
				        console.log(res.data);
						this.cards=res.data;
				    }
				});
				
			},
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
				    url: this.baseUrl, 
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

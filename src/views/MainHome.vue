<template>
   <div class="home-left">

        <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']"  router>
                    
                    <div class="layout-logo-left">
                         <!-- <Icon class="icoMig"></Icon> -->
                         萝卜多后台管理系统
                        </div>
                    <Submenu 
                    :name="item.name" v-for=" item in menulist"  :key="item.name" >
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                        {{item.title}}
                        </template>
                          <div v-for="itemi in item.children" :key="itemi.name" >
                             <Menu-item :name="itemi.name" v-on:click.native="saveNavState(itemi.path)" :index="'/' + itemi.path">{{itemi.title}}</Menu-item>
                          </div>

                    </Submenu>
                 
                </Menu>
            </i-col>
            <i-col span="21" class="main-view">
                <div class="layout-header">
                    <li class="admin">超级管理员</li>
                    <li class="admin">admin</li>
                    <li class="admin">关闭</li>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    
                    <router-view class="layout-content-main"></router-view>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
            
        </Row>
    </div>
        
   </div>
</template>

<script>
export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,

 
                menulist:[
                    { 
                        name:1,title:'信息管理',
                        children:[
                            { name:2,title:'公司列表',path:'CoList'},
                            { name:3,title:'公司职位',path: 'CoPosition' }
                        ]
                    },
                    { 
                        name:7,title:'ARticle',
                        children:[
                            { name:8,title:'Article列表',path:'Article'},
                           ]
                    },
                     { 
                        name:4,title:'人才管理',
                        children:[
                            { name:5,title:'候选人列表',path:'Candidate'},
                            { name:6,title:'人才列表',path:'Talents' }
                        ]
                    },
                    { 
                        name:10,title:'推荐管理',
                        children:[
                            { name:11,title:'推荐人管理',path:'Referrer'},
                            { name:12,title:'推荐测试test', path:'ReferTste' }
                        ]
                    },
                    { 
                        name:13,title:'后台管理',
                        children:[
                            { name:14,title:'模块列表', path:'Module'},
                            { name:15,title:'角色列表', path:'Role'},
                            { name:16,title:'密码列表', path:'Password'},
                            { name:17,title:'账户列表', path:'Account'},  
                        ]
                    }            
                ],

                acpast:''
        
            }
        },

        //生命周期 - 创建完成（访问当前this实例）
        created() {
            // 声明周期函数
            this.acpast = window.sessionStorage.getItem("everc");
        },

        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },

            saveNavState(ever){
                console.log(ever)
                /* 嵌套路由必须加前缀 */
                this.$router.push('/home/'+ ever)
                

            }

        }
    }

</script>
<style lang='less' scoped>

    .layout-logo-left{
        font-size: 17px;
        line-height: 33px;
        color: white;
        width: 250px;
        width: 100%;
        text-align: center;
        margin-top: 10px;
        box-sizing: border-box;
        padding-right: 22px;
    }
    .main-view{
        max-width: calc(100% - 245px);
        background:#f5f5f5;
    }

    .icoMig{
        background:url('../assets/image/lb.png');
        width: 22px;
        height: 23px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-bottom: 5px;
    }

    .layout-header{
        width: 100%;
        height: 50px;
        background:#fff;
        display: flex;
        justify-content: flex-end;;
        align-items: center;

    }

    .layout-content{
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        overflow: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 10px;

        background:#f5f5f5;
    }

    .layout{
        // border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        }

    .layout-breadcrumb{
        padding: 10px 15px 0;
    }

        
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        // background: #fff;
        border-radius: 4px;
        
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    
    .layout-header{
        height: 60px;
        // background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }

    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover {
        background: none;
    }



    .ivu-menu-dark{
        background: none;
    }

    .layout{
        background: none;
    }

    .ivu-row-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        min-height: 100vh;
    }

    .ivu-col-span-5 {
        display: block;
        width: 245px;
    }

    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
        background: none;
    }

    /deep/.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
        background: none;
    }

    .ivu-menu-submenu-title{
        background: none;
    }

    /deep/.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
        border-right: none;
        color: #fff;
        background: #feae45!important;;
    }


    /deep/.ivu-menu-submenu-title{
        background: none  !important;
    }

    .admin{
        border-right: 2px solid #e8e8e8;
        padding:0 20px;
        cursor: pointer;
    }






</style>
<template>
   <div class="b2-layout">
     <div class="layout_search">
       
         <Row >
            <Col class="layout_search_row" span="8">
              <li class="r1_title">公司名称</li>
              <Input class="ivu-input_name" v-model="value2" placeholder="default size"></Input>
            </Col>
            <Col class="layout_search_row" span="8">
               <li class="r1_title">职位名称</li>
              <Input class="ivu-input_name" v-model="value2" placeholder="default size"></Input>
            </Col>
            <Col class="layout_search_row" span="8">
               <li class="r1_title">工作经验</li>
               <Select v-model="model1" style="width:200px">
                   <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </Col>
         </Row>

          <Row class="row_h_layout">
            <Col class="layout_search_row" span="8">
              <li class="r1_title">发布时间</li>
              <Date-picker type="date" placeholder="选择日期" ></Date-picker>
            </Col>
            <Col class="layout_search_row" span="8">
               <li class="r1_title">结束时间</li>
               <Date-picker type="date" placeholder="选择日期" ></Date-picker>
            </Col>
            <Col class="layout_search_row" span="8">
               <li class="r1_title">学历要求</li>
               <Select v-model="model1" style="width:200px">
                   <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
            </Col>
         </Row>


          <Row >
            <Col class="layout_search_row" span="8">
              <li class="r1_title">职业类别</li>
              <Select v-model="model1" style="width:200px">
                   <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
              </Select>
            </Col>
            <Col class="layout_search_row" span="8">
               <li class="r1_title">状态</li>
               <Select v-model="model1" style="width:200px">
                   <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
               </Select>
            </Col>
            <Col class="layout_search_row" span="8">
               <li class="r1_title">薪资</li>
               <Select v-model="model1" style="width:200px">
                   <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
               </Select>
            </Col>
         </Row>
         <div class="bt1">
           <Button class="bt1_s" type="primary" shape="circle" icon="ios-search"></Button>
           <Button class="bt2_s" type="primary" shape="circle" icon="ios-search"></Button>
           
         </div>
         
     </div>

     <div>

     </div>

     <div class="list_m">
          <Table height="300" border :columns="columns2" :data="data4"></Table>
     </div>
    
    
   </div>
</template>

<script>
export default {
  data () {
    return {
      value2: '',

       cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: '',

                 columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]

                
    };
  },

  computed:{

},

  created(){

},

  mounted(){

},

  methods: {
     show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
         },

         
}

</script>
<style lang='less' scoped>

.b2-layout{
  background-color:#f5f5f5 ;
  height: 100vh;
}

.layout_search{
  width: 100%;
  height: 220px;
  padding: 20px;
  background-color: #fff;
  
}

.layout_search_row{
  display: flex;
  
}

.r1_title{
  width: 80px;
  height: 32px;
  line-height: 32px;
  font-weight: 600;
  text-align: center;
}

.ivu-input_name {
    width: 50%;
    
}

.row_h_layout{
  padding: 20px 0;
}

.bt1{
   width: 100%;
   display: flex;
   justify-content: flex-end;
   padding-top: 15px;
}

.bt1_s{
  margin:0 30px;
}

.bt2_s /deep/.ivu-icon-ios-search:before{
  
  content:"\f416"
}

.list_m{
  margin-top: 30px;
}

</style>
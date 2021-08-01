<template>
   <Card class="login_box">
      <H4 class="login_title">萝卜多后台管理</H4>
      <Form 
      ref="formInline" 
      :model="formInline" 
      :rules="ruleInline" 
      class="login_form" 
      show-message
      inline>
        <Form-item prop="user">
            <Input 
            type="text" 
            v-model="formInline.user" 
            placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input 
            type="password" 
            v-model="formInline.password" 
            placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button   type="primary" @click="handleSubmit('formInline',3000)">登录</Button>
        </Form-item>
     </Form>
   </Card>
</template>
<script src="jutils.min.js"></script>

<script>
import jutils from 'jutils-src'

import axios from 'axios'
import qs from 'qs'


export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                lastTime: 0,
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name,i) {
              
                // console.log(i)
                /* 引用最新时间戳内置对象 */
                let now = new Date().valueOf();

                var date = jutils.formatDate(new Date(now),"HH:ii:ss"); 
                console.log(date)        /* 引入一个函数库测试时间戳的转换 */

                if(this.lastTime == 0 || (now - this.lastTime) > i){
                    console.log(now - this.lastTime)
                    /* 实时赋值 */
                    this.lastTime =now
                    

                    this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                        axios.post('/api/a/login?',qs.stringify({
                            name:this.formInline.user,
                            pwd:this.formInline.password
                        })).then((data)=>{
                            console.log(data.data.code)
                            if(data.data.code == 0){
                                this.$router.push({path:'home'})
                            }
                            
                        })
                    } else {
                       
                        this.$Message.error('表单验证失败!');
                        
                    }

                    
                })
                }else{
                    console.log('小于3000毫秒不触发')

                }

            
                
            },

            
            
        }
    }
</script>
<style lang='less' scoped>
  .login_box{
    width: 390px;
    height: 240px;
    border-radius: 3px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 12px;
    text-align: center;
    border-radius: 10px;
    // box-shadow: 0 0 25px #909399;
    background: rgba(255,255,255,0.5);
    border: 1px solid #DCDFE6;
  }

  .login_title{
    margin-bottom: 21px;
  }

  .ivu-form-inline .ivu-form-item {
    display: inline;
  }

  .ivu-btn-primary {
    width: 240px;
  }
.ivu-icon-ios-locked-outline:before {
    content: "\F218";
}





  

 

</style>




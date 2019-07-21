<template>
<div class="login-container">
    <div class="login">
        <section class="login_content">
            <div class="login_head">
                <p>后台管理系统</p>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="form_content">
                <el-form-item prop="username">
                    <el-input placeholder="请输入用户名" v-model="ruleForm.username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password>
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login_btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p class="login_tips">小贴士: 用户名和密码随便填。</p>
            </el-form>
        </section>
    </div>
</div>
</template>

<script>
import { setStore } from "../../utils/mUtils";
  export default {
    data () {
      return {
         ruleForm: {
            username: '',
            password: ''    
            },
            rules: {
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ]
            }
      }
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                setStore('ms_username',this.ruleForm.username);
                this.$router.push('/home');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        }
    }
  }
</script>

<style lang='scss' scoped>
@import '../../style/mixin.scss';
.login-container{
    @include wh(100%,100%);
    background-image: url('../../assets/login-bg.e2134055.jpg');
    background-size: 100%;
    position: relative;
}
.login{
    @include center;
    width: 350px;
    background: rgba(255,255,255, 0.3);
    border-radius: 5px;
    .login_content{
        .login_head{
            line-height: 50px;
            font-size: 20px;
            text-align: center;
            border-bottom: 1px solid #ddd;
            p{
                color: #fff;
            }
        }
        .form_content{
            padding: 30px;
            .login_btn{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .login_btn button{
                width:100%;
                height:36px;
                margin-bottom: 10px;
            }
        }
        .login_tips{
            line-height: 20px;
            @include sc(12px,#000);
        }
    }
}
.username-svg{
    @include wh(10px,10px);
}
</style>
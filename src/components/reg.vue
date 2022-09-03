<template>
    <div class="main">
       <div class="reg">
        <h3>注册账号</h3>
         <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="70px"
            class="demo-ruleForm"
            labelPosition="left"
        >
            <el-form-item label="昵称" prop="nickName">
                <el-input v-model.number="ruleForm.nickName"></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="userName">
                <el-input v-model.number="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    show-password
                ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    show-password
                ></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                    >注册</el-button
                >
            </el-form-item>
        </el-form>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        var checkUesrName = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("账号不能为空"));
            }
            setTimeout(() => {
                if (value === "") {
                    callback(new Error("请输入账号"));
                } else {
                    if (!/^[a-zA-Z0-9\u4E00-\u9FA5]{3,8}$/.test(value)) {
                        callback(
                            new Error("名字需要3~8位，可以是字符数字和中文")
                        );
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (!/^[a-zA-Z0-9]{6,8}$/.test(value)) {
                callback(new Error("'密码以英文开头，6~8位'"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
         var checknickName = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入昵称"));
            } else {
                callback();
            }
        };
         var checkPhone = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入手机号"));
            } else if (!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(value)) {
                callback(new Error("请输入正确的手机号"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: "",
                checkPass: "",
                userName: "",
                phone:'',
                nickName:''
            },
            rules: {
                userName: [{ validator: checkUesrName, trigger: "blur" }],
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }],
                nickName: [{ validator: checknickName, trigger: "blur" }],
                phone: [{ validator: checkPhone, trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                        type: "success",
                        message: "注册成功",
                        showClose: true,
                    });
                } else {
                    return false;
                }
            });
        },
    },
};
</script>
<style scoped>
.main{
  height: 100vh;
  background-image: url('../assets/login.png');
  background-position: center center;
  background-repeat:no-repeat ;
  background-size: cover;
}
.reg{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50% ,-50%);
  width: 400px;
  height:470px;
  border-radius: 20px ;
  background-color: rgba(255,255 , 255, .5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;

}
.demo-ruleForm{
  width: 100%;
}
</style>

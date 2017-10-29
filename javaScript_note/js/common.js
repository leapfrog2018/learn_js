// JavaScript Document

//  deptno 部门编号;
// dname 部门名称
// loc 部门位置
function Dept(deptno, dname, loc) {
    //alert("--------------------->可以被执行吗?");
    // 把参数的属性赋值给类中的成员变量.但是成员变量不需要单独声明,直接赋值就可以了
    this.deptno = deptno;
    this.dname = dname;
    this.loc = loc;

    // 在类中定义方法
    this.getInfo = function () {
        return "部门信息[deptno=" + this.deptno + ",dname=" + this.dname + ",loc=" + this.loc + "]";
    }
    //alert("--------------------->确实被执行了!");

    //JS中也存在着方法覆盖的概念
    this.toString = function () {
        return "部门信息[deptno=" + this.deptno + ",dname=" + this.dname + ",loc=" + this.loc + "]";
    }
}


/////////////////////////////////////////////////////////////////////////////
// 向浏览器中输入string,结尾加上换行
function println(msg) {
    document.write(msg + "<br>");
}


/////////////////////////////////////////////////////////////////////////////
// 向浏览器中输入string,结尾不加上换行
function print(msg) {
    document.write(msg);
}


// 当表单的提交按钮被点击的时候,校验表单数据.当表单校验通过,返回true.校验失败返回false
// 校验规则:
// 1.用户名不能为空,用户名的长度不能小于6位
// 2.密码不能为空,密码的长度不能小于6位
// 3.密码和确认密码必须要一致
function checkForm() {
    /*
     我们首先要获取到表单中的<input>标记(可以被看做是一个对象)
     然后判断这个标记对象上面的value属性是否是有效的值
     可以通过<input>标记的id属性来获取这个input标记对象
     */
    var nameInputObj = document.getElementById("username");

    // 用户在<input>标记中输入的数据就是nameInputObj.value .是一个类似于Java中String的这么一个东西
    if (nameInputObj.value == "") {
        // 弹出一个错误信息提示框,提示用户没有输入有效的数据
        window.alert("用户名不能为空");
        nameInputObj.focus(); // 让页面上的name <input> 获得焦点,便于用户输入
        return false; // 通过return false来阻止表单的提交
    }
    else if (nameInputObj.value.length < 6) {
        alert("用户名长度不能小于6位");
        nameInputObj.focus(); // 让页面上的name <input> 获得焦点,便于用户输入
        return false; // 通过return false来阻止表单的提交
    }

    //////////////////////////////////////////////////////////////////////////////
    // 校验输入密码
    // 获取页面上的密码输入框对象
    var pwdInputObj = document.getElementById("userpwd");
    if (pwdInputObj.value == "") {
        alert("密码不能为空");
        pwdInputObj.focus();
        return false;
    } else if (pwdInputObj.value.length < 6) {
        alert("密码长度不能小于6位");
        pwdInputObj.focus();
        return false;
    }

    //////////////////////////////////////////////////////////////////////////////
    // 校验确认密码
    var repwdInputObj = document.getElementById("repwd");
    if (pwdInputObj.value != repwdInputObj.value) {
        alert("密码和确认密码必须要一致");
        repwdInputObj.focus();
        return false;
    }


    // 如果校验通过,则return true,表示可以提交表单
    return true;
}
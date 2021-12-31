## 1. GitHub 配置 SSH Key

```sh
https://github.com/xxx/file.git
git@github.com:xxx/file.git
```

前者是 https url 直接有效网址打开，但是用户每次通过 git 提交的时候都要输入用户名和密码；第二种地址是 SSH URL，一次配置，永久使用，不需要繁琐的验证过程，简化操作流程。

### 1.1. 配置步骤

**1. 设置 git 的 user name 和 email**

如果你是第一次使用，或者还没有配置过的话需要操作一下命令，自行替换相应字段。

```sh
git config --global user.name "username"
git config --global user.email  "xxx@gmail.com"
```

**2. 检查是否存在 SSH Key**

```sh
cd ~/.ssh
ls
# 看是否存在 id_rsa 和 id_rsa.pub文件，如果存在，说明已经有SSH Key
```

**3. 如果没有 SSH Key，需要先生成一下**

```sh
ssh-keygen -t rsa -C "xxx@gmail.com"
```

执行之后再次查看是否存在 SSH Key

**4. 获取 SSH Key**

```sh
cat id_rsa.pub
# 拷贝秘钥 ssh-rsa开头
```

**5. Github 添加 SSH Key**

路径：点击个人头像 > setting > SSH and GPG keys > 新建一个 SSH Key > 取个名字，把之前拷贝的秘钥复制进去 > success

**6. 验证和修改**

测试是否成功配置 SSH Key

```sh
ssh -T git@github.com
# 运行结果出现类似如下
Hi xxx! You've successfully authenticated, but GitHub does not provide shell access.
```

之前已经是 https 的链接，现在想要用 SSH 提交怎么办？
直接修改项目目录下 .git 文件夹下的 config 文件，将地址修改一下就好了。

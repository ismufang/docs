## 1. git init

git init 初始化一个git仓库，在执行完成 **git init** 命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。

## 2. git clone

从现有 Git 仓库中拷贝项目

## 3. 添加远程仓库

```sh
# 添加远程仓库
git remote add <shortname> [url]

# 查看当前有哪些远程仓库
git remote

# 查看远程仓库和地址
git remote -v

# 删除远程仓库
git remote rm <remoteName>
```



## 4. git config

```sh
# 查看git配置信息
git config --list

# 边际git配置文件
git config -e # 针对当前仓库
git config -e --global # 针对系统上所有仓库

# 设置提交代码的用户信息
# 如果去掉 --global 参数只对当前仓库有效
git config --global user.name "xxx"
git config --global user.email xxxx@123.com

```





## 5. 删除远程/本地分支

```sh
# 删除本地分支
git branch -d <branchname>

# 当一个分支被推送合并到远程分支后，-d才会有效，如果没有推送或合并，需要使用-D强制删除
# 强制删除本地分支 -D
git branch -D <branchname>

# 删除远程分支
git push origin --delete <remoteBranchName>
```

Tips: 不能删除当前分支，需要切换到其他分支再删除

## 6. git push

```sh
# 将本地分支推送到远程仓库
git push <远程仓库名一般为origin> <本地分支>:<远程分支>
# eg
git push origin dev:master

# 如果本地分支与远程分支相同，可以省略冒号
git push <remote> <localBranch>
# eg
git push origin master
# 相当于
git push origin master:master

# 删除远程分支
git push origin --delete master

# 当只有一个分支时，可以省略主机名
git push

# 当有多个仓库
# -u 是为了关联远程分支，之后可以直接使用 git pull git push
git push -u origin master
```

## 7. git branch

```sh
# 创建分支
# branch 命令不会切换到新分支，需要checkout更改分支
git branch <branchName>
```

## 8. git reset

git reset 命令用于回退版本，可以指定退回某一次提交的版本。

```sh
$ git reset HEAD^            # 回退所有内容到上一个版本  
$ git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本  
$ git  reset  052e           # 回退到指定版本
```

